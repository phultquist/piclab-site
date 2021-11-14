import { FunctionComponent } from "react";

interface EmailFormProps {
  border?: boolean;
}

const EmailForm: FunctionComponent<EmailFormProps> = props => {
  return (
    <form action="">
      <div className={`${props.border ? "border-2 border-gray-300" : "border-0"} flex flex-row p-2 rounded-lg overflow-hidden shadow-sm divide-x bg-white w-full`}>
        <div className="w-full flex items-center">
          <i aria-hidden className="far fa-envelope text-black opacity-50 pl-3 mr-2 pt-1" />
          <input placeholder="Enter email" type="email" className="p-2 outline-none w-28 flex-grow" />
        </div>
        <div className="mx-auto pl-2">
          <button type="submit" className="text-primary inline-block font-bold p-2 text-center w-full cursor-pointer whitespace-nowrap">
            <p className="">Request Beta</p>
          </button>
        </div>
      </div>
    </form>
  );
};

export default EmailForm
