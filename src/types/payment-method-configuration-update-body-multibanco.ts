import {
  External$PaymentMethodConfigurationUpdateBodyMultibancoDisplayPreference,
  PaymentMethodConfigurationUpdateBodyMultibancoDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyMultibancoDisplayPreference,
} from "./payment-method-configuration-update-body-multibanco-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Stripe users in Europe and the United States can accept Multibanco payments from customers in Portugal using [Sources](https://stripe.com/docs/sources)—a single integration path for creating payments using any supported method.
 */
export type PaymentMethodConfigurationUpdateBodyMultibanco = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyMultibancoDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyMultibanco without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyMultibanco = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyMultibancoDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyMultibanco
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyMultibanco: z.ZodType<
  PaymentMethodConfigurationUpdateBodyMultibanco, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyMultibancoDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyMultibanco
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyMultibanco: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyMultibanco, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyMultibanco // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyMultibancoDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyMultibanco = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyMultibanco,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyMultibanco,
};
