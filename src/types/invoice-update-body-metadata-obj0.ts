import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceUpdateBodyMetadataObj0
 */
export type InvoiceUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * InvoiceUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$InvoiceUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyMetadataObj0
 */
const SchemaIn$InvoiceUpdateBodyMetadataObj0: z.ZodType<
  InvoiceUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyMetadataObj0
 */
const SchemaOut$InvoiceUpdateBodyMetadataObj0: z.ZodType<
  External$InvoiceUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$InvoiceUpdateBodyMetadataObj0 = {
  in: SchemaIn$InvoiceUpdateBodyMetadataObj0,
  out: SchemaOut$InvoiceUpdateBodyMetadataObj0,
};
