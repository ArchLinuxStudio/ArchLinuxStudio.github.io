import arch from './images/ar1.png';
import bash from './images/bash.svg';
import butterfly from './images/butterfly.webp';
import cnetwork from './images/c-network.png';
import raindrop from './images/dick.jpg';
import mproxy from './images/M.png';
import privacy from './images/v.jpg';
import Reveal from './Reveal';

interface Project {
  title: string;
  kicker: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
  status?: string;
}

const tutorials: Project[] = [
  {
    title: 'Arch Linux Tutorial',
    kicker: 'Start with the system',
    description:
      'Install, secure, and use Arch Linux as a daily system—while understanding every important choice along the way.',
    image: arch,
    href: 'https://archlinuxstudio.github.io/ArchLinuxTutorial/#/',
    tags: ['Arch Linux', 'Installation', 'Daily use'],
  },
  {
    title: 'Modern Privacy Protection Guide',
    kicker: 'Protect the person behind the screen',
    description:
      'A practical threat-model-driven guide to privacy in an internet shaped by pervasive surveillance.',
    image: privacy,
    href: 'https://archlinuxstudio.github.io/ModernSecurityProtectionGuide/#/',
    tags: ['Privacy', 'Security', 'OPSEC'],
  },
  {
    title: 'Network Programming & Encryption',
    kicker: 'Understand the network from below',
    description:
      'Learn network programming, protocols, and cryptography so the tools you use are no longer black boxes.',
    image: cnetwork,
    href: 'https://archlinuxstudio.github.io/LinuxNetworkProgrammingAndEncryption/#/',
    tags: ['Networking', 'Cryptography', 'C'],
    status: 'Work in progress',
  },
  {
    title: 'Linux Shell Tutorial',
    kicker: 'Make the command line yours',
    description:
      'Build a durable foundation in Linux commands, shell workflows, and Bash scripting.',
    image: bash,
    href: 'https://archlinuxstudio.github.io/ShellTutorial/#/',
    tags: ['Bash', 'Shell', 'Automation'],
    status: 'Work in progress',
  },
];

const software: Project[] = [
  {
    title: 'Shadow Butterfly',
    kicker: 'Learn by building',
    description:
      'A progressive C project that teaches the mechanics behind censorship-resistant networking software.',
    image: butterfly,
    href: 'https://github.com/ArchLinuxStudio/ShadowButterfly',
    tags: ['C', 'Networking', 'Education'],
  },
  {
    title: 'mproxy',
    kicker: 'Small, direct, dependable',
    description:
      'A lightweight HTTP proxy server implementation, forked and maintained by ArchLinuxStudio.',
    image: mproxy,
    href: 'https://github.com/ArchLinuxStudio/mproxy',
    tags: ['Proxy', 'HTTP', 'Lightweight'],
  },
  {
    title: 'Raindrop TUI',
    kicker: 'Terminal-native connectivity',
    description:
      'A focused text-based interface for managing V2Ray subscriptions without leaving the terminal.',
    image: raindrop,
    href: 'https://github.com/ArchLinuxStudio/RaindropDick',
    tags: ['TUI', 'V2Ray', 'Terminal'],
  },
  {
    title: 'This website',
    kicker: 'The front door is open source too',
    description:
      'The ArchLinuxStudio community site is GPL-licensed. Read it, fork it, and improve it with us.',
    image: arch,
    href: 'https://github.com/ArchLinuxStudio/ArchLinuxStudio.github.io',
    tags: ['React', 'TypeScript', 'GPL'],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal className="project-card" delay={(index % 2) * 90}>
      <a href={project.href} target="_blank" rel="noreferrer">
        <div className="project-image">
          <img src={project.image} alt="" />
          <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
          {project.status && <span className="project-status">{project.status}</span>}
        </div>
        <div className="project-content">
          <p className="card-eyebrow">{project.kicker}</p>
          <div className="project-title-row">
            <h3>{project.title}</h3>
            <span aria-hidden="true">↗</span>
          </div>
          <p>{project.description}</p>
          <ul className="tag-list" aria-label="Topics">
            {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
      </a>
    </Reveal>
  );
}

function ProjectSection({
  id,
  index,
  title,
  description,
  projects,
}: {
  id: string;
  index: string;
  title: string;
  description: string;
  projects: Project[];
}) {
  return (
    <section className="project-section" id={id}>
      <Reveal className="project-section-heading">
        <span>{index}</span>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </Reveal>
      <div className="project-grid">
        {projects.map((project, projectIndex) => (
          <ProjectCard project={project} index={projectIndex} key={project.title} />
        ))}
      </div>
    </section>
  );
}

function ProductList() {
  return (
    <div className="page-shell projects-page">
      <section className="page-hero section-shell">
        <p className="eyebrow">Public work · Open licenses</p>
        <h1>Knowledge you can use.<br /><span>Code you can inspect.</span></h1>
        <p>
          Tutorials that explain the “why,” and small software projects that
          expose the machinery. Everything starts from curiosity and stays open.
        </p>
        <nav className="page-jump" aria-label="Project categories">
          <button type="button" onClick={() => document.getElementById('tutorials')?.scrollIntoView()}>
            <span>01</span> Tutorials
          </button>
          <button type="button" onClick={() => document.getElementById('software')?.scrollIntoView()}>
            <span>02</span> Software
          </button>
        </nav>
      </section>

      <div className="section-shell projects-body">
        <ProjectSection
          id="tutorials"
          index="01"
          title="Tutorials"
          description="Long-form guides for building confidence from the operating system upward."
          projects={tutorials}
        />
        <ProjectSection
          id="software"
          index="02"
          title="Software"
          description="Focused, readable tools that help turn theory into working systems."
          projects={software}
        />
      </div>

      <section className="contribute-panel section-shell">
        <Reveal>
          <p className="eyebrow">Pull requests welcome</p>
          <h2>Nothing here is finished forever.</h2>
          <p>
            Found an outdated command, a rough explanation, or an idea worth
            building? Open an issue and help the next reader.
          </p>
          <a
            className="button button-primary"
            href="https://github.com/orgs/ArchLinuxStudio/repositories"
            target="_blank"
            rel="noreferrer"
          >
            Find a repository <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
      </section>
    </div>
  );
}

export default ProductList;
