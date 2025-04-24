import {
  External$PaymentMethodConfigurationCreateBodyCustomerBalanceDisplayPreference,
  PaymentMethodConfigurationCreateBodyCustomerBalanceDisplayPreference,
  Schemas$PaymentMethodConfigurationCreateBodyCustomerBalanceDisplayPreference,
} from "./payment-method-configuration-create-body-customer-balance-display-preference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Uses a customer’s [cash balance](https://stripe.com/docs/payments/customer-balance) for the payment. The cash balance can be funded via a bank transfer. Check this [page](https://stripe.com/docs/payments/bank-transfers) for more details.
 */
export type PaymentMethodConfigurationCreateBodyCustomerBalance = {
  displayPreference?:
    | PaymentMethodConfigurationCreateBodyCustomerBalanceDisplayPreference
    | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyCustomerBalance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyCustomerBalance = {
  display_preference?:
    | External$PaymentMethodConfigurationCreateBodyCustomerBalanceDisplayPreference
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyCustomerBalance
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyCustomerBalance: z.ZodType<
  PaymentMethodConfigurationCreateBodyCustomerBalance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    display_preference:
      Schemas$PaymentMethodConfigurationCreateBodyCustomerBalanceDisplayPreference.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      display_preference: "displayPreference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyCustomerBalance
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyCustomerBalance: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyCustomerBalance, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyCustomerBalance // the object to be transformed
> = z
  .object({
    displayPreference:
      Schemas$PaymentMethodConfigurationCreateBodyCustomerBalanceDisplayPreference.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      displayPreference: "display_preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyCustomerBalance = {
  in: SchemaIn$PaymentMethodConfigurationCreateBodyCustomerBalance,
  out: SchemaOut$PaymentMethodConfigurationCreateBodyCustomerBalance,
};
