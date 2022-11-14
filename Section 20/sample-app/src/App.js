import { Routes, Route, Navigate } from "react-router-dom";
import NewQuote from "./pages/NewQuote";
import QuoteDetails from "./pages/QuoteDetails";
import Quotes from "./pages/Quotes";

function App() {
  return (
    <Routes>
      <Route path="/quotes" index element={<Quotes />} />
      <Route path="/quotes/:quoteId" element={<QuoteDetails />} />
      <Route path="/new-quote" element={<NewQuote />} />
      <Route path="*" element={<Navigate to="/quotes" replace />} />
    </Routes>
  );
}

export default App;
