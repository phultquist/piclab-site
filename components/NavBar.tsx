import { FunctionComponent } from "react";
import Link from "next/link";
import { EmailForm, Logo } from "./";

const NavBar: FunctionComponent = () => {
  return (
    <div className="fixed bottom-4 px-4 w-full z-50">
      <div className="rounded-xl shadow-3xl bg-white flex flex-row justify-between w-full overflow-hidden p-2 ">
        <div className="hidden w-1/3 md:block">
          <EmailForm border />
        </div>
        <div className="my-auto text-center w-1/3">
          <div className="w-28 m-2 md:p-0 md:mx-auto">
            <Logo />
          </div>
        </div>
        <div className="my-auto text-right w-1/3">
          <button className="text-primary font-bold hover:bg-gray-100 rounded-md py-2 px-4 mr-2 transition-all">
            <i aria-hidden className="fas fa-sign-in fa-lg mr-2" />
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;