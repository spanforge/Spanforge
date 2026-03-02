import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import BackToTop from './components/BackToTop.jsx'
import Home from './pages/Home.jsx'
import LlmDiffHome from './pages/LlmDiffHome.jsx'
import LlmDiffDocs from './pages/LlmDiffDocs.jsx'
import SchemaHome from './pages/SchemaHome.jsx'
import SchemaDocs from './pages/SchemaDocs.jsx'
import NotFound from './pages/NotFound.jsx'

function AppRoutes() {
  const location = useLocation()
  return (
    <div key={location.pathname} className="route-outlet">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/llm-diff" element={<LlmDiffHome />} />
        <Route path="/llm-diff/docs" element={<LlmDiffDocs />} />
        <Route path="/llm-diff/docs/*" element={<LlmDiffDocs />} />
        <Route path="/llm-toolkit-schema" element={<SchemaHome />} />
        <Route path="/llm-toolkit-schema/docs" element={<SchemaDocs />} />
        <Route path="/llm-toolkit-schema/docs/*" element={<SchemaDocs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
      <BackToTop />
    </BrowserRouter>
  )
}
