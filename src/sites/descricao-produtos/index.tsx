import { useState } from 'react'
import {
  FileText,
  Sparkles,
  ShoppingBag,
  CheckCircle,
  ArrowRight,
  Zap,
  Clock,
  TrendingUp,
  Star,
  ChevronDown,
  Users,
  Globe,
  Copy,
  Wand2,
} from 'lucide-react'

export default function DescricaoProdutos() {
  const [url, setUrl] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Lead captured:', url)
    setSubmitted(true)
  }

  const benefits = [
    {
      icon: Sparkles,
      title: 'Descricoes Otimizadas',
      description: 'Textos que vendem, escritos por IA treinada em e-commerce.',
    },
    {
      icon: TrendingUp,
      title: 'SEO Automatico',
      description: 'Palavras-chave relevantes para ranquear no Google.',
    },
    {
      icon: Clock,
      title: 'Economize Horas',
      description: 'Gere 100 descricoes no tempo de escrever 1 manualmente.',
    },
    {
      icon: Globe,
      title: 'Multiplos Idiomas',
      description: 'Portugues, ingles, espanhol. Expanda seu mercado.',
    },
    {
      icon: Copy,
      title: 'Tom da Sua Marca',
      description: 'A IA aprende seu estilo e mantem consistencia.',
    },
    {
      icon: Wand2,
      title: 'Variacoes Ilimitadas',
      description: 'Teste diferentes abordagens e veja o que converte mais.',
    },
  ]

  const platforms = [
    { name: 'Mercado Livre', color: 'yellow' },
    { name: 'Shopee', color: 'orange' },
    { name: 'Amazon', color: 'blue' },
    { name: 'Shopify', color: 'green' },
    { name: 'Nuvemshop', color: 'purple' },
    { name: 'WooCommerce', color: 'indigo' },
  ]

  const testimonials = [
    {
      name: 'Lucas Ferreira',
      company: 'Eletro Shop',
      image: 'https://randomuser.me/api/portraits/men/55.jpg',
      text: 'Tinha 500 produtos sem descricao. Em 1 dia a IA gerou todas. Minhas vendas aumentaram 40%!',
      stars: 5,
    },
    {
      name: 'Amanda Costa',
      company: 'Moda Feminina AC',
      image: 'https://randomuser.me/api/portraits/women/55.jpg',
      text: 'As descricoes sao melhores do que eu escreveria. A IA entende moda e usa as palavras certas.',
      stars: 5,
    },
    {
      name: 'Roberto Dias',
      company: 'Casa & Decoracao',
      image: 'https://randomuser.me/api/portraits/men/56.jpg',
      text: 'O SEO das descricoes fez meus produtos aparecerem no topo do Google Shopping. Recomendo!',
      stars: 5,
    },
  ]

  const faqs = [
    {
      question: 'Como a IA gera as descricoes?',
      answer: 'Voce envia o nome do produto, categoria e especificacoes basicas. A IA analisa produtos similares bem-sucedidos e gera uma descricao otimizada para vendas e SEO.',
    },
    {
      question: 'Posso editar as descricoes geradas?',
      answer: 'Sim! Voce pode editar, pedir variacoes ou ajustar o tom. A IA aprende suas preferencias e melhora com o tempo.',
    },
    {
      question: 'Funciona para qualquer tipo de produto?',
      answer: 'Sim! Eletronicos, moda, casa, alimentos, automoveis, etc. A IA foi treinada com milhoes de produtos de todas as categorias.',
    },
    {
      question: 'As descricoes sao unicas?',
      answer: 'Sim, 100% originais. Cada descricao e gerada especificamente para seu produto, sem copiar de outros sites.',
    },
    {
      question: 'Quanto custa?',
      answer: 'Temos planos a partir de R$79/mes para ate 100 descricoes. Planos maiores para quem tem mais produtos. 7 dias gratis para testar.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">
              Descri<span className="text-orange-500">IA</span>
            </span>
          </div>
          <a
            href="#cadastro"
            className="bg-orange-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-orange-600 transition hidden sm:block"
          >
            Testar Gratis
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              IA para E-commerce
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Descricoes de Produtos que{' '}
              <span className="text-orange-500">Vendem</span>{' '}
              em Segundos
            </h1>

            <p className="text-base sm:text-xl text-gray-600 mb-8">
              Gere descricoes otimizadas para SEO e conversao com IA.
              <strong> 100 produtos em minutos, nao dias.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="#cadastro"
                className="bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-600 transition flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30"
              >
                Testar 7 Dias Gratis
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#exemplo"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-400 transition"
              >
                Ver Exemplo
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-orange-500" />
                Sem cartao
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-orange-500" />
                100 descricoes gratis
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-orange-500" />
                Cancele quando quiser
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example */}
      <section id="exemplo" className="py-12 sm:py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Veja a Diferenca
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="font-medium text-gray-500">Antes (manual)</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-600 text-sm">
                  Fone de ouvido bluetooth. Cor preta. Bateria dura bastante. Bom para musica.
                </p>
              </div>
            </div>

            {/* After */}
            <div className="bg-white rounded-xl p-6 border-2 border-orange-500">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span className="font-medium text-orange-600">Depois (IA)</span>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <p className="text-gray-700 text-sm">
                  <strong>Fone de Ouvido Bluetooth Premium</strong> - Experimente som de alta fidelidade com graves profundos e agudos cristalinos. Bateria de 40 horas para ouvir sua playlist favorita o dia todo. Cancelamento de ruido ativo para focar no que importa. Design ergonomico e leve para conforto prolongado. Conexao estavel ate 10m. Compativel com todos os smartphones. Ideal para trabalho, exercicios e viagens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-8 sm:py-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-gray-500 text-sm mb-6">Otimizado para os maiores marketplaces</p>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((p) => (
              <span
                key={p.name}
                className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600"
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
              <p className="text-3xl sm:text-5xl font-bold text-orange-400 mb-2">10M+</p>
              <p className="text-gray-400 text-sm">descricoes geradas</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
              <p className="text-3xl sm:text-5xl font-bold text-green-400 mb-2">35%</p>
              <p className="text-gray-400 text-sm">mais conversao</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
              <p className="text-3xl sm:text-5xl font-bold text-blue-400 mb-2">100x</p>
              <p className="text-gray-400 text-sm">mais rapido</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
              <p className="text-3xl sm:text-5xl font-bold text-purple-400 mb-2">4.9</p>
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
              Descricoes Que Vendem Mais
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <b.icon className="w-6 h-6 text-orange-500" />
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
              +10.000 lojistas usam
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
      <section id="cadastro" className="py-12 sm:py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Comece a Gerar Descricoes Hoje
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            7 dias gratis. 100 descricoes incluidas. Sem cartao.
          </p>

          {submitted ? (
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Obrigado!</h3>
              <p className="text-orange-100">Voce recebera acesso em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Seu melhor email"
                required
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-orange-300"
              />
              <button
                type="submit"
                className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2"
              >
                Testar Gratis
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          )}

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-orange-100 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              +10.000 lojistas
            </div>
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Todos marketplaces
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Setup instantaneo
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white">DescriIA</span>
          </div>
          <p className="text-sm">2024 DescriIA. Todos os direitos reservados.</p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-white transition">Termos</a>
            <a href="#" className="hover:text-white transition">Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
