import {
  External$QuotesResourceSubscriptionDataSubscriptionDataMetadata,
  QuotesResourceSubscriptionDataSubscriptionDataMetadata,
  Schemas$QuotesResourceSubscriptionDataSubscriptionDataMetadata,
} from "./quotes-resource-subscription-data-subscription-data-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type QuotesResourceSubscriptionDataSubscriptionData = {
  /**
   * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
   */
  description?: string | null | undefined;
  /**
   * When creating a new subscription, the date of which the subscription schedule will start after the quote is accepted. This date is ignored if it is in the past when the quote is accepted. Measured in seconds since the Unix epoch.
   */
  effectiveDate?: number | null | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that will set metadata on the subscription or subscription schedule when the quote is accepted. If a recurring price is included in `line_items`, this field will be passed to the resulting subscription's `metadata` field. If `subscription_data.effective_date` is used, this field will be passed to the resulting subscription schedule's `phases.metadata` field. Unlike object-level metadata, this field is declarative. Updates will clear prior values.
   */
  metadata?:
    | QuotesResourceSubscriptionDataSubscriptionDataMetadata
    | null
    | undefined;
  /**
   * Integer representing the number of trial period days before the customer is charged for the first time.
   */
  trialPeriodDays?: number | null | undefined;
};

/**
 * @internal
 * QuotesResourceSubscriptionDataSubscriptionData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuotesResourceSubscriptionDataSubscriptionData = {
  description?: string | null | undefined;
  effective_date?: number | null | undefined;
  metadata?:
    | External$QuotesResourceSubscriptionDataSubscriptionDataMetadata
    | null
    | undefined;
  trial_period_days?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuotesResourceSubscriptionDataSubscriptionData
 */
const SchemaIn$QuotesResourceSubscriptionDataSubscriptionData: z.ZodType<
  QuotesResourceSubscriptionDataSubscriptionData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    description: z.string().nullable().optional(),
    effective_date: z.number().int().nullable().optional(),
    metadata: Schemas$QuotesResourceSubscriptionDataSubscriptionDataMetadata.in
      .nullable()
      .optional(),
    trial_period_days: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      description: "description",
      effective_date: "effectiveDate",
      metadata: "metadata",
      trial_period_days: "trialPeriodDays",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuotesResourceSubscriptionDataSubscriptionData
 */
const SchemaOut$QuotesResourceSubscriptionDataSubscriptionData: z.ZodType<
  External$QuotesResourceSubscriptionDataSubscriptionData, // output type of this zod object
  z.ZodTypeDef,
  QuotesResourceSubscriptionDataSubscriptionData // the object to be transformed
> = z
  .object({
    description: z.string().nullable().optional(),
    effectiveDate: z.number().int().nullable().optional(),
    metadata: Schemas$QuotesResourceSubscriptionDataSubscriptionDataMetadata.out
      .nullable()
      .optional(),
    trialPeriodDays: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      description: "description",
      effectiveDate: "effective_date",
      metadata: "metadata",
      trialPeriodDays: "trial_period_days",
    });
  });

export const Schemas$QuotesResourceSubscriptionDataSubscriptionData = {
  in: SchemaIn$QuotesResourceSubscriptionDataSubscriptionData,
  out: SchemaOut$QuotesResourceSubscriptionDataSubscriptionData,
};
