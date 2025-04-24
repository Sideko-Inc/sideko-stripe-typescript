import { External$Refund, Refund, Schemas$Refund } from "./refund";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CreditNoteRefund = {
  /**
   * Amount of the refund that applies to this credit note, in cents (or local equivalent).
   */
  amountRefunded: number;
  /**
   * ID of the refund.
   */
  refund: string | Refund;
};

/**
 * @internal
 * CreditNoteRefund without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreditNoteRefund = {
  amount_refunded: number;
  refund: string | External$Refund;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreditNoteRefund
 */
const SchemaIn$CreditNoteRefund: z.ZodType<
  CreditNoteRefund, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_refunded: z.number().int(),
    refund: z.union([z.string(), z.lazy(() => Schemas$Refund.in)]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_refunded: "amountRefunded",
      refund: "refund",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreditNoteRefund
 */
const SchemaOut$CreditNoteRefund: z.ZodType<
  External$CreditNoteRefund, // output type of this zod object
  z.ZodTypeDef,
  CreditNoteRefund // the object to be transformed
> = z
  .object({
    amountRefunded: z.number().int(),
    refund: z.union([z.string(), z.lazy(() => Schemas$Refund.out)]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountRefunded: "amount_refunded",
      refund: "refund",
    });
  });

export const Schemas$CreditNoteRefund = {
  in: SchemaIn$CreditNoteRefund,
  out: SchemaOut$CreditNoteRefund,
};
