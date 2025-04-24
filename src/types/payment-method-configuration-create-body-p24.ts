import {
  External$PaymentMethodConfigurationCreateBodyP24DisplayPreference,
  PaymentMethodConfigurationCreateBodyP24DisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyP24DisplayPreference,
} from "./payment-method-configuration-create-body-p24-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Przelewy24 is a Poland-based payment method aggregator that allows customers to complete transactions online using bank transfers and other methods. Bank transfers account for 30% of online payments in Poland and Przelewy24 provides a way for customers to pay with over 165 banks. Check this [page](https://stripe.com/docs/payments/p24) for more details.
 */
export type PaymentMethodConfigurationCreateBodyP24 = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyP24DisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyP24 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyP24 = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyP24DisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyP24
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyP24: z.ZodType<
  PaymentMethodConfigurationCreateBodyP24, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyP24DisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyP24
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyP24: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyP24, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyP24 // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyP24DisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyP24 = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyP24,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyP24,
};
