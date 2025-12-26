import { Star } from 'lucide-react'
import { ReactNode } from 'react'

interface Testimonial {
  name: string
  company: string
  image: string
  text: string
  stars?: number
}

interface TestimonialsProps {
  title?: ReactNode
  badge?: string
  testimonials: Testimonial[]
}

export function Testimonials({
  title = 'O Que Nossos Clientes Dizem',
  badge = '4.9/5 de avaliação',
  testimonials,
}: TestimonialsProps) {
  return (
    <section className="py-12 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          {badge && (
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
              {badge}
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            {title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200"
            >
              {testimonial.stars && (
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              )}
              <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-2 sm:gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-900 text-sm sm:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
