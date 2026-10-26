import { event } from "../data/eventConfig";

// Hero/nav use "scroll" mode (go to #register). Registration section uses "form" mode.
export default function RegisterButton({ mode = "scroll", className = "btn btn-primary" }) {
  if (mode === "scroll") return <a className={className} href="#register">Register Now</a>;
  if (!event.registrationUrl)
    return <button className={className} disabled aria-describedby="reg-note">Register Now</button>;
  return <a className={className} href={event.registrationUrl} target="_blank" rel="noopener noreferrer">Register Now</a>;
}
