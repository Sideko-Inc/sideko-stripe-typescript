import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineUpdateManyBodyInvoiceMetadataObj0
 */
export type InvoiceLineUpdateManyBodyInvoiceMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * InvoiceLineUpdateManyBodyInvoiceMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineUpdateManyBodyInvoiceMetadataObj0 = {
  [additionalProperty: string]:
    | External$InvoiceLineUpdateManyBodyInvoiceMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineUpdateManyBodyInvoiceMetadataObj0
 */
const SchemaIn$InvoiceLineUpdateManyBodyInvoiceMetadataObj0: z.ZodType<
  InvoiceLineUpdateManyBodyInvoiceMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineUpdateManyBodyInvoiceMetadataObj0
 */
const SchemaOut$InvoiceLineUpdateManyBodyInvoiceMetadataObj0: z.ZodType<
  External$InvoiceLineUpdateManyBodyInvoiceMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineUpdateManyBodyInvoiceMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$InvoiceLineUpdateManyBodyInvoiceMetadataObj0 = {
  in: SchemaIn$InvoiceLineUpdateManyBodyInvoiceMetadataObj0,
  out: SchemaOut$InvoiceLineUpdateManyBodyInvoiceMetadataObj0,
};
