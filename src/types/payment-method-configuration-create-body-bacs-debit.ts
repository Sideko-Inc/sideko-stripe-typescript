import {
  External$PaymentMethodConfigurationCreateBodyBacsDebitDisplayPreference,
  PaymentMethodConfigurationCreateBodyBacsDebitDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyBacsDebitDisplayPreference,
} from "./payment-method-configuration-create-body-bacs-debit-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Stripe users in the UK can accept Bacs Direct Debit payments from customers with a UK bank account, check this [page](https://stripe.com/docs/payments/payment-methods/bacs-debit) for more details.
 */
export type PaymentMethodConfigurationCreateBodyBacsDebit = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyBacsDebitDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyBacsDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyBacsDebit = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyBacsDebitDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyBacsDebit
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyBacsDebit: z.ZodType<
  PaymentMethodConfigurationCreateBodyBacsDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyBacsDebitDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyBacsDebit
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyBacsDebit: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyBacsDebit, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyBacsDebit // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyBacsDebitDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyBacsDebit = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyBacsDebit,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyBacsDebit,
};
