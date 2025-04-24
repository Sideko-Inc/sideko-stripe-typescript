import {
  External$QuoteCreateBodySubscriptionDataMetadata,
  QuoteCreateBodySubscriptionDataMetadata,
  Schemas$QuoteCreateBodySubscriptionDataMetadata,
} from "./quote-create-body-subscription-data-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * When creating a subscription or subscription schedule, the specified configuration data will be used. There must be at least one line item with a recurring price for a subscription or subscription schedule to be created. A subscription schedule is created if `subscription_data[effective_date]` is present and in the future, otherwise a subscription is created.
 */
export type QuoteCreateBodySubscriptionData = {
  description?: string | undefined;
  effectiveDate?: ("current_period_end" | number | string) | undefined;
  metadata?: QuoteCreateBodySubscriptionDataMetadata | undefined;
  trialPeriodDays?: (number | string) | undefined;
};

/**
 * @internal
 * QuoteCreateBodySubscriptionData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuoteCreateBodySubscriptionData = {
  description?: string | undefined;
  effective_date?: ("current_period_end" | number | string) | undefined;
  metadata?: External$QuoteCreateBodySubscriptionDataMetadata | undefined;
  trial_period_days?: (number | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuoteCreateBodySubscriptionData
 */
const SchemaIn$QuoteCreateBodySubscriptionData: z.ZodType<
  QuoteCreateBodySubscriptionData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    description: z.string().optional(),
    effective_date: z
      .union([z.enum(["current_period_end"]), z.number().int(), z.string()])
      .optional(),
    metadata: Schemas$QuoteCreateBodySubscriptionDataMetadata.in.optional(),
    trial_period_days: z.union([z.number().int(), z.string()]).optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuoteCreateBodySubscriptionData
 */
const SchemaOut$QuoteCreateBodySubscriptionData: z.ZodType<
  External$QuoteCreateBodySubscriptionData, // output type of this zod object
  z.ZodTypeDef,
  QuoteCreateBodySubscriptionData // the object to be transformed
> = z
  .object({
    description: z.string().optional(),
    effectiveDate: z
      .union([z.enum(["current_period_end"]), z.number().int(), z.string()])
      .optional(),
    metadata: Schemas$QuoteCreateBodySubscriptionDataMetadata.out.optional(),
    trialPeriodDays: z.union([z.number().int(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      description: "description",
      effectiveDate: "effective_date",
      metadata: "metadata",
      trialPeriodDays: "trial_period_days",
    });
  });

export const Schemas$QuoteCreateBodySubscriptionData = {
  in: SchemaIn$QuoteCreateBodySubscriptionData,
  out: SchemaOut$QuoteCreateBodySubscriptionData,
};
