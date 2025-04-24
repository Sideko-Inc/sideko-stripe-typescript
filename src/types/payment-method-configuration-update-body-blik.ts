import {
  External$PaymentMethodConfigurationUpdateBodyBlikDisplayPreference,
  PaymentMethodConfigurationUpdateBodyBlikDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyBlikDisplayPreference,
} from "./payment-method-configuration-update-body-blik-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BLIK is a [single use](https://stripe.com/docs/payments/payment-methods#usage) payment method that requires customers to authenticate their payments. When customers want to pay online using BLIK, they request a six-digit code from their banking application and enter it into the payment collection form. Check this [page](https://stripe.com/docs/payments/blik) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyBlik = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyBlikDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyBlik without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyBlik = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyBlikDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyBlik
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyBlik: z.ZodType<
  PaymentMethodConfigurationUpdateBodyBlik, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyBlikDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyBlik
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyBlik: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyBlik, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyBlik // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyBlikDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyBlik = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyBlik,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyBlik,
};
