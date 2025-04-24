import {
  External$PaymentMethodConfigurationUpdateBodySwishDisplayPreference,
  PaymentMethodConfigurationUpdateBodySwishDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodySwishDisplayPreference,
} from "./payment-method-configuration-update-body-swish-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Swish is a [real-time](https://stripe.com/docs/payments/real-time) payment method popular in Sweden. It allows customers to [authenticate and approve](https://stripe.com/docs/payments/payment-methods#customer-actions) payments using the Swish mobile app and the Swedish BankID mobile app. Check this [page](https://stripe.com/docs/payments/swish) for more details.
 */
export type PaymentMethodConfigurationUpdateBodySwish = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodySwishDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodySwish without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodySwish = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodySwishDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodySwish
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodySwish: z.ZodType<
  PaymentMethodConfigurationUpdateBodySwish, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodySwishDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodySwish
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodySwish: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodySwish, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodySwish // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodySwishDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodySwish = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodySwish,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodySwish,
};
