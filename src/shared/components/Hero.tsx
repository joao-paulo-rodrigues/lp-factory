import { ArrowRight } from 'lucide-react'
import { ReactNode } from 'react'

interface HeroProps {
  badge?: string
  badgeIcon?: ReactNode
  title: ReactNode
  subtitle: ReactNode
  ctaText: string
  ctaHref: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  trustBadges?: { icon: ReactNode; text: string }[]
  rightContent?: ReactNode
  bgColor?: string
}

export function Hero({
  badge,
  badgeIcon,
  title,
  subtitle,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  trustBadges,
  rightContent,
  bgColor = 'bg-gradient-to-b from-green-50 to-white',
}: HeroProps) {
  return (
    <section className={`pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 ${bgColor} overflow-hidden`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            {badge && (
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                {badgeIcon}
                <span>{badge}</span>
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              {title}
            </h1>

            <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a
                href={ctaHref}
                className="bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-green-700 transition flex items-center justify-center gap-2 shadow-lg shadow-green-600/30"
              >
                {ctaText}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              {secondaryCtaText && secondaryCtaHref && (
                <a
                  href={secondaryCtaHref}
                  className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:border-gray-400 transition flex items-center justify-center"
                >
                  {secondaryCtaText}
                </a>
              )}
            </div>

            {trustBadges && (
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500">
                {trustBadges.map((badge, index) => (
                  <div key={index} className="flex items-center gap-1 sm:gap-2">
                    {badge.icon}
                    {badge.text}
                  </div>
                ))}
              </div>
            )}
          </div>

          {rightContent && (
            <div className="relative mt-8 lg:mt-0">
              {rightContent}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
