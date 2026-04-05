// src/app/kien-thuc/actions.ts
"use server";

import { getPostsByCategory } from "@/lib/api";

export async function fetchMoreNews(cursor: string) {
  const data = await getPostsByCategory("kien-thuc", 6, cursor);
  return data;
}