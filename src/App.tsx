import { useState } from 'react'
import './App.css'

// Product data
const products = [
  {
    name: 'Essential Guide',
    tier: 'starter',
    price: 19,
    description: 'Perfect for getting started with indoor activities',
    features: [
      '30 core activities for ages 2-8',
      'Materials checklist',
      'Time estimates',
      'Difficulty ratings',
      'Email support'
    ],
    highlight: false
  },
  {
    name: 'Complete Guide',
    tier: 'professional',
    price: 37,
    description: 'The complete package with all 100+ activities',
    features: [
      '100+ activities for ages 2-14',
      'All age groups covered',
      'Materials checklist',
      'Pro tips & variations',
      'Activity extensions',
      'Priority support',
      'Lifetime updates'
    ],
    highlight: true,
    badge: 'Most Popular'
  },
  {
    name: 'Ultimate Guide',
    tier: 'agency',
    price: 79,
    description: 'Everything plus bonus materials and commercial rights',
    features: [
      'Everything in Complete Guide',
      'Bonus activity library (50+ more)',
      'Commercial use rights',
      'Editable templates',
      'White-label rights',
      'Priority support',
      'Lifetime updates',
      'Bonus: Activity planner'
    ],
    highlight: false
  }
]

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Mom of 3',
    text: 'This guide saved our sanity during the rainy season. My kids love the activities!',
    rating: 5
  },
  {
    name: 'James P.',
    role: 'Elementary Teacher',
    text: 'I use these activities in my classroom. Great for indoor recess days.',
    rating: 5
  },
  {
    name: 'Emily R.',
    role: 'Grandparent',
    text: 'Perfect for keeping my grandkids entertained. Simple enough for me to set up!',
    rating: 5
  }
]

const features = [
  {
    icon: '🎯',
    title: 'Age-Appropriate Activities',
    description: 'Activities organized by age groups, from toddlers to tweens'
  },
  {
    icon: '⏱️',
    title: 'Time Estimates',
    description: 'Plan your day with activities that fit your schedule'
  },
  {
    icon: '📋',
    title: 'Materials Checklist',
    description: 'Everything you need, organized and ready to go'
  },
  {
    icon: '💡',
    title: 'Pro Tips Included',
    description: 'Expert advice to extend activities and keep kids engaged'
  },
  {
    icon: '🌈',
    title: '100+ Activities',
    description: 'Endless options for rainy days, snow days, and any day'
  },
  {
    icon: '📱',
    title: 'Instant Download',
    description: 'Get access immediately, print or view on any device'
  }
]

function App() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  const faqs = [
    {
      question: 'What age groups are covered?',
      answer: 'The guide includes activities for toddlers (2-3), preschoolers (4-5), early elementary (6-8), and tweens (9-14). Each activity clearly indicates the recommended age range.'
    },
    {
      question: 'Do I need special materials?',
      answer: 'Most activities use household items you already have. The materials checklist in each section tells you exactly what you need before you start.'
    },
    {
      question: 'What is the difference between tiers?',
      answer: 'Starter includes 30 activities for ages 2-8. Professional includes all 100+ activities for all ages. Agency adds bonus materials, commercial rights, and white-label options.'
    },
    {
      question: 'How do I access the guide after purchase?',
      answer: 'You will receive an instant download link via email immediately after purchase. The PDF can be viewed on any device or printed at home.'
    },
    {
      question: 'Can I share this with other parents?',
      answer: 'Personal use licenses allow you to use the guide with your own children. Agency tier includes commercial rights for use in classrooms, workshops, or client work.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌧️</span>
            <span className="font-bold text-xl text-purple-700">Rainy Day Guide</span>
          </div>
          <button
            onClick={scrollToPricing}
            className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors"
          >
            Get Instant Access
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            100+ Indoor Activities for Ages 2-14
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            End the "I'm Bored!"<br/>
            <span className="text-purple-600">Complaints for Good</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Keep kids entertained for hours with age-appropriate activities that spark creativity,
            build skills, and bring the whole family together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToPricing}
              className="bg-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200"
            >
              Get Your Guide Now
            </button>
            <button
              onClick={() => document.getElementById('whats-inside')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-colors"
            >
              See What's Inside
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-500">Instant digital download • Printable PDF • Lifetime access</p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-purple-600 py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <div className="text-3xl font-bold">100+</div>
            <div className="text-purple-200 text-sm">Activities</div>
          </div>
          <div>
            <div className="text-3xl font-bold">4</div>
            <div className="text-purple-200 text-sm">Age Groups</div>
          </div>
          <div>
            <div className="text-3xl font-bold">50+</div>
            <div className="text-purple-200 text-sm">Variations</div>
          </div>
          <div>
            <div className="text-3xl font-bold">30+</div>
            <div className="text-purple-200 text-sm">Materials Tips</div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Who This Is For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-orange-50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">👨‍👩‍👧</div>
              <h3 className="font-bold text-lg mb-2">Busy Parents</h3>
              <p className="text-gray-600 text-sm">Need quick, engaging activities that don't require hours of prep</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">👵</div>
              <h3 className="font-bold text-lg mb-2">Grandparents</h3>
              <p className="text-gray-600 text-sm">Want fun activities that are easy to set up and enjoy together</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🏫</div>
              <h3 className="font-bold text-lg mb-2">Teachers</h3>
              <p className="text-gray-600 text-sm">Need indoor recess ideas and classroom activities</p>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">👶</div>
              <h3 className="font-bold text-lg mb-2">Childcare Providers</h3>
              <p className="text-gray-600 text-sm">Looking for variety to keep kids engaged day after day</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section id="whats-inside" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What's Inside</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Everything you need to keep kids entertained, organized by age and difficulty
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="font-bold text-xl mb-6">Age-Appropriate Sections</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl">👶</div>
                <div>
                  <h4 className="font-bold">Toddlers (Ages 2-3)</h4>
                  <p className="text-gray-600 text-sm">25 sensory activities focused on fine motor skills and exploration</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">🧒</div>
                <div>
                  <h4 className="font-bold">Preschoolers (Ages 4-5)</h4>
                  <p className="text-gray-600 text-sm">25 creative activities building imagination and social skills</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">📚</div>
                <div>
                  <h4 className="font-bold">Early Elementary (Ages 6-8)</h4>
                  <p className="text-gray-600 text-sm">25 challenging projects that build problem-solving skills</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl">🎯</div>
                <div>
                  <h4 className="font-bold">Tweens (Ages 9-14)</h4>
                  <p className="text-gray-600 text-sm">25 advanced activities for independence and skill-building</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Parents Love This Guide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">No More "I'm Bored!"</h3>
                <p className="text-gray-600">100+ activities mean you'll never run out of ideas</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Screen Time Alternative</h3>
                <p className="text-gray-600">Engaging activities that don't involve staring at screens</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Quick & Easy Setup</h3>
                <p className="text-gray-600">Most activities use items you already have at home</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Builds Skills</h3>
                <p className="text-gray-600">Activities designed to develop creativity, coordination, and confidence</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Age-Appropriate</h3>
                <p className="text-gray-600">Activities matched to your child's developmental stage</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Family Bonding</h3>
                <p className="text-gray-600">Activities the whole family can enjoy together</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
          <p className="text-center text-gray-600 mb-12">Choose the package that's right for you</p>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {products.map((product, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg transition-transform ${
                  product.highlight ? 'border-2 border-purple-500 scale-105 relative' : 'border border-gray-200'
                }`}
              >
                {product.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    {product.badge}
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="text-4xl font-extrabold text-gray-900">
                    ${product.price}
                    <span className="text-lg font-normal text-gray-500"> one-time</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-4 rounded-full font-bold text-lg transition-colors ${
                    product.highlight
                      ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-200'
                      : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  Get {product.name}
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            All purchases include instant digital delivery • 30-day money-back guarantee
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Parents Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left font-bold flex items-center justify-between"
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-purple-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to End the Boredom?</h2>
          <p className="text-purple-100 mb-8 text-lg">
            Get instant access to 100+ activities that will keep your kids entertained for hours.
          </p>
          <button
            onClick={scrollToPricing}
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-colors shadow-lg"
          >
            Get Your Guide Now
          </button>
          <p className="mt-6 text-purple-200 text-sm">30-day money-back guarantee • Instant download</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200">
        <div className="max-w-5xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2024 Rainy Day Activity Guide. All rights reserved.</p>
          <p className="mt-2">Questions? Contact support@example.com</p>
        </div>
      </footer>
    </div>
  )
}

export default App