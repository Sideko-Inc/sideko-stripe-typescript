import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of key-value pairs you can attach to an object. You can use this to store additional information about the object (for example, cost basis) in a structured format.
 */
export type BillingCreditGrantUpdateBodyMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * BillingCreditGrantUpdateBodyMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingCreditGrantUpdateBodyMetadata = {
  [additionalProperty: string]:
    | External$BillingCreditGrantUpdateBodyMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingCreditGrantUpdateBodyMetadata
 */
const SchemaIn$BillingCreditGrantUpdateBodyMetadata: z.ZodType<
  BillingCreditGrantUpdateBodyMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingCreditGrantUpdateBodyMetadata
 */
const SchemaOut$BillingCreditGrantUpdateBodyMetadata: z.ZodType<
  External$BillingCreditGrantUpdateBodyMetadata, // output type of this zod object
  z.ZodTypeDef,
  BillingCreditGrantUpdateBodyMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$BillingCreditGrantUpdateBodyMetadata = {
  in: SchemaIn$BillingCreditGrantUpdateBodyMetadata,
  out: SchemaOut$BillingCreditGrantUpdateBodyMetadata,
};
