import { NextRequest } from "next/server";
import { updateSession } from "./lib";

export async function middleware(request: NextRequest) {
  console.log(request);

  return;
  await updateSession(request);
}
