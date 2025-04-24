import {
  External$PaymentMethodConfigurationCreateBodyUsBankAccountDisplayPreference,
  PaymentMethodConfigurationCreateBodyUsBankAccountDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyUsBankAccountDisplayPreference,
} from "./payment-method-configuration-create-body-us-bank-account-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Stripe users in the United States can accept ACH direct debit payments from customers with a US bank account using the Automated Clearing House (ACH) payments system operated by Nacha. Check this [page](https://stripe.com/docs/payments/ach-direct-debit) for more details.
 */
export type PaymentMethodConfigurationCreateBodyUsBankAccount = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyUsBankAccountDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyUsBankAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyUsBankAccount = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyUsBankAccountDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyUsBankAccount
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyUsBankAccount: z.ZodType<
  PaymentMethodConfigurationCreateBodyUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyUsBankAccountDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyUsBankAccount
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyUsBankAccount: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyUsBankAccount // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyUsBankAccountDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyUsBankAccount = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyUsBankAccount,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyUsBankAccount,
};
