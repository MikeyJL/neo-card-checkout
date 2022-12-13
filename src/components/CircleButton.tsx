import classNames from "classnames";
import { FC } from "react";

interface IProps {
  label: string;
  className?: string;
  innerClassName?: string;
}

/** Circle neomorphic button. */
const CircleButton: FC<IProps> = ({ label, className, innerClassName }) => {
  return (
    <button className={classNames("neo h-12 w-12 rounded-full", className)}>
      <div
        className={classNames(
          "flex h-full w-full items-center justify-center rounded-full p-2",
          innerClassName
        )}
      >
        <p>{label}</p>
      </div>
    </button>
  );
};

export default CircleButton;
