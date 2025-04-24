import {
  External$PaymentMethodConfigurationUpdateBodyRevolutPayDisplayPreference,
  PaymentMethodConfigurationUpdateBodyRevolutPayDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyRevolutPayDisplayPreference,
} from "./payment-method-configuration-update-body-revolut-pay-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Revolut Pay, developed by Revolut, a global finance app, is a digital wallet payment method. Revolut Pay uses the customer’s stored balance or cards to fund the payment, and offers the option for non-Revolut customers to save their details after their first purchase.
 */
export type PaymentMethodConfigurationUpdateBodyRevolutPay = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyRevolutPayDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyRevolutPay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyRevolutPay = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyRevolutPayDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyRevolutPay
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyRevolutPay: z.ZodType<
  PaymentMethodConfigurationUpdateBodyRevolutPay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyRevolutPayDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyRevolutPay
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyRevolutPay: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyRevolutPay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyRevolutPay // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyRevolutPayDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyRevolutPay = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyRevolutPay,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyRevolutPay,
};
