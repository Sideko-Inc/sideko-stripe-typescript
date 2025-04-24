import {
  External$PaymentMethodConfigurationUpdateBodyP24DisplayPreference,
  PaymentMethodConfigurationUpdateBodyP24DisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyP24DisplayPreference,
} from "./payment-method-configuration-update-body-p24-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Przelewy24 is a Poland-based payment method aggregator that allows customers to complete transactions online using bank transfers and other methods. Bank transfers account for 30% of online payments in Poland and Przelewy24 provides a way for customers to pay with over 165 banks. Check this [page](https://stripe.com/docs/payments/p24) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyP24 = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyP24DisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyP24 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyP24 = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyP24DisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyP24
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyP24: z.ZodType<
  PaymentMethodConfigurationUpdateBodyP24, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyP24DisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyP24
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyP24: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyP24, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyP24 // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyP24DisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyP24 = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyP24,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyP24,
};
