import {
  External$PaymentMethodConfigurationUpdateBodyAuBecsDebitDisplayPreference,
  PaymentMethodConfigurationUpdateBodyAuBecsDebitDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyAuBecsDebitDisplayPreference,
} from "./payment-method-configuration-update-body-au-becs-debit-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Stripe users in Australia can accept Bulk Electronic Clearing System (BECS) direct debit payments from customers with an Australian bank account. Check this [page](https://stripe.com/docs/payments/au-becs-debit) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyAuBecsDebit = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyAuBecsDebitDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyAuBecsDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyAuBecsDebit = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyAuBecsDebitDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyAuBecsDebit
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyAuBecsDebit: z.ZodType<
  PaymentMethodConfigurationUpdateBodyAuBecsDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyAuBecsDebitDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyAuBecsDebit
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyAuBecsDebit: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyAuBecsDebit, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyAuBecsDebit // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyAuBecsDebitDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyAuBecsDebit = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyAuBecsDebit,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyAuBecsDebit,
};
