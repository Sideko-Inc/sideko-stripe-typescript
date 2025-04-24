import {
  External$PaymentMethodConfigurationCreateBodySofortDisplayPreference,
  PaymentMethodConfigurationCreateBodySofortDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodySofortDisplayPreference,
} from "./payment-method-configuration-create-body-sofort-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Stripe users in Europe and the United States can use the [Payment Intents API](https://stripe.com/docs/payments/payment-intents)—a single integration path for creating payments using any supported method—to accept [Sofort](https://www.sofort.com/) payments from customers. Check this [page](https://stripe.com/docs/payments/sofort) for more details.
 */
export type PaymentMethodConfigurationCreateBodySofort = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodySofortDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodySofort without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodySofort = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodySofortDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodySofort
 */
const SchemaIn$PaymentMethodConfigurationCreateBodySofort: z.ZodType<
  PaymentMethodConfigurationCreateBodySofort, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodySofortDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodySofort
 */
const SchemaOut$PaymentMethodConfigurationCreateBodySofort: z.ZodType<
  External$PaymentMethodConfigurationCreateBodySofort, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodySofort // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodySofortDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodySofort = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodySofort,
  out: SchemaOut$PaymentMethodConfigurationCreateBodySofort,
};
