import { Rocket, Plus } from 'lucide-react'

export default function DefaultSite() {
  const sites = [
    { domain: 'carrinhoabandonado.com.br', name: 'Carrinho Abandonado', status: 'active' },
    // Add more sites here as they're created
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-2xl mb-6">
            <Rocket className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold mb-4">LP Factory</h1>
          <p className="text-xl text-gray-400">
            Sistema de Landing Pages Multi-Domínio
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            Sites Ativos
          </h2>
          <div className="space-y-4">
            {sites.map((site) => (
              <div
                key={site.domain}
                className="flex items-center justify-between p-4 bg-white/5 rounded-xl"
              >
                <div>
                  <p className="font-medium">{site.name}</p>
                  <p className="text-sm text-gray-400">{site.domain}</p>
                </div>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                  {site.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur rounded-2xl p-8">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Como adicionar nova LP
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-300">
            <li>Crie pasta em <code className="bg-white/10 px-2 py-1 rounded">src/sites/novasite/</code></li>
            <li>Adicione <code className="bg-white/10 px-2 py-1 rounded">index.tsx</code> com o componente</li>
            <li>Registre o domínio em <code className="bg-white/10 px-2 py-1 rounded">src/App.tsx</code></li>
            <li>Adicione rota no Traefik</li>
            <li>Deploy: <code className="bg-white/10 px-2 py-1 rounded">./deploy.sh</code></li>
          </ol>
        </div>

        <p className="text-center text-gray-500 mt-8 text-sm">
          Valoy/Robotizese LP Factory v1.0
        </p>
      </div>
    </div>
  )
}
