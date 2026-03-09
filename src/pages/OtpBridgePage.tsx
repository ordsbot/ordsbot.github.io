const highlights = [
  "OTP-first workflows for verification and bridge-style integrations.",
  "Practical setup for app developers and operators.",
  "Cautious handling of sensitive verification steps.",
];

export function OtpBridgePage() {
  return (
    <section className="content-grid page-stack">
      <article className="panel panel-body">
        <p className="section-label">Project spotlight</p>
        <h2>ordsbot/otpbridge</h2>
        <p className="lede">
          OTP Bridge is a focused Ordsbot project for connecting OTP-based verification flows with practical,
          developer-friendly automation.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="https://github.com/ordsbot/otpbridge" target="_blank" rel="noreferrer">
            Open repository
          </a>
          <a className="button button--ghost" href="https://ordsbot.github.io/otpbridge/" target="_blank" rel="noreferrer">
            Open project site
          </a>
        </div>
      </article>

      <article className="panel panel-body">
        <p className="section-label">Why it matters</p>
        <h2>Bridge reliability + speed.</h2>
        <ul className="principles">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}
