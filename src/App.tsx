import { useEffect, useState } from 'react'

// Import all sites
import CarrinhoAbandonado from './sites/carrinhoabandonado'
import DefaultSite from './sites/_default'

// Site registry - add new sites here
const SITES: Record<string, React.ComponentType> = {
  // Production domains
  'carrinhoabandonado.com.br': CarrinhoAbandonado,
  'www.carrinhoabandonado.com.br': CarrinhoAbandonado,

  // Add more sites here:
  // 'agendazap.com.br': AgendaZap,
  // 'recuperazap.com.br': RecuperaZap,

  // Preview domain (shows default/selector)
  'lp.robotizese.com.br': DefaultSite,

  // Localhost for development
  'localhost': DefaultSite,
}

// Subdomains for preview (lp-*.robotizese.com.br)
const PREVIEW_SUBDOMAIN_REGEX = /^lp-(.+)\.robotizese\.com\.br$/

function App() {
  const [SiteComponent, setSiteComponent] = useState<React.ComponentType | null>(null)
  const [siteName, setSiteName] = useState<string>('')

  useEffect(() => {
    const hostname = window.location.hostname

    // Check direct domain match
    if (SITES[hostname]) {
      setSiteComponent(() => SITES[hostname])
      setSiteName(hostname)
      return
    }

    // Check preview subdomain (lp-carrinhoabandonado.robotizese.com.br)
    const previewMatch = hostname.match(PREVIEW_SUBDOMAIN_REGEX)
    if (previewMatch) {
      const previewSite = previewMatch[1]
      // Try to find matching site
      const matchingDomain = Object.keys(SITES).find(domain =>
        domain.includes(previewSite) || domain.startsWith(previewSite)
      )
      if (matchingDomain && SITES[matchingDomain]) {
        setSiteComponent(() => SITES[matchingDomain])
        setSiteName(`preview:${previewSite}`)
        return
      }
    }

    // Default fallback
    setSiteComponent(() => DefaultSite)
    setSiteName('default')
  }, [])

  if (!SiteComponent) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    )
  }

  return (
    <>
      {/* Debug banner in development */}
      {import.meta.env.DEV && (
        <div className="fixed bottom-0 left-0 right-0 bg-black/80 text-white text-xs p-2 z-50 flex justify-between">
          <span>LP Factory | Site: {siteName}</span>
          <span>Host: {window.location.hostname}</span>
        </div>
      )}
      <SiteComponent />
    </>
  )
}

export default App
