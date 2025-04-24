import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The pricing information for the invoice item.
 */
export type InvoiceItemUpdateBodyPricing = {
  price?: string | undefined;
};

/**
 * @internal
 * InvoiceItemUpdateBodyPricing without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceItemUpdateBodyPricing = {
  price?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceItemUpdateBodyPricing
 */
const SchemaIn$InvoiceItemUpdateBodyPricing: z.ZodType<
  InvoiceItemUpdateBodyPricing, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceItemUpdateBodyPricing
 */
const SchemaOut$InvoiceItemUpdateBodyPricing: z.ZodType<
  External$InvoiceItemUpdateBodyPricing, // output type of this zod object
  z.ZodTypeDef,
  InvoiceItemUpdateBodyPricing // the object to be transformed
> = z
  .object({
    price: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      price: "price",
    });
  });

export const Schemas$InvoiceItemUpdateBodyPricing = {
  in: SchemaIn$InvoiceItemUpdateBodyPricing,
  out: SchemaOut$InvoiceItemUpdateBodyPricing,
};
