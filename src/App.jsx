import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import BackToTop from './components/BackToTop.jsx'
import Home from './pages/Home.jsx'
import LlmDiffHome from './pages/LlmDiffHome.jsx'
import LlmDiffDocs from './pages/LlmDiffDocs.jsx'
import StandardHome from './pages/StandardHome.jsx'
import StandardSpec from './pages/StandardSpec.jsx'
import Feedback from './pages/Feedback.jsx'
import TutorialsDocs from './pages/TutorialsDocs.jsx'
import AgentObsHome from './pages/AgentObsHome.jsx'
import AgentObsDocs from './pages/AgentObsDocs.jsx'
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
        <Route path="/standard" element={<StandardHome />} />
        <Route path="/standard/spec" element={<StandardSpec />} />
        <Route path="/standard/feedback" element={<Feedback />} />
        <Route path="/learn" element={<TutorialsDocs />} />
        <Route path="/learn/*" element={<TutorialsDocs />} />
        <Route path="/sdk" element={<AgentObsHome />} />
        <Route path="/sdk/docs" element={<AgentObsDocs />} />
        <Route path="/sdk/docs/*" element={<AgentObsDocs />} />
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
