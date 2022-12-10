import { useState } from "react";
import { SelectRow } from "./components";
import { CARD_TYPE_OPTIONS } from "./constants";
import { CardType } from "./types";

const App = () => {
  const [cardType, setCardType] = useState<CardType>("credit");

  return (
    <main className="flex flex-col items-center justify-center h-screen w-screen">
      {/* Receipt */}
      <div className="c-card w-[328px] px-5 py-4">
        <p className="text-center font-bold leading-5 mb-3">CHECK OUT</p>

        {/* Card type*/}
        <hr className="c-rule" />
        <p className="leading-[14px] mt-1 mb-1.5 font-bold text-xs">
          Card type
        </p>
        <hr className="c-rule mb-3" />
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
      </div>
    </main>
  );
};

export default App;
