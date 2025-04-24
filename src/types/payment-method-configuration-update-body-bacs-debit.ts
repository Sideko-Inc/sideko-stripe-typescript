import {
  External$PaymentMethodConfigurationUpdateBodyBacsDebitDisplayPreference,
  PaymentMethodConfigurationUpdateBodyBacsDebitDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyBacsDebitDisplayPreference,
} from "./payment-method-configuration-update-body-bacs-debit-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Stripe users in the UK can accept Bacs Direct Debit payments from customers with a UK bank account, check this [page](https://stripe.com/docs/payments/payment-methods/bacs-debit) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyBacsDebit = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyBacsDebitDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyBacsDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyBacsDebit = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyBacsDebitDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyBacsDebit
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyBacsDebit: z.ZodType<
  PaymentMethodConfigurationUpdateBodyBacsDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyBacsDebitDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyBacsDebit
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyBacsDebit: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyBacsDebit, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyBacsDebit // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyBacsDebitDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyBacsDebit = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyBacsDebit,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyBacsDebit,
};
