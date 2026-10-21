// import { projects } from "../../data/projects";
// import { SectionHeading } from "../UI/SectionHeading";
// import { TechTag } from "../UI/TechTag";
// import { ProjectCard } from "../UI/ProjectCard";
// import { ArrowUpRightIcon, GithubIcon } from "../UI/Icons";

// export function Projects() {
//   const featuredProjects = projects.filter((p) => p.featured);
//   const others = projects.filter((p) => !p.featured);

//   return (
//     <section
//       id="projects"
//       className="scroll-mt-20 border-t border-ink-line py-20 sm:py-28"
//     >
//       <div className="container-content">
//         <SectionHeading
//           index="03"
//           title="Projects"
//           description="A mix of shipped web apps and machine-learning builds."
//         />

//         {featuredProjects.map((featured) => (
//           <div
//             key={featured.slug}
//             className="mb-8 grid overflow-hidden rounded-2xl border border-ink-line bg-ink-soft lg:grid-cols-2"
//           >
//             <div className="flex flex-col justify-center p-8 sm:p-10">
//               <span className="font-mono text-xs text-amber">
//                 featured project
//               </span>
//               <h3 className="mt-2 font-display text-2xl font-semibold text-paper sm:text-3xl">
//                 {featured.name}
//               </h3>
//               <p className="mt-3 text-paper-muted">{featured.description}</p>

//               <div className="mt-5 flex flex-wrap gap-2">
//                 {featured.tech.map((t) => (
//                   <TechTag key={t} label={t} />
//                 ))}
//               </div>

//               <div className="mt-7 flex flex-wrap items-center gap-4">
//                 {featured.liveUrl && (
//                   <a
//                     href={featured.liveUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="inline-flex items-center gap-2 rounded-md bg-amber px-4 py-2.5 font-medium text-ink transition-transform hover:-translate-y-0.5"
//                   >
//                     View live site
//                     <ArrowUpRightIcon className="h-4 w-4" />
//                   </a>
//                 )}
//                 {featured.repoUrl && (
//                   <a
//                     href={featured.repoUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="inline-flex items-center gap-2 rounded-md border border-ink-line px-4 py-2.5 font-medium text-paper transition-colors hover:border-amber/50 hover:text-amber"
//                   >
//                     <GithubIcon className="h-4 w-4" />
//                     Source code
//                   </a>
//                 )}
//               </div>
//             </div>

//             <div className="relative min-h-[220px] border-t border-ink-line bg-ink p-8 lg:border-l lg:border-t-0">
//               <div className="flex h-full flex-col justify-center gap-3 font-mono text-sm text-paper-faint">
//                 <p>
//                   <span className="text-amber">const</span> stack = [
//                 </p>
//                 {featured.tech.map((t) => (
//                   <p key={t} className="pl-4 text-paper-muted">
//                     &quot;{t}&quot;,
//                   </p>
//                 ))}
//                 <p>]</p>
//               </div>
//             </div>
//           </div>
//         ))}

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {others.map((project) => (
//             <ProjectCard key={project.slug} project={project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { projects, getProjectImage } from "../../data/projects";
import { SectionHeading } from "../UI/SectionHeading";
import { TechTag } from "../UI/TechTag";
import { ProjectCard } from "../UI/ProjectCard";
import { ArrowUpRightIcon, GithubIcon } from "../UI/Icons";

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-ink-line py-20 sm:py-28"
    >
      <div className="container-content">
        <SectionHeading
          index="03"
          title="Projects"
          description="A mix of shipped web apps and machine-learning builds."
        />

        {featuredProjects.map((featured) => {
          const image = getProjectImage(featured);

          return (
            <div
              key={featured.slug}
              className="mb-8 grid overflow-hidden rounded-2xl border border-ink-line bg-ink-soft lg:grid-cols-2"
            >
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <span className="font-mono text-xs text-amber">
                  featured project
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold text-paper sm:text-3xl">
                  {featured.name}
                </h3>
                <p className="mt-3 text-paper-muted">{featured.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {featured.tech.map((t) => (
                    <TechTag key={t} label={t} />
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-4">
                  {featured.liveUrl && (
                    <a
                      href={featured.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-amber px-4 py-2.5 font-medium text-ink transition-transform hover:-translate-y-0.5"
                    >
                      View live site
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </a>
                  )}
                  {featured.repoUrl && (
                    <a
                      href={featured.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-ink-line px-4 py-2.5 font-medium text-paper transition-colors hover:border-amber/50 hover:text-amber"
                    >
                      <GithubIcon className="h-4 w-4" />
                      Source code
                    </a>
                  )}
                </div>
              </div>

              {/* Right side: project screenshot (falls back to the stack snippet if no image) */}
              {image ? (
                <a
                  href={featured.liveUrl ?? featured.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${featured.name}`}
                  className="group relative block min-h-[220px] overflow-hidden border-t border-ink-line bg-ink lg:border-l lg:border-t-0"
                >
                  <img
                    src={image}
                    alt={`${featured.name} preview`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </a>
              ) : (
                <div className="relative min-h-[220px] border-t border-ink-line bg-ink p-8 lg:border-l lg:border-t-0">
                  <div className="flex h-full flex-col justify-center gap-3 font-mono text-sm text-paper-faint">
                    <p>
                      <span className="text-amber">const</span> stack = [
                    </p>
                    {featured.tech.map((t) => (
                      <p key={t} className="pl-4 text-paper-muted">
                        &quot;{t}&quot;,
                      </p>
                    ))}
                    <p>]</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

//this new code for centering the image in the featured project section and making it fully visible, while still falling back to the stack snippet if no image is available.
// import { projects, getProjectImage } from "../../data/projects";
// import { SectionHeading } from "../UI/SectionHeading";
// import { TechTag } from "../UI/TechTag";
// import { ProjectCard } from "../UI/ProjectCard";
// import { ArrowUpRightIcon, GithubIcon } from "../UI/Icons";

// export function Projects() {
//   const featuredProjects = projects.filter((p) => p.featured);
//   const others = projects.filter((p) => !p.featured);

//   return (
//     <section
//       id="projects"
//       className="scroll-mt-20 border-t border-ink-line py-20 sm:py-28"
//     >
//       <div className="container-content">
//         <SectionHeading
//           index="03"
//           title="Projects"
//           description="A mix of shipped web apps and machine-learning builds."
//         />

//         {featuredProjects.map((featured) => {
//           const image = getProjectImage(featured);

//           return (
//             <div
//               key={featured.slug}
//               className="mb-8 grid overflow-hidden rounded-2xl border border-ink-line bg-ink-soft lg:grid-cols-2"
//             >
//               <div className="flex flex-col justify-center p-8 sm:p-10">
//                 <span className="font-mono text-xs text-amber">
//                   featured project
//                 </span>
//                 <h3 className="mt-2 font-display text-2xl font-semibold text-paper sm:text-3xl">
//                   {featured.name}
//                 </h3>
//                 <p className="mt-3 text-paper-muted">{featured.description}</p>

//                 <div className="mt-5 flex flex-wrap gap-2">
//                   {featured.tech.map((t) => (
//                     <TechTag key={t} label={t} />
//                   ))}
//                 </div>

//                 <div className="mt-7 flex flex-wrap items-center gap-4">
//                   {featured.liveUrl && (
//                     <a
//                       href={featured.liveUrl}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="inline-flex items-center gap-2 rounded-md bg-amber px-4 py-2.5 font-medium text-ink transition-transform hover:-translate-y-0.5"
//                     >
//                       View live site
//                       <ArrowUpRightIcon className="h-4 w-4" />
//                     </a>
//                   )}
//                   {featured.repoUrl && (
//                     <a
//                       href={featured.repoUrl}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="inline-flex items-center gap-2 rounded-md border border-ink-line px-4 py-2.5 font-medium text-paper transition-colors hover:border-amber/50 hover:text-amber"
//                     >
//                       <GithubIcon className="h-4 w-4" />
//                       Source code
//                     </a>
//                   )}
//                 </div>
//               </div>

//               {/* Right side: project preview, centered and fully visible (falls back to the stack snippet if no image) */}
//               {image ? (
//                 <a
//                   href={featured.liveUrl ?? featured.repoUrl}
//                   target="_blank"
//                   rel="noreferrer"
//                   aria-label={`Open ${featured.name}`}
//                   className="group flex items-center justify-center border-t border-ink-line bg-ink p-5 sm:p-8 lg:border-l lg:border-t-0"
//                 >
//                   <img
//                     src={image}
//                     alt={`${featured.name} preview`}
//                     loading="lazy"
//                     className="aspect-[16/10] w-full max-w-[520px] rounded-lg object-contain transition-transform duration-500 group-hover:scale-[1.02]"
//                   />
//                 </a>
//               ) : (
//                 <div className="relative min-h-[220px] border-t border-ink-line bg-ink p-8 lg:border-l lg:border-t-0">
//                   <div className="flex h-full flex-col justify-center gap-3 font-mono text-sm text-paper-faint">
//                     <p>
//                       <span className="text-amber">const</span> stack = [
//                     </p>
//                     {featured.tech.map((t) => (
//                       <p key={t} className="pl-4 text-paper-muted">
//                         &quot;{t}&quot;,
//                       </p>
//                     ))}
//                     <p>]</p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           );
//         })}

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {others.map((project) => (
//             <ProjectCard key={project.slug} project={project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
