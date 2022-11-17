import React from "react";
import { useRouter } from "next/router";

export default function DetailsPage() {
  const router = useRouter();
  const query = router.query;
  console.log("Queries: ", query);

  return (
    <div>
      <h1>Details Page</h1>
      <p>ID: "{query.newsId}"</p>
    </div>
  );
}
