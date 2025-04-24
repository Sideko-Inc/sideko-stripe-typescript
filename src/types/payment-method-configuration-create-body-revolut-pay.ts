import {
  External$PaymentMethodConfigurationCreateBodyRevolutPayDisplayPreference,
  PaymentMethodConfigurationCreateBodyRevolutPayDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyRevolutPayDisplayPreference,
} from "./payment-method-configuration-create-body-revolut-pay-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Revolut Pay, developed by Revolut, a global finance app, is a digital wallet payment method. Revolut Pay uses the customer’s stored balance or cards to fund the payment, and offers the option for non-Revolut customers to save their details after their first purchase.
 */
export type PaymentMethodConfigurationCreateBodyRevolutPay = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyRevolutPayDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyRevolutPay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyRevolutPay = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyRevolutPayDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyRevolutPay
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyRevolutPay: z.ZodType<
  PaymentMethodConfigurationCreateBodyRevolutPay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyRevolutPayDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyRevolutPay
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyRevolutPay: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyRevolutPay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyRevolutPay // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyRevolutPayDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyRevolutPay = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyRevolutPay,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyRevolutPay,
};
