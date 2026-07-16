import { Link } from 'react-router-dom';

const communityLinks = [
  ['Matrix', 'https://matrix.to/#/#ArchLinuxStudio:matrix.org'],
  ['Telegram', 'https://t.me/FSF_Ministry_of_Truth'],
  ['GitHub', 'https://github.com/ArchLinuxStudio'],
  ['YouTube', 'https://www.youtube.com/channel/UCVO7lXKucA6z3O37WV7FG5w'],
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-masthead">
        <strong>ARCHLINUX</strong><em>STUDIO</em><span>/</span>
      </div>
      <div className="page-width footer-grid">
        <div className="footer-statement">
          <span>INDEPENDENT SINCE 2017</span>
          <p>Open manuals and free software for people who intend to remain in control.</p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <span>INDEX</span>
          <Link to="/">01 / Front page</Link>
          <Link to="/product_list">02 / Library</Link>
          <Link to="/foundation">03 / Foundation</Link>
        </nav>
        <div className="footer-links">
          <span>CHANNELS</span>
          {communityLinks.map(([label, href]) => (
            <a href={href} target="_blank" rel="noreferrer" key={label}>{label} ↗</a>
          ))}
        </div>
        <div className="footer-privacy">
          <span>PRIVACY NOTICE</span>
          <strong>0</strong>
          <p>Cookies, trackers, accounts, or personal data collected.</p>
        </div>
      </div>
      <div className="page-width footer-bottom">
        <span>© 2017—{new Date().getFullYear()} ARCHLINUXSTUDIO</span>
        <span>ALL RIGHTS REVERSED / GPL-3.0</span>
      </div>
    </footer>
  );
}

export default Footer;
