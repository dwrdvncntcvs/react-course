import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";
import CommentsLink from "./components/Links/CommentsLink";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Quotes from "./pages/Quotes";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetails = React.lazy(() => import("./pages/QuoteDetails"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
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
      </Suspense>
    </Layout>
  );
}

export default App;
