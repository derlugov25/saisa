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
    <div className="overflow-hidden border-b border-gray-100 last:border-b-0">
      <button
        className="w-full px-6 py-5 text-left bg-white hover:bg-gray-50 transition-all duration-300 flex items-center justify-between group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-900 text-base group-hover:text-accent transition-colors duration-300">{question}</span>
        <div className={`w-6 h-6 rounded-full bg-accent flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-3 h-3 text-white transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50/50">
          <p className="text-gray-600 text-base leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeCWYiYOMafUpvVvxuHUb3dzh9YRV8btd2KcVDFHJ_AfHEYvg/viewform'

const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const [hasBeenVisible, setHasBeenVisible] = React.useState(false)
  const elementRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasBeenVisible) {
        setIsVisible(true)
        setHasBeenVisible(true)
      }
    }, { threshold: 0.1, ...options })

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [options, hasBeenVisible])

  return [elementRef, isVisible] as const
}

const useIntersectionObserverForTypewriter = (options = {}) => {
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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

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
      <header className="w-full bg-white/70 backdrop-blur-md sticky top-0 z-30 border-b border-white/20 shadow-lg shadow-black/5">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3 group">
            <div className="bg-accent p-2.5 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <span className="font-extrabold text-xl text-white">SAISA</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-700">AI Startup Accelerator</div>
            </div>
          </div>

          <nav className="hidden md:block">
            <div className="flex items-center gap-8">
              <a href="#about" className="text-gray-700 hover:text-accent font-medium transition-colors duration-300">
                About
              </a>
              
              <a href="#faq" className="text-gray-700 hover:text-accent font-medium transition-colors duration-300">
                Approach
              </a>
              
              <a href="#contact" className="text-gray-700 hover:text-accent font-medium transition-colors duration-300">
                Contact
              </a>
            </div>
          </nav>

          <div className="md:hidden">
            <div className="relative">
              <button 
                onClick={toggleMenu}
                className="group relative flex items-center gap-2 px-3 py-2 bg-accent/10 hover:bg-accent/20 rounded-lg transition-all duration-300 hover:scale-105 border border-accent/20 hover:border-accent/30"
              >
                <div className="flex flex-col gap-0.5">
                  <div className={`w-4 h-0.5 bg-accent transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
                  <div className={`w-4 h-0.5 bg-accent transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                  <div className={`w-4 h-0.5 bg-accent transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
                </div>
                <span className="text-accent font-medium text-xs">Menu</span>
              </button>
              
              {/* Mobile Dropdown */}
              <div className={`absolute top-full right-0 mt-2 w-72 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-white/20 transition-all duration-300 transform z-50 ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">SAISA</h3>
                        <p className="text-xs text-gray-600">AI Accelerator</p>
                      </div>
                    </div>
                    <button 
                      onClick={closeMenu}
                      className="w-7 h-7 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200 group"
                    >
                      <svg className="w-3.5 h-3.5 text-gray-600 group-hover:text-gray-800 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="space-y-2">
                    <a href="#about" onClick={closeMenu} className="group flex items-center gap-3 p-3 rounded-lg hover:bg-accent/5 transition-all duration-300">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                        <svg className="w-4 h-4 text-accent group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm group-hover:text-accent transition-colors duration-300">About</h4>
                        <p className="text-xs text-gray-600">Learn about SAISA</p>
                      </div>
                    </a>
                    
                    <a href="#faq" onClick={closeMenu} className="group flex items-center gap-3 p-3 rounded-lg hover:bg-accent/5 transition-all duration-300">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                        <svg className="w-4 h-4 text-accent group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm group-hover:text-accent transition-colors duration-300">Approach</h4>
                        <p className="text-xs text-gray-600">Our 90-day program</p>
                      </div>
                    </a>
                    
                    <a href="#contact" onClick={closeMenu} className="group flex items-center gap-3 p-3 rounded-lg hover:bg-accent/5 transition-all duration-300">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                        <svg className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm group-hover:text-accent transition-colors duration-300">Contact</h4>
                        <p className="text-xs text-gray-600">Get in touch</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="relative bg-gradient-to-br from-gray-300 via-gray-200 to-white text-gray-800 py-16 sm:py-20 px-4 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-accent/60 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-accent/40 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-gray-900">
                <div className="block mb-2">
                  Launch Global.
                </div>
                <div className="block">
                  {(() => {
                    const [ref, isVisible] = useIntersectionObserverForTypewriter()
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
                <a href="#contact" className="group relative w-full sm:w-auto text-center px-8 sm:px-10 md:px-12 py-4 sm:py-5 bg-accent text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-accent/25 transition-all duration-300 text-base sm:text-lg transform hover:scale-105">
                  <span className="relative z-10">Apply now</span>
                  <div className="absolute inset-0 bg-accent/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-8 mb-12 rounded-2xl shadow-xl border border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center group">
                    <div className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">90</div>
                    <div className="text-gray-600 font-medium">Days to Market</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">Nov 1, 2025</div>
                    <div className="text-gray-600 font-medium">Next Cohort</div>
                  </div>
                  <div className="text-center group">
                    <a 
                      href="https://www.nextspark.vc/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300 hover:text-accent/80 cursor-pointer inline-block"
                    >
                      NextSpark VC
                    </a>
                    <div className="text-gray-600 font-medium">Backed by</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Секция со спринтами */}
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center text-accent">What founders get in 90 days</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {sprints.map((s, index) => {
                const [ref, isVisible] = useIntersectionObserver()
                return (
                  <div 
                    key={s.title} 
                    ref={ref}
                    className={`group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl border border-white/20 hover:border-accent/20 transition-all duration-300 transform hover:-translate-y-2 fade-in-scale ${isVisible ? 'visible' : ''}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        {index === 0 && (
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        )}
                        {index === 1 && (
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        )}
                        {index === 2 && (
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                        )}
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-accent transition-colors duration-300">{s.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{s.desc}</p>
                    </div>
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
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-accent">About SAISA</h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
                    <p className="text-gray-700 text-center leading-relaxed text-lg">
                      We turn research into revenue with you: relocate, incorporate, build and ship, talk to customers, and fundraise—co-building AI companies from Eastern Europe and Central Asia for global markets. We partner with founders from the region to co-build global-first AI startups with clean relocation and incorporation, focused product and GTM sprints, customer pipelines, and fundraising support that compound into traction quickly.
                    </p>
                  </div>
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
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-accent">Frequently Asked Questions</h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
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
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-accent">
                      Seize the opportunity to lead the AI revolution
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">I have a project</h3>
                      <p className="text-gray-600 mb-6">Ready to scale? Fill out our detailed application form.</p>
                      <a
                        href={GOOGLE_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-accent text-white font-semibold px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
                      >
                        Apply Now →
                      </a>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">I have an idea / concept</h3>
                      <p className="text-gray-600 mb-6">Early stage? Start with our quick concept form.</p>
                      <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfP2WGj-JnVhgKYG6vPBdDH0BaXrq5dIzJoiVckDbPcftHujQ/viewform" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block bg-accent text-white font-semibold px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
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

      <footer className="py-12 bg-gradient-to-r from-gray-100 to-gray-200 border-t border-white/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center md:text-left">
              <p className="text-gray-600 text-sm leading-relaxed">
                Your bridge from Eastern Europe and Central Asia to global AI markets: compliant setup, product and GTM sprints, user interviews, warm investor intros—six months of progress in six weeks.
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="font-semibold text-gray-800 mb-4">Contact</h4>
              <p className="text-sm text-gray-600 mb-2">
                <a href="mailto:hello@saisa.ai" className="text-accent hover:text-accent/80 transition-colors duration-300">hello@saisa.ai</a>
              </p>
              <p className="text-sm text-gray-600">Ready to launch global?</p>
            </div>
            
            <div className="text-center md:text-right">
              <h4 className="font-semibold text-gray-800 mb-4">Program</h4>
              <p className="text-sm text-gray-600 mb-2">90 Days to Market</p>
              <p className="text-sm text-gray-600 mb-2">Next cohort: Nov 1, 2025</p>
              <p className="text-sm text-gray-600">Global Market Access</p>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-gray-300/50">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} SAISA — Students AI Startup Accelerator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
  