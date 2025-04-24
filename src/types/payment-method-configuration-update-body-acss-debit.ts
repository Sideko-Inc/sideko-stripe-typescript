import {
  External$PaymentMethodConfigurationUpdateBodyAcssDebitDisplayPreference,
  PaymentMethodConfigurationUpdateBodyAcssDebitDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyAcssDebitDisplayPreference,
} from "./payment-method-configuration-update-body-acss-debit-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Canadian pre-authorized debit payments, check this [page](https://stripe.com/docs/payments/acss-debit) for more details like country availability.
 */
export type PaymentMethodConfigurationUpdateBodyAcssDebit = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyAcssDebitDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyAcssDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyAcssDebit = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyAcssDebitDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyAcssDebit
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyAcssDebit: z.ZodType<
  PaymentMethodConfigurationUpdateBodyAcssDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyAcssDebitDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyAcssDebit
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyAcssDebit: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyAcssDebit, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyAcssDebit // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyAcssDebitDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyAcssDebit = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyAcssDebit,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyAcssDebit,
};
