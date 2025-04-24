import {
  External$PaymentLinksResourceCustomTextPosition,
  PaymentLinksResourceCustomTextPosition,
  Schemas$PaymentLinksResourceCustomTextPosition,
} from "./payment-links-resource-custom-text-position";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentLinksResourceCustomText = {
  afterSubmit?: PaymentLinksResourceCustomTextPosition | undefined;
  shippingAddress?: PaymentLinksResourceCustomTextPosition | undefined;
  submit?: PaymentLinksResourceCustomTextPosition | undefined;
  termsOfServiceAcceptance?: PaymentLinksResourceCustomTextPosition | undefined;
};

/**
 * @internal
 * PaymentLinksResourceCustomText without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinksResourceCustomText = {
  after_submit?: External$PaymentLinksResourceCustomTextPosition | undefined;
  shipping_address?:
    | External$PaymentLinksResourceCustomTextPosition
    | undefined;
  submit?: External$PaymentLinksResourceCustomTextPosition | undefined;
  terms_of_service_acceptance?:
    | External$PaymentLinksResourceCustomTextPosition
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinksResourceCustomText
 */
const SchemaIn$PaymentLinksResourceCustomText: z.ZodType<
  PaymentLinksResourceCustomText, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    after_submit: Schemas$PaymentLinksResourceCustomTextPosition.in.optional(),
    shipping_address:
      Schemas$PaymentLinksResourceCustomTextPosition.in.optional(),
    submit: Schemas$PaymentLinksResourceCustomTextPosition.in.optional(),
    terms_of_service_acceptance:
      Schemas$PaymentLinksResourceCustomTextPosition.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinksResourceCustomText
 */
const SchemaOut$PaymentLinksResourceCustomText: z.ZodType<
  External$PaymentLinksResourceCustomText, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinksResourceCustomText // the object to be transformed
> = z
  .object({
    afterSubmit: Schemas$PaymentLinksResourceCustomTextPosition.out.optional(),
    shippingAddress:
      Schemas$PaymentLinksResourceCustomTextPosition.out.optional(),
    submit: Schemas$PaymentLinksResourceCustomTextPosition.out.optional(),
    termsOfServiceAcceptance:
      Schemas$PaymentLinksResourceCustomTextPosition.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      afterSubmit: "after_submit",
      shippingAddress: "shipping_address",
      submit: "submit",
      termsOfServiceAcceptance: "terms_of_service_acceptance",
    });
  });

export const Schemas$PaymentLinksResourceCustomText = {
  in: SchemaIn$PaymentLinksResourceCustomText,
  out: SchemaOut$PaymentLinksResourceCustomText,
};
