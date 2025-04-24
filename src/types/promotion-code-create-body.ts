import {
  External$PromotionCodeCreateBodyMetadata,
  PromotionCodeCreateBodyMetadata,
  Schemas$PromotionCodeCreateBodyMetadata,
} from "./promotion-code-create-body-metadata";
import {
  External$PromotionCodeCreateBodyRestrictions,
  PromotionCodeCreateBodyRestrictions,
  Schemas$PromotionCodeCreateBodyRestrictions,
} from "./promotion-code-create-body-restrictions";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PromotionCodeCreateBody
 */
export type PromotionCodeCreateBody = {
  /**
   * Whether the promotion code is currently active.
   */
  active?: boolean | undefined;
  /**
   * The customer-facing code. Regardless of case, this code must be unique across all active promotion codes for a specific customer. Valid characters are lower case letters (a-z), upper case letters (A-Z), and digits (0-9).
   *
   * If left blank, we will generate one automatically.
   */
  code?: string | undefined;
  /**
   * The coupon for this promotion code.
   */
  coupon: string;
  /**
   * The customer that this promotion code can be used by. If not set, the promotion code can be used by all customers.
   */
  customer?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The timestamp at which this promotion code will expire. If the coupon has specified a `redeems_by`, then this value cannot be after the coupon's `redeems_by`.
   */
  expiresAt?: number | undefined;
  /**
   * A positive integer specifying the number of times the promotion code can be redeemed. If the coupon has specified a `max_redemptions`, then this value cannot be greater than the coupon's `max_redemptions`.
   */
  maxRedemptions?: number | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PromotionCodeCreateBodyMetadata | undefined;
  /**
   * Settings that restrict the redemption of the promotion code.
   */
  restrictions?: PromotionCodeCreateBodyRestrictions | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (boolean | undefined)
    | (string | undefined)
    | string
    | (string | undefined)
    | (string[] | undefined)
    | (number | undefined)
    | (number | undefined)
    | (PromotionCodeCreateBodyMetadata | undefined)
    | (PromotionCodeCreateBodyRestrictions | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * PromotionCodeCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PromotionCodeCreateBody = {
  active?: boolean | undefined;
  code?: string | undefined;
  coupon: string;
  customer?: string | undefined;
  expand?: string[] | undefined;
  expires_at?: number | undefined;
  max_redemptions?: number | undefined;
  metadata?: External$PromotionCodeCreateBodyMetadata | undefined;
  restrictions?: External$PromotionCodeCreateBodyRestrictions | undefined;

  [additionalProperty: string]:
    | (boolean | undefined)
    | (string | undefined)
    | string
    | (string | undefined)
    | (string[] | undefined)
    | (number | undefined)
    | (number | undefined)
    | (External$PromotionCodeCreateBodyMetadata | undefined)
    | (External$PromotionCodeCreateBodyRestrictions | undefined)
    | External$PromotionCodeCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PromotionCodeCreateBody
 */
const SchemaIn$PromotionCodeCreateBody: z.ZodType<
  PromotionCodeCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean().optional(),
    code: z.string().optional(),
    coupon: z.string(),
    customer: z.string().optional(),
    expand: z.array(z.string()).optional(),
    expires_at: z.number().int().optional(),
    max_redemptions: z.number().int().optional(),
    metadata: Schemas$PromotionCodeCreateBodyMetadata.in.optional(),
    restrictions: Schemas$PromotionCodeCreateBodyRestrictions.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      code: "code",
      coupon: "coupon",
      customer: "customer",
      expand: "expand",
      expires_at: "expiresAt",
      max_redemptions: "maxRedemptions",
      metadata: "metadata",
      restrictions: "restrictions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PromotionCodeCreateBody
 */
const SchemaOut$PromotionCodeCreateBody: z.ZodType<
  External$PromotionCodeCreateBody, // output type of this zod object
  z.ZodTypeDef,
  PromotionCodeCreateBody // the object to be transformed
> = z
  .object({
    active: z.boolean().optional(),
    code: z.string().optional(),
    coupon: z.string(),
    customer: z.string().optional(),
    expand: z.array(z.string()).optional(),
    expiresAt: z.number().int().optional(),
    maxRedemptions: z.number().int().optional(),
    metadata: Schemas$PromotionCodeCreateBodyMetadata.out.optional(),
    restrictions: Schemas$PromotionCodeCreateBodyRestrictions.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      code: "code",
      coupon: "coupon",
      customer: "customer",
      expand: "expand",
      expiresAt: "expires_at",
      maxRedemptions: "max_redemptions",
      metadata: "metadata",
      restrictions: "restrictions",
    });
  });

export const Schemas$PromotionCodeCreateBody = {
  in: SchemaIn$PromotionCodeCreateBody,
  out: SchemaOut$PromotionCodeCreateBody,
};
