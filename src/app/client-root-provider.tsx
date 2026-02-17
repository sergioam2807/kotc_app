"use client";
import { ReactNode } from "react";
import AuthProviderWrapper from "@/components/AuthProviderWrapper";

export default function ClientRootProvider({ children }: { children: ReactNode }) {
  return <AuthProviderWrapper>{children}</AuthProviderWrapper>;
}