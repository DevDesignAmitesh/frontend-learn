import type { ButtonProps } from "../types";

export const Button = ({ align, firstElm, type }: ButtonProps) => {
  return (
    <div
      className={`h-15 rounded-xl bg-[#0A090D] flex flex-col justify-end py-2 px-4 text-neutral-100 text-xs font-semibold gap-2 hover:scale-[.95] transition duration-200 border-t-2 border-neutral-600 shadow-lg shadow-neutral-400 hover:shadow-neutral-800
      ${align === "left" ? "items-start" : "items-end"}
      ${type === "sm" ? "w-24" : type === "md" ? "w-30" : "w-34"}
    `}
    >
      {firstElm}
    </div>
  );
};
