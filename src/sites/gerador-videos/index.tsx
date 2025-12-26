import { useState } from 'react'
import {
  Video,
  Sparkles,
  Play,
  CheckCircle,
  ArrowRight,
  Zap,
  Clock,
  TrendingUp,
  Star,
  ChevronDown,
  Users,
  Music,
  Type,
  Wand2,
  Instagram,
  Smartphone,
} from 'lucide-react'

export default function GeradorVideos() {
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
      icon: Wand2,
      title: 'Texto Vira Video',
      description: 'Escreva o que quer e a IA cria o video automaticamente.',
    },
    {
      icon: Music,
      title: 'Musicas Trendings',
      description: 'Biblioteca com musicas virais do momento.',
    },
    {
      icon: Type,
      title: 'Legendas Automaticas',
      description: 'Legendas animadas que aumentam retencao em 80%.',
    },
    {
      icon: Instagram,
      title: 'Formatos Otimizados',
      description: 'Reels, TikTok, Shorts - tudo no tamanho certo.',
    },
    {
      icon: Clock,
      title: '30 Videos em 1 Hora',
      description: 'Produza conteudo para o mes inteiro em uma tarde.',
    },
    {
      icon: TrendingUp,
      title: 'Templates Virais',
      description: 'Modelos baseados em videos que ja bombaram.',
    },
  ]

  const formats = [
    { name: 'Reels', icon: Instagram, color: 'pink' },
    { name: 'TikTok', icon: Smartphone, color: 'black' },
    { name: 'Shorts', icon: Play, color: 'red' },
    { name: 'Stories', icon: Video, color: 'purple' },
  ]

  const testimonials = [
    {
      name: 'Julia Martins',
      company: '@juliamoda',
      image: 'https://randomuser.me/api/portraits/women/58.jpg',
      text: 'Cresci de 5k para 50k seguidores em 3 meses postando Reels todo dia. A IA me economiza horas!',
      stars: 5,
    },
    {
      name: 'Pedro Alves',
      company: 'Loja Tech PA',
      image: 'https://randomuser.me/api/portraits/men/58.jpg',
      text: 'Meus videos de produto ficam profissionais. As vendas pelo Instagram triplicaram.',
      stars: 5,
    },
    {
      name: 'Carla Souza',
      company: '@carlafitness',
      image: 'https://randomuser.me/api/portraits/women/59.jpg',
      text: 'Antes levava 2h por video. Agora faco 10 em 1h. Conteudo nunca mais foi problema.',
      stars: 5,
    },
  ]

  const faqs = [
    {
      question: 'Preciso aparecer nos videos?',
      answer: 'Nao! A IA pode criar videos com imagens, animacoes, textos e clipes de banco de imagem. Voce decide se quer aparecer ou nao.',
    },
    {
      question: 'Como funciona a criacao?',
      answer: 'Voce escreve o roteiro ou deixa a IA criar. Escolhe o estilo, musica e formato. Em minutos seu video esta pronto para postar.',
    },
    {
      question: 'Posso usar qualquer musica?',
      answer: 'Temos biblioteca de musicas licenciadas e trending. Voce tambem pode usar musicas populares direto no Instagram/TikTok.',
    },
    {
      question: 'Os videos ficam com marca dagua?',
      answer: 'No plano pago, nao. Voce recebe videos limpos, prontos para postar como se fossem seus.',
    },
    {
      question: 'Quanto custa?',
      answer: 'A partir de R$97/mes para 30 videos. Planos maiores para criadores profissionais. 7 dias gratis para testar.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
              <Video className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">
              Reels<span className="text-pink-500">IA</span>
            </span>
          </div>
          <a
            href="#cadastro"
            className="bg-pink-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-pink-600 transition hidden sm:block"
          >
            Testar Gratis
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Crie Videos com IA
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Crie Reels e TikToks{' '}
                <span className="text-pink-500">Virais</span>{' '}
                em Minutos
              </h1>

              <p className="text-base sm:text-xl text-gray-600 mb-8">
                A IA transforma suas ideias em videos prontos para postar.
                <strong> Legendas, musicas e edicao automatica.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#cadastro"
                  className="bg-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-pink-600 transition flex items-center justify-center gap-2 shadow-lg shadow-pink-500/30"
                >
                  Criar Meu Primeiro Video
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-pink-500" />
                  5 videos gratis
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-pink-500" />
                  Sem cartao
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-pink-500" />
                  Pronto em minutos
                </div>
              </div>
            </div>

            {/* Video Preview */}
            <div className="relative">
              <div className="bg-gray-900 rounded-[2rem] p-2 shadow-2xl max-w-[280px] mx-auto">
                <div className="aspect-[9/16] bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-[1.5rem] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-white/30 backdrop-blur rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                    <p className="text-white font-medium">Video de Exemplo</p>
                  </div>
                  {/* Fake captions */}
                  <div className="absolute bottom-8 left-4 right-4">
                    <div className="bg-black/70 backdrop-blur rounded-lg p-3">
                      <p className="text-white text-sm text-center font-medium">
                        Legendas animadas que prendem atencao
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-4 top-20 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2">
                <Music className="w-5 h-5 text-pink-500" />
                <span className="text-sm font-medium">Musica viral</span>
              </div>
              <div className="absolute -right-4 bottom-32 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2">
                <Type className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-medium">Legendas auto</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-8 sm:py-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-gray-500 text-sm mb-6">Crie para todas as plataformas</p>
          <div className="flex flex-wrap justify-center gap-4">
            {formats.map((f) => (
              <div key={f.name} className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                <f.icon className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-600">{f.name}</span>
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
              <p className="text-3xl sm:text-5xl font-bold text-pink-400 mb-2">1M+</p>
              <p className="text-gray-400 text-sm">videos criados</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
              <p className="text-3xl sm:text-5xl font-bold text-green-400 mb-2">50x</p>
              <p className="text-gray-400 text-sm">mais rapido</p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
              <p className="text-3xl sm:text-5xl font-bold text-blue-400 mb-2">80%</p>
              <p className="text-gray-400 text-sm">mais retencao</p>
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
              Tudo Que Voce Precisa Para Viralizar
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <b.icon className="w-6 h-6 text-pink-500" />
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
              +50.000 criadores usam
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
      <section id="cadastro" className="py-12 sm:py-20 px-4 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Crie Seu Primeiro Video Agora
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            5 videos gratis. Sem cartao. Pronto em minutos.
          </p>

          {submitted ? (
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Obrigado!</h3>
              <p className="text-pink-100">Voce recebera acesso em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor email"
                required
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-pink-300"
              />
              <button
                type="submit"
                className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2"
              >
                Criar Video
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          )}

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-pink-100 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              +50.000 criadores
            </div>
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4" />
              1M+ videos criados
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Pronto em minutos
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
              <Video className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white">ReelsIA</span>
          </div>
          <p className="text-sm">2024 ReelsIA. Todos os direitos reservados.</p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-white transition">Termos</a>
            <a href="#" className="hover:text-white transition">Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
