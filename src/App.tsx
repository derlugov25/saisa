import React from 'react'

const features = [
  {
    title: 'End-to-end Product Development',
    desc: 'From idea validation, MLP, to production-ready platform — we build, test, and ship.'
  },
  {
    title: 'UAE Market Entry & Business Setup',
    desc: 'Local partners, legal setup, and go-to-market strategy tailored to the UAE.'
  },
  {
    title: 'Fundraising & Corporate Partnerships',
    desc: 'Intro to institutional partners, VC network, and enterprise pilots.'
  },
  {
    title: 'Growth & Regulatory Compliance',
    desc: 'Growth experiments, analytics and compliance support for UAE jurisdictions.'
  }
]

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfrqMUGd_aAyBSxVOVd4csHszCmWd61Qyhh0SQaBmVBM4LFpg/viewform'

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
              <div className="text-sm font-semibold">SAISA — Students AI Startup Accelerator</div>
              <div className="text-xs text-muted">AI Startup Accelerator</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:underline">About</a>
            <a href="#services" className="hover:underline">Services</a>
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
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">From CIS to the World – let’s make it happen</h1>
            <p className="text-lg text-muted max-w-xl mb-6">
              We provide full support — product development, market entry, compliance and partnerships.
              We do it all for <strong>1% company equity</strong> and <strong>5% of raised investments</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#contact" className="w-full sm:w-auto text-center px-6 py-3 rounded-lg bg-accent text-white font-semibold cta-glow">Apply now</a>
              <a href="#contact" className="w-full sm:w-auto text-center px-6 py-3 rounded-lg border border-gray-200">Request a call</a>
            </div>

            <div className="mt-8 flex gap-6">
              <div className="card">
                <div className="text-sm text-muted">Avg Time to Market</div>
                <div className="text-xl font-bold">90 days</div>
              </div>
              <div className="card">
                <div className="text-sm text-muted">Typical Equity</div>
                <div className="text-xl font-bold">1%</div>
              </div>
            </div>
          </section>

          <aside className="">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="https://www.deeptechnology.ai/wp-content/uploads/2022/03/ai.png" alt="AI" className="w-full h-56 sm:h-72 md:h-80 object-cover"/>
            </div>
          </aside>
        </div>

        <section id="services" className="container mt-20 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-6">What we do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card">
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="container mt-16 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-4">About SAISA</h2>
          <p className="text-muted max-w-3xl">
            SAISA (Students AI Startup Accelerator) is an accelerator dedicated to empowering AI startups from CIS countries,
            helping them successfully enter and thrive in international markets.
            We provide full-cycle support – from refining your product and building your brand to securing funding and expanding globally.
            Our terms: <strong>1% company equity</strong> and <strong>5% of raised investments</strong>.
          </p>
        </section>

        {/* Team section removed */}

        <section id="contact" className="container mt-16 mb-24 scroll-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="order-2 md:order-1">
              <ul className="text-sm text-muted">
                <li>Email: <a href="mailto:hello@saisa.ai" className="text-accent">hello@saisa.ai</a></li>
                <li>Location: Dubai, UAE</li>
              </ul>
            </div>

            <div className="bg-white card order-1 md:order-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <p className="text-muted m-0">Fill the Google form and we’ll contact you</p>
                <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded bg-accent text-white font-semibold whitespace-nowrap">Fill Google Form</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">© {new Date().getFullYear()} SAISA — Students AI Startup Accelerator</div>
          <div className="text-sm text-muted">
            We do it all for <strong>1% company equity</strong> and <strong>5% of raised investments</strong> — product, market entry and growth in the UAE.
          </div>
        </div>
      </footer>
    </div>
  )
}
  