import {
  External$PaymentMethodConfigurationUpdateBodyUsBankAccountDisplayPreference,
  PaymentMethodConfigurationUpdateBodyUsBankAccountDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyUsBankAccountDisplayPreference,
} from "./payment-method-configuration-update-body-us-bank-account-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Stripe users in the United States can accept ACH direct debit payments from customers with a US bank account using the Automated Clearing House (ACH) payments system operated by Nacha. Check this [page](https://stripe.com/docs/payments/ach-direct-debit) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyUsBankAccount = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyUsBankAccountDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyUsBankAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyUsBankAccount = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyUsBankAccountDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyUsBankAccount
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyUsBankAccount: z.ZodType<
  PaymentMethodConfigurationUpdateBodyUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyUsBankAccountDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyUsBankAccount
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyUsBankAccount: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyUsBankAccount // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyUsBankAccountDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyUsBankAccount = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyUsBankAccount,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyUsBankAccount,
};
