import { event } from "../data/eventConfig";

export default function Prizes() {
  return (
    <section id="prizes" className="section alt">
      <div className="wrap">
        <h2>Prizes and recognition</h2>
        <p className="muted">No amounts are confirmed yet.</p>
        <div className="podium">
          {event.prizes.map((p, i) => (
            <div key={p.place} className={`podium-item p${i + 1}`}>
              <b>{i + 1}</b>
              <h3>{p.place}</h3>
              <p>{p.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
