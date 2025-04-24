import {
  BillingPortalConfigurationUpdateBodyFeaturesCustomerUpdate,
  External$BillingPortalConfigurationUpdateBodyFeaturesCustomerUpdate,
  Schemas$BillingPortalConfigurationUpdateBodyFeaturesCustomerUpdate,
} from "./billing-portal-configuration-update-body-features-customer-update";
import {
  BillingPortalConfigurationUpdateBodyFeaturesInvoiceHistory,
  External$BillingPortalConfigurationUpdateBodyFeaturesInvoiceHistory,
  Schemas$BillingPortalConfigurationUpdateBodyFeaturesInvoiceHistory,
} from "./billing-portal-configuration-update-body-features-invoice-history";
import {
  BillingPortalConfigurationUpdateBodyFeaturesPaymentMethodUpdate,
  External$BillingPortalConfigurationUpdateBodyFeaturesPaymentMethodUpdate,
  Schemas$BillingPortalConfigurationUpdateBodyFeaturesPaymentMethodUpdate,
} from "./billing-portal-configuration-update-body-features-payment-method-update";
import {
  BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancel,
  External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancel,
  Schemas$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancel,
} from "./billing-portal-configuration-update-body-features-subscription-cancel";
import {
  BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdate,
  External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdate,
  Schemas$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdate,
} from "./billing-portal-configuration-update-body-features-subscription-update";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Information about the features available in the portal.
 */
export type BillingPortalConfigurationUpdateBodyFeatures = {
  customerUpdate?:
    | BillingPortalConfigurationUpdateBodyFeaturesCustomerUpdate
    | undefined;
  invoiceHistory?:
    | BillingPortalConfigurationUpdateBodyFeaturesInvoiceHistory
    | undefined;
  paymentMethodUpdate?:
    | BillingPortalConfigurationUpdateBodyFeaturesPaymentMethodUpdate
    | undefined;
  subscriptionCancel?:
    | BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancel
    | undefined;
  subscriptionUpdate?:
    | BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdate
    | undefined;
};

/**
 * @internal
 * BillingPortalConfigurationUpdateBodyFeatures without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalConfigurationUpdateBodyFeatures = {
  customer_update?:
    | External$BillingPortalConfigurationUpdateBodyFeaturesCustomerUpdate
    | undefined;
  invoice_history?:
    | External$BillingPortalConfigurationUpdateBodyFeaturesInvoiceHistory
    | undefined;
  payment_method_update?:
    | External$BillingPortalConfigurationUpdateBodyFeaturesPaymentMethodUpdate
    | undefined;
  subscription_cancel?:
    | External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancel
    | undefined;
  subscription_update?:
    | External$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdate
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalConfigurationUpdateBodyFeatures
 */
const SchemaIn$BillingPortalConfigurationUpdateBodyFeatures: z.ZodType<
  BillingPortalConfigurationUpdateBodyFeatures, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer_update:
      Schemas$BillingPortalConfigurationUpdateBodyFeaturesCustomerUpdate.in.optional(),
    invoice_history:
      Schemas$BillingPortalConfigurationUpdateBodyFeaturesInvoiceHistory.in.optional(),
    payment_method_update:
      Schemas$BillingPortalConfigurationUpdateBodyFeaturesPaymentMethodUpdate.in.optional(),
    subscription_cancel:
      Schemas$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancel.in.optional(),
    subscription_update:
      Schemas$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdate.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer_update: "customerUpdate",
      invoice_history: "invoiceHistory",
      payment_method_update: "paymentMethodUpdate",
      subscription_cancel: "subscriptionCancel",
      subscription_update: "subscriptionUpdate",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalConfigurationUpdateBodyFeatures
 */
const SchemaOut$BillingPortalConfigurationUpdateBodyFeatures: z.ZodType<
  External$BillingPortalConfigurationUpdateBodyFeatures, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalConfigurationUpdateBodyFeatures // the object to be transformed
> = z
  .object({
    customerUpdate:
      Schemas$BillingPortalConfigurationUpdateBodyFeaturesCustomerUpdate.out.optional(),
    invoiceHistory:
      Schemas$BillingPortalConfigurationUpdateBodyFeaturesInvoiceHistory.out.optional(),
    paymentMethodUpdate:
      Schemas$BillingPortalConfigurationUpdateBodyFeaturesPaymentMethodUpdate.out.optional(),
    subscriptionCancel:
      Schemas$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionCancel.out.optional(),
    subscriptionUpdate:
      Schemas$BillingPortalConfigurationUpdateBodyFeaturesSubscriptionUpdate.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customerUpdate: "customer_update",
      invoiceHistory: "invoice_history",
      paymentMethodUpdate: "payment_method_update",
      subscriptionCancel: "subscription_cancel",
      subscriptionUpdate: "subscription_update",
    });
  });

export const Schemas$BillingPortalConfigurationUpdateBodyFeatures = {
  in: SchemaIn$BillingPortalConfigurationUpdateBodyFeatures,
  out: SchemaOut$BillingPortalConfigurationUpdateBodyFeatures,
};
