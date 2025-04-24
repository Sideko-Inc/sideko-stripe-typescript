/**
 * Type of this credit note, one of `pre_payment` or `post_payment`. A `pre_payment` credit note means it was issued when the invoice was open. A `post_payment` credit note means it was issued when the invoice was paid.
 */
export type CreditNoteTypeEnum = "post_payment" | "pre_payment";
