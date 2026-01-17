import { arrowCluster } from "../types";
import { UpDownBtn } from "./UpDownBtn";

export const ArrowCluster = () => {
  return (
    <div className="absolute -right-1 bottom-0 grid grid-cols-3 gap-2 scale-[.95]">
      {arrowCluster.map((item, i) =>
        item ? (
          <UpDownBtn key={i} firstElm={item.icon}></UpDownBtn>
        ) : (
          <div key={i} />
        )
      )}
    </div>
  );
};
