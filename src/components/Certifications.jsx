import {
  Award,
  FileText,
  ShieldCheck,
  CalendarDays,
  GraduationCap,
  Code2,
  Download,
  ExternalLink,
} from 'lucide-react'

function Certifications({ language }) {
  const content = {
    fr: {
      label: 'MES CERTIFICATIONS',
      title: 'Certifications & attestations',
      description:
        'Un aperçu des formations et certifications qui témoignent de mon engagement dans l’apprentissage continu et le développement de mes compétences.',
      total: 'Certifications obtenues',
      attendance: 'Attestation de participation',
      completion: 'Certificat de formation',
      verify: 'Vérifier le certificat',
      view: 'Consulter le certificat',
      download: 'Télécharger le PDF',
      dateUnknown: 'Date non précisée',
      preview: 'Aperçu du certificat',
      items: [
        {
          title: 'AI for Positive Futures',
          organization: 'Orange Digital Center Ben M’Sick × Capgemini',
          date: '21 octobre 2026',
          type: 'attendance',
          icon: Award,
          file: 'ai-for-positive-futures.pdf',
          description:
            'Participation à une formation autour de l’intelligence artificielle et de ses applications pour un avenir positif.',
        },
        {
          title: 'Certified Cybersecurity Educator Professional (CCEP)',
          organization: 'Red Team Leaders',
          date: '16 octobre 2026',
          type: 'completion',
          icon: ShieldCheck,
          file: 'ccep.pdf',
          description:
            'Certification dans le domaine de la sensibilisation et de l’éducation en cybersécurité.',
          verificationUrl:
            'https://courses.redteamleaders.com/exam-completion/5ea7f9f3a5bcc45e',
          externalLabel: 'verify',
        },
        {
          title: '1 Million Prompters',
          organization:
            'Dubai Future Foundation × Dubai Centre for Artificial Intelligence',
          date: null,
          type: 'completion',
          icon: Award,
          file: 'one-million-prompters.pdf',
          description:
            'Programme consacré au prompt engineering et à l’utilisation de l’intelligence artificielle générative.',
          verificationUrl:
            'https://omp.dub.ai/certificate/NnWt9wy1KQUM',
          externalLabel: 'verify',
        },
        {
          title: 'Power BI for Beginners',
          organization: 'Microsoft × SkillUp Simplilearn',
          date: '7 octobre 2026',
          type: 'completion',
          icon: Award,
          file: 'power-bi-beginners.pdf',
          description:
            'Formation introductive à Power BI, à la visualisation et à l’analyse des données.',
          verificationUrl:
            'https://simpli-web.app.link/e/gfQhpYmGk8b',
          externalLabel: 'verify',
        },
        {
          title: 'Introduction to PHP',
          organization: 'Alison',
          date: '10 juin 2026',
          type: 'completion',
          icon: Code2,
          file: 'introduction-to-php.pdf',
          description:
            'Formation introductive aux fondamentaux du langage PHP pour le développement web côté serveur.',
          verificationUrl: 'https://alison.com/user/pdf/5582/1',
          externalLabel: 'view',
        },
        {
          title: 'Introduction to HTML',
          organization: 'Sololearn',
          date: '13 février 2026',
          type: 'completion',
          icon: Code2,
          file: 'introduction-to-html.pdf',
          description:
            'Apprentissage des bases du HTML et de la structuration des pages web.',
          verificationUrl:
            'https://www.sololearn.com/certificates/CC-8ACQKULT',
          externalLabel: 'verify',
        },
        {
          title: 'Introduction to Cybersecurity',
          organization: 'Cisco Networking Academy',
          date: '6 janvier 2026',
          type: 'completion',
          icon: ShieldCheck,
          file: 'introduction-to-cybersecurity.pdf',
          description:
            'Découverte des principes fondamentaux de la cybersécurité, des menaces et des bonnes pratiques de protection.',
          verificationUrl:
            'https://www.credly.com/badges/78604832-b4ae-469a-bca7-bb51c2352bf1/public_url',
          externalLabel: 'verify',
        },
        {
          title: 'Data Analysis with Python',
          organization: 'Orange Digital Center Club Ben M’Sick',
          date: '26–28 octobre 2026',
          type: 'attendance',
          icon: GraduationCap,
          file: 'data-analysis-python.pdf',
          description:
            'Participation à une formation pratique consacrée à l’analyse des données avec Python.',
        },
      ],
    },

    en: {
      label: 'MY CERTIFICATIONS',
      title: 'Certifications & achievements',
      description:
        'An overview of training programs and certifications reflecting my commitment to continuous learning and skill development.',
      total: 'Certifications obtained',
      attendance: 'Certificate of attendance',
      completion: 'Certificate of completion',
      verify: 'Verify certificate',
      view: 'View certificate',
      download: 'Download PDF',
      dateUnknown: 'Date not specified',
      preview: 'Certificate preview',
      items: [
        {
          title: 'AI for Positive Futures',
          organization: 'Orange Digital Center Ben M’Sick × Capgemini',
          date: 'October 21, 2026',
          type: 'attendance',
          icon: Award,
          file: 'ai-for-positive-futures.pdf',
          description:
            'Participation in a training program exploring artificial intelligence and its applications for a positive future.',
        },
        {
          title: 'Certified Cybersecurity Educator Professional (CCEP)',
          organization: 'Red Team Leaders',
          date: 'October 16, 2026',
          type: 'completion',
          icon: ShieldCheck,
          file: 'ccep.pdf',
          description:
            'Certification in cybersecurity awareness and education.',
          verificationUrl:
            'https://courses.redteamleaders.com/exam-completion/5ea7f9f3a5bcc45e',
          externalLabel: 'verify',
        },
        {
          title: '1 Million Prompters',
          organization:
            'Dubai Future Foundation × Dubai Centre for Artificial Intelligence',
          date: null,
          type: 'completion',
          icon: Award,
          file: 'one-million-prompters.pdf',
          description:
            'Program focused on prompt engineering and generative artificial intelligence.',
          verificationUrl:
            'https://omp.dub.ai/certificate/NnWt9wy1KQUM',
          externalLabel: 'verify',
        },
        {
          title: 'Power BI for Beginners',
          organization: 'Microsoft × SkillUp Simplilearn',
          date: 'October 7, 2026',
          type: 'completion',
          icon: Award,
          file: 'power-bi-beginners.pdf',
          description:
            'Introductory training in Power BI, data visualization and data analysis.',
          verificationUrl:
            'https://simpli-web.app.link/e/gfQhpYmGk8b',
          externalLabel: 'verify',
        },
        {
          title: 'Introduction to PHP',
          organization: 'Alison',
          date: 'June 10, 2026',
          type: 'completion',
          icon: Code2,
          file: 'introduction-to-php.pdf',
          description:
            'Introduction to PHP fundamentals for server-side web development.',
          verificationUrl: 'https://alison.com/user/pdf/5582/1',
          externalLabel: 'view',
        },
        {
          title: 'Introduction to HTML',
          organization: 'Sololearn',
          date: 'February 13, 2026',
          type: 'completion',
          icon: Code2,
          file: 'introduction-to-html.pdf',
          description:
            'Learning the fundamentals of HTML and web page structure.',
          verificationUrl:
            'https://www.sololearn.com/certificates/CC-8ACQKULT',
          externalLabel: 'verify',
        },
        {
          title: 'Introduction to Cybersecurity',
          organization: 'Cisco Networking Academy',
          date: 'January 6, 2026',
          type: 'completion',
          icon: ShieldCheck,
          file: 'introduction-to-cybersecurity.pdf',
          description:
            'Introduction to cybersecurity fundamentals, threats and protection best practices.',
          verificationUrl:
            'https://www.credly.com/badges/78604832-b4ae-469a-bca7-bb51c2352bf1/public_url',
          externalLabel: 'verify',
        },
        {
          title: 'Data Analysis with Python',
          organization: 'Orange Digital Center Club Ben M’Sick',
          date: 'October 26–28, 2026',
          type: 'attendance',
          icon: GraduationCap,
          file: 'data-analysis-python.pdf',
          description:
            'Participation in practical training focused on data analysis using Python.',
        },
      ],
    },
  }

  const text = content[language] || content.fr

  return (
    <section
      id="certifications"
      className="relative px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 max-w-2xl">
          <span className="section-eyebrow">{text.label}</span>

          <h2 className="section-title mt-5">{text.title}</h2>

          <p className="section-description mt-5">{text.description}</p>
        </div>

        {/* Total count */}
        <div className="mb-9 inline-flex items-center gap-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] px-5 py-4 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent-color)]">
            <Award size={23} />
          </div>

          <div>
            <p className="text-2xl font-bold leading-none text-[var(--text-primary)]">
              {String(text.items.length).padStart(2, '0')}
            </p>

            <p className="mt-1.5 text-xs text-[var(--text-secondary)]">
              {text.total}
            </p>
          </div>
        </div>

        {/* Certificates grid */}
        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {text.items.map((item, index) => {
            const CertificateIcon = item.icon

            // Convert the PDF filename to its matching WebP preview.
            const imageFile = item.file.replace(/\.pdf$/i, '.webp')

            return (
              <article
                key={item.file}
                className="surface-card group flex h-full flex-col overflow-hidden"
              >
                {/* Certificate image preview */}
                <div className="relative mx-4 mt-4 overflow-hidden rounded-xl border border-[var(--border-color)] bg-[#F1F5F9]">
                  <div className="flex aspect-[1.45/1] items-center justify-center p-3 sm:p-4">
                    <img
                      src={`/images/certificates/${imageFile}`}
                      alt={`${text.preview} — ${item.title}`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                    />
                  </div>

                  <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg border border-white/70 bg-white/95 text-blue-600 shadow-sm">
                    <CertificateIcon size={18} />
                  </div>

                  <span className="absolute right-3 top-3 rounded-lg border border-white/70 bg-white/95 px-2.5 py-1 text-xs font-bold tracking-wider text-slate-600 shadow-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Card content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex-1">
                    <span className="inline-flex rounded-full bg-[var(--accent-soft)] px-3 py-1 text-[11px] font-semibold text-[var(--accent-color)]">
                      {item.type === 'attendance'
                        ? text.attendance
                        : text.completion}
                    </span>

                    <h3 className="mt-4 text-lg font-bold leading-snug text-[var(--text-primary)]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm font-medium leading-relaxed text-[var(--text-secondary)]">
                      {item.organization}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                      {item.description}
                    </p>
                  </div>

                  {/* Date */}
                  <div className="mt-6 flex items-center gap-2 border-t border-[var(--border-color)] pt-5 text-xs text-[var(--text-muted)]">
                    <CalendarDays size={15} className="shrink-0" />
                    <span>{item.date || text.dateUnknown}</span>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 flex flex-col gap-2.5">
                    <a
                      href={`/certificates/${item.file}`}
                      download={item.file}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent-color)] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-color)]"
                    >
                      <Download size={16} />
                      {text.download}
                    </a>

                    {item.verificationUrl && (
                      <a
                        href={item.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-3 text-sm font-semibold text-[var(--text-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-color)]"
                      >
                        {item.externalLabel === 'view' ? (
                          <FileText size={16} />
                        ) : (
                          <ShieldCheck size={16} />
                        )}

                        {item.externalLabel === 'view'
                          ? text.view
                          : text.verify}

                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Certifications