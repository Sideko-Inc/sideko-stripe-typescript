import {
  External$PaymentMethodConfigurationCreateBodyAuBecsDebitDisplayPreference,
  PaymentMethodConfigurationCreateBodyAuBecsDebitDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyAuBecsDebitDisplayPreference,
} from "./payment-method-configuration-create-body-au-becs-debit-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Stripe users in Australia can accept Bulk Electronic Clearing System (BECS) direct debit payments from customers with an Australian bank account. Check this [page](https://stripe.com/docs/payments/au-becs-debit) for more details.
 */
export type PaymentMethodConfigurationCreateBodyAuBecsDebit = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyAuBecsDebitDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyAuBecsDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyAuBecsDebit = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyAuBecsDebitDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyAuBecsDebit
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyAuBecsDebit: z.ZodType<
  PaymentMethodConfigurationCreateBodyAuBecsDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyAuBecsDebitDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyAuBecsDebit
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyAuBecsDebit: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyAuBecsDebit, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyAuBecsDebit // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyAuBecsDebitDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyAuBecsDebit = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyAuBecsDebit,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyAuBecsDebit,
};
