import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceUpdateBodyTransferDataObj0
 */
export type InvoiceUpdateBodyTransferDataObj0 = {
  amount?: number | undefined;
  destination: string;
};

/**
 * @internal
 * InvoiceUpdateBodyTransferDataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyTransferDataObj0 = {
  amount?: number | undefined;
  destination: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyTransferDataObj0
 */
const SchemaIn$InvoiceUpdateBodyTransferDataObj0: z.ZodType<
  InvoiceUpdateBodyTransferDataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyTransferDataObj0
 */
const SchemaOut$InvoiceUpdateBodyTransferDataObj0: z.ZodType<
  External$InvoiceUpdateBodyTransferDataObj0, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyTransferDataObj0 // the object to be transformed
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

export const Schemas$InvoiceUpdateBodyTransferDataObj0 = {
  in: SchemaIn$InvoiceUpdateBodyTransferDataObj0,
  out: SchemaOut$InvoiceUpdateBodyTransferDataObj0,
};
