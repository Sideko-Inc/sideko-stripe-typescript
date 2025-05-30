import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsBancontactObj0
 */
export type CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsBancontactObj0 =
  {
    preferredLanguage?: ("de" | "en" | "fr" | "nl") | undefined;
  };

/**
 * @internal
 * CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsBancontactObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsBancontactObj0 =
  {
    preferred_language?: ("de" | "en" | "fr" | "nl") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsBancontactObj0
 */
const SchemaIn$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsBancontactObj0: z.ZodType<
  CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsBancontactObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsBancontactObj0
 */
const SchemaOut$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsBancontactObj0: z.ZodType<
  External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsBancontactObj0, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsBancontactObj0 // the object to be transformed
> = z
  .object({
    preferredLanguage: z.enum(["de", "en", "fr", "nl"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preferredLanguage: "preferred_language",
    });
  });

export const Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsBancontactObj0 =
  {
    in: SchemaIn$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsBancontactObj0,
    out: SchemaOut$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsBancontactObj0,
  };
