import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsBancontactObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsBancontactObj0 = {
  preferredLanguage?: ("de" | "en" | "fr" | "nl") | undefined;
  setupFutureUsage?: ("none" | "off_session") | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsBancontactObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsBancontactObj0 =
  {
    preferred_language?: ("de" | "en" | "fr" | "nl") | undefined;
    setup_future_usage?: ("none" | "off_session") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsBancontactObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsBancontactObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsBancontactObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    preferred_language: z.enum(["de", "en", "fr", "nl"]).optional(),
    setup_future_usage: z.enum(["none", "off_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preferred_language: "preferredLanguage",
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsBancontactObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsBancontactObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsBancontactObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsBancontactObj0 // the object to be transformed
> = z
  .object({
    preferredLanguage: z.enum(["de", "en", "fr", "nl"]).optional(),
    setupFutureUsage: z.enum(["none", "off_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preferredLanguage: "preferred_language",
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsBancontactObj0 =
  {
    in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsBancontactObj0,
    out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsBancontactObj0,
  };
