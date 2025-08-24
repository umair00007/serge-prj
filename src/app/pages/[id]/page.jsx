"use client";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { id } = useParams();

  return <div className="text-3xl text-black">Comming soon {id}</div>;
};

export default page;
