import Image from "next/image";

export default function mathPage() {

  return (
          <main className="min-h-screen bg-[#f7f4ef] text-zinc-950">
            <section className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-8 sm:px-10 lg:px-12">
              <header className="flex items-center justify-between gap-4 border-b border-zinc-900/10 pb-6">
                <a className="font-display text-lg font-semibold tracking-normal" href="/#">
                  Marcus Johnson Jr.
                </a>
                <nav className="flex items-center gap-4 text-sm font-medium text-zinc-700">
                  <a className="transition hover:text-zinc-950" href="/#projects">
                    Projects
                  </a>
                  <a className="transition hover:text-zinc-950" href="/#coursework">
                    Coursework
                  </a>
                  <a className="transition hover:text-zinc-950" href="/#contact">
                    Contact
                  </a>
                </nav>
              </header>
      
              <section className="items-center py-4">
                <div className="">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                    Software Engineer Portfolio
                  </p>
                  <h1 className="font-display text-5xl font-semibold leading-tight tracking-normal text-zinc-950 sm:text-6xl">
                    Parallel Integration Engine
                  </h1>
                  <div className="mt-3 space-y-1">
                    <p className="text-xl font-medium text-zinc-700">
                      
                    </p>
                    <p className="text-base font-semibold uppercase tracking-[0.16em] text-teal-700">
                      Last Updated: August 3, 2026
                    </p>
                  </div>

                  <div className="mx-auto mt-8 w-full max-w-3xl overflow-hidden rounded-lg border border-zinc-900/10 bg-zinc-200 shadow-sm">
                    <Image
                      alt="Parallel Integration Engine application interface"
                      className="h-auto w-full"
                      height={434}
                      preload
                      src="/pie.png"
                      width={912}
                    />
                  </div>
                  <section aria-labelledby="tech-stack-heading" className="mx-auto mt-7 max-w-3xl text-center">
                    <h2
                      className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700"
                      id="tech-stack-heading"
                    >
                      Tech Stack
                    </h2>
                    <ul className="mt-4 flex flex-wrap justify-center gap-3">
                      {[
                        ["Rust", "API & workers"],
                        ["PostgreSQL", "Jobs & local queue"],
                        ["AWS SQS", "Cloud queue"],
                      ].map(([name, role]) => (
                        <li
                          className="rounded-lg border border-zinc-900/10 bg-white/60 px-5 py-3 shadow-sm"
                          key={name}
                        >
                          <span className="block font-display text-base font-semibold text-zinc-950">
                            {name}
                          </span>
                          <span className="mt-0.5 block text-xs font-medium text-zinc-500">
                            {role}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>
                  <div className="mt-5 flex justify-center">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                      href="https://github.com/macj2005/math-compute-platform"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <svg
                        aria-hidden="true"
                        className="size-5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.97 10.97 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.79 1.06.79 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
                      </svg>
                      View on GitHub
                    </a>
                  </div>

                  <div className="mx-auto flex max-w-4xl flex-col gap-y-6 py-6 text-lg leading-8 text-zinc-700">
                    <p>
                      The <b>Parallel Integration Engine</b>, or <b>PIE</b> for short, is a distributed mathematical computing 
                      platform built entirely in Rust. It lets users submit computationally intensive math problems without 
                      waiting for them to finish in the foreground.
                    </p>
                    <p>
                      Each request becomes a job that is placed in a queue, processed asynchronously by available workers, 
                      and tracked from submission through completion.
                    </p>

                    <h1 className="text-zinc-950 font-display font-semibold leading-tight text-2xl pt-2">
                      Calculations
                    </h1>
                    <p>
                      The platform supports custom, multidimensional integral approximations using Monte Carlo simulations,
                      as well as π estimations using the same approach. For integral jobs, users can input a custom expression,
                      including multiple variables, bounds, and built-in math functions like exponentials or trig operations. 
                    </p>
                    <p>
                      Large integral calculations are divided into independent pieces and distributed across multiple workers. 
                      When the calculations are complete, the app reports the estimate, standard error, and an approximate 95% confidence interval.
                    </p>

                    <section className="grid items-center gap-8 pt-2 md:grid-cols-[minmax(0,0.9fr)_minmax(300px,1.1fr)]">
                      <div className="space-y-6">
                        <h1 className="text-2xl font-display font-semibold leading-tight text-zinc-950">
                          Command-Line Interface
                        </h1>
                        <p>
                          Users interact with the platform through a keyboard-driven terminal interface. From there, they can submit
                           new calculations, browse recent jobs, inspect detailed results, monitor partition-level progress, and view 
                           metrics such as pending, running, completed, and failed jobs.
                        </p>
                        <p>
                          I considered creating a graphical user interface in React; however, a command-line interface in the terminal
                          is sometimes a more elegant solution.
                        </p>
                      </div>
                      <Image
                        alt="Parallel Integration Engine command line interface"
                        className="h-auto w-full rounded-lg border border-zinc-900/10 shadow-sm"
                        height={430}
                        sizes="(min-width: 768px) 40vw, 100vw"
                        src="/pie_2.png"
                        width={619}
                      />
                    </section>

                    <h1 className="text-zinc-950 font-display font-semibold leading-tight text-2xl pt-2">
                      Task Distribution
                    </h1>

                    <p>
                      Behind the interface is a production-style distributed architecture. A Rust API accepts requests and records 
                      them in PostgreSQL, while a configurable job queue delivers 
                      work to asynchronous Rust workers. The workers execute jobs concurrently, record results, retry failures, 
                      and can route repeatedly failing jobs to a dead-letter queue. Seeded, global-index sampling also makes 
                      distributed calculations reproducible even when partitions run in a different order or need to be retried.
                    </p>
                    <p>
                      The job queue is configurable to be either a local PostgreSQL instance or an AWS SQS instance in the cloud.
                      When AWS SQS is used, poisoned tasks will be delivered to a DLQ to prevent them from disrupting the task flow.
                    </p>

                    <h1 className="text-zinc-950 font-display font-semibold leading-tight text-2xl pt-2">
                      Purpose Statement
                    </h1>
                    <p>
                      I built this app because I wanted to deepen my skills in Rust and learn more about cloud technologies
                      like AWS. I also wanted to draw on my math background and develop something that integrates (pun intended)
                      something that interests me, like Monte Carlo simulations and estimated risk. Feel free to 
                      check out PIE for yourself and reach out if you have any questions.
                    </p>
                    <p>QED.</p>
                  </div>                  
                </div>
              </section>
            </section>
          </main>
  );
}
