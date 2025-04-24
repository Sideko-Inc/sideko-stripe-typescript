import {
  BillingCreditGrantMetadata,
  External$BillingCreditGrantMetadata,
  Schemas$BillingCreditGrantMetadata,
} from "./billing-credit-grant-metadata";
import {
  BillingCreditGrantsResourceAmount,
  External$BillingCreditGrantsResourceAmount,
  Schemas$BillingCreditGrantsResourceAmount,
} from "./billing-credit-grants-resource-amount";
import {
  BillingCreditGrantsResourceApplicabilityConfig,
  External$BillingCreditGrantsResourceApplicabilityConfig,
  Schemas$BillingCreditGrantsResourceApplicabilityConfig,
} from "./billing-credit-grants-resource-applicability-config";
import { Customer, External$Customer, Schemas$Customer } from "./customer";
import {
  DeletedCustomer,
  External$DeletedCustomer,
  Schemas$DeletedCustomer,
} from "./deleted-customer";
import {
  External$TestHelpersTestClock,
  Schemas$TestHelpersTestClock,
  TestHelpersTestClock,
} from "./test-helpers-test-clock";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A credit grant is an API resource that documents the allocation of some billing credits to a customer.
 *
 * Related guide: [Billing credits](https://docs.stripe.com/billing/subscriptions/usage-based/billing-credits)
 */
export type BillingCreditGrant = {
  amount: BillingCreditGrantsResourceAmount;
  applicabilityConfig: BillingCreditGrantsResourceApplicabilityConfig;
  /**
   * The category of this credit grant. This is for tracking purposes and isn't displayed to the customer.
   */
  category: "paid" | "promotional";
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * ID of the customer receiving the billing credits.
   */
  customer: string | Customer | DeletedCustomer;
  /**
   * The time when the billing credits become effective-when they're eligible for use.
   */
  effectiveAt?: number | null | undefined;
  /**
   * The time when the billing credits expire. If not present, the billing credits don't expire.
   */
  expiresAt?: number | null | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: BillingCreditGrantMetadata;
  /**
   * A descriptive name shown in dashboard.
   */
  name?: string | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "billing.credit_grant";
  /**
   * The priority for applying this credit grant. The highest priority is 0 and the lowest is 100.
   */
  priority?: number | null | undefined;
  /**
   * ID of the test clock this credit grant belongs to.
   */
  testClock?: (string | TestHelpersTestClock) | undefined;
  /**
   * Time at which the object was last updated. Measured in seconds since the Unix epoch.
   */
  updated: number;
  /**
   * The time when this credit grant was voided. If not present, the credit grant hasn't been voided.
   */
  voidedAt?: number | null | undefined;
};

/**
 * @internal
 * BillingCreditGrant without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingCreditGrant = {
  amount: External$BillingCreditGrantsResourceAmount;
  applicability_config: External$BillingCreditGrantsResourceApplicabilityConfig;
  category: "paid" | "promotional";
  created: number;
  customer: string | External$Customer | External$DeletedCustomer;
  effective_at?: number | null | undefined;
  expires_at?: number | null | undefined;
  id: string;
  livemode: boolean;
  metadata: External$BillingCreditGrantMetadata;
  name?: string | null | undefined;
  object: "billing.credit_grant";
  priority?: number | null | undefined;
  test_clock?: (string | External$TestHelpersTestClock) | undefined;
  updated: number;
  voided_at?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingCreditGrant
 */
const SchemaIn$BillingCreditGrant: z.ZodType<
  BillingCreditGrant, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: Schemas$BillingCreditGrantsResourceAmount.in,
    applicability_config:
      Schemas$BillingCreditGrantsResourceApplicabilityConfig.in,
    category: z.enum(["paid", "promotional"]),
    created: z.number().int(),
    customer: z.union([
      z.string(),
      z.lazy(() => Schemas$Customer.in),
      Schemas$DeletedCustomer.in,
    ]),
    effective_at: z.number().int().nullable().optional(),
    expires_at: z.number().int().nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$BillingCreditGrantMetadata.in,
    name: z.string().nullable().optional(),
    object: z.enum(["billing.credit_grant"]),
    priority: z.number().int().nullable().optional(),
    test_clock: z
      .union([z.string(), Schemas$TestHelpersTestClock.in])
      .optional(),
    updated: z.number().int(),
    voided_at: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      applicability_config: "applicabilityConfig",
      category: "category",
      created: "created",
      customer: "customer",
      effective_at: "effectiveAt",
      expires_at: "expiresAt",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      name: "name",
      object: "object",
      priority: "priority",
      test_clock: "testClock",
      updated: "updated",
      voided_at: "voidedAt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingCreditGrant
 */
const SchemaOut$BillingCreditGrant: z.ZodType<
  External$BillingCreditGrant, // output type of this zod object
  z.ZodTypeDef,
  BillingCreditGrant // the object to be transformed
> = z
  .object({
    amount: Schemas$BillingCreditGrantsResourceAmount.out,
    applicabilityConfig:
      Schemas$BillingCreditGrantsResourceApplicabilityConfig.out,
    category: z.enum(["paid", "promotional"]),
    created: z.number().int(),
    customer: z.union([
      z.string(),
      z.lazy(() => Schemas$Customer.out),
      Schemas$DeletedCustomer.out,
    ]),
    effectiveAt: z.number().int().nullable().optional(),
    expiresAt: z.number().int().nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$BillingCreditGrantMetadata.out,
    name: z.string().nullable().optional(),
    object: z.enum(["billing.credit_grant"]),
    priority: z.number().int().nullable().optional(),
    testClock: z
      .union([z.string(), Schemas$TestHelpersTestClock.out])
      .optional(),
    updated: z.number().int(),
    voidedAt: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      applicabilityConfig: "applicability_config",
      category: "category",
      created: "created",
      customer: "customer",
      effectiveAt: "effective_at",
      expiresAt: "expires_at",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      name: "name",
      object: "object",
      priority: "priority",
      testClock: "test_clock",
      updated: "updated",
      voidedAt: "voided_at",
    });
  });

export const Schemas$BillingCreditGrant = {
  in: SchemaIn$BillingCreditGrant,
  out: SchemaOut$BillingCreditGrant,
};
