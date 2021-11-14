import React, { FunctionComponent } from "react";
import Image from 'next/image';
import { PrismicImage } from '../utils/types';

interface ElementProps {
  children: JSX.Element | JSX.Element[] | string;
}

const Card: FunctionComponent<ElementProps> = props => {
  return <div className="bg-white rounded-2xl shadow-md p-2 pb-0 max-w-[90vw]">{props.children}</div>;
}

const CardHeader: FunctionComponent<ElementProps> = props => {
  return <h3 className="p-4 text-2xl strong-primary">{props.children}</h3>;
}

const CardBody: FunctionComponent<ElementProps> = props => {
  return <div className="p-6">{props.children}</div>;
}

const CardSummary: FunctionComponent<ElementProps> = props => {
  return <div className="p-4 text-gray-400 text-xs">{props.children}</div>;
}

const CardDescription: FunctionComponent<ElementProps> = props => {
  return <div className="p-4 text-gray-500 text-s">{props.children}</div>;
}

export default Card;
export { CardHeader, CardBody, CardSummary, CardDescription };