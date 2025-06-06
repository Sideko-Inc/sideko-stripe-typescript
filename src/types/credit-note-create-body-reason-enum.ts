/**
 * Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
 */
export type CreditNoteCreateBodyReasonEnum =
  | "duplicate"
  | "fraudulent"
  | "order_change"
  | "product_unsatisfactory";
