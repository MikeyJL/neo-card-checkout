import classNames from "classnames";
import { FC, PropsWithChildren } from "react";

interface IProps {
  className?: string;
}

/** Primary styled button. */
const Button: FC<PropsWithChildren<IProps>> = ({ className, children }) => {
  return (
    <button
      className={classNames(
        "neo w-full rounded-[50px] py-2 font-bold",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
