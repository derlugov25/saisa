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
            <div className="rounded-md bg-accent p-2">
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

      <main className="py-8">
        <div className="bg-gradient-to-br from-gray-300 via-gray-200 to-white text-gray-800 py-12 -mx-4 px-4">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
                <span className="block">Launch Global.</span>
                <span className="block">Build in AI.</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                SAISA is your bridge from Eastern Europe and Central Asia to global AI markets: compliant setup, product and GTM sprints, user interviews, warm investor intros—six months of progress in six weeks.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <a href="#contact" className="w-full sm:w-auto text-center px-10 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-lg text-lg">Apply now</a>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-gray-200 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">90</div>
                    <div className="text-gray-600">Days to Market</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">Nov 1, 2025</div>
                    <div className="text-gray-600">Next cohort</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">Global</div>
                    <div className="text-gray-600">Market Access</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Секция со спринтами на белом фоне */}
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-8 text-gray-900 text-center">What founders get in 90 days</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sprints.map((s) => (
                <div key={s.title} className="text-center">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section id="about" className="container mt-16 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-4 text-center">About SAISA</h2>
          <p className="text-muted max-w-4xl mx-auto text-center leading-relaxed">
            We turn research into revenue with you: relocate, incorporate, build and ship, talk to customers, and fundraise—co-building AI companies from Eastern Europe and Central Asia for global markets. We partner with founders from the region to co-build global-first AI startups with clean relocation and incorporation, focused product and GTM sprints, customer pipelines, and fundraising support that compound into traction quickly.
          </p>
        </section>

        <section id="faq" className="container mt-16 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-6 text-center">FAQ</h2>
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
              <div className="bg-accent p-6 rounded-xl shadow-lg text-center">
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
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfP2WGj-JnVhgKYG6vPBdDH0BaXrq5dIzJoiVckDbPcftHujQ/viewform" 
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
  