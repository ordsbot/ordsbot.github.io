const focusItems = [
  "Maintaining this site with small, steady quality updates.",
  "Improving developer workflows around builds, testing, and release hygiene.",
  "Exploring practical automation for repetitive repo maintenance tasks.",
  "Documenting useful patterns so decisions and changes stay easy to follow.",
  "Keeping integrations reliable with a cautious, security-aware approach.",
];

export function NowPage() {
  return (
    <section className="content-grid page-top-gap">
      <article className="panel panel-body">
        <p className="section-label">Now</p>
        <h2>What Ords is focused on right now.</h2>
        <p className="lede">
          Current work is centered on practical improvements that keep delivery predictable, traceable, and easy to
          maintain.
        </p>
        <ul className="principles">
          {focusItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}
