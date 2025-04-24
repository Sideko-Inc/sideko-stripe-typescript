import {
  External$PaymentMethodConfigurationUpdateBodySatispayDisplayPreference,
  PaymentMethodConfigurationUpdateBodySatispayDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodySatispayDisplayPreference,
} from "./payment-method-configuration-update-body-satispay-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Satispay is a [single-use](https://docs.stripe.com/payments/payment-methods#usage) payment method where customers are required to [authenticate](/payments/payment-methods#customer-actions) their payment. Customers pay by being redirected from your website or app, authorizing the payment with Satispay, then returning to your website or app. You get [immediate notification](/payments/payment-methods#payment-notification) of whether the payment succeeded or failed.
 */
export type PaymentMethodConfigurationUpdateBodySatispay = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodySatispayDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodySatispay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodySatispay = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodySatispayDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodySatispay
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodySatispay: z.ZodType<
  PaymentMethodConfigurationUpdateBodySatispay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodySatispayDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodySatispay
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodySatispay: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodySatispay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodySatispay // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodySatispayDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodySatispay = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodySatispay,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodySatispay,
};
