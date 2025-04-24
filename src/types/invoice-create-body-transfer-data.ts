import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * If specified, the funds from the invoice will be transferred to the destination and the ID of the resulting transfer will be found on the invoice's charge.
 */
export type InvoiceCreateBodyTransferData = {
  amount?: number | undefined;
  destination: string;
};

/**
 * @internal
 * InvoiceCreateBodyTransferData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBodyTransferData = {
  amount?: number | undefined;
  destination: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBodyTransferData
 */
const SchemaIn$InvoiceCreateBodyTransferData: z.ZodType<
  InvoiceCreateBodyTransferData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    destination: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      destination: "destination",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBodyTransferData
 */
const SchemaOut$InvoiceCreateBodyTransferData: z.ZodType<
  External$InvoiceCreateBodyTransferData, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBodyTransferData // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    destination: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      destination: "destination",
    });
  });

export const Schemas$InvoiceCreateBodyTransferData = {
  in: SchemaIn$InvoiceCreateBodyTransferData,
  out: SchemaOut$InvoiceCreateBodyTransferData,
};
