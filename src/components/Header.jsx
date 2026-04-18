import { Link } from "react-router-dom";
import s from './App.module.css'

export default function Header() {
  return (
    <header className={s.header}>
      <Link to="/" className={s.logoWrap}>
        <PenNib />
        <div>
          <h1 className={s.logoName}>
            Sketch<span className={s.logoTwo}>2</span>SVG
          </h1>
          <p className={s.logoTagline}>raster to vector, beautifully</p>
        </div>
      </Link>
      <nav className={s.navLinks}>
        <Link to="/blog/sketch-to-svg-guide" className={s.blogLink}>Blog</Link>
        <Link to="/blog/image-to-svg-guide" className={s.blogLink}>Image to SVG Guide</Link>
        <Link to="/blog/svg-vs-png" className={s.blogLink}>SVG vs PNG</Link>
      </nav>
    </header>
  );
}
