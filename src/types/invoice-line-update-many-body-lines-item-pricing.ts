import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineUpdateManyBodyLinesItemPricing
 */
export type InvoiceLineUpdateManyBodyLinesItemPricing = {
  price?: string | undefined;
};

/**
 * @internal
 * InvoiceLineUpdateManyBodyLinesItemPricing without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineUpdateManyBodyLinesItemPricing = {
  price?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineUpdateManyBodyLinesItemPricing
 */
const SchemaIn$InvoiceLineUpdateManyBodyLinesItemPricing: z.ZodType<
  InvoiceLineUpdateManyBodyLinesItemPricing, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineUpdateManyBodyLinesItemPricing
 */
const SchemaOut$InvoiceLineUpdateManyBodyLinesItemPricing: z.ZodType<
  External$InvoiceLineUpdateManyBodyLinesItemPricing, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineUpdateManyBodyLinesItemPricing // the object to be transformed
> = z
  .object({
    price: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      price: "price",
    });
  });

export const Schemas$InvoiceLineUpdateManyBodyLinesItemPricing = {
  in: SchemaIn$InvoiceLineUpdateManyBodyLinesItemPricing,
  out: SchemaOut$InvoiceLineUpdateManyBodyLinesItemPricing,
};
