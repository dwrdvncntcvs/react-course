import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import BlogPost from "../components/BlogPost";
import { getPost } from "../util/api";

function PostDetailPage() {
  const post = useLoaderData();
  console.log("Post: ", post)
  // const [error, setError] = useState();
  // const [post, setPost] = useState();
  // const [isLoading, setIsLoading] = useState(false);

  // const params = useParams();
  // const { id } = params;

  // useEffect(() => {
  //   async function loadPost() {
  //     setIsLoading(true);
  //     try {
  //       const post = await getPost(id);
  //       setPost(post);
  //     } catch (err) {
  //       setError(err.message);
  //     }
  //     setIsLoading(false);
  //   }

  //   loadPost();
  // }, [id]);

  return (
    <>
      <BlogPost title={post.title} text={post.body} />
    </>
  );
}

export default PostDetailPage;

export const postDetailsLoader = ({ params }) => {
  const { id: postId } = params;
  return getPost(postId);
};
