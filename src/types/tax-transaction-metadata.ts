import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 */
export type TaxTransactionMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * TaxTransactionMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxTransactionMetadata = {
  [additionalProperty: string]:
    | (External$TaxTransactionMetadata | null)
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxTransactionMetadata
 */
const SchemaIn$TaxTransactionMetadata: z.ZodType<
  TaxTransactionMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxTransactionMetadata
 */
const SchemaOut$TaxTransactionMetadata: z.ZodType<
  External$TaxTransactionMetadata, // output type of this zod object
  z.ZodTypeDef,
  TaxTransactionMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$TaxTransactionMetadata = {
  in: SchemaIn$TaxTransactionMetadata,
  out: SchemaOut$TaxTransactionMetadata,
};
