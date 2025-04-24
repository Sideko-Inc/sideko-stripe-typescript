import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0
 */
export type SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0 =
  {
    preferredLanguage?: ("de" | "en" | "fr" | "nl") | undefined;
  };

/**
 * @internal
 * SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0 =
  {
    preferred_language?: ("de" | "en" | "fr" | "nl") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0
 */
const SchemaIn$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0: z.ZodType<
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0
 */
const SchemaOut$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0: z.ZodType<
  External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0 // the object to be transformed
> = z
  .object({
    preferredLanguage: z.enum(["de", "en", "fr", "nl"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preferredLanguage: "preferred_language",
    });
  });

export const Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0 =
  {
    in: SchemaIn$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0,
    out: SchemaOut$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0,
  };
