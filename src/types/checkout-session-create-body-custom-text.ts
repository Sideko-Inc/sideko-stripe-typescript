import {
  CheckoutSessionCreateBodyCustomTextAfterSubmitObj0,
  External$CheckoutSessionCreateBodyCustomTextAfterSubmitObj0,
  Schemas$CheckoutSessionCreateBodyCustomTextAfterSubmitObj0,
} from "./checkout-session-create-body-custom-text-after-submit-obj0";
import {
  CheckoutSessionCreateBodyCustomTextShippingAddressObj0,
  External$CheckoutSessionCreateBodyCustomTextShippingAddressObj0,
  Schemas$CheckoutSessionCreateBodyCustomTextShippingAddressObj0,
} from "./checkout-session-create-body-custom-text-shipping-address-obj0";
import {
  CheckoutSessionCreateBodyCustomTextSubmitObj0,
  External$CheckoutSessionCreateBodyCustomTextSubmitObj0,
  Schemas$CheckoutSessionCreateBodyCustomTextSubmitObj0,
} from "./checkout-session-create-body-custom-text-submit-obj0";
import {
  CheckoutSessionCreateBodyCustomTextTermsOfServiceAcceptanceObj0,
  External$CheckoutSessionCreateBodyCustomTextTermsOfServiceAcceptanceObj0,
  Schemas$CheckoutSessionCreateBodyCustomTextTermsOfServiceAcceptanceObj0,
} from "./checkout-session-create-body-custom-text-terms-of-service-acceptance-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Display additional text for your customers using custom text.
 */
export type CheckoutSessionCreateBodyCustomText = {
  afterSubmit?:
    | (CheckoutSessionCreateBodyCustomTextAfterSubmitObj0 | string)
    | undefined;
  shippingAddress?:
    | (CheckoutSessionCreateBodyCustomTextShippingAddressObj0 | string)
    | undefined;
  submit?: (CheckoutSessionCreateBodyCustomTextSubmitObj0 | string) | undefined;
  termsOfServiceAcceptance?:
    | (CheckoutSessionCreateBodyCustomTextTermsOfServiceAcceptanceObj0 | string)
    | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyCustomText without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyCustomText = {
  after_submit?:
    | (External$CheckoutSessionCreateBodyCustomTextAfterSubmitObj0 | string)
    | undefined;
  shipping_address?:
    | (External$CheckoutSessionCreateBodyCustomTextShippingAddressObj0 | string)
    | undefined;
  submit?:
    | (External$CheckoutSessionCreateBodyCustomTextSubmitObj0 | string)
    | undefined;
  terms_of_service_acceptance?:
    | (
        | External$CheckoutSessionCreateBodyCustomTextTermsOfServiceAcceptanceObj0
        | string
      )
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyCustomText
 */
const SchemaIn$CheckoutSessionCreateBodyCustomText: z.ZodType<
  CheckoutSessionCreateBodyCustomText, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    after_submit: z
      .union([
        Schemas$CheckoutSessionCreateBodyCustomTextAfterSubmitObj0.in,
        z.string(),
      ])
      .optional(),
    shipping_address: z
      .union([
        Schemas$CheckoutSessionCreateBodyCustomTextShippingAddressObj0.in,
        z.string(),
      ])
      .optional(),
    submit: z
      .union([
        Schemas$CheckoutSessionCreateBodyCustomTextSubmitObj0.in,
        z.string(),
      ])
      .optional(),
    terms_of_service_acceptance: z
      .union([
        Schemas$CheckoutSessionCreateBodyCustomTextTermsOfServiceAcceptanceObj0.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyCustomText
 */
const SchemaOut$CheckoutSessionCreateBodyCustomText: z.ZodType<
  External$CheckoutSessionCreateBodyCustomText, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyCustomText // the object to be transformed
> = z
  .object({
    afterSubmit: z
      .union([
        Schemas$CheckoutSessionCreateBodyCustomTextAfterSubmitObj0.out,
        z.string(),
      ])
      .optional(),
    shippingAddress: z
      .union([
        Schemas$CheckoutSessionCreateBodyCustomTextShippingAddressObj0.out,
        z.string(),
      ])
      .optional(),
    submit: z
      .union([
        Schemas$CheckoutSessionCreateBodyCustomTextSubmitObj0.out,
        z.string(),
      ])
      .optional(),
    termsOfServiceAcceptance: z
      .union([
        Schemas$CheckoutSessionCreateBodyCustomTextTermsOfServiceAcceptanceObj0.out,
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

export const Schemas$CheckoutSessionCreateBodyCustomText = {
  in: SchemaIn$CheckoutSessionCreateBodyCustomText,
  out: SchemaOut$CheckoutSessionCreateBodyCustomText,
};
