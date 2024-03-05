import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Simple Password Protection Next JS.</h1>
      <p>
        Here is a simple password protected feature for Next JS using{" "}
        <em>Middleware</em>, <em>JSON Web Tokens (JWT)</em>, <em>cookies</em>,
        and <em>environment variables</em> for the password.
      </p>
      <p className="mt-3">
        To view the protected page, nagivate to{" "}
        <Link
          className="underline border px-2 ml-1 py-1"
          href="/protected-page"
        >
          here
        </Link>
      </p>
    </>
  );
}
