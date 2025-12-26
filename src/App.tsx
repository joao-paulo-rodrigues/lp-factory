import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import all LPs
import CarrinhoAbandonado from './sites/carrinhoabandonado'
import Agendamento from './sites/agendamento'
import IAAdvogados from './sites/ia-advogados'
import DescricaoProdutos from './sites/descricao-produtos'
import GeradorVideos from './sites/gerador-videos'
import AutomacaoCobranca from './sites/automacao-cobranca'
import DefaultSite from './sites/_default'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Pages */}
        <Route path="/recupera-carrinho" element={<CarrinhoAbandonado />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/ia-advogados" element={<IAAdvogados />} />
        <Route path="/descricao-produtos" element={<DescricaoProdutos />} />
        <Route path="/gerador-videos" element={<GeradorVideos />} />
        <Route path="/automacao-cobranca" element={<AutomacaoCobranca />} />

        {/* Default - Lista todas as LPs */}
        <Route path="/" element={<DefaultSite />} />
        <Route path="*" element={<DefaultSite />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
