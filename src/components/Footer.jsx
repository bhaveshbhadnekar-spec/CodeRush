import { event } from "../data/eventConfig";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <a href="#home" className="logo">&lt;CodeRush<span>/&gt;</span></a>
          <p className="muted">{event.tagline}</p>
        </div>
        <nav aria-label="Footer">
          {event.nav.map((l) => <a key={l.id} href={`#${l.id}`}>{l.label}</a>)}
        </nav>
        <div>
          <p>Contact: {event.contactEmail ? <a href={`mailto:${event.contactEmail}`}>{event.contactEmail}</a> : <span className="muted">email not configured</span>}</p>
          {event.githubUrl && <p><a href={event.githubUrl} target="_blank" rel="noopener noreferrer">GitHub repository</a></p>}
        </div>
      </div>
      <p className="wrap copy">&copy; {new Date().getFullYear()} CodeRush. Student project, not an official event.</p>
    </footer>
  );
}
