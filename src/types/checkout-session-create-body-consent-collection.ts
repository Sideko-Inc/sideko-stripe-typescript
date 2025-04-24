import {
  CheckoutSessionCreateBodyConsentCollectionPaymentMethodReuseAgreement,
  External$CheckoutSessionCreateBodyConsentCollectionPaymentMethodReuseAgreement,
  Schemas$CheckoutSessionCreateBodyConsentCollectionPaymentMethodReuseAgreement,
} from "./checkout-session-create-body-consent-collection-payment-method-reuse-agreement";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Configure fields for the Checkout Session to gather active consent from customers.
 */
export type CheckoutSessionCreateBodyConsentCollection = {
  paymentMethodReuseAgreement?:
    | CheckoutSessionCreateBodyConsentCollectionPaymentMethodReuseAgreement
    | undefined;
  promotions?: ("auto" | "none") | undefined;
  termsOfService?: ("none" | "required") | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyConsentCollection without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyConsentCollection = {
  payment_method_reuse_agreement?:
    | External$CheckoutSessionCreateBodyConsentCollectionPaymentMethodReuseAgreement
    | undefined;
  promotions?: ("auto" | "none") | undefined;
  terms_of_service?: ("none" | "required") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyConsentCollection
 */
const SchemaIn$CheckoutSessionCreateBodyConsentCollection: z.ZodType<
  CheckoutSessionCreateBodyConsentCollection, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    payment_method_reuse_agreement:
      Schemas$CheckoutSessionCreateBodyConsentCollectionPaymentMethodReuseAgreement.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyConsentCollection
 */
const SchemaOut$CheckoutSessionCreateBodyConsentCollection: z.ZodType<
  External$CheckoutSessionCreateBodyConsentCollection, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyConsentCollection // the object to be transformed
> = z
  .object({
    paymentMethodReuseAgreement:
      Schemas$CheckoutSessionCreateBodyConsentCollectionPaymentMethodReuseAgreement.out.optional(),
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

export const Schemas$CheckoutSessionCreateBodyConsentCollection = {
  in: SchemaIn$CheckoutSessionCreateBodyConsentCollection,
  out: SchemaOut$CheckoutSessionCreateBodyConsentCollection,
};
