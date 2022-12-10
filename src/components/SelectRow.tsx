import classNames from "classnames";
import { FC } from "react";

interface IProps {
  label: string;
  value: string;
  selected: boolean;
  onChange: (value: string) => void;
  className?: string;
}

const SelectRow: FC<IProps> = ({
  label,
  value,
  selected,
  onChange,
  className,
}) => {
  return (
    <div
      className={classNames("flex items-center justify-between", className)}
      onClick={() => {
        onChange(value);
      }}
    >
      <p className="text-xs">{label}</p>

      <div className="w-3 h-3 rounded-full border border-black flex items-center justify-center">
        {selected && <div className="w-2 h-2 rounded-full bg-black" />}
      </div>
    </div>
  );
};

export default SelectRow;
