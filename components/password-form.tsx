import { getSession, login } from "@/lib";
import { revalidatePath } from "next/cache";

export default async function PasswordForm() {
  const session = await getSession();
  return (
    <form
      action={async (formData) => {
        "use server";
        await login(formData);
        revalidatePath;
      }}
      className="flex flex-col gap-4 max-w-xs"
    >
      <label className="flex flex-col gap-2">
        Name
        <input className="text-black" type="name" required />
      </label>

      <label className="flex flex-col gap-2">
        Email
        <input className="text-black" type="email" required />
      </label>
      <label className="flex flex-col gap-2">
        Access Code
        <input className="text-black" type="password" required />
        <small className="tex-sm">
          You should have received an access code. If not reach out.
        </small>
      </label>
      <button type="submit" className="border p-3 rounded-lg">
        Submit
      </button>
    </form>
  );
}
