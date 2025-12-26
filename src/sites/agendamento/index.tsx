import { useState } from 'react'
import {
  Calendar,
  MessageSquare,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
  Bell,
  Shield,
  Star,
  ChevronDown,
  Users,
  Smartphone,
  Scissors,
  Stethoscope,
  Dumbbell,
  Car,
} from 'lucide-react'

export default function Agendamento() {
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Lead captured:', phone)
    setSubmitted(true)
  }

  const benefits = [
    {
      icon: Zap,
      title: 'Agendamento 24/7',
      description: 'Seu cliente agenda a qualquer hora, sem precisar ligar.',
    },
    {
      icon: Bell,
      title: 'Lembretes Automaticos',
      description: 'Reduza faltas em 70% com lembretes via WhatsApp.',
    },
    {
      icon: Calendar,
      title: 'Agenda Inteligente',
      description: 'Visualize e gerencie todos os agendamentos em um lugar.',
    },
    {
      icon: Shield,
      title: 'API Oficial Meta',
      description: '100% em conformidade. Sem risco de banimento.',
    },
    {
      icon: MessageSquare,
      title: 'Confirmacao Automatica',
      description: 'Cliente confirma ou remarca pelo proprio WhatsApp.',
    },
    {
      icon: Smartphone,
      title: 'Setup em 5 Minutos',
      description: 'Comece a receber agendamentos hoje mesmo.',
    },
  ]

  const segments = [
    { icon: Scissors, name: 'Saloes e Barbearias', color: 'pink' },
    { icon: Stethoscope, name: 'Clinicas e Consultorios', color: 'blue' },
    { icon: Dumbbell, name: 'Academias e Personal', color: 'orange' },
    { icon: Car, name: 'Oficinas e Lava-rapidos', color: 'gray' },
  ]

  const testimonials = [
    {
      name: 'Patricia Oliveira',
      company: 'Salao Bella Hair',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
      text: 'Reduzi 80% das ligacoes e minhas clientes adoram agendar pelo WhatsApp!',
      stars: 5,
    },
    {
      name: 'Dr. Ricardo Santos',
      company: 'Clinica Viva Bem',
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
      text: 'As faltas diminuiram muito com os lembretes automaticos. Excelente!',
      stars: 5,
    },
    {
      name: 'Marcos Lima',
      company: 'Barbearia Old School',
      image: 'https://randomuser.me/api/portraits/men/47.jpg',
      text: 'Meus clientes agendam ate de madrugada. Nunca mais perdi cliente.',
      stars: 5,
    },
  ]

  const faqs = [
    {
      question: 'Como funciona o agendamento pelo WhatsApp?',
      answer: 'O cliente envia uma mensagem, escolhe o servico, profissional e horario disponivel. Tudo automatico, sem precisar de atendente.',
    },
    {
      question: 'Posso personalizar os horarios disponiveis?',
      answer: 'Sim! Voce define seus horarios de trabalho, intervalos, dias de folga e ate bloqueia horarios especificos.',
    },
    {
      question: 'E se o cliente quiser remarcar?',
      answer: 'Ele pode remarcar ou cancelar diretamente pelo WhatsApp. Voce recebe notificacao instantanea.',
    },
    {
      question: 'Funciona para multiplos profissionais?',
      answer: 'Sim! Cada profissional tem sua propria agenda e o cliente escolhe com quem quer agendar.',
    },
    {
      question: 'Tem contrato ou fidelidade?',
      answer: 'Nao. Cancele quando quiser, sem multas. Oferecemos 7 dias gratis para testar.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">
              Agenda<span className="text-blue-600">Zap</span>
            </span>
          </div>
          <a
            href="#cadastro"
            className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition hidden sm:block"
          >
            Comecar Gratis
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                Reduza 70% das faltas
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                Seus Clientes Agendam pelo{' '}
                <span className="text-blue-600">WhatsApp</span>{' '}
                24 horas por dia
              </h1>

              <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8">
                Sistema de agendamento automatico via WhatsApp.
                <strong> Lembretes, confirmacoes e reagendamentos</strong> sem voce precisar fazer nada.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <a
                  href="#cadastro"
                  className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
                >
                  Testar 7 Dias Gratis
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#como-funciona"
                  className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:border-gray-400 transition flex items-center justify-center"
                >
                  Ver Demonstracao
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500">
                <div className="flex items-center gap-1 sm:gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  Sem cartao
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  Setup em 5 min
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  Cancele quando quiser
                </div>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gray-900 rounded-[2rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl max-w-[280px] sm:max-w-sm mx-auto">
                <div className="bg-[#075E54] rounded-t-[1.5rem] sm:rounded-t-[2.5rem] p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="text-white font-medium text-sm sm:text-base">Salao Bella Hair</p>
                    <p className="text-green-200 text-xs">online</p>
                  </div>
                </div>
                <div className="bg-[#ECE5DD] p-3 sm:p-4 space-y-2 sm:space-y-3 min-h-[300px] sm:min-h-[400px]">
                  <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm max-w-[90%] sm:max-w-[85%]">
                    <p className="text-gray-800 text-xs sm:text-sm">
                      Ola! Bem-vinda ao Salao Bella Hair
                      <br /><br />
                      Escolha uma opcao:
                      <br /><br />
                      1. Agendar horario
                      <br />
                      2. Ver meus agendamentos
                      <br />
                      3. Falar com atendente
                    </p>
                  </div>

                  <div className="bg-[#DCF8C6] rounded-lg p-2 sm:p-3 shadow-sm max-w-[60%] ml-auto">
                    <p className="text-gray-800 text-xs sm:text-sm">1</p>
                  </div>

                  <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm max-w-[90%] sm:max-w-[85%]">
                    <p className="text-gray-800 text-xs sm:text-sm">
                      Qual servico deseja?
                      <br /><br />
                      1. Corte feminino - R$80
                      <br />
                      2. Escova - R$50
                      <br />
                      3. Coloracao - R$150
                    </p>
                  </div>

                  <div className="bg-[#DCF8C6] rounded-lg p-2 sm:p-3 shadow-sm max-w-[60%] ml-auto">
                    <p className="text-gray-800 text-xs sm:text-sm">1</p>
                  </div>

                  <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm max-w-[90%] sm:max-w-[85%]">
                    <p className="text-gray-800 text-xs sm:text-sm">
                      Horarios disponiveis para Quinta (28/12):
                      <br /><br />
                      1. 09:00
                      <br />
                      2. 10:30
                      <br />
                      3. 14:00
                      <br />
                      4. 16:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segments */}
      <section className="py-8 sm:py-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-gray-500 text-xs sm:text-sm mb-6">Perfeito para diversos segmentos</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {segments.map((seg) => (
              <div key={seg.name} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <seg.icon className="w-6 h-6 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">{seg.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
              <p className="text-3xl sm:text-5xl font-bold text-blue-400 mb-2">70%</p>
              <p className="text-gray-400 text-xs sm:text-sm">menos faltas</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
              <p className="text-3xl sm:text-5xl font-bold text-green-400 mb-2">24/7</p>
              <p className="text-gray-400 text-xs sm:text-sm">agendamento</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
              <p className="text-3xl sm:text-5xl font-bold text-purple-400 mb-2">5min</p>
              <p className="text-gray-400 text-xs sm:text-sm">para configurar</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
              <p className="text-3xl sm:text-5xl font-bold text-orange-400 mb-2">95%</p>
              <p className="text-gray-400 text-xs sm:text-sm">satisfacao</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tudo Que Voce Precisa Para Gerenciar Agendamentos
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-gray-50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4 fill-current" />
              4.9/5 de avaliacao
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              O Que Nossos Clientes Dizem
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">{t.name}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{t.company}</p>
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
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-gray-50 gap-3"
                >
                  <span className="font-medium text-gray-900 text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transition flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-gray-600 text-sm sm:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cadastro" className="py-12 sm:py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Comece a Receber Agendamentos Hoje
          </h2>
          <p className="text-base sm:text-xl text-blue-100 mb-6 sm:mb-8">
            7 dias gratis. Sem cartao. Cancele quando quiser.
          </p>

          {submitted ? (
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 sm:p-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Obrigado!</h3>
              <p className="text-blue-100">Entraremos em contato pelo WhatsApp em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Seu WhatsApp"
                required
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-300 text-sm sm:text-base"
              />
              <button
                type="submit"
                className="bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Quero Testar
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </form>
          )}

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 text-blue-100 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              +1.000 negocios ativos
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              API Oficial Meta
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white">AgendaZap</span>
          </div>
          <p className="text-xs sm:text-sm">2024 AgendaZap. Todos os direitos reservados.</p>
          <div className="flex gap-4 text-xs sm:text-sm">
            <a href="#" className="hover:text-white transition">Termos</a>
            <a href="#" className="hover:text-white transition">Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
