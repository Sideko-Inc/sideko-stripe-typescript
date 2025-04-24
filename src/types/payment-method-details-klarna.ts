import {
  External$KlarnaPayerDetails,
  KlarnaPayerDetails,
  Schemas$KlarnaPayerDetails,
} from "./klarna-payer-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsKlarna = {
  payerDetails?: KlarnaPayerDetails | undefined;
  /**
   * The Klarna payment method used for this transaction.
   * Can be one of `pay_later`, `pay_now`, `pay_with_financing`, or `pay_in_installments`
   */
  paymentMethodCategory?: string | null | undefined;
  /**
   * Preferred language of the Klarna authorization page that the customer is redirected to.
   * Can be one of `de-AT`, `en-AT`, `nl-BE`, `fr-BE`, `en-BE`, `de-DE`, `en-DE`, `da-DK`, `en-DK`, `es-ES`, `en-ES`, `fi-FI`, `sv-FI`, `en-FI`, `en-GB`, `en-IE`, `it-IT`, `en-IT`, `nl-NL`, `en-NL`, `nb-NO`, `en-NO`, `sv-SE`, `en-SE`, `en-US`, `es-US`, `fr-FR`, `en-FR`, `cs-CZ`, `en-CZ`, `ro-RO`, `en-RO`, `el-GR`, `en-GR`, `en-AU`, `en-NZ`, `en-CA`, `fr-CA`, `pl-PL`, `en-PL`, `pt-PT`, `en-PT`, `de-CH`, `fr-CH`, `it-CH`, or `en-CH`
   */
  preferredLocale?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsKlarna without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsKlarna = {
  payer_details?: External$KlarnaPayerDetails | undefined;
  payment_method_category?: string | null | undefined;
  preferred_locale?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsKlarna
 */
const SchemaIn$PaymentMethodDetailsKlarna: z.ZodType<
  PaymentMethodDetailsKlarna, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    payer_details: Schemas$KlarnaPayerDetails.in.optional(),
    payment_method_category: z.string().nullable().optional(),
    preferred_locale: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      payer_details: "payerDetails",
      payment_method_category: "paymentMethodCategory",
      preferred_locale: "preferredLocale",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsKlarna
 */
const SchemaOut$PaymentMethodDetailsKlarna: z.ZodType<
  External$PaymentMethodDetailsKlarna, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsKlarna // the object to be transformed
> = z
  .object({
    payerDetails: Schemas$KlarnaPayerDetails.out.optional(),
    paymentMethodCategory: z.string().nullable().optional(),
    preferredLocale: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      payerDetails: "payer_details",
      paymentMethodCategory: "payment_method_category",
      preferredLocale: "preferred_locale",
    });
  });

export const Schemas$PaymentMethodDetailsKlarna = {
  in: SchemaIn$PaymentMethodDetailsKlarna,
  out: SchemaOut$PaymentMethodDetailsKlarna,
};
