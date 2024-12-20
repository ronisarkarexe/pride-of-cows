import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/home.page";
import CheckoutPage from "./components/checkout/checkout-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
