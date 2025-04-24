import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * QuoteCreateBodyTransferDataObj0
 */
export type QuoteCreateBodyTransferDataObj0 = {
  amount?: number | undefined;
  amountPercent?: number | undefined;
  destination: string;
};

/**
 * @internal
 * QuoteCreateBodyTransferDataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuoteCreateBodyTransferDataObj0 = {
  amount?: number | undefined;
  amount_percent?: number | undefined;
  destination: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuoteCreateBodyTransferDataObj0
 */
const SchemaIn$QuoteCreateBodyTransferDataObj0: z.ZodType<
  QuoteCreateBodyTransferDataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuoteCreateBodyTransferDataObj0
 */
const SchemaOut$QuoteCreateBodyTransferDataObj0: z.ZodType<
  External$QuoteCreateBodyTransferDataObj0, // output type of this zod object
  z.ZodTypeDef,
  QuoteCreateBodyTransferDataObj0 // the object to be transformed
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

export const Schemas$QuoteCreateBodyTransferDataObj0 = {
  in: SchemaIn$QuoteCreateBodyTransferDataObj0,
  out: SchemaOut$QuoteCreateBodyTransferDataObj0,
};
