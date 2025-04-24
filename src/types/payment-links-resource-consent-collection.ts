import {
  External$PaymentLinksResourcePaymentMethodReuseAgreement,
  PaymentLinksResourcePaymentMethodReuseAgreement,
  Schemas$PaymentLinksResourcePaymentMethodReuseAgreement,
} from "./payment-links-resource-payment-method-reuse-agreement";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentLinksResourceConsentCollection = {
  paymentMethodReuseAgreement?:
    | PaymentLinksResourcePaymentMethodReuseAgreement
    | undefined;
  /**
   * If set to `auto`, enables the collection of customer consent for promotional communications.
   */
  promotions?: ("auto" | "none") | null | undefined;
  /**
   * If set to `required`, it requires cutomers to accept the terms of service before being able to pay. If set to `none`, customers won't be shown a checkbox to accept the terms of service.
   */
  termsOfService?: ("none" | "required") | null | undefined;
};

/**
 * @internal
 * PaymentLinksResourceConsentCollection without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinksResourceConsentCollection = {
  payment_method_reuse_agreement?:
    | External$PaymentLinksResourcePaymentMethodReuseAgreement
    | undefined;
  promotions?: ("auto" | "none") | null | undefined;
  terms_of_service?: ("none" | "required") | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinksResourceConsentCollection
 */
const SchemaIn$PaymentLinksResourceConsentCollection: z.ZodType<
  PaymentLinksResourceConsentCollection, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    payment_method_reuse_agreement:
      Schemas$PaymentLinksResourcePaymentMethodReuseAgreement.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinksResourceConsentCollection
 */
const SchemaOut$PaymentLinksResourceConsentCollection: z.ZodType<
  External$PaymentLinksResourceConsentCollection, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinksResourceConsentCollection // the object to be transformed
> = z
  .object({
    paymentMethodReuseAgreement:
      Schemas$PaymentLinksResourcePaymentMethodReuseAgreement.out.optional(),
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

export const Schemas$PaymentLinksResourceConsentCollection = {
  in: SchemaIn$PaymentLinksResourceConsentCollection,
  out: SchemaOut$PaymentLinksResourceConsentCollection,
};
