import {
  External$PaymentMethodConfigurationCreateBodyTwintDisplayPreference,
  PaymentMethodConfigurationCreateBodyTwintDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyTwintDisplayPreference,
} from "./payment-method-configuration-create-body-twint-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Twint is a payment method popular in Switzerland. It allows customers to pay using their mobile phone. Check this [page](https://docs.stripe.com/payments/twint) for more details.
 */
export type PaymentMethodConfigurationCreateBodyTwint = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyTwintDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyTwint without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyTwint = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyTwintDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyTwint
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyTwint: z.ZodType<
  PaymentMethodConfigurationCreateBodyTwint, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyTwintDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyTwint
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyTwint: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyTwint, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyTwint // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyTwintDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyTwint = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyTwint,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyTwint,
};
