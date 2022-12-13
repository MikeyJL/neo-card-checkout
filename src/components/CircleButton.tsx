import classNames from "classnames";
import { FC, PropsWithChildren } from "react";

interface IProps {
  className?: string;
  innerClassName?: string;
}

/** Circle neomorphic button. */
const CircleButton: FC<PropsWithChildren<IProps>> = ({
  className,
  innerClassName,
  children,
}) => {
  return (
    <button className={classNames("neo h-12 w-12 rounded-full", className)}>
      <div
        className={classNames(
          "flex h-full w-full items-center justify-center rounded-full p-2",
          innerClassName
        )}
      >
        {children}
      </div>
    </button>
  );
};

export default CircleButton;
