import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import ProjectDetail from './pages/ProjectDetail'
import Contact from './pages/Contact'
import WebDesign from './pages/services/WebDesign'
import WebDevelopment from './pages/services/WebDevelopment'
import AppDevelopment from './pages/services/AppDevelopment'
import Branding from './pages/services/Branding'
import SEO from './pages/services/SEO'
import ContentWriting from './pages/services/ContentWriting'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/branding" element={<Branding />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/content-writing" element={<ContentWriting />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/project/:category/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
