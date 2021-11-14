import React, { FunctionComponent } from "react";
import Image from 'next/image';

const Card: FunctionComponent<{ children: Element | Element[] }> = props => {
  return <div className="bg-white rounded-2xl shadow-md p-2">{props.children}</div>;
}

const CardHeader: FunctionComponent<{ children: React.Component }> = props => {
  return <h3 className="p-4 text-2xl">{props.children}</h3>;
}

const CardBody: FunctionComponent<{ children: React.Component }> = props => {
  return <div className="p-6">{props.children}</div>;
}

const CardSummary: FunctionComponent<{ children: React.Component | Element | string }> = props => {  
  return <div className="p-4 text-gray-400 text-xs">{props.children}</div>;
}

const CardDescription: FunctionComponent<{ children: React.Component }> = props => {
  return <div className="p-4 text-gray-600 text-s">{props.children}</div>;
}

const CardImage: FunctionComponent<{ src: string }> = props => {
  return (
    <>
      <img src={props.src} alt="" className="rounded-xl" />
      {/* <div className="w-full h-full overflow-hidden bg-red-500">
        <Image src={props.src} layout="fill" />
      </div> */}
    </>
    // <img className="h-32 w-full object-cover" src={src} alt="Card Image" />
  );
}

export default Card;
export { CardHeader, CardBody, CardSummary, CardDescription, CardImage };