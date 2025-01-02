import React from "react";
import { Metadata } from "next";
import { USER_METADATA } from "@/constants/seoConstants";
import UserNavBar from "@/components/UserNavBar";

export const metadata: Metadata = USER_METADATA;

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UserNavBar />
      <div className="flex-grow px-16">{children}</div>
    </>
  );
}
