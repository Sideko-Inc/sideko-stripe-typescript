import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineUpdateManyBodyLinesItemPeriod
 */
export type InvoiceLineUpdateManyBodyLinesItemPeriod = {
  end: number;
  start: number;
};

/**
 * @internal
 * InvoiceLineUpdateManyBodyLinesItemPeriod without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineUpdateManyBodyLinesItemPeriod = {
  end: number;
  start: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineUpdateManyBodyLinesItemPeriod
 */
const SchemaIn$InvoiceLineUpdateManyBodyLinesItemPeriod: z.ZodType<
  InvoiceLineUpdateManyBodyLinesItemPeriod, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineUpdateManyBodyLinesItemPeriod
 */
const SchemaOut$InvoiceLineUpdateManyBodyLinesItemPeriod: z.ZodType<
  External$InvoiceLineUpdateManyBodyLinesItemPeriod, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineUpdateManyBodyLinesItemPeriod // the object to be transformed
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

export const Schemas$InvoiceLineUpdateManyBodyLinesItemPeriod = {
  in: SchemaIn$InvoiceLineUpdateManyBodyLinesItemPeriod,
  out: SchemaOut$InvoiceLineUpdateManyBodyLinesItemPeriod,
};
