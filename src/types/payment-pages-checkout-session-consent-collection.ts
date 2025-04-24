import {
  External$PaymentPagesCheckoutSessionPaymentMethodReuseAgreement,
  PaymentPagesCheckoutSessionPaymentMethodReuseAgreement,
  Schemas$PaymentPagesCheckoutSessionPaymentMethodReuseAgreement,
} from "./payment-pages-checkout-session-payment-method-reuse-agreement";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentPagesCheckoutSessionConsentCollection = {
  paymentMethodReuseAgreement?:
    | PaymentPagesCheckoutSessionPaymentMethodReuseAgreement
    | undefined;
  /**
   * If set to `auto`, enables the collection of customer consent for promotional communications. The Checkout
   * Session will determine whether to display an option to opt into promotional communication
   * from the merchant depending on the customer's locale. Only available to US merchants.
   */
  promotions?: ("auto" | "none") | null | undefined;
  /**
   * If set to `required`, it requires customers to accept the terms of service before being able to pay.
   */
  termsOfService?: ("none" | "required") | null | undefined;
};

/**
 * @internal
 * PaymentPagesCheckoutSessionConsentCollection without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentPagesCheckoutSessionConsentCollection = {
  payment_method_reuse_agreement?:
    | External$PaymentPagesCheckoutSessionPaymentMethodReuseAgreement
    | undefined;
  promotions?: ("auto" | "none") | null | undefined;
  terms_of_service?: ("none" | "required") | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentPagesCheckoutSessionConsentCollection
 */
const SchemaIn$PaymentPagesCheckoutSessionConsentCollection: z.ZodType<
  PaymentPagesCheckoutSessionConsentCollection, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    payment_method_reuse_agreement:
      Schemas$PaymentPagesCheckoutSessionPaymentMethodReuseAgreement.in.optional(),
    promotions: z.enum(["auto", "none"]).nullable().optional(),
    terms_of_service: z.enum(["none", "required"]).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      payment_method_reuse_agreement: "paymentMethodReuseAgreement",
      promotions: "promotions",
      terms_of_service: "termsOfService",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentPagesCheckoutSessionConsentCollection
 */
const SchemaOut$PaymentPagesCheckoutSessionConsentCollection: z.ZodType<
  External$PaymentPagesCheckoutSessionConsentCollection, // output type of this zod object
  z.ZodTypeDef,
  PaymentPagesCheckoutSessionConsentCollection // the object to be transformed
> = z
  .object({
    paymentMethodReuseAgreement:
      Schemas$PaymentPagesCheckoutSessionPaymentMethodReuseAgreement.out.optional(),
    promotions: z.enum(["auto", "none"]).nullable().optional(),
    termsOfService: z.enum(["none", "required"]).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      paymentMethodReuseAgreement: "payment_method_reuse_agreement",
      promotions: "promotions",
      termsOfService: "terms_of_service",
    });
  });

export const Schemas$PaymentPagesCheckoutSessionConsentCollection = {
  in: SchemaIn$PaymentPagesCheckoutSessionConsentCollection,
  out: SchemaOut$PaymentPagesCheckoutSessionConsentCollection,
};
