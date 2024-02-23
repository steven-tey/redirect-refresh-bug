import { redirect } from "next/navigation";

export default async function NewLinkPage() {
  // fake delay 2s
  await new Promise((res) => setTimeout(res, 2000));

  redirect(`/?redirected=true`);
}
