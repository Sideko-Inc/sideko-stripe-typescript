import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineUpdateBodyPriceDataProductDataMetadata
 */
export type InvoiceLineUpdateBodyPriceDataProductDataMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * InvoiceLineUpdateBodyPriceDataProductDataMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineUpdateBodyPriceDataProductDataMetadata = {
  [additionalProperty: string]:
    | External$InvoiceLineUpdateBodyPriceDataProductDataMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineUpdateBodyPriceDataProductDataMetadata
 */
const SchemaIn$InvoiceLineUpdateBodyPriceDataProductDataMetadata: z.ZodType<
  InvoiceLineUpdateBodyPriceDataProductDataMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineUpdateBodyPriceDataProductDataMetadata
 */
const SchemaOut$InvoiceLineUpdateBodyPriceDataProductDataMetadata: z.ZodType<
  External$InvoiceLineUpdateBodyPriceDataProductDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineUpdateBodyPriceDataProductDataMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$InvoiceLineUpdateBodyPriceDataProductDataMetadata = {
  in: SchemaIn$InvoiceLineUpdateBodyPriceDataProductDataMetadata,
  out: SchemaOut$InvoiceLineUpdateBodyPriceDataProductDataMetadata,
};
