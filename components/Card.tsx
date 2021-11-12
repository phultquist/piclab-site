import { FunctionComponent } from "react";

export default function Card({ children }): FunctionComponent {
  return <div className="bg-white rounded-2xl shadow-md p-2">{children}</div>;
}

export function CardHeader({ children }): FunctionComponent {
  return <h3 className="p-4 text-2xl">{children}</h3>;
}

export function CardBody({ children }): FunctionComponent {
  return <div className="p-9">{children}</div>;
}

export function CardSummary({ children }): FunctionComponent {
  return <div className="p-4 text-gray-400 text-xs">{children}</div>;
}

export function CardDescription({ children }): FunctionComponent {
  return <div className="p-4 text-gray-600 text-s">{children}</div>;
}

export function CardImage({ src }): FunctionComponent {
  return (
    <>
      <img src="Showoff.png" alt="" className="rounded-xl" />
    </>
    // <img className="h-32 w-full object-cover" src={src} alt="Card Image" />
  );
}
