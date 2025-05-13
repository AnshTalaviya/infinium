import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FAQs from './components/FAQs'
import Contact from './components/Contact'
import InvestmentPlans from './components/InvestmentPlans'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import TermsAndConditions from './components/TermsAndConditions'

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
            <Route path="/terms" element={<TermsAndConditions />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
