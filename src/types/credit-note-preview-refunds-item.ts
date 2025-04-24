import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CreditNotePreviewRefundsItem
 */
export type CreditNotePreviewRefundsItem = {
  amountRefunded?: number | undefined;
  refund?: string | undefined;
};

/**
 * @internal
 * CreditNotePreviewRefundsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreditNotePreviewRefundsItem = {
  amount_refunded?: number | undefined;
  refund?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreditNotePreviewRefundsItem
 */
const SchemaIn$CreditNotePreviewRefundsItem: z.ZodType<
  CreditNotePreviewRefundsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_refunded: z.number().int().optional(),
    refund: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_refunded: "amountRefunded",
      refund: "refund",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreditNotePreviewRefundsItem
 */
const SchemaOut$CreditNotePreviewRefundsItem: z.ZodType<
  External$CreditNotePreviewRefundsItem, // output type of this zod object
  z.ZodTypeDef,
  CreditNotePreviewRefundsItem // the object to be transformed
> = z
  .object({
    amountRefunded: z.number().int().optional(),
    refund: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountRefunded: "amount_refunded",
      refund: "refund",
    });
  });

export const Schemas$CreditNotePreviewRefundsItem = {
  in: SchemaIn$CreditNotePreviewRefundsItem,
  out: SchemaOut$CreditNotePreviewRefundsItem,
};
