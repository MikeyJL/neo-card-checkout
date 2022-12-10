import classNames from "classnames";
import { FC } from "react";

interface IProps {
  className?: string;
}

const Barcode: FC<IProps> = ({ className }) => {
  const bars: number[] = (() => {
    let width = 132;
    const maxBar = 6;
    const minBar = 1;
    const barsList: number[] = [];

    while (width > 0) {
      const bar = Math.floor(Math.random() * (maxBar - minBar + 1) + minBar);
      barsList.push(bar);
      width -= bar;
    }

    return barsList;
  })();

  return (
    <div className={classNames("flex w-fit border-x border-black", className)}>
      {bars.map((bar, index) => (
        <div
          style={{
            width: bar,
          }}
          className={classNames("h-8", {
            "bg-black": index % 2 === 0,
          })}
        />
      ))}
    </div>
  );
};

export default Barcode;
