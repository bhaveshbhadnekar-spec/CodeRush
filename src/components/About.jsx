import Countdown from "./Countdown";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap split">
        <div>
          <h2>About the event</h2>
          <p>
            CodeRush is designed to challenge programming logic, data structures, algorithms and
            problem-solving speed. It is a new, proposed event, so details may change as organizers confirm them.
          </p>
          <p>Whether you are just starting with DSA or already solving problems daily, the rounds build up step by step.</p>
        </div>
        <div className="panel">
          <h3>Countdown</h3>
          <Countdown />
        </div>
      </div>
    </section>
  );
}
