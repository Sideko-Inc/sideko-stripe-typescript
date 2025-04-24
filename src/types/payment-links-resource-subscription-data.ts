import {
  External$PaymentLinksResourceSubscriptionDataInvoiceSettings,
  PaymentLinksResourceSubscriptionDataInvoiceSettings,
  Schemas$PaymentLinksResourceSubscriptionDataInvoiceSettings,
} from "./payment-links-resource-subscription-data-invoice-settings";
import {
  External$PaymentLinksResourceSubscriptionDataMetadata,
  PaymentLinksResourceSubscriptionDataMetadata,
  Schemas$PaymentLinksResourceSubscriptionDataMetadata,
} from "./payment-links-resource-subscription-data-metadata";
import {
  External$SubscriptionsTrialsResourceTrialSettings,
  Schemas$SubscriptionsTrialsResourceTrialSettings,
  SubscriptionsTrialsResourceTrialSettings,
} from "./subscriptions-trials-resource-trial-settings";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentLinksResourceSubscriptionData = {
  /**
   * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
   */
  description?: string | null | undefined;
  invoiceSettings: PaymentLinksResourceSubscriptionDataInvoiceSettings;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that will set metadata on [Subscriptions](https://stripe.com/docs/api/subscriptions) generated from this payment link.
   */
  metadata: PaymentLinksResourceSubscriptionDataMetadata;
  /**
   * Integer representing the number of trial period days before the customer is charged for the first time.
   */
  trialPeriodDays?: number | null | undefined;
  /**
   * Configures how this subscription behaves during the trial period.
   */
  trialSettings?: SubscriptionsTrialsResourceTrialSettings | undefined;
};

/**
 * @internal
 * PaymentLinksResourceSubscriptionData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinksResourceSubscriptionData = {
  description?: string | null | undefined;
  invoice_settings: External$PaymentLinksResourceSubscriptionDataInvoiceSettings;
  metadata: External$PaymentLinksResourceSubscriptionDataMetadata;
  trial_period_days?: number | null | undefined;
  trial_settings?:
    | External$SubscriptionsTrialsResourceTrialSettings
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinksResourceSubscriptionData
 */
const SchemaIn$PaymentLinksResourceSubscriptionData: z.ZodType<
  PaymentLinksResourceSubscriptionData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    description: z.string().nullable().optional(),
    invoice_settings: z.lazy(
      () => Schemas$PaymentLinksResourceSubscriptionDataInvoiceSettings.in,
    ),
    metadata: Schemas$PaymentLinksResourceSubscriptionDataMetadata.in,
    trial_period_days: z.number().int().nullable().optional(),
    trial_settings:
      Schemas$SubscriptionsTrialsResourceTrialSettings.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinksResourceSubscriptionData
 */
const SchemaOut$PaymentLinksResourceSubscriptionData: z.ZodType<
  External$PaymentLinksResourceSubscriptionData, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinksResourceSubscriptionData // the object to be transformed
> = z
  .object({
    description: z.string().nullable().optional(),
    invoiceSettings: z.lazy(
      () => Schemas$PaymentLinksResourceSubscriptionDataInvoiceSettings.out,
    ),
    metadata: Schemas$PaymentLinksResourceSubscriptionDataMetadata.out,
    trialPeriodDays: z.number().int().nullable().optional(),
    trialSettings:
      Schemas$SubscriptionsTrialsResourceTrialSettings.out.optional(),
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

export const Schemas$PaymentLinksResourceSubscriptionData = {
  in: SchemaIn$PaymentLinksResourceSubscriptionData,
  out: SchemaOut$PaymentLinksResourceSubscriptionData,
};
