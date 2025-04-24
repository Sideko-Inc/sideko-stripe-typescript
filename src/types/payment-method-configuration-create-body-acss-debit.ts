import {
  External$PaymentMethodConfigurationCreateBodyAcssDebitDisplayPreference,
  PaymentMethodConfigurationCreateBodyAcssDebitDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyAcssDebitDisplayPreference,
} from "./payment-method-configuration-create-body-acss-debit-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Canadian pre-authorized debit payments, check this [page](https://stripe.com/docs/payments/acss-debit) for more details like country availability.
 */
export type PaymentMethodConfigurationCreateBodyAcssDebit = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyAcssDebitDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyAcssDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyAcssDebit = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyAcssDebitDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyAcssDebit
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyAcssDebit: z.ZodType<
  PaymentMethodConfigurationCreateBodyAcssDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyAcssDebitDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyAcssDebit
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyAcssDebit: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyAcssDebit, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyAcssDebit // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyAcssDebitDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyAcssDebit = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyAcssDebit,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyAcssDebit,
};
