import Link from "next/link";
import styles from "./Breadcrumb.module.css";

export default function Breadcrumb({ paths }) {
  return (
    <nav className={styles.breadcrumb}>
      {paths.map((path, idx) =>
        path.href ? (
          <Link key={idx} href={path.href}>
            {path.name}
          </Link>
        ) : (
          <span key={idx}>{path.name}</span>
        )
      )}
    </nav>
  );
}
