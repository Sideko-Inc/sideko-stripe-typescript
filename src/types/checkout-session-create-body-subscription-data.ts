import {
  CheckoutSessionCreateBodySubscriptionDataInvoiceSettings,
  External$CheckoutSessionCreateBodySubscriptionDataInvoiceSettings,
  Schemas$CheckoutSessionCreateBodySubscriptionDataInvoiceSettings,
} from "./checkout-session-create-body-subscription-data-invoice-settings";
import {
  CheckoutSessionCreateBodySubscriptionDataMetadata,
  External$CheckoutSessionCreateBodySubscriptionDataMetadata,
  Schemas$CheckoutSessionCreateBodySubscriptionDataMetadata,
} from "./checkout-session-create-body-subscription-data-metadata";
import {
  CheckoutSessionCreateBodySubscriptionDataTransferData,
  External$CheckoutSessionCreateBodySubscriptionDataTransferData,
  Schemas$CheckoutSessionCreateBodySubscriptionDataTransferData,
} from "./checkout-session-create-body-subscription-data-transfer-data";
import {
  CheckoutSessionCreateBodySubscriptionDataTrialSettings,
  External$CheckoutSessionCreateBodySubscriptionDataTrialSettings,
  Schemas$CheckoutSessionCreateBodySubscriptionDataTrialSettings,
} from "./checkout-session-create-body-subscription-data-trial-settings";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A subset of parameters to be passed to subscription creation for Checkout Sessions in `subscription` mode.
 */
export type CheckoutSessionCreateBodySubscriptionData = {
  applicationFeePercent?: number | undefined;
  billingCycleAnchor?: number | undefined;
  defaultTaxRates?: string[] | undefined;
  description?: string | undefined;
  invoiceSettings?:
    | CheckoutSessionCreateBodySubscriptionDataInvoiceSettings
    | undefined;
  metadata?: CheckoutSessionCreateBodySubscriptionDataMetadata | undefined;
  onBehalfOf?: string | undefined;
  prorationBehavior?: ("create_prorations" | "none") | undefined;
  transferData?:
    | CheckoutSessionCreateBodySubscriptionDataTransferData
    | undefined;
  trialEnd?: number | undefined;
  trialPeriodDays?: number | undefined;
  trialSettings?:
    | CheckoutSessionCreateBodySubscriptionDataTrialSettings
    | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodySubscriptionData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodySubscriptionData = {
  application_fee_percent?: number | undefined;
  billing_cycle_anchor?: number | undefined;
  default_tax_rates?: string[] | undefined;
  description?: string | undefined;
  invoice_settings?:
    | External$CheckoutSessionCreateBodySubscriptionDataInvoiceSettings
    | undefined;
  metadata?:
    | External$CheckoutSessionCreateBodySubscriptionDataMetadata
    | undefined;
  on_behalf_of?: string | undefined;
  proration_behavior?: ("create_prorations" | "none") | undefined;
  transfer_data?:
    | External$CheckoutSessionCreateBodySubscriptionDataTransferData
    | undefined;
  trial_end?: number | undefined;
  trial_period_days?: number | undefined;
  trial_settings?:
    | External$CheckoutSessionCreateBodySubscriptionDataTrialSettings
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodySubscriptionData
 */
const SchemaIn$CheckoutSessionCreateBodySubscriptionData: z.ZodType<
  CheckoutSessionCreateBodySubscriptionData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    application_fee_percent: z.number().optional(),
    billing_cycle_anchor: z.number().int().optional(),
    default_tax_rates: z.array(z.string()).optional(),
    description: z.string().optional(),
    invoice_settings:
      Schemas$CheckoutSessionCreateBodySubscriptionDataInvoiceSettings.in.optional(),
    metadata:
      Schemas$CheckoutSessionCreateBodySubscriptionDataMetadata.in.optional(),
    on_behalf_of: z.string().optional(),
    proration_behavior: z.enum(["create_prorations", "none"]).optional(),
    transfer_data:
      Schemas$CheckoutSessionCreateBodySubscriptionDataTransferData.in.optional(),
    trial_end: z.number().int().optional(),
    trial_period_days: z.number().int().optional(),
    trial_settings:
      Schemas$CheckoutSessionCreateBodySubscriptionDataTrialSettings.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      application_fee_percent: "applicationFeePercent",
      billing_cycle_anchor: "billingCycleAnchor",
      default_tax_rates: "defaultTaxRates",
      description: "description",
      invoice_settings: "invoiceSettings",
      metadata: "metadata",
      on_behalf_of: "onBehalfOf",
      proration_behavior: "prorationBehavior",
      transfer_data: "transferData",
      trial_end: "trialEnd",
      trial_period_days: "trialPeriodDays",
      trial_settings: "trialSettings",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodySubscriptionData
 */
const SchemaOut$CheckoutSessionCreateBodySubscriptionData: z.ZodType<
  External$CheckoutSessionCreateBodySubscriptionData, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodySubscriptionData // the object to be transformed
> = z
  .object({
    applicationFeePercent: z.number().optional(),
    billingCycleAnchor: z.number().int().optional(),
    defaultTaxRates: z.array(z.string()).optional(),
    description: z.string().optional(),
    invoiceSettings:
      Schemas$CheckoutSessionCreateBodySubscriptionDataInvoiceSettings.out.optional(),
    metadata:
      Schemas$CheckoutSessionCreateBodySubscriptionDataMetadata.out.optional(),
    onBehalfOf: z.string().optional(),
    prorationBehavior: z.enum(["create_prorations", "none"]).optional(),
    transferData:
      Schemas$CheckoutSessionCreateBodySubscriptionDataTransferData.out.optional(),
    trialEnd: z.number().int().optional(),
    trialPeriodDays: z.number().int().optional(),
    trialSettings:
      Schemas$CheckoutSessionCreateBodySubscriptionDataTrialSettings.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      applicationFeePercent: "application_fee_percent",
      billingCycleAnchor: "billing_cycle_anchor",
      defaultTaxRates: "default_tax_rates",
      description: "description",
      invoiceSettings: "invoice_settings",
      metadata: "metadata",
      onBehalfOf: "on_behalf_of",
      prorationBehavior: "proration_behavior",
      transferData: "transfer_data",
      trialEnd: "trial_end",
      trialPeriodDays: "trial_period_days",
      trialSettings: "trial_settings",
    });
  });

export const Schemas$CheckoutSessionCreateBodySubscriptionData = {
  in: SchemaIn$CheckoutSessionCreateBodySubscriptionData,
  out: SchemaOut$CheckoutSessionCreateBodySubscriptionData,
};
