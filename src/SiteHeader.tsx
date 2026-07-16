import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const navigation = [
  { number: '01', label: 'Front page', to: '/' },
  { number: '02', label: 'Library', to: '/product_list' },
  { number: '03', label: 'Foundation', to: '/foundation' },
];

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <header className="site-header">
      <div className="header-notice">
        <span>Independent Arch Linux community</span>
        <span>Free software · Open knowledge · No tracking</span>
      </div>
      <div className="nav-shell">
        <NavLink className="brand" to="/" aria-label="ArchLinuxStudio home">
          <strong>ARCHLINUX</strong><span>STUDIO</span><i>/</i>
        </NavLink>

        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} id="site-navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => (isActive ? 'is-active' : '')}
            >
              <small>{item.number}</small>{item.label}
            </NavLink>
          ))}
          <a
            className="nav-github"
            href="https://github.com/ArchLinuxStudio"
            target="_blank"
            rel="noreferrer"
          >
            Source ↗
          </a>
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
