import { FunctionComponent } from "react";
import Link from "next/link";
import { SignUp } from "./";

export default function NavBar(): FunctionComponent {
  return (
    <div className="fixed bottom-4 px-4 w-full z-50">
      <div className="rounded-xl bg-white flex flex-row justify-between w-full overflow-hidden p-2 shadow-lg">
        <SignUp />
        <div>Logo</div>
        <div>Sign In</div>
      </div>
    </div>
  );
}
