import { NextResponse, NextRequest } from "next/server";
import { v4 as uuidv4 } from "uuid";
import {
  COOKIE_EXPIRATION_DATE,
  USER_SESSION_ID_COOKIE_NAME,
} from "./constants/cookie";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const session = request.cookies.get(USER_SESSION_ID_COOKIE_NAME);

  if (!session?.name) {
    const sessionID = uuidv4().replaceAll("-", "");

    const newSession = {
      name: USER_SESSION_ID_COOKIE_NAME,
      value: sessionID,
      expires: COOKIE_EXPIRATION_DATE,
      httpOnly: true,
      secure: true,
      sameSite: true,
    };

    response.cookies.set(newSession);
  }

  return response;
}
