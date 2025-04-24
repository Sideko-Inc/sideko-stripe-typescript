import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentFlowsAutomaticPaymentMethodsPaymentIntent = {
  /**
   * Controls whether this PaymentIntent will accept redirect-based payment methods.
   *
   * Redirect-based payment methods may require your customer to be redirected to a payment method's app or site for authentication or additional steps. To [confirm](https://stripe.com/docs/api/payment_intents/confirm) this PaymentIntent, you may be required to provide a `return_url` to redirect customers back to your site after they authenticate or complete the payment.
   */
  allowRedirects?: ("always" | "never") | undefined;
  /**
   * Automatically calculates compatible payment methods
   */
  enabled: boolean;
};

/**
 * @internal
 * PaymentFlowsAutomaticPaymentMethodsPaymentIntent without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentFlowsAutomaticPaymentMethodsPaymentIntent = {
  allow_redirects?: ("always" | "never") | undefined;
  enabled: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentFlowsAutomaticPaymentMethodsPaymentIntent
 */
const SchemaIn$PaymentFlowsAutomaticPaymentMethodsPaymentIntent: z.ZodType<
  PaymentFlowsAutomaticPaymentMethodsPaymentIntent, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    allow_redirects: z.enum(["always", "never"]).optional(),
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allow_redirects: "allowRedirects",
      enabled: "enabled",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentFlowsAutomaticPaymentMethodsPaymentIntent
 */
const SchemaOut$PaymentFlowsAutomaticPaymentMethodsPaymentIntent: z.ZodType<
  External$PaymentFlowsAutomaticPaymentMethodsPaymentIntent, // output type of this zod object
  z.ZodTypeDef,
  PaymentFlowsAutomaticPaymentMethodsPaymentIntent // the object to be transformed
> = z
  .object({
    allowRedirects: z.enum(["always", "never"]).optional(),
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allowRedirects: "allow_redirects",
      enabled: "enabled",
    });
  });

export const Schemas$PaymentFlowsAutomaticPaymentMethodsPaymentIntent = {
  in: SchemaIn$PaymentFlowsAutomaticPaymentMethodsPaymentIntent,
  out: SchemaOut$PaymentFlowsAutomaticPaymentMethodsPaymentIntent,
};
