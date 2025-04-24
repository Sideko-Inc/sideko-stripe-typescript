/**
 * The `type` of the source. The `type` is a payment method, one of `ach_credit_transfer`, `ach_debit`, `alipay`, `bancontact`, `card`, `card_present`, `eps`, `giropay`, `ideal`, `multibanco`, `klarna`, `p24`, `sepa_debit`, `sofort`, `three_d_secure`, or `wechat`. An additional hash is included on the source with a name matching this value. It contains additional information specific to the [payment method](https://stripe.com/docs/sources) used.
 */
export type SourceTypeEnum =
  | "ach_credit_transfer"
  | "ach_debit"
  | "acss_debit"
  | "alipay"
  | "au_becs_debit"
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
