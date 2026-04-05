// src/app/tin-tuc/actions.ts
"use server";

import { getPostsByCategory } from "@/lib/api";

export async function fetchMoreNews(cursor: string) {
  const data = await getPostsByCategory("tin-tuc", 6, cursor);
  return data;
}