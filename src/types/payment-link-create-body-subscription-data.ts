import {
  External$PaymentLinkCreateBodySubscriptionDataInvoiceSettings,
  PaymentLinkCreateBodySubscriptionDataInvoiceSettings,
  Schemas$PaymentLinkCreateBodySubscriptionDataInvoiceSettings,
} from "./payment-link-create-body-subscription-data-invoice-settings";
import {
  External$PaymentLinkCreateBodySubscriptionDataMetadata,
  PaymentLinkCreateBodySubscriptionDataMetadata,
  Schemas$PaymentLinkCreateBodySubscriptionDataMetadata,
} from "./payment-link-create-body-subscription-data-metadata";
import {
  External$PaymentLinkCreateBodySubscriptionDataTrialSettings,
  PaymentLinkCreateBodySubscriptionDataTrialSettings,
  Schemas$PaymentLinkCreateBodySubscriptionDataTrialSettings,
} from "./payment-link-create-body-subscription-data-trial-settings";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * When creating a subscription, the specified configuration data will be used. There must be at least one line item with a recurring price to use `subscription_data`.
 */
export type PaymentLinkCreateBodySubscriptionData = {
  description?: string | undefined;
  invoiceSettings?:
    | PaymentLinkCreateBodySubscriptionDataInvoiceSettings
    | undefined;
  metadata?: PaymentLinkCreateBodySubscriptionDataMetadata | undefined;
  trialPeriodDays?: number | undefined;
  trialSettings?:
    | PaymentLinkCreateBodySubscriptionDataTrialSettings
    | undefined;
};

/**
 * @internal
 * PaymentLinkCreateBodySubscriptionData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodySubscriptionData = {
  description?: string | undefined;
  invoice_settings?:
    | External$PaymentLinkCreateBodySubscriptionDataInvoiceSettings
    | undefined;
  metadata?: External$PaymentLinkCreateBodySubscriptionDataMetadata | undefined;
  trial_period_days?: number | undefined;
  trial_settings?:
    | External$PaymentLinkCreateBodySubscriptionDataTrialSettings
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodySubscriptionData
 */
const SchemaIn$PaymentLinkCreateBodySubscriptionData: z.ZodType<
  PaymentLinkCreateBodySubscriptionData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    description: z.string().optional(),
    invoice_settings:
      Schemas$PaymentLinkCreateBodySubscriptionDataInvoiceSettings.in.optional(),
    metadata:
      Schemas$PaymentLinkCreateBodySubscriptionDataMetadata.in.optional(),
    trial_period_days: z.number().int().optional(),
    trial_settings:
      Schemas$PaymentLinkCreateBodySubscriptionDataTrialSettings.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      description: "description",
      invoice_settings: "invoiceSettings",
      metadata: "metadata",
      trial_period_days: "trialPeriodDays",
      trial_settings: "trialSettings",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodySubscriptionData
 */
const SchemaOut$PaymentLinkCreateBodySubscriptionData: z.ZodType<
  External$PaymentLinkCreateBodySubscriptionData, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodySubscriptionData // the object to be transformed
> = z
  .object({
    description: z.string().optional(),
    invoiceSettings:
      Schemas$PaymentLinkCreateBodySubscriptionDataInvoiceSettings.out.optional(),
    metadata:
      Schemas$PaymentLinkCreateBodySubscriptionDataMetadata.out.optional(),
    trialPeriodDays: z.number().int().optional(),
    trialSettings:
      Schemas$PaymentLinkCreateBodySubscriptionDataTrialSettings.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      description: "description",
      invoiceSettings: "invoice_settings",
      metadata: "metadata",
      trialPeriodDays: "trial_period_days",
      trialSettings: "trial_settings",
    });
  });

export const Schemas$PaymentLinkCreateBodySubscriptionData = {
  in: SchemaIn$PaymentLinkCreateBodySubscriptionData,
  out: SchemaOut$PaymentLinkCreateBodySubscriptionData,
};
