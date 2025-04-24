import {
  External$PaymentMethodConfigurationCreateBodyPaynowDisplayPreference,
  PaymentMethodConfigurationCreateBodyPaynowDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyPaynowDisplayPreference,
} from "./payment-method-configuration-create-body-paynow-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PayNow is a Singapore-based payment method that allows customers to make a payment using their preferred app from participating banks and participating non-bank financial institutions. Check this [page](https://stripe.com/docs/payments/paynow) for more details.
 */
export type PaymentMethodConfigurationCreateBodyPaynow = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyPaynowDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyPaynow without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyPaynow = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyPaynowDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyPaynow
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyPaynow: z.ZodType<
  PaymentMethodConfigurationCreateBodyPaynow, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyPaynowDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyPaynow
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyPaynow: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyPaynow, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyPaynow // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyPaynowDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyPaynow = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyPaynow,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyPaynow,
};
