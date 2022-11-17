import { Suspense, useEffect, useState } from "react";
import { defer, useLoaderData, Await } from "react-router-dom";

import Posts from "../components/Posts";
import { getPosts } from "../util/api";

function BlogPostsPage() {
  const loaderData = useLoaderData();

  return (
    <>
      <h1>Our Blog Posts</h1>
      <Suspense fallback={<p>loading..</p>}>
        <Await
          resolve={loaderData.posts}
          errorElement={<p>error loading blog post</p>}
        >
          {(loadedPost) => <Posts blogPosts={loadedPost} />}
        </Await>
      </Suspense>
    </>
  );
}

export default BlogPostsPage;

export const loader = async () => {
  return defer({ posts: getPosts() });
};
