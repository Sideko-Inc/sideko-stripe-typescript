/**
 * The type of source this transaction is attached to.
 */
export type SourceTransactionTypeEnum =
  | "ach_credit_transfer"
  | "ach_debit"
  | "alipay"
  | "bancontact"
  | "card"
  | "card_present"
  | "eps"
  | "giropay"
  | "ideal"
  | "klarna"
  | "multibanco"
  | "p24"
  | "sepa_debit"
  | "sofort"
  | "three_d_secure"
  | "wechat";
