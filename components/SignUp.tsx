import { FunctionComponent } from "react";
import Link from "next/link";

export default function SignUp(): FunctionComponent {
  return (
    <div className="border-2 border-gray-300 flex flex-row p-2 rounded-lg overflow-hidden shadow-sm divide-x">
      <div className="w-full flex-shrink">
        <input placeholder="Enter email" className="p-2 outline-none" />
      </div>
      <div className="mx-auto pl-2">
        <Link href="/request-beta">
          <a className="text-primary inline-block font-bold p-2 text-center w-full cursor-pointer whitespace-nowrap">
            <p className="">Request Beta</p>
          </a>
        </Link>
      </div>
    </div>
  );
}
