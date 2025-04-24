import {
  External$PaymentMethodConfigurationCreateBodySatispayDisplayPreference,
  PaymentMethodConfigurationCreateBodySatispayDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodySatispayDisplayPreference,
} from "./payment-method-configuration-create-body-satispay-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Satispay is a [single-use](https://docs.stripe.com/payments/payment-methods#usage) payment method where customers are required to [authenticate](/payments/payment-methods#customer-actions) their payment. Customers pay by being redirected from your website or app, authorizing the payment with Satispay, then returning to your website or app. You get [immediate notification](/payments/payment-methods#payment-notification) of whether the payment succeeded or failed.
 */
export type PaymentMethodConfigurationCreateBodySatispay = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodySatispayDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodySatispay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodySatispay = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodySatispayDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodySatispay
 */
const SchemaIn$PaymentMethodConfigurationCreateBodySatispay: z.ZodType<
  PaymentMethodConfigurationCreateBodySatispay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodySatispayDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodySatispay
 */
const SchemaOut$PaymentMethodConfigurationCreateBodySatispay: z.ZodType<
  External$PaymentMethodConfigurationCreateBodySatispay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodySatispay // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodySatispayDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodySatispay = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodySatispay,
  out: SchemaOut$PaymentMethodConfigurationCreateBodySatispay,
};
