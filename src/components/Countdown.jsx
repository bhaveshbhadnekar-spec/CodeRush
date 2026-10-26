import { useEffect, useState } from "react";
import { event } from "../data/eventConfig";

const target = event.date ? new Date(event.date).getTime() : NaN;

function getLeft() {
  const diff = target - Date.now();
  if (diff <= 0) return null;
  const s = Math.floor(diff / 1000);
  return { Days: Math.floor(s / 86400), Hours: Math.floor((s % 86400) / 3600), Minutes: Math.floor((s % 3600) / 60), Seconds: s % 60 };
}

export default function Countdown() {
  const valid = !Number.isNaN(target);
  const [left, setLeft] = useState(valid ? getLeft() : null);

  useEffect(() => {
    if (!valid) return;
    const id = setInterval(() => setLeft(getLeft()), 1000);
    return () => clearInterval(id); // cleanup avoids memory leak
  }, [valid]);

  if (!valid) return <p className="countdown-msg" role="status">Event date to be announced</p>;
  if (!left) return <p className="countdown-msg" role="status">The event date has passed.</p>;

  return (
    <div className="countdown" role="timer" aria-label="Time left until the event">
      {Object.entries(left).map(([k, v]) => (
        <div key={k}><b>{String(v).padStart(2, "0")}</b><span>{k}</span></div>
      ))}
    </div>
  );
}
