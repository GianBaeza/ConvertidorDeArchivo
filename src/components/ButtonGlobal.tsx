import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}
export default function ButtonGlobal({ title, ...props }: ButtonProps) {
  return (
    <button className=" text-gray-500 py-2 px-6 rounded " {...props}>
      {title}
    </button>
  );
}
