import { useState } from 'react';
import Reveal from './Reveal';

const MONERO_ADDRESS =
  '43KJJZztPtBC7k8ZjJpuw7bThW1mUH6N947TeNxvsSHD7DywRN365WZ7qpSxVopSd7cg4PFjMuUewjfvATUtTKGQLMboU36';

const freedoms = [
  ['01', 'Control your device', 'Keep the terminal, operating system, and everyday tools under user control.'],
  ['02', 'Protect your privacy', 'Make practical privacy knowledge accessible to people facing real risks.'],
  ['03', 'Reach the open internet', 'Build and explain resilient technologies for the free movement of information.'],
  ['04', 'Own your digital property', 'Explore open systems that let people hold and protect what belongs to them.'],
];

function Foundation() {
  const [copyState, setCopyState] = useState('Copy address');

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(MONERO_ADDRESS);
      setCopyState('Address copied');
      window.setTimeout(() => setCopyState('Copy address'), 2400);
    } catch {
      setCopyState('Select address below');
    }
  };

  return (
    <div className="page-shell foundation-page">
      <section className="foundation-hero section-shell">
        <div className="foundation-hero-copy">
          <p className="eyebrow">ArchLinuxStudio Foundation</p>
          <h1>Keep independent knowledge <span>independent.</span></h1>
          <p>
            Volunteer time built every tutorial and tool in this community.
            Sustainable support keeps the work current, public, and free from
            commercial pressure.
          </p>
        </div>
        <div className="foundation-hero-aside">
          <span>Our commitment</span>
          <strong>100%</strong>
          <p>of support stays within work related to the ArchLinuxStudio project.</p>
        </div>
      </section>

      <section className="section-shell section-block foundation-freedoms">
        <Reveal className="section-heading split-heading">
          <div>
            <p className="eyebrow">What support protects</p>
            <h2>Four freedoms, one practical mission.</h2>
          </div>
          <p>
            The goal is not growth for its own sake. It is dependable public
            infrastructure for people who want agency over their digital lives.
          </p>
        </Reveal>
        <div className="freedom-list">
          {freedoms.map(([index, title, copy], itemIndex) => (
            <Reveal className="freedom-row" delay={itemIndex * 70} key={title}>
              <span>{index}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="support-wrap">
        <div className="section-shell support-grid">
          <Reveal className="support-copy">
            <p className="eyebrow">Sustainable support</p>
            <h2>Your contribution funds the unglamorous, necessary work.</h2>
            <p>
              Keeping technical material trustworthy means testing instructions,
              tracking fast-moving dependencies, maintaining software, and
              answering the community. Donations give volunteers room to do that
              work carefully.
            </p>
            <ul className="support-list">
              <li><span>→</span> New free-software projects</li>
              <li><span>→</span> Updated tutorials, documentation, and video</li>
              <li><span>→</span> Community events and educational outreach</li>
              <li><span>→</span> Essential project and infrastructure costs</li>
            </ul>
          </Reveal>

          <Reveal className="donation-card" delay={120}>
            <div className="donation-card-head">
              <div>
                <span className="donation-symbol">ɱ</span>
                <p><strong>Donate privately</strong><br />Monero · XMR</p>
              </div>
              <span className="status-badge"><i /> Direct</span>
            </div>
            <p className="address-label">WALLET ADDRESS</p>
            <code className="wallet-address">{MONERO_ADDRESS}</code>
            <button className="button button-primary copy-button" type="button" onClick={copyAddress}>
              {copyState}
            </button>
            <p className="donation-note">
              Monero allows anonymous support. No donor identity is required.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-shell stewardship section-block">
        <Reveal className="stewardship-heading">
          <p className="eyebrow">Stewardship</p>
          <h2>Clear boundaries matter.</h2>
        </Reveal>
        <div className="stewardship-grid">
          <Reveal className="stewardship-card stewardship-card-positive">
            <span className="stewardship-icon" aria-hidden="true">+</span>
            <h3>Donations may support</h3>
            <ul>
              <li>Free and open-source project development</li>
              <li>Training and tutorial production</li>
              <li>Community promotion and events</li>
              <li>Legal, accounting, server, and operating costs</li>
            </ul>
          </Reveal>
          <Reveal className="stewardship-card stewardship-card-negative" delay={90}>
            <span className="stewardship-icon" aria-hidden="true">−</span>
            <h3>Donations will not support</h3>
            <ul>
              <li>Development of proprietary software</li>
              <li>Tutorials promoting proprietary software</li>
              <li>Adding proprietary dependencies to existing work</li>
              <li>Endeavours unrelated to ArchLinuxStudio</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="contact-strip">
        <Reveal className="section-shell contact-strip-inner">
          <div>
            <p className="eyebrow">Need a receipt or public acknowledgement?</p>
            <h2>Talk to the project directly.</h2>
          </div>
          <a className="button button-light" href="mailto:archlinuxstudio@tutamail.com">
            archlinuxstudio@tutamail.com <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
      </section>
    </div>
  );
}

export default Foundation;
