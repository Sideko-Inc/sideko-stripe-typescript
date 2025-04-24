import {
  External$PaymentMethodConfigurationUpdateBodyApplePayDisplayPreference,
  PaymentMethodConfigurationUpdateBodyApplePayDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyApplePayDisplayPreference,
} from "./payment-method-configuration-update-body-apple-pay-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Stripe users can accept [Apple Pay](/payments/apple-pay) in iOS applications in iOS 9 and later, and on the web in Safari starting with iOS 10 or macOS Sierra. There are no additional fees to process Apple Pay payments, and the [pricing](/pricing) is the same as other card transactions. Check this [page](https://stripe.com/docs/apple-pay) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyApplePay = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyApplePayDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyApplePay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyApplePay = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyApplePayDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyApplePay
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyApplePay: z.ZodType<
  PaymentMethodConfigurationUpdateBodyApplePay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyApplePayDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyApplePay
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyApplePay: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyApplePay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyApplePay // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyApplePayDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyApplePay = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyApplePay,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyApplePay,
};
