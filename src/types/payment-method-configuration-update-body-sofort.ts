import {
  External$PaymentMethodConfigurationUpdateBodySofortDisplayPreference,
  PaymentMethodConfigurationUpdateBodySofortDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodySofortDisplayPreference,
} from "./payment-method-configuration-update-body-sofort-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Stripe users in Europe and the United States can use the [Payment Intents API](https://stripe.com/docs/payments/payment-intents)—a single integration path for creating payments using any supported method—to accept [Sofort](https://www.sofort.com/) payments from customers. Check this [page](https://stripe.com/docs/payments/sofort) for more details.
 */
export type PaymentMethodConfigurationUpdateBodySofort = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodySofortDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodySofort without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodySofort = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodySofortDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodySofort
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodySofort: z.ZodType<
  PaymentMethodConfigurationUpdateBodySofort, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodySofortDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodySofort
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodySofort: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodySofort, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodySofort // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodySofortDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodySofort = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodySofort,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodySofort,
};
