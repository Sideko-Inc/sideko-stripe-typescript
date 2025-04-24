import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineCreateManyBodyLinesItemPricing
 */
export type InvoiceLineCreateManyBodyLinesItemPricing = {
  price?: string | undefined;
};

/**
 * @internal
 * InvoiceLineCreateManyBodyLinesItemPricing without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineCreateManyBodyLinesItemPricing = {
  price?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineCreateManyBodyLinesItemPricing
 */
const SchemaIn$InvoiceLineCreateManyBodyLinesItemPricing: z.ZodType<
  InvoiceLineCreateManyBodyLinesItemPricing, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineCreateManyBodyLinesItemPricing
 */
const SchemaOut$InvoiceLineCreateManyBodyLinesItemPricing: z.ZodType<
  External$InvoiceLineCreateManyBodyLinesItemPricing, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineCreateManyBodyLinesItemPricing // the object to be transformed
> = z
  .object({
    price: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      price: "price",
    });
  });

export const Schemas$InvoiceLineCreateManyBodyLinesItemPricing = {
  in: SchemaIn$InvoiceLineCreateManyBodyLinesItemPricing,
  out: SchemaOut$InvoiceLineCreateManyBodyLinesItemPricing,
};
