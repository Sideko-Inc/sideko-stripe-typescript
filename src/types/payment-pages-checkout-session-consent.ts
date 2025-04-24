import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentPagesCheckoutSessionConsent = {
  /**
   * If `opt_in`, the customer consents to receiving promotional communications
   * from the merchant about this Checkout Session.
   */
  promotions?: ("opt_in" | "opt_out") | null | undefined;
  /**
   * If `accepted`, the customer in this Checkout Session has agreed to the merchant's terms of service.
   */
  termsOfService?: "accepted" | null | undefined;
};

/**
 * @internal
 * PaymentPagesCheckoutSessionConsent without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentPagesCheckoutSessionConsent = {
  promotions?: ("opt_in" | "opt_out") | null | undefined;
  terms_of_service?: "accepted" | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentPagesCheckoutSessionConsent
 */
const SchemaIn$PaymentPagesCheckoutSessionConsent: z.ZodType<
  PaymentPagesCheckoutSessionConsent, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    promotions: z.enum(["opt_in", "opt_out"]).nullable().optional(),
    terms_of_service: z.enum(["accepted"]).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      promotions: "promotions",
      terms_of_service: "termsOfService",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentPagesCheckoutSessionConsent
 */
const SchemaOut$PaymentPagesCheckoutSessionConsent: z.ZodType<
  External$PaymentPagesCheckoutSessionConsent, // output type of this zod object
  z.ZodTypeDef,
  PaymentPagesCheckoutSessionConsent // the object to be transformed
> = z
  .object({
    promotions: z.enum(["opt_in", "opt_out"]).nullable().optional(),
    termsOfService: z.enum(["accepted"]).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      promotions: "promotions",
      termsOfService: "terms_of_service",
    });
  });

export const Schemas$PaymentPagesCheckoutSessionConsent = {
  in: SchemaIn$PaymentPagesCheckoutSessionConsent,
  out: SchemaOut$PaymentPagesCheckoutSessionConsent,
};
