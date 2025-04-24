/**
 * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
 */
export type SetupIntentPaymentMethodOptionsCardMandateOptionsAmountTypeEnum =
  | "fixed"
  | "maximum";
