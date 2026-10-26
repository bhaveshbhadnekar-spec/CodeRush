import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { event } from "../data/eventConfig";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#home" className="logo" onClick={close}>&lt;CodeRush<span>/&gt;</span></a>
        <button className="nav-toggle" aria-expanded={open} aria-controls="menu"
          aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav id="menu" className={`nav-menu ${open ? "is-open" : ""}`} aria-label="Main">
          {event.nav.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={close}>{l.label}</a>
          ))}
          <a href="#register" className="btn btn-primary btn-sm" onClick={close}>Register</a>
        </nav>
      </div>
    </header>
  );
}
