import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { event } from "../data/eventConfig";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section id="faq" className="section alt">
      <div className="wrap faq">
        <h2>Frequently asked questions</h2>
        {event.faqs.map((f, i) => {
          const open = openIndex === i;
          return (
            <div key={f.q} className="faq-item">
              <h3>
                <button aria-expanded={open} aria-controls={`faq-${i}`} id={`faq-btn-${i}`}
                  onClick={() => setOpenIndex(open ? -1 : i)}>
                  {f.q}{open ? <Minus size={18} /> : <Plus size={18} />}
                </button>
              </h3>
              <div id={`faq-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} hidden={!open}>
                <p>{f.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
