import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceCreateBodyMetadataObj0
 */
export type InvoiceCreateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * InvoiceCreateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$InvoiceCreateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBodyMetadataObj0
 */
const SchemaIn$InvoiceCreateBodyMetadataObj0: z.ZodType<
  InvoiceCreateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBodyMetadataObj0
 */
const SchemaOut$InvoiceCreateBodyMetadataObj0: z.ZodType<
  External$InvoiceCreateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$InvoiceCreateBodyMetadataObj0 = {
  in: SchemaIn$InvoiceCreateBodyMetadataObj0,
  out: SchemaOut$InvoiceCreateBodyMetadataObj0,
};
