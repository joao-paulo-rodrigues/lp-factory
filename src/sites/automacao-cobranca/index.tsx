import { useState } from 'react'
import {
  Receipt,
  MessageSquare,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Star,
  ChevronDown,
  Users,
  TrendingUp,
  Bell,
  Calendar,
  FileText,
  AlertTriangle,
} from 'lucide-react'

export default function AutomacaoCobranca() {
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
      icon: MessageSquare,
      title: 'Cobranca via WhatsApp',
      description: 'Mensagens automaticas com tom profissional e cordial.',
    },
    {
      icon: Calendar,
      title: 'Regua Inteligente',
      description: 'Sequencia automatica: lembrete, vencido, acordo.',
    },
    {
      icon: DollarSign,
      title: 'Link de Pagamento',
      description: 'PIX e cartao direto na conversa. Pago em 1 clique.',
    },
    {
      icon: TrendingUp,
      title: 'Recupere Mais',
      description: 'Aumente em 40% a taxa de recuperacao de inadimplentes.',
    },
    {
      icon: FileText,
      title: 'Relatorios Completos',
      description: 'Acompanhe em tempo real quem pagou e quem nao.',
    },
    {
      icon: Shield,
      title: 'Sem Constrangimento',
      description: 'Mensagens automaticas, sem exposicao da sua equipe.',
    },
  ]

  const flow = [
    { day: 'D-3', label: 'Lembrete', color: 'blue', icon: Bell },
    { day: 'D', label: 'Vencimento', color: 'yellow', icon: Calendar },
    { day: 'D+3', label: '1a Cobranca', color: 'orange', icon: MessageSquare },
    { day: 'D+7', label: '2a Cobranca', color: 'red', icon: AlertTriangle },
    { day: 'D+15', label: 'Acordo', color: 'green', icon: DollarSign },
  ]

  const testimonials = [
    {
      name: 'Marcelo Ribeiro',
      company: 'Distribuidora MR',
      image: 'https://randomuser.me/api/portraits/men/61.jpg',
      text: 'Recuperamos R$180k em dividas antigas no primeiro mes. A automacao faz o trabalho chato por nos.',
      stars: 5,
    },
    {
      name: 'Sandra Lima',
      company: 'Clinica Odonto Plus',
      image: 'https://randomuser.me/api/portraits/women/61.jpg',
      text: 'Pacientes pagam rapido porque recebem lembrete antes de vencer. Inadimplencia caiu 60%.',
      stars: 5,
    },
    {
      name: 'Roberto Gomes',
      company: 'Academia Top Fitness',
      image: 'https://randomuser.me/api/portraits/men/62.jpg',
      text: 'Antes eu perdia horas cobrando um por um. Agora o sistema faz tudo e eu so vejo quem pagou.',
      stars: 5,
    },
  ]

  const faqs = [
    {
      question: 'Como funciona a regua de cobranca?',
      answer: 'Voce define a sequencia: lembrete antes do vencimento, mensagem no dia, 1a cobranca apos X dias, etc. O sistema envia tudo automaticamente via WhatsApp.',
    },
    {
      question: 'Posso personalizar as mensagens?',
      answer: 'Sim! Voce controla todo o texto, tom e frequencia. Pode usar nome do cliente, valor, vencimento e ate cupom de desconto para pagamento rapido.',
    },
    {
      question: 'Funciona com meu sistema de gestao?',
      answer: 'Sim! Integramos com os principais ERPs e sistemas de gestao. Tambem aceitamos planilhas Excel/CSV para importar dividas.',
    },
    {
      question: 'O cliente pode parcelar pelo WhatsApp?',
      answer: 'Sim! Voce pode configurar opcoes de parcelamento e o cliente escolhe direto na conversa. O link de pagamento ja vem com as opcoes.',
    },
    {
      question: 'Quanto custa?',
      answer: 'Temos planos a partir de R$149/mes + uma pequena taxa por cobranca enviada. O retorno geralmente paga o investimento no primeiro mes.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
              <Receipt className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">
              Cobra<span className="text-red-500">Zap</span>
            </span>
          </div>
          <a
            href="#cadastro"
            className="bg-red-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-red-600 transition hidden sm:block"
          >
            Testar Gratis
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4" />
              Recupere 40% mais dividas
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Cobre Inadimplentes pelo{' '}
              <span className="text-red-500">WhatsApp</span>{' '}
              Automaticamente
            </h1>

            <p className="text-base sm:text-xl text-gray-600 mb-8">
              Regua de cobranca automatica com lembretes, follow-ups e link de pagamento.
              <strong> Sem constrangimento, sem trabalho manual.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="#cadastro"
                className="bg-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-600 transition flex items-center justify-center gap-2 shadow-lg shadow-red-500/30"
              >
                Testar 7 Dias Gratis
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#como-funciona"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-400 transition"
              >
                Ver Como Funciona
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-red-500" />
                Sem cartao
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-red-500" />
                Setup em 10 min
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-red-500" />
                Importa planilha
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section id="como-funciona" className="py-12 sm:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Regua de Cobranca Inteligente
            </h2>
            <p className="text-gray-600">O sistema cuida de toda a sequencia automaticamente</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
            {flow.map((step, i) => (
              <div key={step.day} className="flex items-center">
                <div className={`p-4 sm:p-6 bg-white rounded-xl border-2 border-${step.color}-200 text-center min-w-[120px]`}>
                  <div className={`w-10 h-10 bg-${step.color}-100 rounded-lg flex items-center justify-center mx-auto mb-2`}>
                    <step.icon className={`w-5 h-5 text-${step.color}-600`} />
                  </div>
                  <p className={`font-bold text-${step.color}-600 text-sm`}>{step.day}</p>
                  <p className="text-gray-600 text-sm">{step.label}</p>
                </div>
                {i < flow.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-gray-300 mx-2 hidden md:block" />
                )}
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
              <p className="text-3xl sm:text-5xl font-bold text-red-400 mb-2">40%</p>
              <p className="text-gray-400 text-sm">mais recuperacao</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
              <p className="text-3xl sm:text-5xl font-bold text-green-400 mb-2">R$5M+</p>
              <p className="text-gray-400 text-sm">recuperado/mes</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
              <p className="text-3xl sm:text-5xl font-bold text-blue-400 mb-2">95%</p>
              <p className="text-gray-400 text-sm">taxa abertura</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
              <p className="text-3xl sm:text-5xl font-bold text-purple-400 mb-2">3min</p>
              <p className="text-gray-400 text-sm">tempo resposta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cobranca Eficiente, Sem Desgaste
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <b.icon className="w-6 h-6 text-red-500" />
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
              +R$5M recuperados/mes
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Resultados Reais
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
      <section id="cadastro" className="py-12 sm:py-20 px-4 bg-gradient-to-r from-red-500 to-red-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Comece a Recuperar Dividas Hoje
          </h2>
          <p className="text-xl text-red-100 mb-8">
            7 dias gratis. Sem cartao. ROI garantido.
          </p>

          {submitted ? (
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Obrigado!</h3>
              <p className="text-red-100">Entraremos em contato em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Seu WhatsApp"
                required
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-red-300"
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

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-red-100 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              +500 empresas
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              API Oficial Meta
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Setup em 10 min
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
              <Receipt className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white">CobraZap</span>
          </div>
          <p className="text-sm">2024 CobraZap. Todos os direitos reservados.</p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-white transition">Termos</a>
            <a href="#" className="hover:text-white transition">Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
