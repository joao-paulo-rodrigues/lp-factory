import { useState } from 'react'
import {
  Scale,
  FileText,
  Search,
  CheckCircle,
  ArrowRight,
  Zap,
  Clock,
  Shield,
  Star,
  ChevronDown,
  Users,
  Brain,
  BookOpen,
  Gavel,
  FileCheck,
  MessageSquare,
} from 'lucide-react'

export default function IAAdvogados() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Lead captured:', email)
    setSubmitted(true)
  }

  const benefits = [
    {
      icon: Search,
      title: 'Pesquisa Jurisprudencial',
      description: 'Encontre jurisprudencia relevante em segundos, nao horas.',
    },
    {
      icon: FileText,
      title: 'Geracao de Peticoes',
      description: 'Gere minutas de peticoes com base em modelos e casos anteriores.',
    },
    {
      icon: Brain,
      title: 'Analise de Contratos',
      description: 'Identifique riscos e clausulas problematicas automaticamente.',
    },
    {
      icon: BookOpen,
      title: 'Resumo de Processos',
      description: 'Receba resumos executivos de processos longos em minutos.',
    },
    {
      icon: Clock,
      title: 'Economia de Tempo',
      description: 'Reduza em 70% o tempo gasto em tarefas repetitivas.',
    },
    {
      icon: Shield,
      title: 'Sigilo Garantido',
      description: 'Seus dados nunca sao usados para treinar a IA.',
    },
  ]

  const useCases = [
    { icon: Gavel, name: 'Peticoes Iniciais', description: 'Gere minutas em minutos' },
    { icon: FileCheck, name: 'Analise de Contratos', description: 'Identifique riscos' },
    { icon: Search, name: 'Pesquisa de Jurisprudencia', description: 'STF, STJ, TJs' },
    { icon: MessageSquare, name: 'Resumo de Processos', description: 'Sintetize autos' },
  ]

  const testimonials = [
    {
      name: 'Dr. Fernando Almeida',
      company: 'Almeida & Associados',
      image: 'https://randomuser.me/api/portraits/men/52.jpg',
      text: 'Reduzi pela metade o tempo de pesquisa jurisprudencial. A IA encontra casos relevantes que eu levaria horas para achar.',
      stars: 5,
    },
    {
      name: 'Dra. Camila Rodrigues',
      company: 'Escritorio CR Advocacia',
      image: 'https://randomuser.me/api/portraits/women/52.jpg',
      text: 'A geracao de minutas me ajuda demais. Claro que reviso tudo, mas o ponto de partida economiza muito tempo.',
      stars: 5,
    },
    {
      name: 'Dr. Paulo Henrique',
      company: 'PH Advogados',
      image: 'https://randomuser.me/api/portraits/men/53.jpg',
      text: 'A analise de contratos identificou clausulas de risco que eu tinha deixado passar. Excelente ferramenta.',
      stars: 5,
    },
  ]

  const faqs = [
    {
      question: 'A IA substitui o trabalho do advogado?',
      answer: 'Nao. A IA e uma ferramenta de produtividade. Ela auxilia em pesquisas, gera minutas e analisa documentos, mas a decisao final e revisao sao sempre do advogado.',
    },
    {
      question: 'Meus dados estao seguros?',
      answer: 'Sim. Usamos criptografia de ponta a ponta e seus dados nunca sao usados para treinar a IA. Cumprimos todas as normas da LGPD e do Codigo de Etica da OAB.',
    },
    {
      question: 'Funciona para qual area do direito?',
      answer: 'Todas! Civil, trabalhista, tributario, penal, empresarial, familia, consumidor. A IA foi treinada com milhoes de documentos juridicos brasileiros.',
    },
    {
      question: 'Preciso de conhecimento tecnico?',
      answer: 'Nao. A interface e simples como um chat. Voce escreve o que precisa em linguagem natural e a IA entende.',
    },
    {
      question: 'Quanto custa?',
      answer: 'Temos planos a partir de R$197/mes para advogados autonomos e planos para escritorios. Oferecemos 7 dias gratis para testar.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">
              Juris<span className="text-purple-600">IA</span>
            </span>
          </div>
          <a
            href="#cadastro"
            className="bg-purple-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-purple-700 transition hidden sm:block"
          >
            Testar Gratis
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4" />
              Inteligencia Artificial para Advogados
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Pesquise Jurisprudencia e Gere Peticoes em{' '}
              <span className="text-purple-600">Minutos, Nao Horas</span>
            </h1>

            <p className="text-base sm:text-xl text-gray-600 mb-8">
              IA treinada especificamente para o direito brasileiro.
              <strong> Pesquisa, analise e geracao de documentos</strong> com precisao juridica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="#cadastro"
                className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-700 transition flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30"
              >
                Testar 7 Dias Gratis
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#como-funciona"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-400 transition"
              >
                Ver Demonstracao
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                Dados protegidos
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                Conforme OAB
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                Sem fidelidade
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {useCases.map((uc) => (
              <div key={uc.name} className="p-4 sm:p-6 bg-purple-50 rounded-xl text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <uc.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">{uc.name}</h3>
                <p className="text-xs sm:text-sm text-gray-500">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
              <p className="text-3xl sm:text-5xl font-bold text-purple-400 mb-2">70%</p>
              <p className="text-gray-400 text-sm">menos tempo em pesquisa</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
              <p className="text-3xl sm:text-5xl font-bold text-green-400 mb-2">10M+</p>
              <p className="text-gray-400 text-sm">documentos analisados</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
              <p className="text-3xl sm:text-5xl font-bold text-blue-400 mb-2">5.000+</p>
              <p className="text-gray-400 text-sm">advogados ativos</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
              <p className="text-3xl sm:text-5xl font-bold text-orange-400 mb-2">4.8</p>
              <p className="text-gray-400 text-sm">avaliacao media</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Potencialize Sua Pratica Juridica
            </h2>
            <p className="text-gray-600 text-lg">Ferramentas de IA desenvolvidas por advogados, para advogados</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <b.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4 fill-current" />
              Usado por +5.000 advogados
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              O Que Dizem Nossos Usuarios
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="font-medium text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 gap-3"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cadastro" className="py-12 sm:py-20 px-4 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Comece a Usar IA no Seu Escritorio Hoje
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            7 dias gratis. Sem cartao. Cancele quando quiser.
          </p>

          {submitted ? (
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Obrigado!</h3>
              <p className="text-purple-100">Voce recebera acesso em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu email profissional"
                required
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-300"
              />
              <button
                type="submit"
                className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2"
              >
                Comecar
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          )}

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-purple-100 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              +5.000 advogados
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Dados protegidos
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Suporte prioritario
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <Scale className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white">JurisIA</span>
          </div>
          <p className="text-sm">2024 JurisIA. Todos os direitos reservados.</p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-white transition">Termos</a>
            <a href="#" className="hover:text-white transition">Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
