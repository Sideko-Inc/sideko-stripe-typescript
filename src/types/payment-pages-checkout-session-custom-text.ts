import {
  External$PaymentPagesCheckoutSessionCustomTextPosition,
  PaymentPagesCheckoutSessionCustomTextPosition,
  Schemas$PaymentPagesCheckoutSessionCustomTextPosition,
} from "./payment-pages-checkout-session-custom-text-position";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentPagesCheckoutSessionCustomText = {
  afterSubmit?: PaymentPagesCheckoutSessionCustomTextPosition | undefined;
  shippingAddress?: PaymentPagesCheckoutSessionCustomTextPosition | undefined;
  submit?: PaymentPagesCheckoutSessionCustomTextPosition | undefined;
  termsOfServiceAcceptance?:
    | PaymentPagesCheckoutSessionCustomTextPosition
    | undefined;
};

/**
 * @internal
 * PaymentPagesCheckoutSessionCustomText without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentPagesCheckoutSessionCustomText = {
  after_submit?:
    | External$PaymentPagesCheckoutSessionCustomTextPosition
    | undefined;
  shipping_address?:
    | External$PaymentPagesCheckoutSessionCustomTextPosition
    | undefined;
  submit?: External$PaymentPagesCheckoutSessionCustomTextPosition | undefined;
  terms_of_service_acceptance?:
    | External$PaymentPagesCheckoutSessionCustomTextPosition
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentPagesCheckoutSessionCustomText
 */
const SchemaIn$PaymentPagesCheckoutSessionCustomText: z.ZodType<
  PaymentPagesCheckoutSessionCustomText, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    after_submit:
      Schemas$PaymentPagesCheckoutSessionCustomTextPosition.in.optional(),
    shipping_address:
      Schemas$PaymentPagesCheckoutSessionCustomTextPosition.in.optional(),
    submit: Schemas$PaymentPagesCheckoutSessionCustomTextPosition.in.optional(),
    terms_of_service_acceptance:
      Schemas$PaymentPagesCheckoutSessionCustomTextPosition.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      after_submit: "afterSubmit",
      shipping_address: "shippingAddress",
      submit: "submit",
      terms_of_service_acceptance: "termsOfServiceAcceptance",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentPagesCheckoutSessionCustomText
 */
const SchemaOut$PaymentPagesCheckoutSessionCustomText: z.ZodType<
  External$PaymentPagesCheckoutSessionCustomText, // output type of this zod object
  z.ZodTypeDef,
  PaymentPagesCheckoutSessionCustomText // the object to be transformed
> = z
  .object({
    afterSubmit:
      Schemas$PaymentPagesCheckoutSessionCustomTextPosition.out.optional(),
    shippingAddress:
      Schemas$PaymentPagesCheckoutSessionCustomTextPosition.out.optional(),
    submit:
      Schemas$PaymentPagesCheckoutSessionCustomTextPosition.out.optional(),
    termsOfServiceAcceptance:
      Schemas$PaymentPagesCheckoutSessionCustomTextPosition.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      afterSubmit: "after_submit",
      shippingAddress: "shipping_address",
      submit: "submit",
      termsOfServiceAcceptance: "terms_of_service_acceptance",
    });
  });

export const Schemas$PaymentPagesCheckoutSessionCustomText = {
  in: SchemaIn$PaymentPagesCheckoutSessionCustomText,
  out: SchemaOut$PaymentPagesCheckoutSessionCustomText,
};
