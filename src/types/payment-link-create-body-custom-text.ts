import {
  External$PaymentLinkCreateBodyCustomTextAfterSubmitObj0,
  PaymentLinkCreateBodyCustomTextAfterSubmitObj0,
  Schemas$PaymentLinkCreateBodyCustomTextAfterSubmitObj0,
} from "./payment-link-create-body-custom-text-after-submit-obj0";
import {
  External$PaymentLinkCreateBodyCustomTextShippingAddressObj0,
  PaymentLinkCreateBodyCustomTextShippingAddressObj0,
  Schemas$PaymentLinkCreateBodyCustomTextShippingAddressObj0,
} from "./payment-link-create-body-custom-text-shipping-address-obj0";
import {
  External$PaymentLinkCreateBodyCustomTextSubmitObj0,
  PaymentLinkCreateBodyCustomTextSubmitObj0,
  Schemas$PaymentLinkCreateBodyCustomTextSubmitObj0,
} from "./payment-link-create-body-custom-text-submit-obj0";
import {
  External$PaymentLinkCreateBodyCustomTextTermsOfServiceAcceptanceObj0,
  PaymentLinkCreateBodyCustomTextTermsOfServiceAcceptanceObj0,
  Schemas$PaymentLinkCreateBodyCustomTextTermsOfServiceAcceptanceObj0,
} from "./payment-link-create-body-custom-text-terms-of-service-acceptance-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Display additional text for your customers using custom text.
 */
export type PaymentLinkCreateBodyCustomText = {
  afterSubmit?:
    | (PaymentLinkCreateBodyCustomTextAfterSubmitObj0 | string)
    | undefined;
  shippingAddress?:
    | (PaymentLinkCreateBodyCustomTextShippingAddressObj0 | string)
    | undefined;
  submit?: (PaymentLinkCreateBodyCustomTextSubmitObj0 | string) | undefined;
  termsOfServiceAcceptance?:
    | (PaymentLinkCreateBodyCustomTextTermsOfServiceAcceptanceObj0 | string)
    | undefined;
};

/**
 * @internal
 * PaymentLinkCreateBodyCustomText without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyCustomText = {
  after_submit?:
    | (External$PaymentLinkCreateBodyCustomTextAfterSubmitObj0 | string)
    | undefined;
  shipping_address?:
    | (External$PaymentLinkCreateBodyCustomTextShippingAddressObj0 | string)
    | undefined;
  submit?:
    | (External$PaymentLinkCreateBodyCustomTextSubmitObj0 | string)
    | undefined;
  terms_of_service_acceptance?:
    | (
        | External$PaymentLinkCreateBodyCustomTextTermsOfServiceAcceptanceObj0
        | string
      )
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyCustomText
 */
const SchemaIn$PaymentLinkCreateBodyCustomText: z.ZodType<
  PaymentLinkCreateBodyCustomText, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    after_submit: z
      .union([
        Schemas$PaymentLinkCreateBodyCustomTextAfterSubmitObj0.in,
        z.string(),
      ])
      .optional(),
    shipping_address: z
      .union([
        Schemas$PaymentLinkCreateBodyCustomTextShippingAddressObj0.in,
        z.string(),
      ])
      .optional(),
    submit: z
      .union([Schemas$PaymentLinkCreateBodyCustomTextSubmitObj0.in, z.string()])
      .optional(),
    terms_of_service_acceptance: z
      .union([
        Schemas$PaymentLinkCreateBodyCustomTextTermsOfServiceAcceptanceObj0.in,
        z.string(),
      ])
      .optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyCustomText
 */
const SchemaOut$PaymentLinkCreateBodyCustomText: z.ZodType<
  External$PaymentLinkCreateBodyCustomText, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyCustomText // the object to be transformed
> = z
  .object({
    afterSubmit: z
      .union([
        Schemas$PaymentLinkCreateBodyCustomTextAfterSubmitObj0.out,
        z.string(),
      ])
      .optional(),
    shippingAddress: z
      .union([
        Schemas$PaymentLinkCreateBodyCustomTextShippingAddressObj0.out,
        z.string(),
      ])
      .optional(),
    submit: z
      .union([
        Schemas$PaymentLinkCreateBodyCustomTextSubmitObj0.out,
        z.string(),
      ])
      .optional(),
    termsOfServiceAcceptance: z
      .union([
        Schemas$PaymentLinkCreateBodyCustomTextTermsOfServiceAcceptanceObj0.out,
        z.string(),
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      afterSubmit: "after_submit",
      shippingAddress: "shipping_address",
      submit: "submit",
      termsOfServiceAcceptance: "terms_of_service_acceptance",
    });
  });

export const Schemas$PaymentLinkCreateBodyCustomText = {
  in: SchemaIn$PaymentLinkCreateBodyCustomText,
  out: SchemaOut$PaymentLinkCreateBodyCustomText,
};
