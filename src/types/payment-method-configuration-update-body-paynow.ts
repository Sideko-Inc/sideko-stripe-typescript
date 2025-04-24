import {
  External$PaymentMethodConfigurationUpdateBodyPaynowDisplayPreference,
  PaymentMethodConfigurationUpdateBodyPaynowDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyPaynowDisplayPreference,
} from "./payment-method-configuration-update-body-paynow-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PayNow is a Singapore-based payment method that allows customers to make a payment using their preferred app from participating banks and participating non-bank financial institutions. Check this [page](https://stripe.com/docs/payments/paynow) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyPaynow = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyPaynowDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyPaynow without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyPaynow = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyPaynowDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyPaynow
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyPaynow: z.ZodType<
  PaymentMethodConfigurationUpdateBodyPaynow, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyPaynowDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyPaynow
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyPaynow: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyPaynow, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyPaynow // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyPaynowDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyPaynow = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyPaynow,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyPaynow,
};
