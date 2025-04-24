/**
 * An enumerated value providing a more detailed explanation on [how to proceed with an error](https://stripe.com/docs/declines#retrying-issuer-declines).
 */
export type ChargeOutcomeAdviceCodeEnum =
  | "confirm_card_data"
  | "do_not_try_again"
  | "try_again_later";
