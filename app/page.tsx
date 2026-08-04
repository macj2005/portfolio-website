import Image from "next/image";
import Link from "next/link";

const links = [
  {
    label: "Email",
    href: "mailto:marcus@mpjohnson.dev",
    icon: "mail",
    display: "marcus@mpjohnson.dev",
  },
  {
    label: "GitHub",
    href: "https://github.com/macj2005",
    icon: "github",
    display: "macj2005",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mac-johnson682/",
    icon: "linkedin",
    display: "Marcus Johnson Jr.",
  },
];

type Project = {
  title: string;
  description: string;
  stack: string[];
  type: string;
  href?: string;
  image?: string;
  imageAlt?: string;
  linkLabel?: string;
};

const projects: Project[] = [
  {
    title: "Parallel Integration Engine",
    description:
      "Built a distributed mathematical computing platform in Rust that queues, partitions, and processes computationally intensive jobs across asynchronous workers.",
    stack: ["Rust", "PostgreSQL", "AWS SQS"],
    href: "/pie",
    image: "/pie.png",
    imageAlt: "Parallel Integration Engine application interface",
    linkLabel: "View project",
    type: "Personal",
  },
  {
    title: "Burdines Waterfront Website",
    description:
      "Created a modern website for Burdines Waterfront from scratch. Included SEO practices that increased web traffic to over 5.2K average visitors a month.",
    stack: ["React", "JavaScript", "SEO"],
    href: "https://burdineswaterfront.com/",
    image: "/burdines.png",
    imageAlt: "Burdines Waterfront website homepage",
    linkLabel: "Visit website",
    type: "Contract work",
  },
  {
    title: "Blockchain Visualization",
    description:
      "Built an interactive tool that simulates mining, transactions, block rewards, and blockchain validation to better understand blockchain concepts.",
    stack: ["JavaScript", "Blockchain", "Hashing"],
    href: "https://blockchainvisual.netlify.app/",
    image: "/blockchain.png",
    imageAlt: "Blockchain simulation tool interface",
    linkLabel: "Visit website",
    type: "Personal",
  },
  {
    title: "TCP from scratch",
    description:
      "Developed TCP from the ground up in Rust, using concurrent programming techniques and a sliding window algorithm to create reliable data transfer.",
    stack: ["Rust", "APIs", "TCP", "Serialization"],
    type: "Class work",
  },
];

const coursework = [
  {
    category: "Computer Science",
    courses: [
      {
        title: "Algorithms",
        description:
          "Built a foundation in algorithm design, runtime analysis, sorting, searching, graph algorithms, and problem-solving strategies.",
      },
      {
        title: "Data Communications",
        description:
          "Covered all important aspects of computer networking and built foundational networking protocols from scratch using Rust.",
      },
      {
        title: "Software Engineering I & II",
        description:
          "Developed a full-stack web application through two semesters of iterative project development using Agile methodologies, Scrum, Spring Boot, React, and MySQL.",
      },
    ],
  },
  {
    category: "Advanced Mathematics",
    courses: [
      {
        title: "Cryptology",
        description:
          "Explored encryption, decryption, modular arithmetic, public-key systems, and the mathematical ideas behind secure communication.",
      },
      {
        title: "Combinatorics & Abstract Algebra",
        description:
          "Studied counting techniques, recurrence relations, number theory, and the foundational proofs surrounding each concept.",
      },
      {
        title: "Foundations of Mathematics",
        description:
          "Developed proof-writing, logic, set theory, functions, relations, and the formal language of higher mathematics.",
      },
    ],
  },
];

function ContactIcon({ type }: { type: string }) {
  const iconClass = "h-5 w-5";

  if (type === "github") {
    return (
      <svg
        aria-hidden="true"
        className={iconClass}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          clipRule="evenodd"
          d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.91c-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.96c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.83c0 .27.18.59.69.49A10.15 10.15 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
          fillRule="evenodd"
        />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg
        aria-hidden="true"
        className={iconClass}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.35 8h4.3v14H.35V8Zm7.02 0h4.12v1.91h.06c.57-1.09 1.98-2.24 4.08-2.24 4.36 0 5.17 2.87 5.17 6.6V22h-4.3v-6.85c0-1.63-.03-3.73-2.27-3.73-2.28 0-2.63 1.78-2.63 3.61V22H7.37V8Z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className={iconClass}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M4 4h16v16H4z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function ProjectBadge({ type }: { type: string }) {
  const badgeStyles: Record<string, string> = {
    "Contract work": "bg-emerald-50 text-emerald-800 ring-emerald-700/15",
    Personal: "bg-sky-50 text-sky-800 ring-sky-700/15",
    "Class work": "bg-amber-50 text-amber-800 ring-amber-700/15",
  };

  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-md px-2.5 py-1 text-xs font-semibold ring-1 ${
        badgeStyles[type] ?? "bg-zinc-100 text-zinc-700 ring-zinc-700/10"
      }`}
    >
      {type}
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-zinc-950">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-8 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between gap-4 border-b border-zinc-900/10 pb-6">
          <a className="font-display text-lg font-semibold tracking-normal" href="#">
            Marcus Johnson Jr.
          </a>
          <nav className="flex items-center gap-4 text-sm font-medium text-zinc-700">
            <a className="transition hover:text-zinc-950" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-zinc-950" href="#coursework">
              Coursework
            </a>
            <a className="transition hover:text-zinc-950" href="#contact">
              Contact
            </a>
          </nav>
        </header>

        <section className="grid items-center gap-10 py-4 lg:grid-cols-[1fr_340px] lg:gap-16">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              Software Engineer Portfolio
            </p>
            <h1 className="font-display text-5xl font-semibold leading-tight tracking-normal text-zinc-950 sm:text-6xl">
              Marcus Johnson Jr.
            </h1>
            <div className="mt-3 space-y-1">
              <p className="text-xl font-medium text-zinc-700">
                Computer Science & Mathematics
              </p>
              <p className="text-base font-semibold uppercase tracking-[0.16em] text-teal-700">
                Baylor University - May 2027
              </p>
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700">
              I&apos;m a Computer Science and Mathematics double major who enjoys problem solving and building things with technology.
              Take a look at some of the things I&apos;ve built, as well as the college classes that have shaped my learning.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700">
              Feel free to reach out!
            </p>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-lg border border-zinc-900/10 bg-zinc-200 shadow-sm">
            <Image
              alt="Portrait of Marcus Johnson Jr."
              className="object-cover"
              fill
              priority
              sizes="(min-width: 1024px) 340px, 90vw"
              src="/Mac Johnson.JPEG"
            />
          </div>
        </section>

        <section
          id="contact"
          className="grid gap-4 border-y border-zinc-900/10 py-8 md:grid-cols-3"
        >
          {links.map((link) => (
            <a
              className="group flex items-center gap-4 rounded-lg bg-white p-5 shadow-sm ring-1 ring-zinc-900/8 transition hover:-translate-y-0.5 hover:shadow-md"
              href={link.href}
              key={link.label}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              target={link.href.startsWith("http") ? "_blank" : undefined}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-teal-50 text-teal-800 ring-1 ring-teal-700/10">
                <ContactIcon type={link.icon} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-teal-700">
                  {link.label}
                </span>
                <span className="mt-1 block break-words text-base font-medium text-zinc-950 group-hover:text-teal-800">
                  {link.display}
                </span>
              </span>
            </a>
          ))}
        </section>

        <section id="projects">
          <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                Selected Work
              </p>
              <h2 className="font-display mt-2 text-3xl font-semibold tracking-normal text-zinc-950">
                Software projects
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-zinc-700">
              A few software projects that show my technical experience. 
              Range from client work, class assignments, or personal projects.  
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article
                className="flex min-h-[260px] flex-col overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-zinc-900/8"
                key={project.title}
              >
                {project.image ? (
                  <div className="relative aspect-[16/10] w-full border-b border-zinc-900/10 bg-zinc-100">
                    <Image
                      alt={project.imageAlt ?? `${project.title} screenshot`}
                      className="object-cover object-top"
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      src={project.image}
                    />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold tracking-normal text-zinc-950">
                    {project.title}
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-7 text-zinc-700">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        className="rounded-md bg-teal-50 px-3 py-1 text-sm font-medium text-teal-800 ring-1 ring-teal-700/10"
                        key={item}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    {project.href ? (
                      project.href.startsWith("/") ? (
                        <Link
                          className="inline-flex text-sm font-semibold text-teal-800 transition hover:text-teal-950"
                          href={project.href}
                        >
                          {project.linkLabel ?? "View project"}
                        </Link>
                      ) : (
                        <a
                          className="inline-flex text-sm font-semibold text-teal-800 transition hover:text-teal-950"
                          href={project.href}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {project.linkLabel ?? "View project"}
                        </a>
                      )
                    ) : (
                      <span />
                    )}
                    <ProjectBadge type={project.type} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="coursework"
          className="border-t border-zinc-900/10 pb-16 pt-12"
        >
          <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                Academic Background
              </p>
              <h2 className="font-display mt-2 text-3xl font-semibold tracking-normal text-zinc-950">
                Relevant coursework
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-zinc-700">
              Some of my favorite classes that have developed my technical abilities and logical problem-solving techniques.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {coursework.map((group) => (
              <section
                className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-zinc-900/8"
                key={group.category}
              >
                <h3 className="font-display text-2xl font-semibold tracking-normal text-zinc-950">
                  {group.category}
                </h3>
                <div className="mt-6 grid gap-5">
                  {group.courses.map((course) => (
                    <article
                      className="border-t border-zinc-900/10 pt-5 first:border-t-0 first:pt-0"
                      key={course.title}
                    >
                      <h4 className="font-display text-lg font-semibold tracking-normal text-zinc-950">
                        {course.title}
                      </h4>
                      <p className="mt-2 text-base leading-7 text-zinc-700">
                        {course.description}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
