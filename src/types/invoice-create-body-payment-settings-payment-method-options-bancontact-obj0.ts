import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0
 */
export type InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0 =
  {
    preferredLanguage?: ("de" | "en" | "fr" | "nl") | undefined;
  };

/**
 * @internal
 * InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0 =
  {
    preferred_language?: ("de" | "en" | "fr" | "nl") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0
 */
const SchemaIn$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0: z.ZodType<
  InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    preferred_language: z.enum(["de", "en", "fr", "nl"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preferred_language: "preferredLanguage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0
 */
const SchemaOut$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0: z.ZodType<
  External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0 // the object to be transformed
> = z
  .object({
    preferredLanguage: z.enum(["de", "en", "fr", "nl"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preferredLanguage: "preferred_language",
    });
  });

export const Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0 =
  {
    in: SchemaIn$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0,
    out: SchemaOut$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0,
  };
