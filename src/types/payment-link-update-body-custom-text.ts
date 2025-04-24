import {
  External$PaymentLinkUpdateBodyCustomTextAfterSubmitObj0,
  PaymentLinkUpdateBodyCustomTextAfterSubmitObj0,
  Schemas$PaymentLinkUpdateBodyCustomTextAfterSubmitObj0,
} from "./payment-link-update-body-custom-text-after-submit-obj0";
import {
  External$PaymentLinkUpdateBodyCustomTextShippingAddressObj0,
  PaymentLinkUpdateBodyCustomTextShippingAddressObj0,
  Schemas$PaymentLinkUpdateBodyCustomTextShippingAddressObj0,
} from "./payment-link-update-body-custom-text-shipping-address-obj0";
import {
  External$PaymentLinkUpdateBodyCustomTextSubmitObj0,
  PaymentLinkUpdateBodyCustomTextSubmitObj0,
  Schemas$PaymentLinkUpdateBodyCustomTextSubmitObj0,
} from "./payment-link-update-body-custom-text-submit-obj0";
import {
  External$PaymentLinkUpdateBodyCustomTextTermsOfServiceAcceptanceObj0,
  PaymentLinkUpdateBodyCustomTextTermsOfServiceAcceptanceObj0,
  Schemas$PaymentLinkUpdateBodyCustomTextTermsOfServiceAcceptanceObj0,
} from "./payment-link-update-body-custom-text-terms-of-service-acceptance-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Display additional text for your customers using custom text.
 */
export type PaymentLinkUpdateBodyCustomText = {
  afterSubmit?:
    | (PaymentLinkUpdateBodyCustomTextAfterSubmitObj0 | string)
    | undefined;
  shippingAddress?:
    | (PaymentLinkUpdateBodyCustomTextShippingAddressObj0 | string)
    | undefined;
  submit?: (PaymentLinkUpdateBodyCustomTextSubmitObj0 | string) | undefined;
  termsOfServiceAcceptance?:
    | (PaymentLinkUpdateBodyCustomTextTermsOfServiceAcceptanceObj0 | string)
    | undefined;
};

/**
 * @internal
 * PaymentLinkUpdateBodyCustomText without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyCustomText = {
  after_submit?:
    | (External$PaymentLinkUpdateBodyCustomTextAfterSubmitObj0 | string)
    | undefined;
  shipping_address?:
    | (External$PaymentLinkUpdateBodyCustomTextShippingAddressObj0 | string)
    | undefined;
  submit?:
    | (External$PaymentLinkUpdateBodyCustomTextSubmitObj0 | string)
    | undefined;
  terms_of_service_acceptance?:
    | (
        | External$PaymentLinkUpdateBodyCustomTextTermsOfServiceAcceptanceObj0
        | string
      )
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyCustomText
 */
const SchemaIn$PaymentLinkUpdateBodyCustomText: z.ZodType<
  PaymentLinkUpdateBodyCustomText, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    after_submit: z
      .union([
        Schemas$PaymentLinkUpdateBodyCustomTextAfterSubmitObj0.in,
        z.string(),
      ])
      .optional(),
    shipping_address: z
      .union([
        Schemas$PaymentLinkUpdateBodyCustomTextShippingAddressObj0.in,
        z.string(),
      ])
      .optional(),
    submit: z
      .union([Schemas$PaymentLinkUpdateBodyCustomTextSubmitObj0.in, z.string()])
      .optional(),
    terms_of_service_acceptance: z
      .union([
        Schemas$PaymentLinkUpdateBodyCustomTextTermsOfServiceAcceptanceObj0.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyCustomText
 */
const SchemaOut$PaymentLinkUpdateBodyCustomText: z.ZodType<
  External$PaymentLinkUpdateBodyCustomText, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyCustomText // the object to be transformed
> = z
  .object({
    afterSubmit: z
      .union([
        Schemas$PaymentLinkUpdateBodyCustomTextAfterSubmitObj0.out,
        z.string(),
      ])
      .optional(),
    shippingAddress: z
      .union([
        Schemas$PaymentLinkUpdateBodyCustomTextShippingAddressObj0.out,
        z.string(),
      ])
      .optional(),
    submit: z
      .union([
        Schemas$PaymentLinkUpdateBodyCustomTextSubmitObj0.out,
        z.string(),
      ])
      .optional(),
    termsOfServiceAcceptance: z
      .union([
        Schemas$PaymentLinkUpdateBodyCustomTextTermsOfServiceAcceptanceObj0.out,
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

export const Schemas$PaymentLinkUpdateBodyCustomText = {
  in: SchemaIn$PaymentLinkUpdateBodyCustomText,
  out: SchemaOut$PaymentLinkUpdateBodyCustomText,
};
