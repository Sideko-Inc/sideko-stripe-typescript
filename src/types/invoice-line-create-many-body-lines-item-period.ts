import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineCreateManyBodyLinesItemPeriod
 */
export type InvoiceLineCreateManyBodyLinesItemPeriod = {
  end: number;
  start: number;
};

/**
 * @internal
 * InvoiceLineCreateManyBodyLinesItemPeriod without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineCreateManyBodyLinesItemPeriod = {
  end: number;
  start: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineCreateManyBodyLinesItemPeriod
 */
const SchemaIn$InvoiceLineCreateManyBodyLinesItemPeriod: z.ZodType<
  InvoiceLineCreateManyBodyLinesItemPeriod, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    end: z.number().int(),
    start: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      end: "end",
      start: "start",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineCreateManyBodyLinesItemPeriod
 */
const SchemaOut$InvoiceLineCreateManyBodyLinesItemPeriod: z.ZodType<
  External$InvoiceLineCreateManyBodyLinesItemPeriod, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineCreateManyBodyLinesItemPeriod // the object to be transformed
> = z
  .object({
    end: z.number().int(),
    start: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      end: "end",
      start: "start",
    });
  });

export const Schemas$InvoiceLineCreateManyBodyLinesItemPeriod = {
  in: SchemaIn$InvoiceLineCreateManyBodyLinesItemPeriod,
  out: SchemaOut$InvoiceLineCreateManyBodyLinesItemPeriod,
};
