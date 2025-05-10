import type { ReactNode } from "react";

export interface JobProps {
  title: string;
  icon: ReactNode;
  bgColor: string;
}

export const Job = ({ title, icon, bgColor }: JobProps) => {
  return (
    <div
      className={`flex aspect-square flex-col items-center justify-center rounded-lg border p-4 ${bgColor}`}
    >
      {icon}
      <span className="font-popi text-sm">{title}</span>
    </div>
  );
};
