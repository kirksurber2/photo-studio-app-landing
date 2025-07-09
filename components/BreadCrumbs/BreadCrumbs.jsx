import Link from 'next/link'
import './Breadcrumbs.css'

export default function Breadcrumbs({ items = [] }) {
  if (!items.length) return null

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={index}>
              {!isLast ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span className="current">{item.label}</span>
              )}
              {!isLast && <span className="separator">/</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
