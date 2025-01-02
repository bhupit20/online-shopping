"use server";

import { cookies } from "next/headers";
import { cache } from "react";

import { USER_SESSION_ID_COOKIE_NAME } from "@/constants/cookie";

export const getSession = cache(async () => {
  const cookieStore = await cookies();

  const sessionId = cookieStore.get(USER_SESSION_ID_COOKIE_NAME);

  return sessionId;
});
