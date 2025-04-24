import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineCreateManyBodyInvoiceMetadataObj0
 */
export type InvoiceLineCreateManyBodyInvoiceMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * InvoiceLineCreateManyBodyInvoiceMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineCreateManyBodyInvoiceMetadataObj0 = {
  [additionalProperty: string]:
    | External$InvoiceLineCreateManyBodyInvoiceMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineCreateManyBodyInvoiceMetadataObj0
 */
const SchemaIn$InvoiceLineCreateManyBodyInvoiceMetadataObj0: z.ZodType<
  InvoiceLineCreateManyBodyInvoiceMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineCreateManyBodyInvoiceMetadataObj0
 */
const SchemaOut$InvoiceLineCreateManyBodyInvoiceMetadataObj0: z.ZodType<
  External$InvoiceLineCreateManyBodyInvoiceMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineCreateManyBodyInvoiceMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$InvoiceLineCreateManyBodyInvoiceMetadataObj0 = {
  in: SchemaIn$InvoiceLineCreateManyBodyInvoiceMetadataObj0,
  out: SchemaOut$InvoiceLineCreateManyBodyInvoiceMetadataObj0,
};
