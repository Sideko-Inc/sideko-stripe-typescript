import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CreditNotePreviewLinesRefundsItem
 */
export type CreditNotePreviewLinesRefundsItem = {
  amountRefunded?: number | undefined;
  refund?: string | undefined;
};

/**
 * @internal
 * CreditNotePreviewLinesRefundsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreditNotePreviewLinesRefundsItem = {
  amount_refunded?: number | undefined;
  refund?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreditNotePreviewLinesRefundsItem
 */
const SchemaIn$CreditNotePreviewLinesRefundsItem: z.ZodType<
  CreditNotePreviewLinesRefundsItem, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreditNotePreviewLinesRefundsItem
 */
const SchemaOut$CreditNotePreviewLinesRefundsItem: z.ZodType<
  External$CreditNotePreviewLinesRefundsItem, // output type of this zod object
  z.ZodTypeDef,
  CreditNotePreviewLinesRefundsItem // the object to be transformed
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

export const Schemas$CreditNotePreviewLinesRefundsItem = {
  in: SchemaIn$CreditNotePreviewLinesRefundsItem,
  out: SchemaOut$CreditNotePreviewLinesRefundsItem,
};
