import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsBancontactObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsBancontactObj0 = {
  preferredLanguage?: ("de" | "en" | "fr" | "nl") | undefined;
  setupFutureUsage?: ("none" | "off_session") | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsBancontactObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsBancontactObj0 =
  {
    preferred_language?: ("de" | "en" | "fr" | "nl") | undefined;
    setup_future_usage?: ("none" | "off_session") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsBancontactObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsBancontactObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsBancontactObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsBancontactObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsBancontactObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsBancontactObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsBancontactObj0 // the object to be transformed
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

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsBancontactObj0 =
  {
    in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsBancontactObj0,
    out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsBancontactObj0,
  };
