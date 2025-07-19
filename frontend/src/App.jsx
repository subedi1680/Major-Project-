import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
