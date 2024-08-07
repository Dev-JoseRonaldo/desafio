interface TitleProps {
  text: string;
}

export const GraphTitle = ({ text }: TitleProps) => (
  <h1 className="text-xl font-bold text-center">{text}</h1>
);
