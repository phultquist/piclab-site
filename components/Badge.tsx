import { FunctionComponent } from "react";
import Link from "next/link";

type BadgeProps = {
  text: string;
};

export default function Badge({ text }): FunctionComponent<BadgeProps> {
  return <p className="border font-idlewind border-secondary text-secondary py-1 px-2 inline-block rounded-lg uppercase">{text}</p>;
}
