import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceItemCreateBodyMetadataObj0
 */
export type InvoiceItemCreateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * InvoiceItemCreateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceItemCreateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$InvoiceItemCreateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceItemCreateBodyMetadataObj0
 */
const SchemaIn$InvoiceItemCreateBodyMetadataObj0: z.ZodType<
  InvoiceItemCreateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceItemCreateBodyMetadataObj0
 */
const SchemaOut$InvoiceItemCreateBodyMetadataObj0: z.ZodType<
  External$InvoiceItemCreateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  InvoiceItemCreateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$InvoiceItemCreateBodyMetadataObj0 = {
  in: SchemaIn$InvoiceItemCreateBodyMetadataObj0,
  out: SchemaOut$InvoiceItemCreateBodyMetadataObj0,
};
