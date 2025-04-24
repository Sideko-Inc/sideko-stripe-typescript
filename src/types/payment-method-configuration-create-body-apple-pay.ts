import {
  External$PaymentMethodConfigurationCreateBodyApplePayDisplayPreference,
  PaymentMethodConfigurationCreateBodyApplePayDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyApplePayDisplayPreference,
} from "./payment-method-configuration-create-body-apple-pay-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Stripe users can accept [Apple Pay](/payments/apple-pay) in iOS applications in iOS 9 and later, and on the web in Safari starting with iOS 10 or macOS Sierra. There are no additional fees to process Apple Pay payments, and the [pricing](/pricing) is the same as other card transactions. Check this [page](https://stripe.com/docs/apple-pay) for more details.
 */
export type PaymentMethodConfigurationCreateBodyApplePay = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyApplePayDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyApplePay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyApplePay = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyApplePayDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyApplePay
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyApplePay: z.ZodType<
  PaymentMethodConfigurationCreateBodyApplePay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyApplePayDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyApplePay
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyApplePay: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyApplePay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyApplePay // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyApplePayDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyApplePay = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyApplePay,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyApplePay,
};
