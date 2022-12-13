import { useState } from "react";
import { Barcode, Button, CircleButton, SelectRow } from "./components";
import { CARD_TYPE_OPTIONS, TOP_BUTTONS } from "./constants";
import { CardType } from "./types";
import { ReactComponent as ApplePay } from "./assets/icons/apple-pay.svg";
import { ReactComponent as PayPal } from "./assets/icons/paypal.svg";

const App = () => {
  const [cardType, setCardType] = useState<CardType>("credit");
  const [sameBilling, setSameBilling] = useState<boolean>(false);

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      {/* Buttons */}
      <div className="mb-[25px] flex w-[328px] items-center justify-evenly">
        {TOP_BUTTONS.map(({ label }) => (
          <CircleButton key={label}>{label}</CircleButton>
        ))}
      </div>

      {/* Receipt */}
      <div className="c-card w-[328px] px-5 py-4">
        <p className="mb-3 text-center font-bold leading-5">CHECK OUT</p>

        {/* Card type*/}
        <p className="mb-3 border-y border-black py-[5px] text-xs font-bold leading-[14px]">
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
        <p className="border-y border-black py-[5px] text-xs font-bold leading-[14px]">
          Name on card
        </p>
        <p className="py-[5px] text-xs font-bold leading-[14px] text-blue-400">
          Jane Doe
        </p>

        {/* Card - Header */}
        <div className="flex border-y border-black">
          <div className="w-full border-r border-black py-[5px]">
            <p className="text-xs font-bold leading-[14px]">Card number</p>
          </div>

          <div className="shrink-0 py-[5px] pl-[7px]">
            <p className="text-xs font-bold leading-[14px]">Security code</p>
          </div>
        </div>

        {/* Card - Data */}
        <div className="flex border-b border-black">
          <div className="w-full border-r border-black py-[5px]">
            <p className="text-xs font-bold leading-[14px] text-blue-400">
              83974 7392 37924
            </p>
          </div>

          <div className="shrink-0 py-[5px] pl-[7px]">
            <p className="w-[94px] text-right text-xs font-bold leading-[14px]">
              ...
            </p>
          </div>
        </div>
        <p className="border-b border-black py-[5px] text-xs font-bold leading-[14px]">
          Expiration date
        </p>
        <p className="py-[5px] text-xs font-bold leading-[14px] text-blue-400">
          24/05/2024
        </p>

        {/* Billing */}
        <div className="border-y border-black pt-[23px] pb-[21px]">
          <div
            className="flex items-center"
            onClick={() => setSameBilling((value) => !value)}
          >
            <div className="mx-[11px] flex h-3 w-3 shrink-0 items-center justify-center rounded-full border border-black">
              {sameBilling && (
                <div className="h-2 w-2 rounded-full bg-blue-400" />
              )}
            </div>

            <p className="text-xs">
              My billing address is the same as my shipping address
            </p>
          </div>
        </div>

        {/* Scan */}
        <p className="my-2.5 text-center font-bold">THANK YOU!</p>
        <Barcode className="mx-auto" />
      </div>

      {/* Confirm */}
      <p className="mt-10 mb-5">OR CHECKOUT THROUGH ANOTHER PAYMENT METHOD</p>

      {/* Confirm buttons */}
      <div className="mb-[14px] flex items-center space-x-10">
        {/* Apple Pay */}
        <CircleButton>
          <ApplePay />
        </CircleButton>

        {/* PayPal */}
        <CircleButton>
          <PayPal />
        </CircleButton>
      </div>

      {/* Continue button*/}
      <Button className="max-w-[328px]">Confirm and continue</Button>
    </main>
  );
};

export default App;
