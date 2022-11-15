import { Routes, Route, Navigate, Link } from "react-router-dom";
import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";
import CommentsLink from "./components/Links/CommentsLink";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import QuoteDetails from "./pages/QuoteDetails";
import Quotes from "./pages/Quotes";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/quotes" index element={<Quotes />} />
        <Route path="/quotes/:quoteId/" element={<QuoteDetails />}>
          <Route path="" element={<CommentsLink />} />
          <Route path="comments" element={<Comments />} />
        </Route>
        <Route path="/new-quote" element={<NewQuote />} />
        <Route path="/" element={<Navigate to="/quotes" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
