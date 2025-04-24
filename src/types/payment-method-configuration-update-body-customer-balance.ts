import {
  External$PaymentMethodConfigurationUpdateBodyCustomerBalanceDisplayPreference,
  PaymentMethodConfigurationUpdateBodyCustomerBalanceDisplayPreference,
  Schemas$PaymentMethodConfigurationUpdateBodyCustomerBalanceDisplayPreference,
} from "./payment-method-configuration-update-body-customer-balance-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Uses a customer’s [cash balance](https://stripe.com/docs/payments/customer-balance) for the payment. The cash balance can be funded via a bank transfer. Check this [page](https://stripe.com/docs/payments/bank-transfers) for more details.
 */
export type PaymentMethodConfigurationUpdateBodyCustomerBalance = {
  displayPreference?:
    | PaymentMethodConfigurationUpdateBodyCustomerBalanceDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyCustomerBalance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyCustomerBalance = {
  display_preference?:
    | External$PaymentMethodConfigurationUpdateBodyCustomerBalanceDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyCustomerBalance
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyCustomerBalance: z.ZodType<
  PaymentMethodConfigurationUpdateBodyCustomerBalance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationUpdateBodyCustomerBalanceDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyCustomerBalance
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyCustomerBalance: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyCustomerBalance, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyCustomerBalance // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationUpdateBodyCustomerBalanceDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyCustomerBalance = {
  in: SchemaIn$PaymentMethodConfigurationUpdateBodyCustomerBalance,
  out: SchemaOut$PaymentMethodConfigurationUpdateBodyCustomerBalance,
};
