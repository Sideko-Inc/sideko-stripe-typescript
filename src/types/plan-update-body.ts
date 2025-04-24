import {
  External$PlanUpdateBodyMetadataObj0,
  PlanUpdateBodyMetadataObj0,
  Schemas$PlanUpdateBodyMetadataObj0,
} from "./plan-update-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PlanUpdateBody
 */
export type PlanUpdateBody = {
  /**
   * Whether the plan is currently available for new subscriptions.
   */
  active?: boolean | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (PlanUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * A brief description of the plan, hidden from customers.
   */
  nickname?: string | undefined;
  /**
   * The product the plan belongs to. This cannot be changed once it has been used in a subscription or subscription schedule.
   */
  product?: string | undefined;
  /**
   * Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://stripe.com/docs/api#create_subscription-trial_from_plan).
   */
  trialPeriodDays?: number | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (boolean | undefined)
    | (string[] | undefined)
    | ((PlanUpdateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (string | undefined)
    | (number | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * PlanUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PlanUpdateBody = {
  active?: boolean | undefined;
  expand?: string[] | undefined;
  metadata?: (External$PlanUpdateBodyMetadataObj0 | string) | undefined;
  nickname?: string | undefined;
  product?: string | undefined;
  trial_period_days?: number | undefined;

  [additionalProperty: string]:
    | (boolean | undefined)
    | (string[] | undefined)
    | ((External$PlanUpdateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (string | undefined)
    | (number | undefined)
    | External$PlanUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PlanUpdateBody
 */
const SchemaIn$PlanUpdateBody: z.ZodType<
  PlanUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$PlanUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    nickname: z.string().optional(),
    product: z.string().optional(),
    trial_period_days: z.number().int().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      expand: "expand",
      metadata: "metadata",
      nickname: "nickname",
      product: "product",
      trial_period_days: "trialPeriodDays",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PlanUpdateBody
 */
const SchemaOut$PlanUpdateBody: z.ZodType<
  External$PlanUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  PlanUpdateBody // the object to be transformed
> = z
  .object({
    active: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$PlanUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    nickname: z.string().optional(),
    product: z.string().optional(),
    trialPeriodDays: z.number().int().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      expand: "expand",
      metadata: "metadata",
      nickname: "nickname",
      product: "product",
      trialPeriodDays: "trial_period_days",
    });
  });

export const Schemas$PlanUpdateBody = {
  in: SchemaIn$PlanUpdateBody,
  out: SchemaOut$PlanUpdateBody,
};
