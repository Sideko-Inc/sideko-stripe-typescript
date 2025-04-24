import {
  BillingCreditGrantUpdateBodyMetadata,
  External$BillingCreditGrantUpdateBodyMetadata,
  Schemas$BillingCreditGrantUpdateBodyMetadata,
} from "./billing-credit-grant-update-body-metadata";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingCreditGrantUpdateBody
 */
export type BillingCreditGrantUpdateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The time when the billing credits created by this credit grant expire. If set to empty, the billing credits never expire.
   */
  expiresAt?: (number | string) | undefined;
  /**
   * Set of key-value pairs you can attach to an object. You can use this to store additional information about the object (for example, cost basis) in a structured format.
   */
  metadata?: BillingCreditGrantUpdateBodyMetadata | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | ((number | string) | undefined)
    | (BillingCreditGrantUpdateBodyMetadata | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * BillingCreditGrantUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingCreditGrantUpdateBody = {
  expand?: string[] | undefined;
  expires_at?: (number | string) | undefined;
  metadata?: External$BillingCreditGrantUpdateBodyMetadata | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | ((number | string) | undefined)
    | (External$BillingCreditGrantUpdateBodyMetadata | undefined)
    | External$BillingCreditGrantUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingCreditGrantUpdateBody
 */
const SchemaIn$BillingCreditGrantUpdateBody: z.ZodType<
  BillingCreditGrantUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    expires_at: z.union([z.number().int(), z.string()]).optional(),
    metadata: Schemas$BillingCreditGrantUpdateBodyMetadata.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      expires_at: "expiresAt",
      metadata: "metadata",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingCreditGrantUpdateBody
 */
const SchemaOut$BillingCreditGrantUpdateBody: z.ZodType<
  External$BillingCreditGrantUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  BillingCreditGrantUpdateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    expiresAt: z.union([z.number().int(), z.string()]).optional(),
    metadata: Schemas$BillingCreditGrantUpdateBodyMetadata.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      expiresAt: "expires_at",
      metadata: "metadata",
    });
  });

export const Schemas$BillingCreditGrantUpdateBody = {
  in: SchemaIn$BillingCreditGrantUpdateBody,
  out: SchemaOut$BillingCreditGrantUpdateBody,
};
