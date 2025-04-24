import {
  BillingCreditGrantCreateBodyAmount,
  External$BillingCreditGrantCreateBodyAmount,
  Schemas$BillingCreditGrantCreateBodyAmount,
} from "./billing-credit-grant-create-body-amount";
import {
  BillingCreditGrantCreateBodyApplicabilityConfig,
  External$BillingCreditGrantCreateBodyApplicabilityConfig,
  Schemas$BillingCreditGrantCreateBodyApplicabilityConfig,
} from "./billing-credit-grant-create-body-applicability-config";
import {
  BillingCreditGrantCreateBodyMetadata,
  External$BillingCreditGrantCreateBodyMetadata,
  Schemas$BillingCreditGrantCreateBodyMetadata,
} from "./billing-credit-grant-create-body-metadata";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingCreditGrantCreateBody
 */
export type BillingCreditGrantCreateBody = {
  /**
   * Amount of this credit grant.
   */
  amount: BillingCreditGrantCreateBodyAmount;
  /**
   * Configuration specifying what this credit grant applies to. We currently only support `metered` prices that have a [Billing Meter](https://docs.stripe.com/api/billing/meter) attached to them.
   */
  applicabilityConfig: BillingCreditGrantCreateBodyApplicabilityConfig;
  /**
   * The category of this credit grant.
   */
  category: "paid" | "promotional";
  /**
   * ID of the customer to receive the billing credits.
   */
  customer: string;
  /**
   * The time when the billing credits become effective-when they're eligible for use. It defaults to the current timestamp if not specified.
   */
  effectiveAt?: number | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The time when the billing credits expire. If not specified, the billing credits don't expire.
   */
  expiresAt?: number | undefined;
  /**
   * Set of key-value pairs that you can attach to an object. You can use this to store additional information about the object (for example, cost basis) in a structured format.
   */
  metadata?: BillingCreditGrantCreateBodyMetadata | undefined;
  /**
   * A descriptive name shown in the Dashboard.
   */
  name?: string | undefined;
  /**
   * The desired priority for applying this credit grant. If not specified, it will be set to the default value of 50. The highest priority is 0 and the lowest is 100.
   */
  priority?: number | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | BillingCreditGrantCreateBodyAmount
    | BillingCreditGrantCreateBodyApplicabilityConfig
    | ("paid" | "promotional")
    | string
    | (number | undefined)
    | (string[] | undefined)
    | (number | undefined)
    | (BillingCreditGrantCreateBodyMetadata | undefined)
    | (string | undefined)
    | (number | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * BillingCreditGrantCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingCreditGrantCreateBody = {
  amount: External$BillingCreditGrantCreateBodyAmount;
  applicability_config: External$BillingCreditGrantCreateBodyApplicabilityConfig;
  category: "paid" | "promotional";
  customer: string;
  effective_at?: number | undefined;
  expand?: string[] | undefined;
  expires_at?: number | undefined;
  metadata?: External$BillingCreditGrantCreateBodyMetadata | undefined;
  name?: string | undefined;
  priority?: number | undefined;

  [additionalProperty: string]:
    | External$BillingCreditGrantCreateBodyAmount
    | External$BillingCreditGrantCreateBodyApplicabilityConfig
    | ("paid" | "promotional")
    | string
    | (number | undefined)
    | (string[] | undefined)
    | (number | undefined)
    | (External$BillingCreditGrantCreateBodyMetadata | undefined)
    | (string | undefined)
    | (number | undefined)
    | External$BillingCreditGrantCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingCreditGrantCreateBody
 */
const SchemaIn$BillingCreditGrantCreateBody: z.ZodType<
  BillingCreditGrantCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: Schemas$BillingCreditGrantCreateBodyAmount.in,
    applicability_config:
      Schemas$BillingCreditGrantCreateBodyApplicabilityConfig.in,
    category: z.enum(["paid", "promotional"]),
    customer: z.string(),
    effective_at: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    expires_at: z.number().int().optional(),
    metadata: Schemas$BillingCreditGrantCreateBodyMetadata.in.optional(),
    name: z.string().optional(),
    priority: z.number().int().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      applicability_config: "applicabilityConfig",
      category: "category",
      customer: "customer",
      effective_at: "effectiveAt",
      expand: "expand",
      expires_at: "expiresAt",
      metadata: "metadata",
      name: "name",
      priority: "priority",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingCreditGrantCreateBody
 */
const SchemaOut$BillingCreditGrantCreateBody: z.ZodType<
  External$BillingCreditGrantCreateBody, // output type of this zod object
  z.ZodTypeDef,
  BillingCreditGrantCreateBody // the object to be transformed
> = z
  .object({
    amount: Schemas$BillingCreditGrantCreateBodyAmount.out,
    applicabilityConfig:
      Schemas$BillingCreditGrantCreateBodyApplicabilityConfig.out,
    category: z.enum(["paid", "promotional"]),
    customer: z.string(),
    effectiveAt: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    expiresAt: z.number().int().optional(),
    metadata: Schemas$BillingCreditGrantCreateBodyMetadata.out.optional(),
    name: z.string().optional(),
    priority: z.number().int().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      applicabilityConfig: "applicability_config",
      category: "category",
      customer: "customer",
      effectiveAt: "effective_at",
      expand: "expand",
      expiresAt: "expires_at",
      metadata: "metadata",
      name: "name",
      priority: "priority",
    });
  });

export const Schemas$BillingCreditGrantCreateBody = {
  in: SchemaIn$BillingCreditGrantCreateBody,
  out: SchemaOut$BillingCreditGrantCreateBody,
};
