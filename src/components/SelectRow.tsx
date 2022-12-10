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

      <div className="flex h-3 w-3 items-center justify-center rounded-full border border-black">
        {selected && <div className="h-2 w-2 rounded-full bg-blue-400" />}
      </div>
    </div>
  );
};

export default SelectRow;
