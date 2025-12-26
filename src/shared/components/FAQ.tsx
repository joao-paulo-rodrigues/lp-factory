import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  title?: string
  items: FAQItem[]
}

export function FAQ({ title = 'Perguntas Frequentes', items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-12 sm:py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            {title}
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {items.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-gray-50 gap-3"
              >
                <span className="font-medium text-gray-900 text-sm sm:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transition flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-gray-600 text-sm sm:text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
