import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsKlarnaObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsKlarnaObj0 = {
  captureMethod?: "manual" | undefined;
  preferredLocale?:
    | (
        | "cs-CZ"
        | "da-DK"
        | "de-AT"
        | "de-CH"
        | "de-DE"
        | "el-GR"
        | "en-AT"
        | "en-AU"
        | "en-BE"
        | "en-CA"
        | "en-CH"
        | "en-CZ"
        | "en-DE"
        | "en-DK"
        | "en-ES"
        | "en-FI"
        | "en-FR"
        | "en-GB"
        | "en-GR"
        | "en-IE"
        | "en-IT"
        | "en-NL"
        | "en-NO"
        | "en-NZ"
        | "en-PL"
        | "en-PT"
        | "en-RO"
        | "en-SE"
        | "en-US"
        | "es-ES"
        | "es-US"
        | "fi-FI"
        | "fr-BE"
        | "fr-CA"
        | "fr-CH"
        | "fr-FR"
        | "it-CH"
        | "it-IT"
        | "nb-NO"
        | "nl-BE"
        | "nl-NL"
        | "pl-PL"
        | "pt-PT"
        | "ro-RO"
        | "sv-FI"
        | "sv-SE"
      )
    | undefined;
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsKlarnaObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsKlarnaObj0 = {
  capture_method?: "manual" | undefined;
  preferred_locale?:
    | (
        | "cs-CZ"
        | "da-DK"
        | "de-AT"
        | "de-CH"
        | "de-DE"
        | "el-GR"
        | "en-AT"
        | "en-AU"
        | "en-BE"
        | "en-CA"
        | "en-CH"
        | "en-CZ"
        | "en-DE"
        | "en-DK"
        | "en-ES"
        | "en-FI"
        | "en-FR"
        | "en-GB"
        | "en-GR"
        | "en-IE"
        | "en-IT"
        | "en-NL"
        | "en-NO"
        | "en-NZ"
        | "en-PL"
        | "en-PT"
        | "en-RO"
        | "en-SE"
        | "en-US"
        | "es-ES"
        | "es-US"
        | "fi-FI"
        | "fr-BE"
        | "fr-CA"
        | "fr-CH"
        | "fr-FR"
        | "it-CH"
        | "it-IT"
        | "nb-NO"
        | "nl-BE"
        | "nl-NL"
        | "pl-PL"
        | "pt-PT"
        | "ro-RO"
        | "sv-FI"
        | "sv-SE"
      )
    | undefined;
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsKlarnaObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsKlarnaObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsKlarnaObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    capture_method: z.enum(["manual"]).optional(),
    preferred_locale: z
      .enum([
        "cs-CZ",
        "da-DK",
        "de-AT",
        "de-CH",
        "de-DE",
        "el-GR",
        "en-AT",
        "en-AU",
        "en-BE",
        "en-CA",
        "en-CH",
        "en-CZ",
        "en-DE",
        "en-DK",
        "en-ES",
        "en-FI",
        "en-FR",
        "en-GB",
        "en-GR",
        "en-IE",
        "en-IT",
        "en-NL",
        "en-NO",
        "en-NZ",
        "en-PL",
        "en-PT",
        "en-RO",
        "en-SE",
        "en-US",
        "es-ES",
        "es-US",
        "fi-FI",
        "fr-BE",
        "fr-CA",
        "fr-CH",
        "fr-FR",
        "it-CH",
        "it-IT",
        "nb-NO",
        "nl-BE",
        "nl-NL",
        "pl-PL",
        "pt-PT",
        "ro-RO",
        "sv-FI",
        "sv-SE",
      ])
      .optional(),
    setup_future_usage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      capture_method: "captureMethod",
      preferred_locale: "preferredLocale",
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsKlarnaObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsKlarnaObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsKlarnaObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsKlarnaObj0 // the object to be transformed
> = z
  .object({
    captureMethod: z.enum(["manual"]).optional(),
    preferredLocale: z
      .enum([
        "cs-CZ",
        "da-DK",
        "de-AT",
        "de-CH",
        "de-DE",
        "el-GR",
        "en-AT",
        "en-AU",
        "en-BE",
        "en-CA",
        "en-CH",
        "en-CZ",
        "en-DE",
        "en-DK",
        "en-ES",
        "en-FI",
        "en-FR",
        "en-GB",
        "en-GR",
        "en-IE",
        "en-IT",
        "en-NL",
        "en-NO",
        "en-NZ",
        "en-PL",
        "en-PT",
        "en-RO",
        "en-SE",
        "en-US",
        "es-ES",
        "es-US",
        "fi-FI",
        "fr-BE",
        "fr-CA",
        "fr-CH",
        "fr-FR",
        "it-CH",
        "it-IT",
        "nb-NO",
        "nl-BE",
        "nl-NL",
        "pl-PL",
        "pt-PT",
        "ro-RO",
        "sv-FI",
        "sv-SE",
      ])
      .optional(),
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      captureMethod: "capture_method",
      preferredLocale: "preferred_locale",
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsKlarnaObj0 = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsKlarnaObj0,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsKlarnaObj0,
};
