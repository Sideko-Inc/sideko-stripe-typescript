import {
  External$PaymentLinkUpdateBodySubscriptionDataInvoiceSettings,
  PaymentLinkUpdateBodySubscriptionDataInvoiceSettings,
  Schemas$PaymentLinkUpdateBodySubscriptionDataInvoiceSettings,
} from "./payment-link-update-body-subscription-data-invoice-settings";
import {
  External$PaymentLinkUpdateBodySubscriptionDataMetadataObj0,
  PaymentLinkUpdateBodySubscriptionDataMetadataObj0,
  Schemas$PaymentLinkUpdateBodySubscriptionDataMetadataObj0,
} from "./payment-link-update-body-subscription-data-metadata-obj0";
import {
  External$PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0,
  PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0,
  Schemas$PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0,
} from "./payment-link-update-body-subscription-data-trial-settings-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * When creating a subscription, the specified configuration data will be used. There must be at least one line item with a recurring price to use `subscription_data`.
 */
export type PaymentLinkUpdateBodySubscriptionData = {
  invoiceSettings?:
    | PaymentLinkUpdateBodySubscriptionDataInvoiceSettings
    | undefined;
  metadata?:
    | (PaymentLinkUpdateBodySubscriptionDataMetadataObj0 | string)
    | undefined;
  trialPeriodDays?: (number | string) | undefined;
  trialSettings?:
    | (PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0 | string)
    | undefined;
};

/**
 * @internal
 * PaymentLinkUpdateBodySubscriptionData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodySubscriptionData = {
  invoice_settings?:
    | External$PaymentLinkUpdateBodySubscriptionDataInvoiceSettings
    | undefined;
  metadata?:
    | (External$PaymentLinkUpdateBodySubscriptionDataMetadataObj0 | string)
    | undefined;
  trial_period_days?: (number | string) | undefined;
  trial_settings?:
    | (External$PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0 | string)
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodySubscriptionData
 */
const SchemaIn$PaymentLinkUpdateBodySubscriptionData: z.ZodType<
  PaymentLinkUpdateBodySubscriptionData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    invoice_settings:
      Schemas$PaymentLinkUpdateBodySubscriptionDataInvoiceSettings.in.optional(),
    metadata: z
      .union([
        Schemas$PaymentLinkUpdateBodySubscriptionDataMetadataObj0.in,
        z.string(),
      ])
      .optional(),
    trial_period_days: z.union([z.number().int(), z.string()]).optional(),
    trial_settings: z
      .union([
        Schemas$PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0.in,
        z.string(),
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      invoice_settings: "invoiceSettings",
      metadata: "metadata",
      trial_period_days: "trialPeriodDays",
      trial_settings: "trialSettings",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodySubscriptionData
 */
const SchemaOut$PaymentLinkUpdateBodySubscriptionData: z.ZodType<
  External$PaymentLinkUpdateBodySubscriptionData, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodySubscriptionData // the object to be transformed
> = z
  .object({
    invoiceSettings:
      Schemas$PaymentLinkUpdateBodySubscriptionDataInvoiceSettings.out.optional(),
    metadata: z
      .union([
        Schemas$PaymentLinkUpdateBodySubscriptionDataMetadataObj0.out,
        z.string(),
      ])
      .optional(),
    trialPeriodDays: z.union([z.number().int(), z.string()]).optional(),
    trialSettings: z
      .union([
        Schemas$PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0.out,
        z.string(),
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      invoiceSettings: "invoice_settings",
      metadata: "metadata",
      trialPeriodDays: "trial_period_days",
      trialSettings: "trial_settings",
    });
  });

export const Schemas$PaymentLinkUpdateBodySubscriptionData = {
  in: SchemaIn$PaymentLinkUpdateBodySubscriptionData,
  out: SchemaOut$PaymentLinkUpdateBodySubscriptionData,
};
