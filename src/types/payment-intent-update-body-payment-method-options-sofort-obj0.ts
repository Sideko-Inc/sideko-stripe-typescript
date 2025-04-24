import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsSofortObj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsSofortObj0 = {
  preferredLanguage?:
    | ("de" | "en" | "es" | "fr" | "it" | "nl" | "pl")
    | undefined;
  setupFutureUsage?: ("none" | "off_session") | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsSofortObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsSofortObj0 = {
  preferred_language?:
    | ("de" | "en" | "es" | "fr" | "it" | "nl" | "pl")
    | undefined;
  setup_future_usage?: ("none" | "off_session") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsSofortObj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsSofortObj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsSofortObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsSofortObj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsSofortObj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsSofortObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsSofortObj0 // the object to be transformed
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

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsSofortObj0 = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsSofortObj0,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsSofortObj0,
};
