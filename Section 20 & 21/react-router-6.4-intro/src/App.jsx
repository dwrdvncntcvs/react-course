import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import BlogLayout from "./pages/BlogLayout";
import BlogPostsPage, { loader } from "./pages/BlogPosts";
import NewPostPage, { postFormAction } from "./pages/NewPost";
import PostDetailPage, { postDetailsLoader } from "./pages/PostDetail";
import RootLayout from "./components/RootLayout";
import WelcomePage from "./pages/Welcome";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<WelcomePage />} />
      <Route path="/blog" element={<BlogLayout />}>
        <Route index element={<BlogPostsPage />} loader={loader} />
        <Route
          path=":id"
          element={<PostDetailPage />}
          loader={postDetailsLoader}
        />
      </Route>
      <Route path="/blog/new" element={<NewPostPage />} action={postFormAction} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
