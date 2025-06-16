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
      className={`bg-white/70  ${style} p-4 rounded shadow w-[600px] min-h-[450px] md:h-[400px] px-4`}
    >
      {children}
    </div>
  );
}
