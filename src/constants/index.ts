import { CardType, SelectOption } from "../types";

export const CARD_TYPE_OPTIONS: SelectOption<string, CardType>[] = [
	{
		label: "Credit card",
		value: "credit",
	},
	{
		label: "Debit",
		value: "debit",
	},
	{
		label: "Mastercard",
		value: "mastercard",
	},
];

export const TOP_BUTTONS: { label: string }[] = [
	{
		label: "1",
	},
	{
		label: "2",
	},
	{
		label: "3",
	},
];
