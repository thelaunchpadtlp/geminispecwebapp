import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Architecture from './components/sections/Architecture'
import HMI from './components/sections/HMI'
import LLMOS from './components/sections/LLMOS'
import MCP from './components/sections/MCP'
import VPN from './components/sections/VPN'
import GodApp from './components/godapp/GodApp'

function MainApp() {
  return (
    <>
      {/* Holographic background grid */}
      <div className="holographic-grid" aria-hidden="true" />

      {/* Spatial orbs */}
      <div className="orb bg-[#8a2be2] w-96 h-96 top-20 left-10 animate-pulse-slow" aria-hidden="true" />
      <div className="orb bg-[#00f0ff] w-[500px] h-[500px] bottom-40 right-0 animate-pulse-slow" style={{ animationDelay: '2s' }} aria-hidden="true" />
      <div className="orb bg-[#ff00ff] w-64 h-64 top-1/2 left-1/2 animate-pulse-slow" style={{ animationDelay: '4s', opacity: 0.15 }} aria-hidden="true" />

      <Navbar />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-28">
        <Hero />
        <Architecture />
        <HMI />
        <LLMOS />
        <MCP />
        <VPN />
      </main>

      <Footer />
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/godapp" element={<GodApp />} />
        <Route path="/godapp/*" element={<GodApp />} />
      </Routes>
    </HashRouter>
  )
}
