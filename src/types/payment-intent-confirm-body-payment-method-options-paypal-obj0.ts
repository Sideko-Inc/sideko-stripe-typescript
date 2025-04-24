import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsPaypalObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsPaypalObj0 = {
  captureMethod?: "manual" | undefined;
  preferredLocale?:
    | (
        | "cs-CZ"
        | "da-DK"
        | "de-AT"
        | "de-DE"
        | "de-LU"
        | "el-GR"
        | "en-GB"
        | "en-US"
        | "es-ES"
        | "fi-FI"
        | "fr-BE"
        | "fr-FR"
        | "fr-LU"
        | "hu-HU"
        | "it-IT"
        | "nl-BE"
        | "nl-NL"
        | "pl-PL"
        | "pt-PT"
        | "sk-SK"
        | "sv-SE"
      )
    | undefined;
  reference?: string | undefined;
  riskCorrelationId?: string | undefined;
  setupFutureUsage?: ("none" | "off_session") | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsPaypalObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsPaypalObj0 = {
  capture_method?: "manual" | undefined;
  preferred_locale?:
    | (
        | "cs-CZ"
        | "da-DK"
        | "de-AT"
        | "de-DE"
        | "de-LU"
        | "el-GR"
        | "en-GB"
        | "en-US"
        | "es-ES"
        | "fi-FI"
        | "fr-BE"
        | "fr-FR"
        | "fr-LU"
        | "hu-HU"
        | "it-IT"
        | "nl-BE"
        | "nl-NL"
        | "pl-PL"
        | "pt-PT"
        | "sk-SK"
        | "sv-SE"
      )
    | undefined;
  reference?: string | undefined;
  risk_correlation_id?: string | undefined;
  setup_future_usage?: ("none" | "off_session") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsPaypalObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsPaypalObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsPaypalObj0, // output type of this zod object
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
        "de-DE",
        "de-LU",
        "el-GR",
        "en-GB",
        "en-US",
        "es-ES",
        "fi-FI",
        "fr-BE",
        "fr-FR",
        "fr-LU",
        "hu-HU",
        "it-IT",
        "nl-BE",
        "nl-NL",
        "pl-PL",
        "pt-PT",
        "sk-SK",
        "sv-SE",
      ])
      .optional(),
    reference: z.string().optional(),
    risk_correlation_id: z.string().optional(),
    setup_future_usage: z.enum(["none", "off_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      capture_method: "captureMethod",
      preferred_locale: "preferredLocale",
      reference: "reference",
      risk_correlation_id: "riskCorrelationId",
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsPaypalObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsPaypalObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsPaypalObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsPaypalObj0 // the object to be transformed
> = z
  .object({
    captureMethod: z.enum(["manual"]).optional(),
    preferredLocale: z
      .enum([
        "cs-CZ",
        "da-DK",
        "de-AT",
        "de-DE",
        "de-LU",
        "el-GR",
        "en-GB",
        "en-US",
        "es-ES",
        "fi-FI",
        "fr-BE",
        "fr-FR",
        "fr-LU",
        "hu-HU",
        "it-IT",
        "nl-BE",
        "nl-NL",
        "pl-PL",
        "pt-PT",
        "sk-SK",
        "sv-SE",
      ])
      .optional(),
    reference: z.string().optional(),
    riskCorrelationId: z.string().optional(),
    setupFutureUsage: z.enum(["none", "off_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      captureMethod: "capture_method",
      preferredLocale: "preferred_locale",
      reference: "reference",
      riskCorrelationId: "risk_correlation_id",
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsPaypalObj0 = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsPaypalObj0,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsPaypalObj0,
};
