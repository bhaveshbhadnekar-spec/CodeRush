// EDIT HERE: all event information lives in this one file.
export const event = {
  name: "CodeRush 2026",
  tagline: "Think Fast. Code Smart. Compete Hard.",
  // Set a real date like "2026-12-15T10:00:00+05:30" to start the countdown.
  // Keep null while the date is not confirmed.
  date: null,
  dateLabel: "To Be Announced",
  venue: "MITS Gwalior, Madhya Pradesh (proposed venue, not officially approved)",
  mode: "Offline (proposed)",
  eligibility: "College students",
  // Paste your Google Form link here. Empty string = registration button is disabled.
  registrationUrl: "https://forms.gle/iPu3aKDxdVRXXZxX9",
  contactEmail: "", // empty = shows "not configured"
  githubUrl: "",    // empty = GitHub link is hidden
  nav: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "rounds", label: "Rounds" },
    { id: "prizes", label: "Prizes" },
    { id: "faq", label: "FAQ" },
  ],
  rounds: [
    { title: "Logic Sprint", points: ["Basic programming logic", "MCQs and output-based questions", "Tests fundamental concepts"] },
    { title: "DSA Challenge", points: ["Arrays, strings, searching and sorting", "Timed programming challenges", "Problem-solving under a clock"] },
    { title: "Final Showdown", points: ["Advanced problem-solving challenges", "Accuracy and efficiency", "Time management"] },
  ],
  schedule: [
    { step: "Registration and check-in", time: "Time to be announced" },
    { step: "Opening briefing", time: "Time to be announced" },
    { step: "Round 1: Logic Sprint", time: "Time to be announced" },
    { step: "Round 2: DSA Challenge", time: "Time to be announced" },
    { step: "Final round: Final Showdown", time: "Time to be announced" },
    { step: "Results and closing", time: "Time to be announced" },
  ],
  prizes: [
    { place: "First Place", note: "Prize details to be announced" },
    { place: "Second Place", note: "Recognition" },
    { place: "Third Place", note: "Certificates (subject to organizer confirmation)" },
  ],
  rules: [
    "Open to college students, subject to organizer confirmation.",
    "Participants must follow the competition rules.",
    "Plagiarism and unfair practices are prohibited.",
    "Final evaluation criteria will be announced by organizers.",
    "Participants should follow the published event schedule.",
  ],
  faqs: [
    { q: "Who can participate?", a: "The event is planned for college students. Final eligibility will be confirmed by the organizers." },
    { q: "What are the competition rounds?", a: "Three proposed rounds: Logic Sprint, DSA Challenge and Final Showdown. They may change before the event." },
    { q: "Is prior competitive programming experience required?", a: "No fixed requirement has been announced. Round 1 covers basic logic, so beginners can take part." },
    { q: "Where can I register?", a: "Registration happens through a form link that will appear in the Register section once the organizers share it." },
    { q: "When will the schedule be announced?", a: "The date and timings are still to be announced. This page will be updated when they are confirmed." },
  ],
};
