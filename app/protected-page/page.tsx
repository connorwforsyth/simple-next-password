import { getSession } from "@/actions";
import PasswordForm from "@/components/password-form";

export default async function ProtectedPage() {
  const session = await getSession();
  console.log(session);
  return session.isLoggiedIn ? (
    <>Hey {session.name} You are authorised</>
  ) : (
    <div>
      <p>This page has some hidden content. You are not authorised.</p>
      <p>To access, Please enter the following:</p>
      <PasswordForm />
    </div>
  );
}
