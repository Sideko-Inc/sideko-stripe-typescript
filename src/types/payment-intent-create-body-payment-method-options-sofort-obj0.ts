import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsSofortObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsSofortObj0 = {
  preferredLanguage?:
    | ("de" | "en" | "es" | "fr" | "it" | "nl" | "pl")
    | undefined;
  setupFutureUsage?: ("none" | "off_session") | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsSofortObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsSofortObj0 = {
  preferred_language?:
    | ("de" | "en" | "es" | "fr" | "it" | "nl" | "pl")
    | undefined;
  setup_future_usage?: ("none" | "off_session") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsSofortObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsSofortObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsSofortObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    preferred_language: z
      .enum(["de", "en", "es", "fr", "it", "nl", "pl"])
      .optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsSofortObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsSofortObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsSofortObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsSofortObj0 // the object to be transformed
> = z
  .object({
    preferredLanguage: z
      .enum(["de", "en", "es", "fr", "it", "nl", "pl"])
      .optional(),
    setupFutureUsage: z.enum(["none", "off_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preferredLanguage: "preferred_language",
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsSofortObj0 = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsSofortObj0,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsSofortObj0,
};
