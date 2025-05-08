import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FAQs from './components/FAQs'
import Contact from './components/Contact'
import InvestmentPlans from './components/InvestmentPlans'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/plans" element={<InvestmentPlans />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
