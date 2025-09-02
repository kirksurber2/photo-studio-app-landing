'use client';
import React, { useState, useEffect, useMemo, useState as useReactState } from 'react';
import {
  DndContext,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  useDroppable,
  useDraggable,
  DragOverlay,
  pointerWithin,
} from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Plus, Trash2, Package, Calculator } from 'lucide-react';
import styles from './PricingTool.module.css';

export default function PricingTool() {
  const [alaCarteItems, setAlaCarteItems] = useState({
    'Gift Size': [],
    'Portrait Prints': [],
    'Acrylics and Metals': [],
    'Albums': [],
    'Digital Assets': []
  });

  const [packages, setPackages] = useState([
    { id: 'package1', name: 'Basic Package', items: [], price: 0 },
    { id: 'package2', name: 'Standard Package', items: [], price: 0 },
    { id: 'package3', name: 'Premium Package', items: [], price: 0 }
  ]);

  const [newItem, setNewItem] = useState({
    category: 'Gift Size',
    name: '',
    cost: '',
    dimensions: '',
    pageCount: ''
  });

  // For nicer drag previews
  const [activeDragItem, setActiveDragItem] = useState(null);

  // Load from localStorage on mount
  useEffect(() => {
    const savedItems = typeof window !== 'undefined' && localStorage.getItem('pricingToolItems');
    const savedPackages = typeof window !== 'undefined' && localStorage.getItem('pricingToolPackages');
    if (savedItems) setAlaCarteItems(JSON.parse(savedItems));
    if (savedPackages) setPackages(JSON.parse(savedPackages));
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('pricingToolItems', JSON.stringify(alaCarteItems));
  }, [alaCarteItems]);

  useEffect(() => {
    localStorage.setItem('pricingToolPackages', JSON.stringify(packages));
  }, [packages]);

  // Calculate recommended price (10x cost, rounded to nearest x49/x99)
  const calculateRecommendedPrice = (cost) => {
    const baseCost = parseFloat(cost) || 0;
    const tenX = baseCost * 10;
    if (tenX <= 0) return 0;
    const hundreds = Math.floor(tenX / 100);
    const remainder = tenX % 100;

    let recommendedPrice;
    if (remainder <= 24) {
      recommendedPrice = hundreds * 100 - 1;         // x99
    } else if (remainder <= 74) {
      recommendedPrice = hundreds * 100 + 49;        // x49
    } else {
      recommendedPrice = (hundreds + 1) * 100 - 1;   // next x99
    }
    return Math.max(recommendedPrice, 49);
  };

  // Add new item to a-la-carte
  const addItem = () => {
    if (!newItem.name || !newItem.cost) return;
    const cost = parseFloat(newItem.cost);
    const recommendedPrice = calculateRecommendedPrice(cost);

    const item = {
      id: Date.now().toString(),
      name: newItem.name,
      cost,
      recommendedPrice,
      price: recommendedPrice,
      dimensions: newItem.dimensions,
      pageCount: newItem.pageCount,
      quantity: 1
    };

    setAlaCarteItems(prev => ({
      ...prev,
      [newItem.category]: [...prev[newItem.category], item]
    }));

    setNewItem({
      category: 'Gift Size',
      name: '',
      cost: '',
      dimensions: '',
      pageCount: ''
    });
  };

  // Update item price
  const updateItemPrice = (category, itemId, newPrice) => {
    setAlaCarteItems(prev => ({
      ...prev,
      [category]: prev[category].map(item =>
        item.id === itemId ? { ...item, price: parseFloat(newPrice) || 0 } : item
      )
    }));
  };

  // Delete item
  const deleteItem = (category, itemId) => {
    setAlaCarteItems(prev => ({
      ...prev,
      [category]: prev[category].filter(item => item.id !== itemId)
    }));
  };

  // Calculate package totals
  const calculatePackageValue = (packageItems) =>
    packageItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const calculatePackageCost = (packageItems) =>
    packageItems.reduce((sum, item) => sum + (item.cost * item.quantity), 0);

  const getMarginColor = (packagePrice, totalCost) => {
    if (packagePrice === 0 || totalCost === 0) return 'gray';
    const marginPercentage = (totalCost / packagePrice) * 100;
    if (marginPercentage <= 15) return 'green';
    if (marginPercentage <= 20) return 'yellow';
    return 'red';
    // (Lower % cost ratio == better margin; this follows your original logic)
  };

  // Update package fields
  const updatePackagePrice = (packageId, newPrice) => {
    setPackages(prev =>
      prev.map(pkg =>
        pkg.id === packageId ? { ...pkg, price: parseFloat(newPrice) || 0 } : pkg
      )
    );
  };

  const updatePackageName = (packageId, newName) => {
    setPackages(prev =>
      prev.map(pkg =>
        pkg.id === packageId ? { ...pkg, name: newName } : pkg
      )
    );
  };

  const updatePackageItemQuantity = (packageId, itemId, newQuantity) => {
    setPackages(prev =>
      prev.map(pkg =>
        pkg.id === packageId
          ? {
              ...pkg,
              items: pkg.items.map(item =>
                item.id === itemId ? { ...item, quantity: parseInt(newQuantity) || 1 } : item
              )
            }
          : pkg
      )
    );
  };

  const removeFromPackage = (packageId, itemId) => {
    setPackages(prev =>
      prev.map(pkg =>
        pkg.id === packageId
          ? { ...pkg, items: pkg.items.filter(item => item.id !== itemId) }
          : pkg
      )
    );
  };

  // dnd-kit sensors & handlers
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(KeyboardSensor)
  );

  const handleDragStart = (event) => {
    const data = event.active?.data?.current;
    if (data?.item) setActiveDragItem(data.item);
    else {
      // Fallback: search by id
      const id = event.active?.id;
      if (!id) return;
      for (const [cat, items] of Object.entries(alaCarteItems)) {
        const found = items.find((it) => it.id === id);
        if (found) { setActiveDragItem(found); break; }
      }
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveDragItem(null);
    if (!over) return;

    const overId = String(over.id);
    if (!overId.startsWith('package')) return;

    const data = active?.data?.current;
    const draggedItem = data?.item ?? activeDragItem;
    if (!draggedItem) return;

    const packageId = overId;
    setPackages(prev =>
      prev.map(pkg =>
        pkg.id === packageId
          ? { ...pkg, items: [...pkg.items, { ...draggedItem, quantity: 1 }] }
          : pkg
      )
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Photography Pricing & Packaging Tool</h1>
        <p className={styles.subtitle}>Build your a-la-carte pricing and create profitable packages</p>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={pointerWithin}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className={styles.mainGrid}>
          {/* Packages Section */}
          <div className={styles.packagesSection}>
            {packages.map((pkg) => {
              const totalValue = calculatePackageValue(pkg.items);
              const totalCost = calculatePackageCost(pkg.items);
              const marginColor = getMarginColor(pkg.price, totalCost);
              const marginPercentage =
                pkg.price > 0 && totalCost > 0
                  ? ((totalCost / pkg.price) * 100).toFixed(1)
                  : 0;

              return (
                <div key={pkg.id} className={styles.packageCard}>
                  <div className={styles.packageHeader}>
                    <input
                      type="text"
                      value={pkg.name}
                      onChange={(e) => updatePackageName(pkg.id, e.target.value)}
                      className={styles.packageNameInput}
                      placeholder="Package Name"
                    />
                    <Package className={styles.packageIcon} />
                  </div>

                  <DroppablePackage id={pkg.id}>
                    {(isOver) => (
                      <div
                        className={`${styles.packageDropZone} ${
                          isOver ? styles.dragOver : ''
                        }`}
                      >
                        {pkg.items.length === 0 ? (
                          <p className={styles.emptyPackage}>Drag items here to build your package</p>
                        ) : (
                          <div className={styles.packageItems}>
                            {pkg.items.map((item) => (
                              <div key={`${pkg.id}-${item.id}`} className={styles.packageItemRow}>
                                <span className={styles.packageItemName}>{item.name}</span>
                                <span className={styles.packageItemPrice}>${item.price.toFixed(2)}</span>
                                <input
                                  type="number"
                                  value={item.quantity}
                                  onChange={(e) =>
                                    updatePackageItemQuantity(pkg.id, item.id, e.target.value)
                                  }
                                  className={styles.quantityInput}
                                  min="1"
                                  placeholder="Qty"
                                />
                                <span className={styles.packageItemTotal}>
                                  ${(item.price * item.quantity).toFixed(2)}
                                </span>
                                <button
                                  onClick={() => removeFromPackage(pkg.id, item.id)}
                                  className={styles.packageRemoveButton}
                                >
                                  <Trash2 size={10} />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </DroppablePackage>

                  <div className={styles.packageSummary}>
                    <div className={styles.summaryRow}>
                      <span className={styles.summaryLabel}>Total Product Cost:</span>
                      <span className={styles.summaryValue}>${totalCost.toFixed(2)}</span>
                    </div>

                    <div className={styles.summaryRow}>
                      <span className={styles.summaryLabel}>Total Package Value:</span>
                      <span className={styles.summaryValue}>${totalValue.toFixed(2)}</span>
                    </div>

                    <div className={styles.summaryRow}>
                      <span className={styles.summaryLabel}>Package Price:</span>
                      <input
                        type="number"
                        value={pkg.price}
                        onChange={(e) => updatePackagePrice(pkg.id, e.target.value)}
                        className={styles.packagePriceInput}
                        step="0.01"
                        placeholder="Package Price ($)"
                      />
                    </div>

                    {pkg.price > 0 && totalCost > 0 && (
                      <div className={`${styles.marginAnalysis} ${styles[marginColor]}`}>
                        <div className={styles.marginHeader}>
                          <span className={styles.marginLabel}>Margin Analysis:</span>
                          <span className={styles.marginPercentage}>{marginPercentage}% cost ratio</span>
                        </div>
                        <p className={styles.marginMessage}>
                          {marginColor === 'green' && 'Excellent profit margin! ✅'}
                          {marginColor === 'yellow' && 'Good margin, consider optimizing ⚠️'}
                          {marginColor === 'red' && 'Low margin, review pricing ❌'}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* A-La-Carte Section */}
          <div className={styles.alaCarteSection}>
            <div className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>
                <Calculator className={styles.icon} />
                A-La-Carte Pricing
              </h2>

              {/* Add New Item Form */}
              <div className={styles.addItemForm}>
                <h3 className={styles.formTitle}>Add New Item</h3>
                <div className={styles.formGrid}>
                  <select
                    value={newItem.category}
                    onChange={(e) => setNewItem(prev => ({ ...prev, category: e.target.value }))}
                    className={styles.select}
                  >
                    <option value="Gift Size">Gift Size</option>
                    <option value="Portrait Prints">Portrait Prints</option>
                    <option value="Acrylics and Metals">Acrylics and Metals</option>
                    <option value="Albums">Albums</option>
                    <option value="Digital Assets">Digital Assets</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Item Name"
                    value={newItem.name}
                    onChange={(e) => setNewItem(prev => ({ ...prev, name: e.target.value }))}
                    className={styles.input}
                  />

                  <input
                    type="number"
                    placeholder="Lab Cost ($)"
                    value={newItem.cost}
                    onChange={(e) => setNewItem(prev => ({ ...prev, cost: e.target.value }))}
                    className={styles.input}
                    step="0.01"
                  />

                  {newItem.category === 'Albums' && (
                    <>
                      <input
                        type="text"
                        placeholder="Dimensions (e.g. 8x10)"
                        value={newItem.dimensions}
                        onChange={(e) => setNewItem(prev => ({ ...prev, dimensions: e.target.value }))}
                        className={styles.input}
                      />
                      <input
                        type="number"
                        placeholder="Page Count"
                        value={newItem.pageCount}
                        onChange={(e) => setNewItem(prev => ({ ...prev, pageCount: e.target.value }))}
                        className={styles.input}
                      />
                    </>
                  )}

                  <button onClick={addItem} className={styles.addButton}>
                    <Plus className={styles.buttonIcon} />
                    Add Item
                  </button>
                </div>

                {newItem.cost && (
                  <div className={styles.pricePreview}>
                    <p>
                      10x Cost: ${(parseFloat(newItem.cost || 0) * 10).toFixed(2)} →{' '}
                      Recommended Price:{' '}
                      <span className={styles.recommendedPrice}>
                        ${calculateRecommendedPrice(newItem.cost)}
                      </span>
                    </p>
                  </div>
                )}
              </div>

              {/* A-La-Carte Items by Category */}
              {Object.entries(alaCarteItems).map(([category, items]) => (
                <div key={category} className={styles.categorySection}>
                  <h3 className={styles.categoryTitle}>{category}</h3>
                  <div className={styles.itemsList}>
                    {items.map((item) => (
                      <DraggableWrapper key={item.id} id={item.id} data={{ item, category }}>
                        <div className={styles.itemRow}>
                          <span className={styles.itemName}>
                            {item.name}
                            {item.dimensions && ` (${item.dimensions})`}
                            {item.pageCount && ` - ${item.pageCount} pages`}
                          </span>
                          <span className={styles.itemCost}>${item.cost.toFixed(2)}</span>
                          <span className={styles.itemRecommended}>${item.recommendedPrice}</span>
                          <input
                            type="number"
                            value={item.price}
                            onChange={(e) => updateItemPrice(category, item.id, e.target.value)}
                            className={styles.priceInput}
                            step="0.01"
                            placeholder="Price ($)"
                          />
                          <button
                            onClick={() => deleteItem(category, item.id)}
                            className={styles.deleteButton}
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </DraggableWrapper>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Drag Overlay (preview while dragging) */}
        <DragOverlay>
          {activeDragItem ? (
            <div className={`${styles.itemCard} ${styles.dragging}`} style={{ pointerEvents: 'none' }}>
              <div className={styles.itemRow}>
                <span className={styles.itemName}>
                  {activeDragItem.name}
                  {activeDragItem.dimensions && ` (${activeDragItem.dimensions})`}
                  {activeDragItem.pageCount && ` - ${activeDragItem.pageCount} pages`}
                </span>
                <span className={styles.itemCost}>${activeDragItem.cost.toFixed(2)}</span>
                <span className={styles.itemRecommended}>${activeDragItem.recommendedPrice}</span>
              </div>
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}

/* ---------- Helpers (dnd-kit wrappers) ---------- */

function DroppablePackage({ id, children }) {
  const { setNodeRef, isOver } = useDroppable({ id });
  return (
    <div ref={setNodeRef}>
      {typeof children === 'function' ? children(isOver) : children}
    </div>
  );
}

function DraggableWrapper({ id, data, children }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id, data });
  const style = transform ? { transform: CSS.Translate.toString(transform) } : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`${styles.itemCard} ${isDragging ? styles.dragging : ''}`}
    >
      {children}
    </div>
  );
}
