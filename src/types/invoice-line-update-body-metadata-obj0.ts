import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineUpdateBodyMetadataObj0
 */
export type InvoiceLineUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * InvoiceLineUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$InvoiceLineUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineUpdateBodyMetadataObj0
 */
const SchemaIn$InvoiceLineUpdateBodyMetadataObj0: z.ZodType<
  InvoiceLineUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineUpdateBodyMetadataObj0
 */
const SchemaOut$InvoiceLineUpdateBodyMetadataObj0: z.ZodType<
  External$InvoiceLineUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$InvoiceLineUpdateBodyMetadataObj0 = {
  in: SchemaIn$InvoiceLineUpdateBodyMetadataObj0,
  out: SchemaOut$InvoiceLineUpdateBodyMetadataObj0,
};
