import {
  External$PaymentMethodConfigurationUpdateBodyNzBankAccountDisplayPreference,
  PaymentMethodConfigurationUpdateBodyNzBankAccountDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyNzBankAccountDisplayPreference,
} from "./payment-method-configuration-update-body-nz-bank-account-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Stripe users in New Zealand can accept Bulk Electronic Clearing System (BECS) direct debit payments from customers with a New Zeland bank account. Check this [page](https://stripe.com/docs/payments/nz-bank-account) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyNzBankAccount = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyNzBankAccountDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyNzBankAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyNzBankAccount = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyNzBankAccountDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyNzBankAccount
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyNzBankAccount: z.ZodType<
  PaymentMethodConfigurationUpdateBodyNzBankAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyNzBankAccountDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyNzBankAccount
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyNzBankAccount: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyNzBankAccount, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyNzBankAccount // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyNzBankAccountDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyNzBankAccount = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyNzBankAccount,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyNzBankAccount,
};
