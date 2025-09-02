// app/auth/callback/page.tsx
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AuthCallback() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    // Optional: Insert user into DB if needed
    redirect("/dashboard"); // or wherever you want to land
  } else {
    redirect("/auth/login");
  }
}
