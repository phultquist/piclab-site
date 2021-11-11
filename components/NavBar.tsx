import { FunctionComponent } from "react";
import Link from "next/link";
import { SignUp } from "./";

export default function NavBar(): FunctionComponent {
  return (
    <div className="fixed bottom-4 px-4 w-full z-50">
      <div className="rounded-xl bg-white grid grid-cols-3 w-full overflow-hidden p-2 shadow-lg">
        <SignUp />
        <div className="my-auto text-center">Logo</div>
        <div className="my-auto text-right">Sign In</div>
      </div>
    </div>
  );
}
