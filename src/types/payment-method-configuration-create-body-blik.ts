import {
  External$PaymentMethodConfigurationCreateBodyBlikDisplayPreference,
  PaymentMethodConfigurationCreateBodyBlikDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyBlikDisplayPreference,
} from "./payment-method-configuration-create-body-blik-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BLIK is a [single use](https://stripe.com/docs/payments/payment-methods#usage) payment method that requires customers to authenticate their payments. When customers want to pay online using BLIK, they request a six-digit code from their banking application and enter it into the payment collection form. Check this [page](https://stripe.com/docs/payments/blik) for more details.
 */
export type PaymentMethodConfigurationCreateBodyBlik = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyBlikDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyBlik without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyBlik = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyBlikDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyBlik
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyBlik: z.ZodType<
  PaymentMethodConfigurationCreateBodyBlik, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyBlikDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyBlik
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyBlik: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyBlik, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyBlik // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyBlikDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyBlik = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyBlik,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyBlik,
};
