/* eslint-disable @next/next/no-img-element */
"use client";

import dynamic from "next/dynamic";
import React from "react";

const BlogsPage = dynamic(() => import("@/components/BlogsPage"), {
  ssr: false,
});

const Page = () => {
  return <BlogsPage />;
};

export default Page;
