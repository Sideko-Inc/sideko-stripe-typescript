import {
  BillingPortalConfigurationCreateBodyFeaturesCustomerUpdate,
  External$BillingPortalConfigurationCreateBodyFeaturesCustomerUpdate,
  Schemas$BillingPortalConfigurationCreateBodyFeaturesCustomerUpdate,
} from "./billing-portal-configuration-create-body-features-customer-update";
import {
  BillingPortalConfigurationCreateBodyFeaturesInvoiceHistory,
  External$BillingPortalConfigurationCreateBodyFeaturesInvoiceHistory,
  Schemas$BillingPortalConfigurationCreateBodyFeaturesInvoiceHistory,
} from "./billing-portal-configuration-create-body-features-invoice-history";
import {
  BillingPortalConfigurationCreateBodyFeaturesPaymentMethodUpdate,
  External$BillingPortalConfigurationCreateBodyFeaturesPaymentMethodUpdate,
  Schemas$BillingPortalConfigurationCreateBodyFeaturesPaymentMethodUpdate,
} from "./billing-portal-configuration-create-body-features-payment-method-update";
import {
  BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancel,
  External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancel,
  Schemas$BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancel,
} from "./billing-portal-configuration-create-body-features-subscription-cancel";
import {
  BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdate,
  External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdate,
  Schemas$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdate,
} from "./billing-portal-configuration-create-body-features-subscription-update";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Information about the features available in the portal.
 */
export type BillingPortalConfigurationCreateBodyFeatures = {
  customerUpdate?:
    | BillingPortalConfigurationCreateBodyFeaturesCustomerUpdate
    | undefined;
  invoiceHistory?:
    | BillingPortalConfigurationCreateBodyFeaturesInvoiceHistory
    | undefined;
  paymentMethodUpdate?:
    | BillingPortalConfigurationCreateBodyFeaturesPaymentMethodUpdate
    | undefined;
  subscriptionCancel?:
    | BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancel
    | undefined;
  subscriptionUpdate?:
    | BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdate
    | undefined;
};

/**
 * @internal
 * BillingPortalConfigurationCreateBodyFeatures without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalConfigurationCreateBodyFeatures = {
  customer_update?:
    | External$BillingPortalConfigurationCreateBodyFeaturesCustomerUpdate
    | undefined;
  invoice_history?:
    | External$BillingPortalConfigurationCreateBodyFeaturesInvoiceHistory
    | undefined;
  payment_method_update?:
    | External$BillingPortalConfigurationCreateBodyFeaturesPaymentMethodUpdate
    | undefined;
  subscription_cancel?:
    | External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancel
    | undefined;
  subscription_update?:
    | External$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdate
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalConfigurationCreateBodyFeatures
 */
const SchemaIn$BillingPortalConfigurationCreateBodyFeatures: z.ZodType<
  BillingPortalConfigurationCreateBodyFeatures, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer_update:
      Schemas$BillingPortalConfigurationCreateBodyFeaturesCustomerUpdate.in.optional(),
    invoice_history:
      Schemas$BillingPortalConfigurationCreateBodyFeaturesInvoiceHistory.in.optional(),
    payment_method_update:
      Schemas$BillingPortalConfigurationCreateBodyFeaturesPaymentMethodUpdate.in.optional(),
    subscription_cancel:
      Schemas$BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancel.in.optional(),
    subscription_update:
      Schemas$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdate.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalConfigurationCreateBodyFeatures
 */
const SchemaOut$BillingPortalConfigurationCreateBodyFeatures: z.ZodType<
  External$BillingPortalConfigurationCreateBodyFeatures, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalConfigurationCreateBodyFeatures // the object to be transformed
> = z
  .object({
    customerUpdate:
      Schemas$BillingPortalConfigurationCreateBodyFeaturesCustomerUpdate.out.optional(),
    invoiceHistory:
      Schemas$BillingPortalConfigurationCreateBodyFeaturesInvoiceHistory.out.optional(),
    paymentMethodUpdate:
      Schemas$BillingPortalConfigurationCreateBodyFeaturesPaymentMethodUpdate.out.optional(),
    subscriptionCancel:
      Schemas$BillingPortalConfigurationCreateBodyFeaturesSubscriptionCancel.out.optional(),
    subscriptionUpdate:
      Schemas$BillingPortalConfigurationCreateBodyFeaturesSubscriptionUpdate.out.optional(),
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

export const Schemas$BillingPortalConfigurationCreateBodyFeatures = {
  in: SchemaIn$BillingPortalConfigurationCreateBodyFeatures,
  out: SchemaOut$BillingPortalConfigurationCreateBodyFeatures,
};
