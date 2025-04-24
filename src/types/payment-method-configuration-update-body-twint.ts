import {
  External$PaymentMethodConfigurationUpdateBodyTwintDisplayPreference,
  PaymentMethodConfigurationUpdateBodyTwintDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyTwintDisplayPreference,
} from "./payment-method-configuration-update-body-twint-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Twint is a payment method popular in Switzerland. It allows customers to pay using their mobile phone. Check this [page](https://docs.stripe.com/payments/twint) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyTwint = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyTwintDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyTwint without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyTwint = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyTwintDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyTwint
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyTwint: z.ZodType<
  PaymentMethodConfigurationUpdateBodyTwint, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyTwintDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyTwint
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyTwint: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyTwint, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyTwint // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyTwintDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyTwint = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyTwint,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyTwint,
};
