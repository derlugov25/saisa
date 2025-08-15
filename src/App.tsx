import React from 'react'

const sprints = [
  {
    title: 'Sprint 1 — Team & Thesis',
    desc: 'Co-founder matching, idea validation, and team formation. Based on EF approach: "you can do it without a co-founder."'
  },
  {
    title: 'Sprint 2 — Build & Ship',
    desc: 'Design sprints, tech stack selection, and infrastructure setup for rapid development.'
  },
  {
    title: 'Sprint 3 — Traction & Fundraising',
    desc: 'Investor introductions, demo day preparation, and fundraising strategy.'
  }
]

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeCWYiYOMafUpvVvxuHUb3dzh9YRV8btd2KcVDFHJ_AfHEYvg/viewform'

export default function App(){
  return (
    <div className="min-h-screen bg-soft text-primary">
      <header className="w-full border-b border-transparent header-shadow bg-white/60 backdrop-blur sticky top-0 z-30">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-gradient-to-r from-accent to-[#7dd3fc] p-2">
              <span className="font-extrabold text-xl text-white">SAISA</span>
            </div>
            <div>
              <div className="text-sm font-semibold">AI Startup Accelerator</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:underline">About</a>
            <a href="#approach" className="hover:underline">Approach</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="#contact" className="px-4 py-2 rounded-lg bg-accent text-white font-semibold cta-glow">Apply</a>
          </nav>

          <div className="md:hidden">
            <a href="#contact" className="px-3 py-2 rounded bg-accent text-white font-semibold">Apply</a>
          </div>
        </div>
      </header>

      <main className="py-14">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <section>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2">Launch Global. Build in AI.</h1>
            
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#contact" className="w-full sm:w-auto text-center px-6 py-3 rounded-lg bg-accent text-white font-semibold cta-glow">Apply now</a>
            </div>

            <div className="mt-8 flex gap-6">
              <div className="card">
                <div className="text-sm text-muted">Avg Time to Market</div>
                <div className="text-xl font-bold">90 days</div>
              </div>
              <div className="card">
                <div className="text-sm text-muted">Next Cohort</div>
                <div className="text-xl font-bold">Nov 1, 2025</div>
              </div>
            </div>
          </section>

          <aside className="">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="https://www.deeptechnology.ai/wp-content/uploads/2022/03/ai.png" alt="AI" className="w-full h-56 sm:h-72 md:h-80 object-cover"/>
            </div>
          </aside>
        </div>

        <section id="approach" className="container mt-20 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-6">What founders get in 90 days</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sprints.map((s) => (
              <div key={s.title} className="card">
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="container mt-16 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-4">About SAISA</h2>
          <p className="text-muted max-w-3xl">
            SAISA — Students AI Startup Accelerator. Your bridge from Eastern Europe and Central Asia to global AI markets: compliant setup, product and GTM sprints, user interviews, warm investor intros—six months of progress in six weeks. We accelerate AI founders through three intensive sprints: validate your thesis with global customers, ship your MVP with proven tech stack, and secure investor meetings through our network.
          </p>
        </section>

        <section id="faq" className="container mt-16 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-6">FAQ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="font-semibold text-lg mb-2">When does the program start?</h3>
              <p className="text-sm text-muted">Spring 2025 Batch. Rolling admissions every 6 weeks.</p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-lg mb-2">Format & Location</h3>
              <p className="text-sm text-muted">Online program. Weekly demos, investor intros, global network access.</p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-lg mb-2">Cost & Terms</h3>
              <p className="text-sm text-muted">1% equity + 5% of raised capital. No upfront fees, no grants.</p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-lg mb-2">Selection Criteria</h3>
              <p className="text-sm text-muted">AI/ML founders with global ambition. Technical skills required.</p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-lg mb-2">Founder Commitment</h3>
              <p className="text-sm text-muted">10-15 hrs/week: customer dev, weekly demos, investor prep.</p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-lg mb-2">Deadlines</h3>
              <p className="text-sm text-muted">Apply anytime. 48hr review. Demo day every 6 weeks.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="container mt-16 mb-24 scroll-mt-24">
          <div className="flex flex-col items-center">

            <div className="space-y-4 max-w-md">
              <div className="bg-gradient-to-r from-accent to-[#7dd3fc] p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-white font-bold text-lg mb-3">I have a project</h3>
                <p className="text-white/90 text-sm mb-4">Ready to scale? Fill out our detailed application form.</p>
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-accent font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-sm"
                >
                  Apply Now →
                </a>
              </div>

              <div className="bg-white border-2 border-accent/20 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 text-center">
                <h3 className="text-gray-800 font-bold text-lg mb-3">I have an idea / concept</h3>
                <p className="text-gray-600 text-sm mb-4">Early stage? Start with our quick concept form.</p>
                <a
                  href="https://forms.gle/CONCEPT_FORM_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent text-white font-semibold px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors duration-200 shadow-sm"
                >
                  Submit Concept →
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">© {new Date().getFullYear()} SAISA — Students AI Startup Accelerator</div>
          <div className="text-center">
            <p className="text-sm text-muted mb-2">Email: <a href="mailto:hello@saisa.ai" className="text-accent">hello@saisa.ai</a></p>
          </div>
          <div className="text-sm text-muted">
            Your bridge from Eastern Europe and Central Asia to global AI markets: compliant setup, product and GTM sprints, user interviews, warm investor intros—six months of progress in six weeks.
          </div>
        </div>
      </footer>
    </div>
  )
}
  