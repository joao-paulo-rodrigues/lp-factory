import { Rocket, ShoppingCart, Calendar, Scale, FileText, Video, Receipt, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function DefaultSite() {
  const lps = [
    {
      path: '/recupera-carrinho',
      name: 'Recupera Carrinho',
      description: 'Recupere carrinhos abandonados via WhatsApp',
      icon: ShoppingCart,
      color: 'green',
      status: 'active'
    },
    {
      path: '/agendamento',
      name: 'Agendamento WhatsApp',
      description: 'Sistema de agendamento via WhatsApp',
      icon: Calendar,
      color: 'blue',
      status: 'active'
    },
    {
      path: '/ia-advogados',
      name: 'IA para Advogados',
      description: 'Inteligência Artificial para escritórios',
      icon: Scale,
      color: 'purple',
      status: 'active'
    },
    {
      path: '/descricao-produtos',
      name: 'Descrição de Produtos',
      description: 'Gere descrições com IA para e-commerce',
      icon: FileText,
      color: 'orange',
      status: 'active'
    },
    {
      path: '/gerador-videos',
      name: 'Gerador de Vídeos',
      description: 'Crie Reels e TikToks com IA',
      icon: Video,
      color: 'pink',
      status: 'active'
    },
    {
      path: '/automacao-cobranca',
      name: 'Automação de Cobrança',
      description: 'Cobre inadimplentes via WhatsApp',
      icon: Receipt,
      color: 'red',
      status: 'active'
    },
  ]

  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    green: { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30' },
    blue: { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' },
    purple: { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30' },
    orange: { bg: 'bg-orange-500/20', text: 'text-orange-400', border: 'border-orange-500/30' },
    pink: { bg: 'bg-pink-500/20', text: 'text-pink-400', border: 'border-pink-500/30' },
    red: { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/30' },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-4 py-12 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-green-600 rounded-2xl mb-4 sm:mb-6">
            <Rocket className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Robotizese</h1>
          <p className="text-lg sm:text-xl text-gray-400">
            Soluções de Automação e IA para seu Negócio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {lps.map((lp) => {
            const colors = colorClasses[lp.color]
            return (
              <Link
                key={lp.path}
                to={lp.path}
                className={`group p-5 sm:p-6 bg-white/5 backdrop-blur rounded-xl sm:rounded-2xl border ${colors.border} hover:bg-white/10 transition-all hover:scale-[1.02]`}
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <lp.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${colors.text}`} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 flex items-center gap-2">
                  {lp.name}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm sm:text-base text-gray-400">{lp.description}</p>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-500 text-sm">
            Robotizese &copy; 2024 - Automacao e Inteligencia Artificial
          </p>
        </div>
      </div>
    </div>
  )
}
