import { event } from "../data/eventConfig";

export default function Schedule() {
  return (
    <section id="schedule" className="section">
      <div className="wrap">
        <h2>Event schedule</h2>
        <p className="muted">Tentative. All timings are to be announced.</p>
        <ol className="timeline">
          {event.schedule.map((s) => (
            <li key={s.step}><strong>{s.step}</strong><span>{s.time}</span></li>
          ))}
        </ol>
      </div>
    </section>
  );
}
