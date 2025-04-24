import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentFlowsAutomaticPaymentMethodsSetupIntent = {
  /**
   * Controls whether this SetupIntent will accept redirect-based payment methods.
   *
   * Redirect-based payment methods may require your customer to be redirected to a payment method's app or site for authentication or additional steps. To [confirm](https://stripe.com/docs/api/setup_intents/confirm) this SetupIntent, you may be required to provide a `return_url` to redirect customers back to your site after they authenticate or complete the setup.
   */
  allowRedirects?: ("always" | "never") | undefined;
  /**
   * Automatically calculates compatible payment methods
   */
  enabled?: boolean | null | undefined;
};

/**
 * @internal
 * PaymentFlowsAutomaticPaymentMethodsSetupIntent without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentFlowsAutomaticPaymentMethodsSetupIntent = {
  allow_redirects?: ("always" | "never") | undefined;
  enabled?: boolean | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentFlowsAutomaticPaymentMethodsSetupIntent
 */
const SchemaIn$PaymentFlowsAutomaticPaymentMethodsSetupIntent: z.ZodType<
  PaymentFlowsAutomaticPaymentMethodsSetupIntent, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    allow_redirects: z.enum(["always", "never"]).optional(),
    enabled: z.boolean().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allow_redirects: "allowRedirects",
      enabled: "enabled",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentFlowsAutomaticPaymentMethodsSetupIntent
 */
const SchemaOut$PaymentFlowsAutomaticPaymentMethodsSetupIntent: z.ZodType<
  External$PaymentFlowsAutomaticPaymentMethodsSetupIntent, // output type of this zod object
  z.ZodTypeDef,
  PaymentFlowsAutomaticPaymentMethodsSetupIntent // the object to be transformed
> = z
  .object({
    allowRedirects: z.enum(["always", "never"]).optional(),
    enabled: z.boolean().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allowRedirects: "allow_redirects",
      enabled: "enabled",
    });
  });

export const Schemas$PaymentFlowsAutomaticPaymentMethodsSetupIntent = {
  in: SchemaIn$PaymentFlowsAutomaticPaymentMethodsSetupIntent,
  out: SchemaOut$PaymentFlowsAutomaticPaymentMethodsSetupIntent,
};
