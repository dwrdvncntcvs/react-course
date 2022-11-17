import { useState } from "react";
import {
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";

import NewPostForm from "../components/NewPostForm";
import { savePost } from "../util/api";

function NewPostPage() {
  const data = useActionData();
  function cancelHandler() {
    navigate("/blog");
  }
  const navigation = useNavigation();

  return (
    <>
      {data && data.status === 422 && <p>{data.message}</p>}
      <NewPostForm
        onCancel={cancelHandler}
        submitting={navigation.state === "submitting"}
      />
    </>
  );
}

export default NewPostPage;

export const postFormAction = async ({ request }) => {
  const formData = await request.formData();
  console.log("Form Data: ", formData);
  const post = {
    title: formData.get("title"),
    body: formData.get("post-text"),
  };

  try {
    await savePost(post);
  } catch (err) {
    if (err.status === 422) {
      return err;
    }
    throw err;
  }

  return redirect("/blog");
};
