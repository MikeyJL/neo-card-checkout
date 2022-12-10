import { useState } from "react";
import { SelectRow } from "./components";
import { CARD_TYPE_OPTIONS } from "./constants";
import { CardType } from "./types";

const App = () => {
  const [cardType, setCardType] = useState<CardType>("credit");
  const [sameBilling, setSameBilling] = useState<boolean>(false);

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      {/* Receipt */}
      <div className="c-card w-[328px] px-5 py-4">
        <p className="mb-3 text-center font-bold leading-5">CHECK OUT</p>

        {/* Card type*/}
        <p className="mb-3 border-y border-black pt-1 pb-1.5 text-xs font-bold leading-[14px]">
          Card type
        </p>
        {CARD_TYPE_OPTIONS.map((type) => (
          <SelectRow
            key={type.value}
            label={type.label}
            value={type.value}
            className="mb-2.5"
            selected={cardType === type.value}
            onChange={(type) => setCardType(type as CardType)}
          />
        ))}
        {/* Name */}
        <p className="mb-6 border-y border-black pt-1 pb-1.5 text-xs font-bold leading-[14px]">
          Name on card
        </p>

        {/* Card */}
        <div className="flex border-y border-black">
          <div className="w-full border-r border-black pt-1 pb-1.5">
            <p className="text-xs font-bold leading-[14px]">Card number</p>
          </div>

          <div className="shrink-0 pt-1 pb-1.5 pl-[7px]">
            <p className="text-xs font-bold leading-[14px]">Security code</p>
          </div>
        </div>
        <div className="flex border-b border-black">
          <div className="w-full border-r border-black" />

          <div className="shrink-0 pt-1 pb-1.5 pl-[7px]">
            <div className="h-[12px] w-[94px]" />
          </div>
        </div>
        <p className="mb-6 border-b border-black pt-1 pb-1.5 text-xs font-bold leading-[14px]">
          Expiration date
        </p>

        {/* Billing */}
        <div className="border-y border-black pt-[23px] pb-[21px]">
          <div
            className="flex items-center"
            onClick={() => setSameBilling((value) => !value)}
          >
            <div className="mx-[11px] flex h-3 w-3 shrink-0 items-center justify-center rounded-full border border-black">
              {sameBilling && <div className="h-2 w-2 rounded-full bg-black" />}
            </div>

            <p className="text-xs">
              My billing address is the same as my shipping address
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
