'use client'
import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
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

  // Load from localStorage on mount
  useEffect(() => {
    const savedItems = localStorage.getItem('pricingToolItems');
    const savedPackages = localStorage.getItem('pricingToolPackages');
    
    if (savedItems) {
      setAlaCarteItems(JSON.parse(savedItems));
    }
    if (savedPackages) {
      setPackages(JSON.parse(savedPackages));
    }
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
    
    // Find nearest x49 or x99 value
    const hundreds = Math.floor(tenX / 100);
    const remainder = tenX % 100;
    
    let recommendedPrice;
    if (remainder <= 24) {
      recommendedPrice = hundreds * 100 - 1; // x99
    } else if (remainder <= 74) {
      recommendedPrice = hundreds * 100 + 49; // x49
    } else {
      recommendedPrice = (hundreds + 1) * 100 - 1; // next x99
    }
    
    return Math.max(recommendedPrice, 49); // Minimum $49
  };

  // Add new item to a-la-carte
  const addItem = () => {
    if (!newItem.name || !newItem.cost) return;
    
    const cost = parseFloat(newItem.cost);
    const recommendedPrice = calculateRecommendedPrice(cost);
    
    const item = {
      id: Date.now().toString(),
      name: newItem.name,
      cost: cost,
      recommendedPrice: recommendedPrice,
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

  // Calculate package total cost
  const calculatePackageValue = (packageItems) => {
    const totalValue = packageItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    return totalValue;
  };

  // Calculate package total product cost (lab costs)
  const calculatePackageCost = (packageItems) => {
    const totalCost = packageItems.reduce((sum, item) => sum + (item.cost * item.quantity), 0);
    return totalCost;
  };

  // Get margin color based on percentage
  const getMarginColor = (packagePrice, totalCost) => {
    if (packagePrice === 0 || totalCost === 0) return 'gray';
    const marginPercentage = (totalCost / packagePrice) * 100;
    
    if (marginPercentage <= 15) return 'green';
    if (marginPercentage <= 20) return 'yellow';
    return 'red';
  };

  // Update package price
  const updatePackagePrice = (packageId, newPrice) => {
    setPackages(prev =>
      prev.map(pkg =>
        pkg.id === packageId ? { ...pkg, price: parseFloat(newPrice) || 0 } : pkg
      )
    );
  };

  // Update package name
  const updatePackageName = (packageId, newName) => {
    setPackages(prev =>
      prev.map(pkg =>
        pkg.id === packageId ? { ...pkg, name: newName } : pkg
      )
    );
  };

  // Update item quantity in package
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

  // Remove item from package
  const removeFromPackage = (packageId, itemId) => {
    setPackages(prev =>
      prev.map(pkg =>
        pkg.id === packageId
          ? { ...pkg, items: pkg.items.filter(item => item.id !== itemId) }
          : pkg
      )
    );
  };

  // Drag and drop handler
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    
    if (!destination) return;
    
    // Find the item being dragged
    let draggedItem = null;
    let sourceCategory = null;
    
    Object.entries(alaCarteItems).forEach(([category, items]) => {
      const item = items.find(item => item.id === draggableId);
      if (item) {
        draggedItem = { ...item };
        sourceCategory = category;
      }
    });
    
    if (!draggedItem) return;
    
    // Add to package
    if (destination.droppableId.startsWith('package')) {
      const packageId = destination.droppableId;
      setPackages(prev =>
        prev.map(pkg =>
          pkg.id === packageId
            ? { ...pkg, items: [...pkg.items, { ...draggedItem, quantity: 1 }] }
            : pkg
        )
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Photography Pricing & Packaging Tool</h1>
        <p className={styles.subtitle}>Build your a-la-carte pricing and create profitable packages</p>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className={styles.mainGrid}>
          
          {/* Packages Section */}
          <div className={styles.packagesSection}>
            {packages.map((pkg) => {
              const totalValue = calculatePackageValue(pkg.items);
              const totalCost = calculatePackageCost(pkg.items);
              const marginColor = getMarginColor(pkg.price, totalCost);
              const marginPercentage = pkg.price > 0 && totalCost > 0 ? ((totalCost / pkg.price) * 100).toFixed(1) : 0;
              
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

                  <Droppable droppableId={pkg.id}>
                    {(provided, snapshot) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={`${styles.packageDropZone} ${
                          snapshot.isDraggingOver ? styles.dragOver : ''
                        }`}
                      >
                        {pkg.items.length === 0 ? (
                          <p className={styles.emptyPackage}>
                            Drag items here to build your package
                          </p>
                        ) : (
                          <div className={styles.packageItems}>
                            {pkg.items.map((item) => (
                              <div key={`${pkg.id}-${item.id}`} className={styles.packageItemRow}>
                                <span className={styles.packageItemName}>{item.name}</span>
                                <span className={styles.packageItemPrice}>${item.price.toFixed(2)}</span>
                                <input
                                  type="number"
                                  value={item.quantity}
                                  onChange={(e) => updatePackageItemQuantity(pkg.id, item.id, e.target.value)}
                                  className={styles.quantityInput}
                                  min="1"
                                  placeholder="Qty"
                                />
                                <span className={styles.packageItemTotal}>${(item.price * item.quantity).toFixed(2)}</span>
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
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>

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
                  
                  <button
                    onClick={addItem}
                    className={styles.addButton}
                  >
                    <Plus className={styles.buttonIcon} />
                    Add Item
                  </button>
                </div>
                
                {newItem.cost && (
                  <div className={styles.pricePreview}>
                    <p>
                      10x Cost: ${(parseFloat(newItem.cost) * 10).toFixed(2)} → 
                      Recommended Price: <span className={styles.recommendedPrice}>${calculateRecommendedPrice(newItem.cost)}</span>
                    </p>
                  </div>
                )}
              </div>

              {/* A-La-Carte Items by Category */}
              {Object.entries(alaCarteItems).map(([category, items]) => (
                <div key={category} className={styles.categorySection}>
                  <h3 className={styles.categoryTitle}>{category}</h3>
                  <Droppable droppableId={category}>
                    {(provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={styles.itemsList}
                      >
                        {items.map((item, index) => (
                          <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className={`${styles.itemCard} ${snapshot.isDragging ? styles.dragging : ''}`}
                              >
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
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}