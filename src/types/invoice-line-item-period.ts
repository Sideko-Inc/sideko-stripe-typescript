import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoiceLineItemPeriod = {
  /**
   * The end of the period, which must be greater than or equal to the start. This value is inclusive.
   */
  end: number;
  /**
   * The start of the period. This value is inclusive.
   */
  start: number;
};

/**
 * @internal
 * InvoiceLineItemPeriod without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineItemPeriod = {
  end: number;
  start: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineItemPeriod
 */
const SchemaIn$InvoiceLineItemPeriod: z.ZodType<
  InvoiceLineItemPeriod, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineItemPeriod
 */
const SchemaOut$InvoiceLineItemPeriod: z.ZodType<
  External$InvoiceLineItemPeriod, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineItemPeriod // the object to be transformed
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

export const Schemas$InvoiceLineItemPeriod = {
  in: SchemaIn$InvoiceLineItemPeriod,
  out: SchemaOut$InvoiceLineItemPeriod,
};
