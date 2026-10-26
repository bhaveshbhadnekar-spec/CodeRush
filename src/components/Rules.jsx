import { event } from "../data/eventConfig";

export default function Rules() {
  return (
    <section id="rules" className="section">
      <div className="wrap split">
        <div>
          <h2>Eligibility and rules</h2>
          <p className="muted">Eligibility: {event.eligibility}</p>
        </div>
        <ul className="rules">{event.rules.map((r) => <li key={r}>{r}</li>)}</ul>
      </div>
    </section>
  );
}
