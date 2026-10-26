import { event } from "../data/eventConfig";
import RegisterButton from "./RegisterButton";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap hero-grid">
        <div>
          <p className="label">COMPETITIVE PROGRAMMING</p>
          <h1>{event.name}</h1>
          <p className="tagline">{event.tagline}</p>
          <p className="lead">
            A proposed college coding competition with three rounds that test programming logic,
            data structures and how fast you can solve problems.
          </p>
          <div className="cta-row">
            <RegisterButton />
            <a className="btn btn-ghost" href="#rounds">Explore Competition</a>
          </div>
          <dl className="facts">
            <div><dt>Date</dt><dd>{event.dateLabel}</dd></div>
            <div><dt>Venue</dt><dd>MITS Gwalior (proposed)</dd></div>
            <div><dt>Mode</dt><dd>{event.mode}</dd></div>
          </dl>
        </div>
        <div className="terminal" aria-hidden="true">
          <div className="terminal-bar"><i /><i /><i /><span>round2.py (sample)</span></div>
<pre>{`def two_sum(nums, target):
    seen = {}
    for i, n in enumerate(nums):
        if target - n in seen:
            return [seen[target - n], i]
        seen[n] = i

$ run tests
> 12/12 passed
> time: 0.04s`}<span className="cursor" /></pre>
        </div>
      </div>
    </section>
  );
}
