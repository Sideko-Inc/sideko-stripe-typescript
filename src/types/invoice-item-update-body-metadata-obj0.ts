import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceItemUpdateBodyMetadataObj0
 */
export type InvoiceItemUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * InvoiceItemUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceItemUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$InvoiceItemUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceItemUpdateBodyMetadataObj0
 */
const SchemaIn$InvoiceItemUpdateBodyMetadataObj0: z.ZodType<
  InvoiceItemUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceItemUpdateBodyMetadataObj0
 */
const SchemaOut$InvoiceItemUpdateBodyMetadataObj0: z.ZodType<
  External$InvoiceItemUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  InvoiceItemUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$InvoiceItemUpdateBodyMetadataObj0 = {
  in: SchemaIn$InvoiceItemUpdateBodyMetadataObj0,
  out: SchemaOut$InvoiceItemUpdateBodyMetadataObj0,
};
