type LinkCard = {
  title: string;
  copy: string;
  href: string;
};

const cards: LinkCard[] = [
  {
    title: "OTP Bridge",
    copy: "Project page for ordsbot/otpbridge.",
    href: "https://ordsbot.github.io/otpbridge/",
  },
  {
    title: "GitHub",
    copy: "Where work gets shipped and tracked.",
    href: "https://github.com/ordsbot",
  },
  {
    title: "Documentation",
    copy: "How this site is built and deployed.",
    href: "https://github.com/ordsbot/ordsbot.github.io",
  },
  {
    title: "Deployments",
    copy: "Automated builds and GitHub Pages deploys.",
    href: "https://github.com/ordsbot/ordsbot.github.io/actions",
  },
];

export function LinksPage() {
  return (
    <section className="link-grid page-top-gap">
      {cards.map(({ title, copy, href }) => (
        <a className="tile" href={href} target="_blank" rel="noreferrer" key={href}>
          <span className="tile__eyebrow">Link</span>
          <h3>{title}</h3>
          <p>{copy}</p>
        </a>
      ))}
    </section>
  );
}
