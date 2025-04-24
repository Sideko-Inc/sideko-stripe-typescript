/**
 * The bank account type. This can only be `checking` or `savings` in most countries. In Japan, this can only be `futsu` or `toza`.
 */
export type AccountBankAccountUpdateBodyAccountTypeEnum =
  | "checking"
  | "futsu"
  | "savings"
  | "toza";
