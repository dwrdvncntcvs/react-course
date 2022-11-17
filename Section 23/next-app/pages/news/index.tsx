import React from "react";
import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-great">NextJS is great</Link>
        </li>
        <li>Something else</li>
      </ul>
    </>
  );
}
