import { FunctionComponent } from "react";

export default function Card({ children }): FunctionComponent {
  return (
    <div className="border border-white backdrop-blur inline">{children}</div>
  );
}
