import { useState, useEffect } from 'react'
import {
  ShoppingCart,
  MessageSquare,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
  BarChart3,
  Shield,
  Star,
  ChevronDown,
  AlertTriangle,
  DollarSign,
  Users,
  Smartphone,
  Play,
  Mail,
  Bell,
  Gift,
  Sparkles,
} from 'lucide-react'

// Animated Counter Component
function AnimatedCounter({ end, suffix = '', prefix = '' }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = end / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [end])

  return <span>{prefix}{count.toLocaleString('pt-BR')}{suffix}</span>
}

// SVG Logos
const NuvemshopLogo = () => (
  <svg viewBox="0 0 120 30" className="h-8 w-auto">
    <path fill="#3D5AFE" d="M15 5C8.373 5 3 10.373 3 17s5.373 12 12 12c4.08 0 7.707-2.04 9.899-5.147C26.03 21.5 27.5 19.393 27.5 17c0-3.314-2.686-6-6-6-.722 0-1.413.128-2.053.362A8.003 8.003 0 0015 5z"/>
    <text x="35" y="21" fill="#333" fontSize="14" fontWeight="600">nuvemshop</text>
  </svg>
)

const ShopifyLogo = () => (
  <svg viewBox="0 0 110 30" className="h-8 w-auto">
    <path fill="#95BF47" d="M15 3L12 6v15l3 3 9-12L15 3z"/>
    <path fill="#5E8E3E" d="M15 3l9 9-3 12-6-6V3z"/>
    <text x="30" y="20" fill="#333" fontSize="14" fontWeight="600">shopify</text>
  </svg>
)


export default function CarrinhoAbandonado() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrar com backend/email marketing
    console.log('Lead captured:', email)
    setSubmitted(true)
  }

  const benefits = [
    {
      icon: Zap,
      title: 'Automação Total',
      description: 'Mensagens enviadas automaticamente. Zero trabalho manual.',
    },
    {
      icon: MessageSquare,
      title: '95% de Abertura',
      description: 'WhatsApp tem 5x mais abertura que email marketing.',
    },
    {
      icon: Clock,
      title: 'Régua Inteligente',
      description: 'Sequência otimizada: 1h, 24h e 72h após abandono.',
    },
    {
      icon: Shield,
      title: 'API Oficial Meta',
      description: '100% em conformidade. Sem risco de banimento.',
    },
    {
      icon: BarChart3,
      title: 'Dashboard Completo',
      description: 'Acompanhe métricas em tempo real.',
    },
    {
      icon: Smartphone,
      title: 'Setup em 5 Minutos',
      description: 'Integração simples com Nuvemshop e Shopify.',
    },
  ]

  const testimonials = [
    {
      name: 'Marina Silva',
      company: 'Loja Bella Moda',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'Recuperamos R$ 47 mil em vendas no primeiro mês. O ROI foi absurdo!',
      stars: 5,
    },
    {
      name: 'Carlos Mendes',
      company: 'TechStore Brasil',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'A taxa de resposta no WhatsApp é incomparável. Meus clientes adoram.',
      stars: 5,
    },
    {
      name: 'Juliana Costa',
      company: 'Cosméticos JC',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      text: 'Configurei em 10 minutos e já estava recuperando carrinhos. Incrível!',
      stars: 5,
    },
  ]

  const faqs = [
    {
      question: 'Como funciona a integração com minha loja?',
      answer:
        'Basta instalar nosso app na Nuvemshop ou Shopify. A integração é automática e leva menos de 5 minutos. Não precisa de desenvolvedor.',
    },
    {
      question: 'Qual a taxa real de recuperação?',
      answer:
        'Em média, nossos clientes recuperam entre 25% e 35% dos carrinhos abandonados. Isso representa um aumento significativo no faturamento.',
    },
    {
      question: 'Meu WhatsApp pode ser banido?',
      answer:
        'Não. Usamos a API Oficial do WhatsApp Business (Meta), que é 100% aprovada. Diferente de soluções "cinzas", não há risco de banimento.',
    },
    {
      question: 'Posso personalizar as mensagens?',
      answer:
        'Sim! Você controla todo o texto, pode usar o nome do cliente, produtos abandonados, cupom de desconto e muito mais.',
    },
    {
      question: 'Tem contrato ou fidelidade?',
      answer:
        'Não. Você pode cancelar a qualquer momento, sem multas ou burocracia. Oferecemos 7 dias grátis para você testar.',
    },
    {
      question: 'Funciona para qualquer e-commerce?',
      answer:
        'Atualmente suportamos Nuvemshop e Shopify. Em breve: WooCommerce, VTEX e Tray.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">
              Carrinho<span className="text-green-600">Abandonado</span>
            </span>
          </div>
          <a
            href="#cadastro"
            className="bg-green-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-green-700 transition hidden sm:block"
          >
            Começar Grátis
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 bg-gradient-to-b from-green-50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Recupere até 35% dos carrinhos abandonados</span>
                <span className="sm:hidden">Recupere 35% dos carrinhos</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                Transforme Carrinhos Abandonados em{' '}
                <span className="text-green-600">Vendas Recuperadas</span>{' '}
                via WhatsApp
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8">
                Envie mensagens automáticas pelo WhatsApp e recupere vendas perdidas.
                <strong> 95% de taxa de abertura</strong> vs 18% do email.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <a
                  href="#cadastro"
                  className="bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-green-700 transition flex items-center justify-center gap-2 shadow-lg shadow-green-600/30"
                >
                  Começar 7 Dias Grátis
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#como-funciona"
                  className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:border-gray-400 transition flex items-center justify-center"
                >
                  Ver Como Funciona
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500">
                <div className="flex items-center gap-1 sm:gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  API Oficial Meta
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  Sem cartão
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  Cancele quando quiser
                </div>
              </div>
            </div>

            {/* Hero Image - WhatsApp Mockup */}
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gray-900 rounded-[2rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl max-w-[280px] sm:max-w-sm mx-auto">
                <div className="bg-[#075E54] rounded-t-[1.5rem] sm:rounded-t-[2.5rem] p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="text-white font-medium text-sm sm:text-base">Loja Bella Moda</p>
                    <p className="text-green-200 text-xs">online</p>
                  </div>
                </div>
                <div className="bg-[#ECE5DD] p-3 sm:p-4 space-y-2 sm:space-y-3 min-h-[300px] sm:min-h-[400px]">
                  {/* Message bubble */}
                  <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm max-w-[90%] sm:max-w-[85%]">
                    <p className="text-gray-800 text-xs sm:text-sm">
                      Oi Marina! 👋
                      <br /><br />
                      Vi que você deixou alguns produtos no carrinho:
                      <br /><br />
                      🛍️ <strong>Vestido Floral - R$ 189,90</strong>
                      <br />
                      👠 <strong>Sandália Nude - R$ 129,90</strong>
                      <br /><br />
                      Seu carrinho ainda está salvo! 💚
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-500 text-right mt-1 sm:mt-2">14:32</p>
                  </div>

                  <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm max-w-[90%] sm:max-w-[85%]">
                    <p className="text-gray-800 text-xs sm:text-sm">
                      Use o cupom <strong className="text-green-600">VOLTA10</strong> e ganhe 10% OFF!
                      <br /><br />
                      👉 <span className="text-blue-600 underline">Finalizar compra</span>
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-500 text-right mt-1 sm:mt-2">14:32</p>
                  </div>

                  {/* Typing indicator */}
                  <div className="flex gap-1 p-2 sm:p-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>

              {/* Floating badges - hidden on mobile */}
              <div className="hidden sm:flex absolute -left-4 top-20 bg-white rounded-xl shadow-lg p-3 items-center gap-2 animate-pulse">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Recuperado</p>
                  <p className="font-bold text-green-600">+R$ 319,80</p>
                </div>
              </div>

              <div className="hidden sm:flex absolute -right-4 bottom-32 bg-white rounded-xl shadow-lg p-3 items-center gap-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Taxa abertura</p>
                  <p className="font-bold text-blue-600">95%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Logos */}
      <section className="py-6 sm:py-8 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">Integração nativa com as maiores plataformas</p>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-4 sm:gap-8">
              <NuvemshopLogo />
              <ShopifyLogo />
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-xs sm:text-sm font-medium">Em breve:</span>
              <span className="bg-gray-100 px-2 py-1 rounded text-[10px] sm:text-xs">WooCommerce</span>
              <span className="bg-gray-100 px-2 py-1 rounded text-[10px] sm:text-xs">VTEX</span>
              <span className="bg-gray-100 px-2 py-1 rounded text-[10px] sm:text-xs">Tray</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Animation */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Números que Impressionam</h2>
            <p className="text-gray-400 text-sm sm:text-base">Dados reais do mercado brasileiro de e-commerce</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
            <div className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur rounded-xl sm:rounded-2xl border border-white/10">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-red-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-4">
                <ShoppingCart className="w-5 h-5 sm:w-7 sm:h-7 text-red-400" />
              </div>
              <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-red-400 mb-1 sm:mb-2">
                <AnimatedCounter end={82} suffix="%" />
              </p>
              <p className="text-gray-400 text-[10px] sm:text-sm">dos carrinhos abandonados</p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur rounded-xl sm:rounded-2xl border border-white/10">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-green-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-4">
                <TrendingUp className="w-5 h-5 sm:w-7 sm:h-7 text-green-400" />
              </div>
              <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-green-400 mb-1 sm:mb-2">
                <AnimatedCounter end={35} suffix="%" />
              </p>
              <p className="text-gray-400 text-[10px] sm:text-sm">taxa de recuperação</p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur rounded-xl sm:rounded-2xl border border-white/10">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-blue-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-4">
                <Mail className="w-5 h-5 sm:w-7 sm:h-7 text-blue-400" />
              </div>
              <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-blue-400 mb-1 sm:mb-2">
                <AnimatedCounter end={95} suffix="%" />
              </p>
              <p className="text-gray-400 text-[10px] sm:text-sm">taxa de abertura</p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur rounded-xl sm:rounded-2xl border border-white/10">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-purple-500/20 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-4">
                <Clock className="w-5 h-5 sm:w-7 sm:h-7 text-purple-400" />
              </div>
              <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-purple-400 mb-1 sm:mb-2">
                3<span className="text-lg sm:text-2xl">min</span>
              </p>
              <p className="text-gray-400 text-[10px] sm:text-sm">tempo de leitura</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4" />
              O Problema
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Sua Loja Está <span className="text-red-600">Perdendo Dinheiro</span> Todos os Dias
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              A cada 10 clientes que adicionam produtos ao carrinho, 8 abandonam antes de finalizar.
              Isso representa <strong>milhares de reais em vendas perdidas</strong> todo mês.
            </p>
          </div>

          {/* Calculator */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl sm:rounded-2xl p-4 sm:p-8 max-w-2xl mx-auto border border-red-100">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
              Calculadora de Vendas Perdidas
            </h3>
            <div className="space-y-2 sm:space-y-4">
              <div className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg">
                <span className="text-gray-600 text-xs sm:text-base">Ticket médio:</span>
                <span className="font-bold text-gray-900 text-sm sm:text-base">R$ 150,00</span>
              </div>
              <div className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg">
                <span className="text-gray-600 text-xs sm:text-base">Carrinhos/mês:</span>
                <span className="font-bold text-gray-900 text-sm sm:text-base">500</span>
              </div>
              <div className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg">
                <span className="text-gray-600 text-xs sm:text-base">Taxa abandono (82%):</span>
                <span className="font-bold text-red-600 text-sm sm:text-base">410 perdidos</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between p-3 sm:p-4 bg-red-100 rounded-lg border-2 border-red-200 gap-2">
                <span className="text-red-800 font-medium text-sm sm:text-base flex items-center">
                  <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                  Você está perdendo:
                </span>
                <span className="font-bold text-xl sm:text-2xl text-red-600">R$ 61.500/mês</span>
              </div>
            </div>
            <p className="text-center text-gray-500 mt-3 sm:mt-4 text-xs sm:text-sm">
              * Cálculo baseado em dados médios do mercado brasileiro
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Section with Visual Charts */}
      <section className="py-12 sm:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4" />
              Comparativo Visual
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              WhatsApp vs Email: <span className="text-green-600">Não Há Comparação</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600">
              Veja por que o WhatsApp é 4x mais eficiente para recuperar vendas
            </p>
          </div>

          {/* Visual Bar Chart Comparison */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 shadow-xl mb-8 sm:mb-12 max-w-4xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              {/* Taxa de Abertura */}
              <div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2 sm:mb-3 gap-1">
                  <span className="font-medium text-gray-700 text-sm sm:text-base">Taxa de Abertura</span>
                  <span className="text-xs sm:text-sm text-gray-500">Email 18% vs WhatsApp 95%</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-14 sm:w-16 text-[10px] sm:text-xs text-gray-500">Email</div>
                    <div className="flex-1 bg-gray-100 rounded-full h-6 sm:h-8 overflow-hidden">
                      <div className="bg-gray-400 h-full rounded-full flex items-center justify-end pr-2 sm:pr-3 transition-all duration-1000" style={{ width: '18%' }}>
                        <span className="text-[10px] sm:text-xs font-bold text-white">18%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-14 sm:w-16 text-[10px] sm:text-xs text-green-600 font-medium">WhatsApp</div>
                    <div className="flex-1 bg-green-100 rounded-full h-6 sm:h-8 overflow-hidden">
                      <div className="bg-gradient-to-r from-green-500 to-green-400 h-full rounded-full flex items-center justify-end pr-2 sm:pr-3 transition-all duration-1000" style={{ width: '95%' }}>
                        <span className="text-[10px] sm:text-xs font-bold text-white">95%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Taxa de Clique */}
              <div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2 sm:mb-3 gap-1">
                  <span className="font-medium text-gray-700 text-sm sm:text-base">Taxa de Clique</span>
                  <span className="text-xs sm:text-sm text-gray-500">Email 3% vs WhatsApp 35%</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-14 sm:w-16 text-[10px] sm:text-xs text-gray-500">Email</div>
                    <div className="flex-1 bg-gray-100 rounded-full h-6 sm:h-8 overflow-hidden">
                      <div className="bg-gray-400 h-full rounded-full flex items-center pl-1 sm:pl-2 transition-all duration-1000" style={{ width: '8.5%' }}>
                        <span className="text-[10px] sm:text-xs font-bold text-white">3%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-14 sm:w-16 text-[10px] sm:text-xs text-green-600 font-medium">WhatsApp</div>
                    <div className="flex-1 bg-green-100 rounded-full h-6 sm:h-8 overflow-hidden">
                      <div className="bg-gradient-to-r from-green-500 to-green-400 h-full rounded-full flex items-center justify-end pr-2 sm:pr-3 transition-all duration-1000" style={{ width: '100%' }}>
                        <span className="text-[10px] sm:text-xs font-bold text-white">35%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Taxa de Recuperação */}
              <div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2 sm:mb-3 gap-1">
                  <span className="font-medium text-gray-700 text-sm sm:text-base">Taxa de Recuperação</span>
                  <span className="text-xs sm:text-sm text-gray-500">Email 8% vs WhatsApp 35%</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-14 sm:w-16 text-[10px] sm:text-xs text-gray-500">Email</div>
                    <div className="flex-1 bg-gray-100 rounded-full h-6 sm:h-8 overflow-hidden">
                      <div className="bg-gray-400 h-full rounded-full flex items-center pl-1 sm:pl-2 transition-all duration-1000" style={{ width: '22.8%' }}>
                        <span className="text-[10px] sm:text-xs font-bold text-white">8%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-14 sm:w-16 text-[10px] sm:text-xs text-green-600 font-medium">WhatsApp</div>
                    <div className="flex-1 bg-green-100 rounded-full h-6 sm:h-8 overflow-hidden">
                      <div className="bg-gradient-to-r from-green-500 to-green-400 h-full rounded-full flex items-center justify-end pr-2 sm:pr-3 transition-all duration-1000" style={{ width: '100%' }}>
                        <span className="text-[10px] sm:text-xs font-bold text-white">35%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom highlight */}
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-100 flex items-center justify-center gap-2 sm:gap-4">
              <div className="flex items-center gap-1 sm:gap-2 text-green-600">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-bold text-sm sm:text-lg">WhatsApp é 4.3x mais eficiente</span>
              </div>
            </div>
          </div>

          {/* Feature Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto">
            {/* Email */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 border-2 border-gray-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gray-100 rounded-full -mr-12 sm:-mr-16 -mt-12 sm:-mt-16"></div>
              <div className="relative">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gray-100 rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <Mail className="w-5 h-5 sm:w-7 sm:h-7 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg">Email Marketing</h3>
                    <p className="text-gray-500 text-xs sm:text-sm">Método tradicional</p>
                  </div>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-center gap-2 sm:gap-3 text-gray-600 text-sm sm:text-base">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 bg-red-100 rounded-lg flex items-center justify-center text-red-500 flex-shrink-0">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </span>
                    Vai para spam ou promoções
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3 text-gray-600 text-sm sm:text-base">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 bg-red-100 rounded-lg flex items-center justify-center text-red-500 flex-shrink-0">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </span>
                    Lido em horas ou dias
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3 text-gray-600 text-sm sm:text-base">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 bg-red-100 rounded-lg flex items-center justify-center text-red-500 flex-shrink-0">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </span>
                    Baixo engajamento
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3 text-gray-600 text-sm sm:text-base">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 bg-red-100 rounded-lg flex items-center justify-center text-red-500 flex-shrink-0">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </span>
                    Impessoal e frio
                  </li>
                </ul>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl p-5 sm:p-8 border-2 border-green-500 relative overflow-hidden">
              <div className="absolute -top-3 right-3 sm:right-4 bg-green-600 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-lg flex items-center gap-1">
                <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
                RECOMENDADO
              </div>
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-green-200/50 rounded-full -mr-12 sm:-mr-16 -mt-12 sm:-mt-16"></div>
              <div className="relative">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-green-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30">
                    <MessageSquare className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg">WhatsApp</h3>
                    <p className="text-green-600 text-xs sm:text-sm font-medium">4x mais eficiente</p>
                  </div>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-center gap-2 sm:gap-3 text-gray-800 text-sm sm:text-base">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 bg-green-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <strong>Entrega direta</strong>, sem spam
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3 text-gray-800 text-sm sm:text-base">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 bg-green-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    Lido em <strong>3 minutos</strong>
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3 text-gray-800 text-sm sm:text-base">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 bg-green-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <strong>Alto engajamento</strong> garantido
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3 text-gray-800 text-sm sm:text-base">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 bg-green-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <strong>Personalizado</strong> e próximo
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Timeline */}
      <section id="como-funciona" className="py-12 sm:py-20 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-48 sm:w-64 h-48 sm:h-64 bg-green-100 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-8 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <Play className="w-3 h-3 sm:w-4 sm:h-4" />
              Setup em 5 minutos
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Como Funciona em <span className="text-green-600">3 Passos</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600">
              Configuração simples, resultados imediatos
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-green-200 via-green-400 to-green-200 rounded-full"></div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl hover:shadow-2xl transition-shadow border border-gray-100">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-green-500/30">
                    <span className="text-xl sm:text-2xl font-bold text-white">1</span>
                  </div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <ShoppingCart className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">Conecte sua Loja</h3>
                  <p className="text-gray-600 text-center text-sm sm:text-base mb-3 sm:mb-4">
                    Instale o app na Nuvemshop ou Shopify. Leva menos de 5 minutos.
                  </p>
                  <div className="flex justify-center gap-2">
                    <span className="bg-gray-100 text-gray-600 text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full">Nuvemshop</span>
                    <span className="bg-gray-100 text-gray-600 text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full">Shopify</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl hover:shadow-2xl transition-shadow border border-gray-100">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-blue-500/30">
                    <span className="text-xl sm:text-2xl font-bold text-white">2</span>
                  </div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <MessageSquare className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">Configure as Mensagens</h3>
                  <p className="text-gray-600 text-center text-sm sm:text-base mb-3 sm:mb-4">
                    Personalize os textos ou use nossos templates otimizados.
                  </p>
                  <div className="flex justify-center gap-2">
                    <span className="bg-blue-100 text-blue-600 text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full">1h</span>
                    <span className="bg-blue-100 text-blue-600 text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full">24h</span>
                    <span className="bg-blue-100 text-blue-600 text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full">72h</span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl hover:shadow-2xl transition-shadow border border-gray-100">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-purple-500/30">
                    <span className="text-xl sm:text-2xl font-bold text-white">3</span>
                  </div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">Recupere Vendas</h3>
                  <p className="text-gray-600 text-center text-sm sm:text-base mb-3 sm:mb-4">
                    As mensagens são enviadas automaticamente. Você só acompanha o faturamento subindo.
                  </p>
                  <div className="flex justify-center">
                    <span className="bg-green-100 text-green-600 text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full font-medium">+35% recuperação</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Flow Diagram */}
          <div className="mt-8 sm:mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12">
            <h3 className="text-base sm:text-xl font-bold text-white mb-4 sm:mb-8 text-center">Fluxo Automático de Recuperação</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-2">
              {/* Cart abandoned */}
              <div className="bg-red-500/20 backdrop-blur px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl flex items-center gap-2 w-full md:w-auto justify-center">
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                <span className="text-red-300 text-xs sm:text-sm font-medium">Carrinho Abandonado</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-600 hidden md:block" />
              <ChevronDown className="w-5 h-5 text-gray-600 md:hidden" />

              {/* 1h message */}
              <div className="bg-green-500/20 backdrop-blur px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl flex items-center gap-2 w-full md:w-auto justify-center">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                <span className="text-green-300 text-xs sm:text-sm font-medium">1h: Lembrete</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-600 hidden md:block" />
              <ChevronDown className="w-5 h-5 text-gray-600 md:hidden" />

              {/* 24h message */}
              <div className="bg-blue-500/20 backdrop-blur px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl flex items-center gap-2 w-full md:w-auto justify-center">
                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <span className="text-blue-300 text-xs sm:text-sm font-medium">24h: Urgência</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-600 hidden md:block" />
              <ChevronDown className="w-5 h-5 text-gray-600 md:hidden" />

              {/* 72h message */}
              <div className="bg-purple-500/20 backdrop-blur px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl flex items-center gap-2 w-full md:w-auto justify-center">
                <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                <span className="text-purple-300 text-xs sm:text-sm font-medium">72h: Cupom</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-600 hidden md:block" />
              <ChevronDown className="w-5 h-5 text-gray-600 md:hidden" />

              {/* Recovered */}
              <div className="bg-green-500 px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl flex items-center gap-2 shadow-lg shadow-green-500/30 w-full md:w-auto justify-center">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span className="text-white text-xs sm:text-sm font-bold">Venda Recuperada!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Tudo Que Você Precisa Para Recuperar Vendas
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-xl p-4 sm:p-6 hover:shadow-lg transition"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
              4.9/5 de avaliação
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              O Que Nossos Clientes Dizem
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200"
              >
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-2 sm:gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-gray-50 gap-3"
                >
                  <span className="font-medium text-gray-900 text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transition flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
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

      {/* CTA Section */}
      <section id="cadastro" className="py-12 sm:py-20 px-4 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Comece a Recuperar Vendas Hoje
          </h2>
          <p className="text-base sm:text-xl text-green-100 mb-6 sm:mb-8">
            7 dias grátis. Sem cartão de crédito. Cancele quando quiser.
          </p>

          {submitted ? (
            <div className="bg-white/10 backdrop-blur rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Obrigado!</h3>
              <p className="text-green-100 text-sm sm:text-base">
                Você está na lista de espera! Entraremos em contato em breve.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor email"
                required
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-green-300 text-sm sm:text-base"
              />
              <button
                type="submit"
                className="bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Entrar na Lista
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </form>
          )}

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 text-green-100 text-xs sm:text-sm">
            <div className="flex items-center gap-1 sm:gap-2">
              <Users className="w-3 h-3 sm:w-4 sm:h-4" />
              +500 lojas na fila
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
              API Oficial Meta
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
              Lançamento em breve
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </div>
              <span className="font-bold text-white text-sm sm:text-base">CarrinhoAbandonado</span>
            </div>
            <p className="text-xs sm:text-sm">
              © 2024 CarrinhoAbandonado. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 text-xs sm:text-sm">
              <a href="#" className="hover:text-white transition">Termos</a>
              <a href="#" className="hover:text-white transition">Privacidade</a>
              <a href="#" className="hover:text-white transition">Contato</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
