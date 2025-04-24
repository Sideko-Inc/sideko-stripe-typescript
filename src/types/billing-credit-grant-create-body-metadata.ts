import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of key-value pairs that you can attach to an object. You can use this to store additional information about the object (for example, cost basis) in a structured format.
 */
export type BillingCreditGrantCreateBodyMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * BillingCreditGrantCreateBodyMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingCreditGrantCreateBodyMetadata = {
  [additionalProperty: string]:
    | External$BillingCreditGrantCreateBodyMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingCreditGrantCreateBodyMetadata
 */
const SchemaIn$BillingCreditGrantCreateBodyMetadata: z.ZodType<
  BillingCreditGrantCreateBodyMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingCreditGrantCreateBodyMetadata
 */
const SchemaOut$BillingCreditGrantCreateBodyMetadata: z.ZodType<
  External$BillingCreditGrantCreateBodyMetadata, // output type of this zod object
  z.ZodTypeDef,
  BillingCreditGrantCreateBodyMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$BillingCreditGrantCreateBodyMetadata = {
  in: SchemaIn$BillingCreditGrantCreateBodyMetadata,
  out: SchemaOut$BillingCreditGrantCreateBodyMetadata,
};
