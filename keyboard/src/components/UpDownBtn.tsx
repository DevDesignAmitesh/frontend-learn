import type { UpDownButtonProps } from "../types";

export const UpDownBtn = ({ firstElm }: UpDownButtonProps) => {
  return (
    <div className="h-9 w-15 rounded-xl bg-[#0A090D] flex flex-col justify-center items-center text-neutral-100 text-xs font-semibold gap-2 hover:scale-[.95] transition duration-200 border-t-2 border-neutral-600 shadow-lg shadow-neutral-400 hover:shadow-neutral-800">
      {firstElm}
    </div>
  );
};
