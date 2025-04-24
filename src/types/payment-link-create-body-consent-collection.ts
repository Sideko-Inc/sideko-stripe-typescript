import {
  External$PaymentLinkCreateBodyConsentCollectionPaymentMethodReuseAgreement,
  PaymentLinkCreateBodyConsentCollectionPaymentMethodReuseAgreement,
  Schemas$PaymentLinkCreateBodyConsentCollectionPaymentMethodReuseAgreement,
} from "./payment-link-create-body-consent-collection-payment-method-reuse-agreement";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Configure fields to gather active consent from customers.
 */
export type PaymentLinkCreateBodyConsentCollection = {
  paymentMethodReuseAgreement?:
    | PaymentLinkCreateBodyConsentCollectionPaymentMethodReuseAgreement
    | undefined;
  promotions?: ("auto" | "none") | undefined;
  termsOfService?: ("none" | "required") | undefined;
};

/**
 * @internal
 * PaymentLinkCreateBodyConsentCollection without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyConsentCollection = {
  payment_method_reuse_agreement?:
    | External$PaymentLinkCreateBodyConsentCollectionPaymentMethodReuseAgreement
    | undefined;
  promotions?: ("auto" | "none") | undefined;
  terms_of_service?: ("none" | "required") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyConsentCollection
 */
const SchemaIn$PaymentLinkCreateBodyConsentCollection: z.ZodType<
  PaymentLinkCreateBodyConsentCollection, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    payment_method_reuse_agreement:
      Schemas$PaymentLinkCreateBodyConsentCollectionPaymentMethodReuseAgreement.in.optional(),
    promotions: z.enum(["auto", "none"]).optional(),
    terms_of_service: z.enum(["none", "required"]).optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyConsentCollection
 */
const SchemaOut$PaymentLinkCreateBodyConsentCollection: z.ZodType<
  External$PaymentLinkCreateBodyConsentCollection, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyConsentCollection // the object to be transformed
> = z
  .object({
    paymentMethodReuseAgreement:
      Schemas$PaymentLinkCreateBodyConsentCollectionPaymentMethodReuseAgreement.out.optional(),
    promotions: z.enum(["auto", "none"]).optional(),
    termsOfService: z.enum(["none", "required"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      paymentMethodReuseAgreement: "payment_method_reuse_agreement",
      promotions: "promotions",
      termsOfService: "terms_of_service",
    });
  });

export const Schemas$PaymentLinkCreateBodyConsentCollection = {
  in: SchemaIn$PaymentLinkCreateBodyConsentCollection,
  out: SchemaOut$PaymentLinkCreateBodyConsentCollection,
};
