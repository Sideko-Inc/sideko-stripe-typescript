import {
  External$PaymentMethodConfigurationCreateBodyMultibancoDisplayPreference,
  PaymentMethodConfigurationCreateBodyMultibancoDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyMultibancoDisplayPreference,
} from "./payment-method-configuration-create-body-multibanco-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Stripe users in Europe and the United States can accept Multibanco payments from customers in Portugal using [Sources](https://stripe.com/docs/sources)—a single integration path for creating payments using any supported method.
 */
export type PaymentMethodConfigurationCreateBodyMultibanco = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyMultibancoDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyMultibanco without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyMultibanco = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyMultibancoDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyMultibanco
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyMultibanco: z.ZodType<
  PaymentMethodConfigurationCreateBodyMultibanco, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyMultibancoDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyMultibanco
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyMultibanco: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyMultibanco, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyMultibanco // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyMultibancoDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyMultibanco = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyMultibanco,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyMultibanco,
};
