import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0
 */
export type SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0 =
  {
    preferredLanguage?: ("de" | "en" | "fr" | "nl") | undefined;
  };

/**
 * @internal
 * SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0 =
  {
    preferred_language?: ("de" | "en" | "fr" | "nl") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0
 */
const SchemaIn$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0: z.ZodType<
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0
 */
const SchemaOut$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0: z.ZodType<
  External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0 // the object to be transformed
> = z
  .object({
    preferredLanguage: z.enum(["de", "en", "fr", "nl"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preferredLanguage: "preferred_language",
    });
  });

export const Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0 =
  {
    in: SchemaIn$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0,
    out: SchemaOut$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0,
  };
