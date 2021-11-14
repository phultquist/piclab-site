import { FunctionComponent } from "react";

export interface BadgeProps {
  text: string;
};

const Badge: FunctionComponent<BadgeProps> = props => {
  const { text } = props;
  return (<p className="border font-idlewild text-[0.5rem] font-semibold border-secondary text-secondary py-1 px-2 inline-block rounded-lg uppercase">{text}</p>);
}

export default Badge;