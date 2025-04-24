import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CreditNoteCreateBodyRefundsItem
 */
export type CreditNoteCreateBodyRefundsItem = {
  amountRefunded?: number | undefined;
  refund?: string | undefined;
};

/**
 * @internal
 * CreditNoteCreateBodyRefundsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreditNoteCreateBodyRefundsItem = {
  amount_refunded?: number | undefined;
  refund?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreditNoteCreateBodyRefundsItem
 */
const SchemaIn$CreditNoteCreateBodyRefundsItem: z.ZodType<
  CreditNoteCreateBodyRefundsItem, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreditNoteCreateBodyRefundsItem
 */
const SchemaOut$CreditNoteCreateBodyRefundsItem: z.ZodType<
  External$CreditNoteCreateBodyRefundsItem, // output type of this zod object
  z.ZodTypeDef,
  CreditNoteCreateBodyRefundsItem // the object to be transformed
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

export const Schemas$CreditNoteCreateBodyRefundsItem = {
  in: SchemaIn$CreditNoteCreateBodyRefundsItem,
  out: SchemaOut$CreditNoteCreateBodyRefundsItem,
};
