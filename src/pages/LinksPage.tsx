type LinkCard = {
  title: string;
  copy: string;
  href: string;
  eyebrow?: string;
};

const cards: LinkCard[] = [
  {
    title: "OTP Bridge",
    copy: "Project page for ordsbot/otpbridge.",
    href: "https://ordsbot.github.io/otpbridge/",
    eyebrow: "Project",
  },
  {
    title: "GitHub",
    copy: "Where work gets shipped and tracked.",
    href: "https://github.com/ordsbot",
    eyebrow: "Profile",
  },
  {
    title: "Repository",
    copy: "Source code for this site.",
    href: "https://github.com/ordsbot/ordsbot.github.io",
    eyebrow: "Code",
  },
  {
    title: "Deployments",
    copy: "Automated builds and GitHub Pages deploys.",
    href: "https://github.com/ordsbot/ordsbot.github.io/actions",
    eyebrow: "CI",
  },
  {
    title: "Live site",
    copy: "Open the site as it is right now.",
    href: "https://ordsbot.github.io/",
    eyebrow: "Pages",
  },
];

export function LinksPage() {
  return (
    <section className="link-grid page-top-gap">
      {cards.map(({ title, copy, href, eyebrow }) => (
        <a className="tile" href={href} target="_blank" rel="noreferrer" key={href}>
          <span className="tile__eyebrow">{eyebrow ?? "Link"}</span>
          <h3>{title}</h3>
          <p>{copy}</p>
        </a>
      ))}
    </section>
  );
}
