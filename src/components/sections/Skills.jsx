import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  Code2,
  Server,
  ShieldCheck,
} from 'lucide-react';

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiRedux,
  SiThreedotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiDocker,
  SiCloudflare,
  SiGit,
  SiGithubactions,
  SiVitest,
  SiFigma,
  SiOwasp,
  SiLinux,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';

/*
|--------------------------------------------------------------------------
| SKILL DATA
|--------------------------------------------------------------------------
*/

const skillDomains = [
  {
    number: '01',
    title: 'Frontend & UI Engineering',
    description:
      'Building fast, responsive interfaces with strong attention to interaction, accessibility, and visual detail.',
    icon: Code2,
    strengths: [
      'High-performance interfaces',
      'Design system architecture',
      'Accessible experiences',
    ],
    skills: [
      {
        name: 'React / Next.js',
        status: 'Expert',
        icon: SiReact,
      },
      {
        name: 'TypeScript',
        status: 'Advanced',
        icon: SiTypescript,
      },
      {
        name: 'Tailwind CSS',
        status: 'Expert',
        icon: SiTailwindcss,
      },
      {
        name: 'Framer Motion',
        status: 'Advanced',
        icon: SiFramer,
      },
      {
        name: 'Zustand / Redux',
        status: 'Expert',
        icon: SiRedux,
      },
      {
        name: 'Three.js / Canvas',
        status: 'Proficient',
        icon: SiThreedotjs,
      },
      {
        name: 'HTML / ARIA',
        status: 'Expert',
        icon: Code2,
      },
      {
        name: 'Web Performance',
        status: 'Advanced',
        icon: Code2,
      },
    ],
  },

  {
    number: '02',
    title: 'Backend & Cloud Systems',
    description:
      'Designing reliable APIs, databases, and cloud infrastructure that can scale with the product.',
    icon: Server,
    strengths: [
      'Scalable backend architecture',
      'Real-time synchronization',
      'Database optimization',
    ],
    skills: [
      {
        name: 'Node.js',
        status: 'Expert',
        icon: SiNodedotjs,
      },
      {
        name: 'Express',
        status: 'Expert',
        icon: SiExpress,
      },
      {
        name: 'Python',
        status: 'Advanced',
        icon: SiPython,
      },
      {
        name: 'FastAPI',
        status: 'Advanced',
        icon: SiFastapi,
      },
      {
        name: 'PostgreSQL',
        status: 'Expert',
        icon: SiPostgresql,
      },
      {
        name: 'Prisma',
        status: 'Expert',
        icon: SiPrisma,
      },
      {
        name: 'Redis',
        status: 'Advanced',
        icon: SiRedis,
      },
      {
        name: 'Docker',
        status: 'Advanced',
        icon: SiDocker,
      },
      {
        name: 'Cloudflare',
        status: 'Advanced',
        icon: SiCloudflare,
      },
      {
        name: 'AWS',
        status: 'Proficient',
        icon: FaAws,
      },
    ],
  },

  {
    number: '03',
    title: 'Architecture & Security',
    description:
      'Applying structured engineering, security practices, and reliable development workflows.',
    icon: ShieldCheck,
    strengths: [
      'Security-minded development',
      'Automated workflows',
      'Clean engineering practices',
    ],
    skills: [
      {
        name: 'System Design',
        status: 'Advanced',
        icon: Server,
      },
      {
        name: 'Zero-Trust Architecture',
        status: 'Advanced',
        icon: ShieldCheck,
      },
      {
        name: 'Git',
        status: 'Expert',
        icon: SiGit,
      },
      {
        name: 'GitHub Actions',
        status: 'Advanced',
        icon: SiGithubactions,
      },
      {
        name: 'Vitest / Jest',
        status: 'Advanced',
        icon: SiVitest,
      },
      {
        name: 'Figma → Code',
        status: 'Expert',
        icon: SiFigma,
      },
      {
        name: 'OWASP Practices',
        status: 'Advanced',
        icon: SiOwasp,
      },
      {
        name: 'Linux / Shell',
        status: 'Advanced',
        icon: SiLinux,
      },
    ],
  },
];

/*
|--------------------------------------------------------------------------
| ANIMATION
|--------------------------------------------------------------------------
*/

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/*
|--------------------------------------------------------------------------
| SKILLS COMPONENT
|--------------------------------------------------------------------------
*/

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* --------------------------------------------------------------
            HEADER
        -------------------------------------------------------------- */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 grid grid-cols-1 gap-8 lg:mb-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"
        >
          {/* Left */}
          <div>
            <div className="mb-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-600" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-600">
                Technical Stack
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-[0.95] tracking-[-0.055em] text-zinc-950 sm:text-5xl lg:text-6xl">
              Tools behind
              <br />
              <span className="text-zinc-300">
                the work.
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="flex items-end lg:pb-1">
            <p className="max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
              A focused overview of the technologies and engineering practices
              I use to turn ideas into reliable, production-ready digital
              products.
            </p>
          </div>
        </motion.div>

        {/* --------------------------------------------------------------
            DOMAIN LIST
        -------------------------------------------------------------- */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="border-t border-zinc-200"
        >
          {skillDomains.map((domain) => {
            const DomainIcon = domain.icon;

            return (
              <motion.article
                key={domain.number}
                variants={itemVariants}
                className="group relative border-b border-zinc-200 py-9 sm:py-11 lg:py-12"
              >
                {/* Blue hover indicator */}
                <span className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-blue-600 transition-transform duration-500 ease-out group-hover:scale-y-100" />

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[90px_1fr_1.25fr_90px] lg:gap-10">

                  {/* ----------------------------------------------------
                      NUMBER + ICON
                  ---------------------------------------------------- */}

                  <div className="flex items-start gap-4 lg:flex-col lg:items-center lg:gap-5">
                    <span className="font-mono text-xs font-bold tracking-wider text-zinc-300 transition-colors duration-300 group-hover:text-blue-600">
                      {domain.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/20">
                      <DomainIcon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* ----------------------------------------------------
                      TITLE + DESCRIPTION + STRENGTHS
                  ---------------------------------------------------- */}

                  <div>
                    <h3 className="text-xl font-bold tracking-[-0.035em] text-zinc-950 sm:text-2xl">
                      {domain.title}
                    </h3>

                    <p className="mt-3 max-w-md text-xs leading-6 text-zinc-500 sm:text-sm">
                      {domain.description}
                    </p>

                    {/* Strengths */}
                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                      {domain.strengths.map((strength) => (
                        <div
                          key={strength}
                          className="flex items-center gap-2"
                        >
                          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-50">
                            <Check
                              className="h-2.5 w-2.5 text-blue-600"
                              strokeWidth={3}
                            />
                          </span>

                          <span className="text-[10px] font-semibold text-zinc-500 sm:text-xs">
                            {strength}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ----------------------------------------------------
                      TECHNOLOGIES
                  ---------------------------------------------------- */}

                  <div className="grid grid-cols-2 gap-x-5 gap-y-1 sm:grid-cols-3 sm:gap-x-7">
                    {domain.skills.map((skill) => {
                      const SkillIcon = skill.icon;

                      return (
                        <div
                          key={skill.name}
                          className="group/skill flex min-w-0 items-center justify-between gap-2 border-b border-zinc-100 py-3 transition-colors duration-200 hover:border-blue-200"
                        >
                          <div className="flex min-w-0 items-center gap-2.5">
                            <SkillIcon className="h-4 w-4 shrink-0 text-zinc-400 transition-colors duration-200 group-hover/skill:text-blue-600" />

                            <span className="truncate text-[11px] font-semibold text-zinc-700 transition-colors duration-200 group-hover/skill:text-blue-600 sm:text-xs">
                              {skill.name}
                            </span>
                          </div>

                          <span className="hidden shrink-0 text-[8px] font-bold uppercase tracking-wider text-zinc-300 xl:block">
                            {skill.status}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* ----------------------------------------------------
                      EXPLORE
                  ---------------------------------------------------- */}

                  <div className="hidden items-start justify-end lg:flex">
                    <div className="flex items-center gap-2 pt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-300 transition-colors duration-300 group-hover:text-blue-600">
                      <span>Explore</span>

                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        strokeWidth={1.8}
                      />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* --------------------------------------------------------------
            FOOTER META
        -------------------------------------------------------------- */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-3 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-400">
              03 Engineering Domains
            </span>
          </div>

          <span className="text-xs text-zinc-400">
            Focused on clean, scalable and practical solutions.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;