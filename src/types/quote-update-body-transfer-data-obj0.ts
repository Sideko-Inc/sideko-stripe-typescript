import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * QuoteUpdateBodyTransferDataObj0
 */
export type QuoteUpdateBodyTransferDataObj0 = {
  amount?: number | undefined;
  amountPercent?: number | undefined;
  destination: string;
};

/**
 * @internal
 * QuoteUpdateBodyTransferDataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuoteUpdateBodyTransferDataObj0 = {
  amount?: number | undefined;
  amount_percent?: number | undefined;
  destination: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuoteUpdateBodyTransferDataObj0
 */
const SchemaIn$QuoteUpdateBodyTransferDataObj0: z.ZodType<
  QuoteUpdateBodyTransferDataObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    amount_percent: z.number().optional(),
    destination: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amount_percent: "amountPercent",
      destination: "destination",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuoteUpdateBodyTransferDataObj0
 */
const SchemaOut$QuoteUpdateBodyTransferDataObj0: z.ZodType<
  External$QuoteUpdateBodyTransferDataObj0, // output type of this zod object
  z.ZodTypeDef,
  QuoteUpdateBodyTransferDataObj0 // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    amountPercent: z.number().optional(),
    destination: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amountPercent: "amount_percent",
      destination: "destination",
    });
  });

export const Schemas$QuoteUpdateBodyTransferDataObj0 = {
  in: SchemaIn$QuoteUpdateBodyTransferDataObj0,
  out: SchemaOut$QuoteUpdateBodyTransferDataObj0,
};
