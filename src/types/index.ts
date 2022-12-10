export type CardType = "credit" | "debit" | "mastercard";

export type SelectOption<T = string, U = string> = {
	label: T;
	value: U;
};
