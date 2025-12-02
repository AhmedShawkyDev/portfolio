
"use client";

import { usePathname } from "next/navigation";


export function route() {
  const path = usePathname()
  return path
}