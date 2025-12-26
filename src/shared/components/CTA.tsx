import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { ReactNode } from 'react'

interface CTAProps {
  title: string
  subtitle: string
  inputPlaceholder?: string
  buttonText: string
  successTitle?: string
  successMessage?: string
  badges?: { icon: ReactNode; text: string }[]
  bgColor?: string
  onSubmit?: (email: string) => Promise<void> | void
}

export function CTA({
  title,
  subtitle,
  inputPlaceholder = 'Seu melhor email',
  buttonText,
  successTitle = 'Obrigado!',
  successMessage = 'Você está na lista de espera! Entraremos em contato em breve.',
  badges,
  bgColor = 'bg-gradient-to-r from-green-600 to-green-700',
  onSubmit,
}: CTAProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    if (onSubmit) {
      await onSubmit(email)
    } else {
      // Default: just log
      console.log('Lead captured:', email)
    }

    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="cadastro" className={`py-12 sm:py-20 px-4 ${bgColor}`}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
          {title}
        </h2>
        <p className="text-base sm:text-xl text-green-100 mb-6 sm:mb-8">
          {subtitle}
        </p>

        {submitted ? (
          <div className="bg-white/10 backdrop-blur rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {successTitle}
            </h3>
            <p className="text-green-100 text-sm sm:text-base">
              {successMessage}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={inputPlaceholder}
              required
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-green-300 text-sm sm:text-base"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2 text-sm sm:text-base disabled:opacity-50"
            >
              {loading ? 'Enviando...' : buttonText}
              {!loading && <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </form>
        )}

        {badges && (
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 text-green-100 text-xs sm:text-sm">
            {badges.map((badge, index) => (
              <div key={index} className="flex items-center gap-1 sm:gap-2">
                {badge.icon}
                {badge.text}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
