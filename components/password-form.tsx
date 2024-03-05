"use client";
import { login } from "@/actions";
import { useFormState } from "react-dom";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

export default function PasswordForm() {
  const [state, formAction] = useFormState<any, FormData>(login, undefined);

  return (
    <>
      <style jsx>{`
        .error {
          animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        }
        @keyframes shake {
          10%,
          90% {
            transform: translatex(-1px);
          }

          20%,
          80% {
            transform: translatex(2px);
          }

          30%,
          50%,
          70% {
            transform: translatex(-4px);
          }

          40%,
          60% {
            transform: translatex(4px);
          }
        }
      `}</style>
      <form action={formAction} className="flex flex-col gap-4 max-w-xs">
        <label className="flex flex-col gap-2">
          Name
          <input className="text-black" type="text" name="name" required />
        </label>

        {/* <label className="flex flex-col gap-2">
        Email
        <input className="text-black" type="email" required />
      </label> */}
        <label className="flex flex-col gap-2">
          Access Code
          <input
            className="text-black"
            name="password"
            type="password"
            required
          />
          <small className="tex-sm">
            You should have received an access code. If not reach out.
          </small>
        </label>

        <button type="submit" className="border p-3 rounded-lg">
          Submit
        </button>

        {state?.error && (
          <div className="text-red-400 gap-1 flex error">
            <ExclamationCircleIcon className="w-6 h-auto" />
            <p className="">{state.error}</p>
          </div>
        )}
      </form>
    </>
  );
}
