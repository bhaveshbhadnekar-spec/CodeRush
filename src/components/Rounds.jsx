import { event } from "../data/eventConfig";

export default function Rounds() {
  return (
    <section id="rounds" className="section alt">
      <div className="wrap">
        <h2>Competition rounds</h2>
        <p className="muted">Proposed rounds. Organizers can edit these.</p>
        <ol className="rounds">
          {event.rounds.map((r, i) => (
            <li key={r.title}>
              <span className="round-no">Round {i + 1}</span>
              <h3>{r.title}</h3>
              <ul>{r.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
