import {
  External$PaymentMethodConfigurationCreateBodyGooglePayDisplayPreference,
  PaymentMethodConfigurationCreateBodyGooglePayDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyGooglePayDisplayPreference,
} from "./payment-method-configuration-create-body-google-pay-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Google Pay allows customers to make payments in your app or website using any credit or debit card saved to their Google Account, including those from Google Play, YouTube, Chrome, or an Android device. Use the Google Pay API to request any credit or debit card stored in your customer's Google account. Check this [page](https://stripe.com/docs/google-pay) for more details.
 */
export type PaymentMethodConfigurationCreateBodyGooglePay = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyGooglePayDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyGooglePay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyGooglePay = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyGooglePayDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyGooglePay
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyGooglePay: z.ZodType<
  PaymentMethodConfigurationCreateBodyGooglePay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyGooglePayDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyGooglePay
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyGooglePay: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyGooglePay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyGooglePay // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyGooglePayDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyGooglePay = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyGooglePay,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyGooglePay,
};
