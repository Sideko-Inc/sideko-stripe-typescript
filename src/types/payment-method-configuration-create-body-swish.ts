import {
  External$PaymentMethodConfigurationCreateBodySwishDisplayPreference,
  PaymentMethodConfigurationCreateBodySwishDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodySwishDisplayPreference,
} from "./payment-method-configuration-create-body-swish-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Swish is a [real-time](https://stripe.com/docs/payments/real-time) payment method popular in Sweden. It allows customers to [authenticate and approve](https://stripe.com/docs/payments/payment-methods#customer-actions) payments using the Swish mobile app and the Swedish BankID mobile app. Check this [page](https://stripe.com/docs/payments/swish) for more details.
 */
export type PaymentMethodConfigurationCreateBodySwish = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodySwishDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodySwish without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodySwish = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodySwishDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodySwish
 */
const SchemaIn$PaymentMethodConfigurationCreateBodySwish: z.ZodType<
  PaymentMethodConfigurationCreateBodySwish, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodySwishDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodySwish
 */
const SchemaOut$PaymentMethodConfigurationCreateBodySwish: z.ZodType<
  External$PaymentMethodConfigurationCreateBodySwish, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodySwish // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodySwishDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodySwish = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodySwish,
  out: SchemaOut$PaymentMethodConfigurationCreateBodySwish,
};
