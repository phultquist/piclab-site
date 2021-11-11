import { FunctionComponent } from "react";
import Link from "next/link";

export default function SignUp(): FunctionComponent {
  return (
    <div className="border-2 border-gray-300 flex flex-row p-2 rounded-lg overflow-hidden shadow-sm divide-x">
      <input placeholder="Enter email" className="p-2 outline-none" />
      <Link href="/request-beta">
        <a className="text-primary font-bold">Request Beta</a>
      </Link>
    </div>
  );
}
