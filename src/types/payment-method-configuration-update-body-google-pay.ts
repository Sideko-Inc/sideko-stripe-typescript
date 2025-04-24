import {
  External$PaymentMethodConfigurationUpdateBodyGooglePayDisplayPreference,
  PaymentMethodConfigurationUpdateBodyGooglePayDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyGooglePayDisplayPreference,
} from "./payment-method-configuration-update-body-google-pay-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Google Pay allows customers to make payments in your app or website using any credit or debit card saved to their Google Account, including those from Google Play, YouTube, Chrome, or an Android device. Use the Google Pay API to request any credit or debit card stored in your customer's Google account. Check this [page](https://stripe.com/docs/google-pay) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyGooglePay = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyGooglePayDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyGooglePay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyGooglePay = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyGooglePayDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyGooglePay
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyGooglePay: z.ZodType<
  PaymentMethodConfigurationUpdateBodyGooglePay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyGooglePayDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyGooglePay
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyGooglePay: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyGooglePay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyGooglePay // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyGooglePayDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyGooglePay = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyGooglePay,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyGooglePay,
};
