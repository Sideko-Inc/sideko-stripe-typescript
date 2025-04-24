import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoicePaymentMethodOptionsBancontact = {
  /**
   * Preferred language of the Bancontact authorization page that the customer is redirected to.
   */
  preferredLanguage: "de" | "en" | "fr" | "nl";
};

/**
 * @internal
 * InvoicePaymentMethodOptionsBancontact without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePaymentMethodOptionsBancontact = {
  preferred_language: "de" | "en" | "fr" | "nl";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePaymentMethodOptionsBancontact
 */
const SchemaIn$InvoicePaymentMethodOptionsBancontact: z.ZodType<
  InvoicePaymentMethodOptionsBancontact, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    preferred_language: z.enum(["de", "en", "fr", "nl"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preferred_language: "preferredLanguage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePaymentMethodOptionsBancontact
 */
const SchemaOut$InvoicePaymentMethodOptionsBancontact: z.ZodType<
  External$InvoicePaymentMethodOptionsBancontact, // output type of this zod object
  z.ZodTypeDef,
  InvoicePaymentMethodOptionsBancontact // the object to be transformed
> = z
  .object({
    preferredLanguage: z.enum(["de", "en", "fr", "nl"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preferredLanguage: "preferred_language",
    });
  });

export const Schemas$InvoicePaymentMethodOptionsBancontact = {
  in: SchemaIn$InvoicePaymentMethodOptionsBancontact,
  out: SchemaOut$InvoicePaymentMethodOptionsBancontact,
};
