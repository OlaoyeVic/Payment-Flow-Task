import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonalInfo from './pages/PersonalInfo';
import BillingInfo from './pages/BillingInfo';
import ConfirmPayment from './pages/ConfirmPayment';
import CompletedPurchase from './pages/CompletedPurchase';

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/" element={<PersonalInfo />} />
          <Route path='/billing-info' element={<BillingInfo />} />
          <Route path="/confirm-payment" element={<ConfirmPayment />} />
          <Route path='/completed-purchase' element={<CompletedPurchase />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
