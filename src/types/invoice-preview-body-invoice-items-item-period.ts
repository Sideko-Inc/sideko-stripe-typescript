import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoicePreviewBodyInvoiceItemsItemPeriod
 */
export type InvoicePreviewBodyInvoiceItemsItemPeriod = {
  end: number;
  start: number;
};

/**
 * @internal
 * InvoicePreviewBodyInvoiceItemsItemPeriod without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePreviewBodyInvoiceItemsItemPeriod = {
  end: number;
  start: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePreviewBodyInvoiceItemsItemPeriod
 */
const SchemaIn$InvoicePreviewBodyInvoiceItemsItemPeriod: z.ZodType<
  InvoicePreviewBodyInvoiceItemsItemPeriod, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePreviewBodyInvoiceItemsItemPeriod
 */
const SchemaOut$InvoicePreviewBodyInvoiceItemsItemPeriod: z.ZodType<
  External$InvoicePreviewBodyInvoiceItemsItemPeriod, // output type of this zod object
  z.ZodTypeDef,
  InvoicePreviewBodyInvoiceItemsItemPeriod // the object to be transformed
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

export const Schemas$InvoicePreviewBodyInvoiceItemsItemPeriod = {
  in: SchemaIn$InvoicePreviewBodyInvoiceItemsItemPeriod,
  out: SchemaOut$InvoicePreviewBodyInvoiceItemsItemPeriod,
};
