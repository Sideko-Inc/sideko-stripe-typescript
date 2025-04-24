import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The pricing information for the invoice item.
 */
export type InvoiceLineUpdateBodyPricing = {
  price?: string | undefined;
};

/**
 * @internal
 * InvoiceLineUpdateBodyPricing without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineUpdateBodyPricing = {
  price?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineUpdateBodyPricing
 */
const SchemaIn$InvoiceLineUpdateBodyPricing: z.ZodType<
  InvoiceLineUpdateBodyPricing, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    price: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      price: "price",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineUpdateBodyPricing
 */
const SchemaOut$InvoiceLineUpdateBodyPricing: z.ZodType<
  External$InvoiceLineUpdateBodyPricing, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineUpdateBodyPricing // the object to be transformed
> = z
  .object({
    price: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      price: "price",
    });
  });

export const Schemas$InvoiceLineUpdateBodyPricing = {
  in: SchemaIn$InvoiceLineUpdateBodyPricing,
  out: SchemaOut$InvoiceLineUpdateBodyPricing,
};
