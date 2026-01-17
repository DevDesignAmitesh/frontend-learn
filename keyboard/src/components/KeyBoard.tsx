import { btnItems } from "../types";
import { ArrowCluster } from "./ArrowCluster";
import { Button } from "./Button";
import { EmptyCircleBtn } from "./EmptyCircleBtn";
import { SmallButton } from "./SmallButton";
import { SpaceBar } from "./SpaceBar";

export const KeyBoard = () => {
  return (
    <div className="relative h-auto w-full max-w-4xl bg-[#27272A] p-2 pb-3 rounded-xl space-y-1">
      <div className="space-y-1">
        {btnItems.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1">
            {row.map((item, index) => {
              switch (item.kind) {
                case "small":
                  return (
                    <SmallButton
                      key={index}
                      firstElm={item.firstElm}
                      secondElm={item.secondElm}
                    />
                  );

                case "button":
                  if (item.firstElm === "Space") {
                    return <SpaceBar key={index} />;
                  }

                  return (
                    <Button
                      key={index}
                      firstElm={item.firstElm}
                      type={item.type}
                      align={item.align}
                    />
                  );

                case "backspace":
                  return <EmptyCircleBtn key={index} />;

                default:
                  return null;
              }
            })}
          </div>
        ))}
      </div>
      {/* Arrow cluster */}
      <ArrowCluster />
    </div>
  );
};
