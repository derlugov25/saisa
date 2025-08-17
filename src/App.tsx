import React from 'react'

// CSS для скрытия scrollbar и анимации печатной машинки
const scrollbarHideStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  .typewriter {
    overflow: hidden;
    border-right: 2px solid #1f2937;
    white-space: nowrap;
    animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
  }
  
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #1f2937 }
  }
  
  .fade-in-up {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out;
  }
  
  .fade-in-up.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .fade-in-scale {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
    transition: all 0.6s ease-out;
  }
  
  .fade-in-scale.visible {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  
  .slide-in-left {
    opacity: 0;
    transform: translateX(-30px);
    transition: all 0.7s ease-out;
  }
  
  .slide-in-left.visible {
    opacity: 1;
    transform: translateX(0);
  }
  
  .slide-in-right {
    opacity: 0;
    transform: translateX(30px);
    transition: all 0.7s ease-out;
  }
  
  .slide-in-right.visible {
    opacity: 1;
    transform: translateX(0);
  }
`

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

const faqData = [
  {
    question: 'When does the program start?',
    answer: 'Spring 2025 Batch. Rolling admissions every 6 weeks.'
  },
  {
    question: 'Format & Location',
    answer: 'Online program. Weekly demos, investor intros, global network access.'
  },
  {
    question: 'Cost & Terms',
    answer: '1% equity + 5% of raised capital. No upfront fees, no grants.'
  },
  {
    question: 'Selection Criteria',
    answer: 'AI/ML founders with global ambition. Technical skills required.'
  },
  {
    question: 'Founder Commitment',
    answer: '10-15 hrs/week: customer dev, weekly demos, investor prep.'
  },
  {
    question: 'Deadlines',
    answer: 'Apply anytime. 48hr review. Demo day every 6 weeks.'
  }
]

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  
  return (
    <div className="overflow-hidden">
      <button
        className="w-full px-4 sm:px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-900 text-sm sm:text-base">{question}</span>
        <span className={`text-accent transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="px-4 sm:px-6 py-4 bg-gray-50">
          <p className="text-gray-600 text-sm sm:text-base">{answer}</p>
        </div>
      )}
    </div>
  )
}

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeCWYiYOMafUpvVvxuHUb3dzh9YRV8btd2KcVDFHJ_AfHEYvg/viewform'

const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const elementRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, { threshold: 0.1, ...options })

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [options])

  return [elementRef, isVisible] as const
}

const TypewriterText = ({ text, delay = 0, isVisible = false }: { text: string; delay?: number; isVisible?: boolean }) => {
  const [displayText, setDisplayText] = React.useState('')
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isAnimating, setIsAnimating] = React.useState(false)
  const [hasInitialized, setHasInitialized] = React.useState(false)
  const [wasVisible, setWasVisible] = React.useState(false)

  const startAnimation = () => {
    setIsAnimating(true)
    setDisplayText('')
    setCurrentIndex(0)
  }

  // Запуск анимации только при переходе из невидимого в видимое
  React.useEffect(() => {
    if (isVisible && !wasVisible && !isAnimating) {
      if (!hasInitialized) {
        // Первый запуск с задержкой
        const timer = setTimeout(() => {
          startAnimation()
          setHasInitialized(true)
        }, 1000)
        return () => clearTimeout(timer)
      } else {
        // Последующие запуски без задержки
        startAnimation()
      }
    }
    setWasVisible(isVisible)
  }, [isVisible, wasVisible, isAnimating, hasInitialized])

  React.useEffect(() => {
    if (currentIndex < text.length && isAnimating) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100 + delay)
      
      return () => clearTimeout(timeout)
    } else if (currentIndex >= text.length && isAnimating) {
      setIsAnimating(false)
    }
  }, [currentIndex, text, delay, isAnimating])

  return (
    <span className="inline-block text-accent">
      {displayText}
      <span className="text-accent">|</span>
    </span>
  )
}

export default function App(){
  React.useEffect(() => {
    // Внедряем стили для скрытия scrollbar
    const style = document.createElement('style')
    style.textContent = scrollbarHideStyles
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="min-h-screen bg-soft text-primary overflow-x-hidden scrollbar-hide">
      <header className="w-full bg-white/60 backdrop-blur sticky top-0 z-30">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="bg-accent p-2">
              <span className="font-extrabold text-xl text-white">SAISA</span>
            </div>
            <div>
              <div className="text-sm font-semibold">AI Startup Accelerator</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:underline">About</a>
            <a href="#faq" className="hover:underline">Approach</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <a href="#about" className="text-xs font-medium hover:underline">About</a>
            <a href="#faq" className="text-xs font-medium hover:underline">Approach</a>
            <a href="#contact" className="text-xs font-medium hover:underline">Contact</a>
          </div>
        </div>
      </header>

      <main>
        <div className="bg-gradient-to-br from-gray-300 via-gray-200 to-white text-gray-800 py-16 sm:py-20 px-4">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-gray-900">
                <div className="block mb-2">
                  Launch Global.
                </div>
                <div className="block">
                  {(() => {
                    const [ref, isVisible] = useIntersectionObserver()
                    return (
                      <div ref={ref}>
                        <TypewriterText text="Build in AI." isVisible={isVisible} />
                      </div>
                    )
                  })()}
                </div>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
                SAISA is your bridge from Eastern Europe and Central Asia to global AI markets: compliant setup, product and GTM sprints, user interviews, warm investor intros—six months of progress in six weeks.
              </p>
              
                              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <a href="#contact" className="w-full sm:w-auto text-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-accent text-white font-semibold hover:bg-accent/90 transition-all duration-300 text-base sm:text-lg">Apply now</a>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 mb-12">
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

        {/* Секция со спринтами */}
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 text-center">What founders get in 90 days</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {sprints.map((s, index) => {
                const [ref, isVisible] = useIntersectionObserver()
                return (
                  <div 
                    key={s.title} 
                    ref={ref}
                    className={`text-center px-4 fade-in-scale ${isVisible ? 'visible' : ''}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">{s.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{s.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <section id="about" className="container mx-auto px-4 mt-12 sm:mt-16 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            {(() => {
              const [ref, isVisible] = useIntersectionObserver()
              return (
                <div ref={ref} className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
                  <h2 className="text-2xl font-bold mb-8 text-center">About SAISA</h2>
                  <p className="text-muted text-center leading-relaxed">
                    We turn research into revenue with you: relocate, incorporate, build and ship, talk to customers, and fundraise—co-building AI companies from Eastern Europe and Central Asia for global markets. We partner with founders from the region to co-build global-first AI startups with clean relocation and incorporation, focused product and GTM sprints, customer pipelines, and fundraising support that compound into traction quickly.
                  </p>
                </div>
              )
            })()}
          </div>
        </section>

        <section id="faq" className="container mx-auto px-4 mt-12 sm:mt-16 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            {(() => {
              const [ref, isVisible] = useIntersectionObserver()
              return (
                <div ref={ref} className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
                  <h2 className="text-2xl font-bold mb-8 text-center">FAQ</h2>
                  <div className="space-y-4 px-4">
                    {faqData.map((item, index) => (
                      <FAQItem key={index} question={item.question} answer={item.answer} />
                    ))}
                  </div>
                </div>
              )
            })()}
          </div>
        </section>

        <section id="contact" className="container mx-auto px-4 mt-12 sm:mt-16 mb-16 sm:mb-24 scroll-mt-24">
          <div className="text-center max-w-4xl mx-auto">
            {(() => {
              const [ref, isVisible] = useIntersectionObserver()
              return (
                <div ref={ref} className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
                  <h2 className="text-2xl font-bold mb-8 text-gray-900">
                    Seize the opportunity to lead the AI revolution
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">I have a project</h3>
                      <p className="text-gray-600 mb-4">Ready to scale? Fill out our detailed application form.</p>
                      <a
                        href={GOOGLE_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-accent text-white font-semibold px-8 py-3 hover:bg-accent/90 transition-colors duration-200"
                      >
                        Apply Now →
                      </a>
                    </div>

                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">I have an idea / concept</h3>
                      <p className="text-gray-600 mb-4">Early stage? Start with our quick concept form.</p>
                      <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfP2WGj-JnVhgKYG6vPBdDH0BaXrq5dIzJoiVckDbPcftHujQ/viewform" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block bg-accent text-white font-semibold px-8 py-3 hover:bg-accent/90 transition-colors duration-200"
                      >
                        Submit Concept →
                      </a>
                    </div>
                  </div>
                </div>
              )
            })()}
          </div>
        </section>
      </main>

      <footer className="py-6 bg-gray-200">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
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
  