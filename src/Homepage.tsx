import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import arch from './images/ar1.png';
import butterfly from './images/butterfly.webp';
import cnetwork from './images/c-network.png';
import privacy from './images/v.jpg';
import Reveal from './Reveal';
import movementFilm from './videos/FSF_30_720p.webm';

const principles = [
  ['01', 'Your machine', 'A computer should answer to the person using it—not its vendor. Learn the system and take it back.'],
  ['02', 'Your privacy', 'Privacy is a practice. We document practical defenses for people living with real surveillance.'],
  ['03', 'Your network', 'Information should cross borders. We study protocols, censorship, and resilient communication.'],
  ['04', 'Your software', 'The freedom to run, inspect, modify, and share software is the foundation beneath everything else.'],
];

const manuals = [
  {
    number: '001',
    type: 'FIELD MANUAL',
    title: 'Arch Linux Tutorial',
    copy: 'From first boot to a secure daily system. Every decision explained.',
    image: arch,
    href: 'https://archlinuxstudio.github.io/ArchLinuxTutorial/#/',
  },
  {
    number: '002',
    type: 'THREAT MODEL',
    title: 'Modern Privacy Protection',
    copy: 'A practical guide for navigating an internet built around surveillance.',
    image: privacy,
    href: 'https://archlinuxstudio.github.io/ModernSecurityProtectionGuide/#/',
  },
  {
    number: '003',
    type: 'DEEP STUDY',
    title: 'Networks & Encryption',
    copy: 'Protocols, code, and cryptography—learn what the tools are doing underneath.',
    image: cnetwork,
    href: 'https://archlinuxstudio.github.io/LinuxNetworkProgrammingAndEncryption/#/',
  },
];

function Homepage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const filmSectionRef = useRef<HTMLElement>(null);
  const [filmMuted, setFilmMuted] = useState(true);
  const [filmPaused, setFilmPaused] = useState(false);
  const [filmLoaded, setFilmLoaded] = useState(false);

  useEffect(() => {
    const section = filmSectionRef.current;
    if (!section || typeof IntersectionObserver === 'undefined') {
      setFilmLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilmLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '320px 0px' }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const toggleFilmPlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play();
      setFilmPaused(false);
    } else {
      video.pause();
      setFilmPaused(true);
    }
  };

  return (
    <>
      <section className="front-hero page-width">
        <div className="issue-line">
          <span>ALS / VOL. 017</span>
          <span>DOCUMENTING DIGITAL SELF-DEFENCE</span>
          <span>2017—2026</span>
        </div>

        <h1 className="front-title" aria-label="Free software is a daily practice">
          <span>FREE SOFTWARE</span>
          <span>IS A DAILY</span>
          <em>PRACTICE.</em>
        </h1>

        <div className="front-intro">
          <p className="front-deck">
            An independent community publishing the knowledge and code people
            need to own their digital lives.
          </p>
          <div className="front-actions">
            <Link className="ink-button" to="/product_list">Open the library <span>→</span></Link>
            <a href="https://github.com/ArchLinuxStudio" target="_blank" rel="noreferrer">
              Read the source ↗
            </a>
          </div>
          <div className="edition-stamp" aria-hidden="true">
            <strong>ALS</strong><span>EST.<br />2017</span>
          </div>
        </div>
      </section>

      <div className="command-ribbon" aria-label="Community status">
        <div className="ribbon-track">
          <span><b>$</b> whoami</span><strong>THE USER</strong>
          <span><b>$</b> license</span><strong>GPL-3.0</strong>
          <span><b>$</b> trackers</span><strong>NONE</strong>
          <span><b>$</b> status</span><strong>INDEPENDENT</strong>
          <span><b>$</b> pacman -S</span><strong>FREEDOM</strong>
        </div>
      </div>

      <section className="editorial-intro page-width section-space">
        <Reveal className="margin-note">
          <span>EDITOR'S NOTE</span>
          <p>We are not the official Arch Linux project. We are a community that starts with Arch and asks a larger question.</p>
        </Reveal>
        <Reveal className="editorial-statement" delay={90}>
          <p>
            What would technology look like if it respected the people using it?
            <em> We make that question practical.</em>
          </p>
        </Reveal>
      </section>

      <section className="principles page-width section-space">
        <Reveal className="section-index">
          <span>SECTION 01</span>
          <h2>Four freedoms.<br />No fine print.</h2>
          <p>Our work stays focused on the places where personal agency becomes concrete.</p>
        </Reveal>
        <div className="principle-list">
          {principles.map(([number, title, copy], index) => (
            <Reveal className="principle-row" delay={index * 55} key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        ref={filmSectionRef}
        className="movement-film"
        aria-label="Free software movement archive film"
      >
        <video
          ref={videoRef}
          src={filmLoaded ? movementFilm : undefined}
          muted={filmMuted}
          autoPlay={filmLoaded}
          loop
          playsInline
          preload="metadata"
        />
        <div className="film-shade" />
        <div className="page-width film-frame">
          <div className="film-meta">
            <span>ARCHIVE FILM / FSF 30</span>
            <span>FREE SOFTWARE IS A SOCIAL MOVEMENT</span>
          </div>
          <div className="film-title">
            <span>WATCH / LISTEN / REMEMBER</span>
            <h2>A movement<br />is made by <em>people.</em></h2>
          </div>
          <div className="film-controls">
            <button type="button" onClick={toggleFilmPlayback}>
              {filmPaused ? '▶ Play film' : 'Ⅱ Pause film'}
            </button>
            <button
              type="button"
              onClick={() => setFilmMuted((muted) => !muted)}
              aria-label={filmMuted ? 'Unmute film' : 'Mute film'}
            >
              {filmMuted ? 'Sound off' : 'Sound on'}
            </button>
          </div>
        </div>
      </section>

      <section className="manuals-section section-space">
        <div className="page-width">
          <Reveal className="manuals-header">
            <div>
              <span className="reverse-label">SECTION 02 / THE LIBRARY</span>
              <h2>Manuals for<br /><em>the real world.</em></h2>
            </div>
            <p>Long-form guides written to be understood, verified, and shared—not merely consumed.</p>
          </Reveal>

          <div className="manual-list">
            {manuals.map((manual, index) => (
              <Reveal className="manual-row" delay={index * 70} key={manual.title}>
                <a href={manual.href} target="_blank" rel="noreferrer">
                  <span className="manual-number">{manual.number}</span>
                  <span className="manual-type">{manual.type}</span>
                  <h3>{manual.title}</h3>
                  <p>{manual.copy}</p>
                  <div className="manual-thumb"><img src={manual.image} alt="" /></div>
                  <span className="manual-arrow">↗</span>
                </a>
              </Reveal>
            ))}
          </div>

          <Link className="library-link" to="/product_list">Complete project index <span>→</span></Link>
        </div>
      </section>

      <section className="manifesto-spread page-width section-space">
        <Reveal className="manifesto-image">
          <img src={butterfly} alt="Blue butterfly in motion" />
          <span>SHADOW BUTTERFLY / A STUDY IN OPEN NETWORKS</span>
        </Reveal>
        <Reveal className="manifesto-text" delay={100}>
          <span className="section-kicker">SECTION 03 / POSITION</span>
          <h2>Freedom is not a feature.</h2>
          <blockquote>
            It is the right to understand, change, and share the systems shaping
            our lives.
          </blockquote>
          <p>
            Our work is public. Our code is inspectable. Our knowledge is meant
            to travel. This website has no accounts, no cookies, and no surveillance layer.
          </p>
          <a href="https://www.gnu.org/philosophy/free-sw.html" target="_blank" rel="noreferrer">
            Read the free software definition ↗
          </a>
        </Reveal>
      </section>

      <section className="classified-section">
        <Reveal className="page-width classified-inner">
          <span className="classified-label">COMMUNITY NOTICE / 017</span>
          <h2>Readers become contributors.</h2>
          <p>Correct a command. Rewrite a paragraph. Review the code. Ask the difficult question.</p>
          <div>
            <a href="https://matrix.to/#/#ArchLinuxStudio:matrix.org" target="_blank" rel="noreferrer">Join Matrix ↗</a>
            <a href="mailto:archlinuxstudio@tutamail.com">Encrypted email ↗</a>
          </div>
        </Reveal>
      </section>
    </>
  );
}

export default Homepage;
