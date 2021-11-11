import { FunctionComponent } from "react";

type TagProps = {
  text: string;
};

export default function Tag({ text }): FunctionComponent<TagProps> {
  return (
    <div className="border border-white backdrop-blur-2xl bg-opacity-5 py-1 px-4  inline-block rounded-full">
      <span className="mr-2 text-white opacity-30">#</span>
      <span className="text-white">{text}</span>
    </div>
  );
}
