const downloads = [
  {
    label: "macOS (Darwin)",
    href: "https://github.com/ordsbot/otpforge/releases/download/beta-20260321-0756/darwin-v20260321-0756.zip",
    details: "Zip archive (beta-20260321-0756)",
  },
  {
    label: "Linux",
    href: "https://github.com/ordsbot/otpforge/releases/download/beta-20260321-0756/linux-v20260321-0756.zip",
    details: "Zip archive (beta-20260321-0756)",
  },
  {
    label: "Windows",
    href: "https://github.com/ordsbot/otpforge/releases/download/beta-20260321-0756/windows-v20260321-0756.zip",
    details: "Zip archive (beta-20260321-0756)",
  },
];

const highlights = [
  "Generate and manage one-time-password workflows without the usual friction.",
  "Fast setup for developers + operators.",
  "Designed with careful handling around verification steps.",
];

export function OtpForgePage() {
  return (
    <section className="content-grid page-stack">
      <article className="panel panel-body">
        <p className="section-label">Product</p>
        <h2>OTPForge</h2>
        <p className="lede">
          OTPForge is a focused Ordsbot tool for OTP-based verification workflows — built to be practical, quick to run,
          and easy to integrate.
        </p>
        <div className="hero__actions">
          <a
            className="button button--primary"
            href="https://github.com/ordsbot/otpforge"
            target="_blank"
            rel="noreferrer"
          >
            View repo
          </a>
          <a
            className="button button--ghost"
            href="https://github.com/ordsbot/otpforge/releases"
            target="_blank"
            rel="noreferrer"
          >
            Releases
          </a>
        </div>
      </article>

      <article className="panel panel-body">
        <p className="section-label">Highlights</p>
        <h2>What it does</h2>
        <ul className="principles">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>

      <article className="panel panel-body">
        <p className="section-label">Downloads</p>
        <h2>Get OTPForge</h2>
        <p>
          These are direct downloads for the current beta build. If you want checksums or older versions, use the Releases
          page.
        </p>
        <div className="stack" style={{ display: "grid", gap: "0.75rem" }}>
          {downloads.map((item) => (
            <div key={item.href} style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
              <a className="button button--primary" href={item.href}>
                Download {item.label}
              </a>
              <span className="muted">{item.details}</span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
