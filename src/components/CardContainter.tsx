import React from "react";

export default function CardContainter({
  style,
  children,
}: {
  children: React.ReactNode;
  style: string;
}) {
  return (
    <div
      className={`bg-white flex ${style} item-center justify-center p-4 rounded shadow w-[600px] h-[400px] px-4`}
    >
      {children}
    </div>
  );
}
