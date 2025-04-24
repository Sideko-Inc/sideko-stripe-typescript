import {
  External$PortalCustomerUpdate,
  PortalCustomerUpdate,
  Schemas$PortalCustomerUpdate,
} from "./portal-customer-update";
import {
  External$PortalInvoiceList,
  PortalInvoiceList,
  Schemas$PortalInvoiceList,
} from "./portal-invoice-list";
import {
  External$PortalPaymentMethodUpdate,
  PortalPaymentMethodUpdate,
  Schemas$PortalPaymentMethodUpdate,
} from "./portal-payment-method-update";
import {
  External$PortalSubscriptionCancel,
  PortalSubscriptionCancel,
  Schemas$PortalSubscriptionCancel,
} from "./portal-subscription-cancel";
import {
  External$PortalSubscriptionUpdate,
  PortalSubscriptionUpdate,
  Schemas$PortalSubscriptionUpdate,
} from "./portal-subscription-update";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PortalFeatures = {
  customerUpdate: PortalCustomerUpdate;
  invoiceHistory: PortalInvoiceList;
  paymentMethodUpdate: PortalPaymentMethodUpdate;
  subscriptionCancel: PortalSubscriptionCancel;
  subscriptionUpdate: PortalSubscriptionUpdate;
};

/**
 * @internal
 * PortalFeatures without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PortalFeatures = {
  customer_update: External$PortalCustomerUpdate;
  invoice_history: External$PortalInvoiceList;
  payment_method_update: External$PortalPaymentMethodUpdate;
  subscription_cancel: External$PortalSubscriptionCancel;
  subscription_update: External$PortalSubscriptionUpdate;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PortalFeatures
 */
const SchemaIn$PortalFeatures: z.ZodType<
  PortalFeatures, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer_update: Schemas$PortalCustomerUpdate.in,
    invoice_history: Schemas$PortalInvoiceList.in,
    payment_method_update: Schemas$PortalPaymentMethodUpdate.in,
    subscription_cancel: Schemas$PortalSubscriptionCancel.in,
    subscription_update: Schemas$PortalSubscriptionUpdate.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PortalFeatures
 */
const SchemaOut$PortalFeatures: z.ZodType<
  External$PortalFeatures, // output type of this zod object
  z.ZodTypeDef,
  PortalFeatures // the object to be transformed
> = z
  .object({
    customerUpdate: Schemas$PortalCustomerUpdate.out,
    invoiceHistory: Schemas$PortalInvoiceList.out,
    paymentMethodUpdate: Schemas$PortalPaymentMethodUpdate.out,
    subscriptionCancel: Schemas$PortalSubscriptionCancel.out,
    subscriptionUpdate: Schemas$PortalSubscriptionUpdate.out,
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

export const Schemas$PortalFeatures = {
  in: SchemaIn$PortalFeatures,
  out: SchemaOut$PortalFeatures,
};
