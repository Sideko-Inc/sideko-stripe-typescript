import {
  External$PaymentMethodConfigurationCreateBodyNzBankAccountDisplayPreference,
  PaymentMethodConfigurationCreateBodyNzBankAccountDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyNzBankAccountDisplayPreference,
} from "./payment-method-configuration-create-body-nz-bank-account-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Stripe users in New Zealand can accept Bulk Electronic Clearing System (BECS) direct debit payments from customers with a New Zeland bank account. Check this [page](https://stripe.com/docs/payments/nz-bank-account) for more details.
 */
export type PaymentMethodConfigurationCreateBodyNzBankAccount = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyNzBankAccountDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyNzBankAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyNzBankAccount = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyNzBankAccountDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyNzBankAccount
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyNzBankAccount: z.ZodType<
  PaymentMethodConfigurationCreateBodyNzBankAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyNzBankAccountDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyNzBankAccount
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyNzBankAccount: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyNzBankAccount, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyNzBankAccount // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyNzBankAccountDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyNzBankAccount = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyNzBankAccount,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyNzBankAccount,
};
