import { event } from "../data/eventConfig";
import RegisterButton from "./RegisterButton";

export default function Registration() {
  return (
    <section id="register" className="section register">
      <div className="wrap">
        <h2>Ready to compete?</h2>
        <p>Registration is open for demonstration purposes only. It is not confirmed by any organizer.</p>
        <RegisterButton mode="form" />
        <p id="reg-note" className="muted">
          {event.registrationUrl
            ? "The form opens in a new tab."
            : "Registration link not configured yet. Check back once the organizers share it."}
        </p>
      </div>
    </section>
  );
}
