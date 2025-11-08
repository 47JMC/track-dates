import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

function DisplayBox({ title, children }: Props) {
  return (
    <div className="font-ubuntu-mono">
      <p className="text-cyan-700">{title}</p>
      <p className="text-yellow-600 text-xl">{children}</p>
    </div>
  );
}

export default DisplayBox;
