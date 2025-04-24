import {
  External$PaymentPagesCheckoutSessionInvoiceSettings,
  PaymentPagesCheckoutSessionInvoiceSettings,
  Schemas$PaymentPagesCheckoutSessionInvoiceSettings,
} from "./payment-pages-checkout-session-invoice-settings";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentPagesCheckoutSessionInvoiceCreation = {
  /**
   * Indicates whether invoice creation is enabled for the Checkout Session.
   */
  enabled: boolean;
  invoiceData: PaymentPagesCheckoutSessionInvoiceSettings;
};

/**
 * @internal
 * PaymentPagesCheckoutSessionInvoiceCreation without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentPagesCheckoutSessionInvoiceCreation = {
  enabled: boolean;
  invoice_data: External$PaymentPagesCheckoutSessionInvoiceSettings;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentPagesCheckoutSessionInvoiceCreation
 */
const SchemaIn$PaymentPagesCheckoutSessionInvoiceCreation: z.ZodType<
  PaymentPagesCheckoutSessionInvoiceCreation, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    invoice_data: z.lazy(
      () => Schemas$PaymentPagesCheckoutSessionInvoiceSettings.in,
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      invoice_data: "invoiceData",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentPagesCheckoutSessionInvoiceCreation
 */
const SchemaOut$PaymentPagesCheckoutSessionInvoiceCreation: z.ZodType<
  External$PaymentPagesCheckoutSessionInvoiceCreation, // output type of this zod object
  z.ZodTypeDef,
  PaymentPagesCheckoutSessionInvoiceCreation // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    invoiceData: z.lazy(
      () => Schemas$PaymentPagesCheckoutSessionInvoiceSettings.out,
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      invoiceData: "invoice_data",
    });
  });

export const Schemas$PaymentPagesCheckoutSessionInvoiceCreation = {
  in: SchemaIn$PaymentPagesCheckoutSessionInvoiceCreation,
  out: SchemaOut$PaymentPagesCheckoutSessionInvoiceCreation,
};
