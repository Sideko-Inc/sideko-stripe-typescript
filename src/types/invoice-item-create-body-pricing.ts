import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The pricing information for the invoice item.
 */
export type InvoiceItemCreateBodyPricing = {
  price?: string | undefined;
};

/**
 * @internal
 * InvoiceItemCreateBodyPricing without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceItemCreateBodyPricing = {
  price?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceItemCreateBodyPricing
 */
const SchemaIn$InvoiceItemCreateBodyPricing: z.ZodType<
  InvoiceItemCreateBodyPricing, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceItemCreateBodyPricing
 */
const SchemaOut$InvoiceItemCreateBodyPricing: z.ZodType<
  External$InvoiceItemCreateBodyPricing, // output type of this zod object
  z.ZodTypeDef,
  InvoiceItemCreateBodyPricing // the object to be transformed
> = z
  .object({
    price: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      price: "price",
    });
  });

export const Schemas$InvoiceItemCreateBodyPricing = {
  in: SchemaIn$InvoiceItemCreateBodyPricing,
  out: SchemaOut$InvoiceItemCreateBodyPricing,
};
