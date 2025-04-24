import {
  CashBalanceAvailable,
  External$CashBalanceAvailable,
  Schemas$CashBalanceAvailable,
} from "./cash-balance-available";
import {
  CustomerBalanceCustomerBalanceSettings,
  External$CustomerBalanceCustomerBalanceSettings,
  Schemas$CustomerBalanceCustomerBalanceSettings,
} from "./customer-balance-customer-balance-settings";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A customer's `Cash balance` represents real funds. Customers can add funds to their cash balance by sending a bank transfer. These funds can be used for payment and can eventually be paid out to your bank account.
 */
export type CashBalance = {
  /**
   * A hash of all cash balances available to this customer. You cannot delete a customer with any cash balances, even if the balance is 0. Amounts are represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  available?: CashBalanceAvailable | null | undefined;
  /**
   * The ID of the customer whose cash balance this object represents.
   */
  customer: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "cash_balance";
  settings: CustomerBalanceCustomerBalanceSettings;
};

/**
 * @internal
 * CashBalance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CashBalance = {
  available?: External$CashBalanceAvailable | null | undefined;
  customer: string;
  livemode: boolean;
  object: "cash_balance";
  settings: External$CustomerBalanceCustomerBalanceSettings;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CashBalance
 */
const SchemaIn$CashBalance: z.ZodType<
  CashBalance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    available: Schemas$CashBalanceAvailable.in.nullable().optional(),
    customer: z.string(),
    livemode: z.boolean(),
    object: z.enum(["cash_balance"]),
    settings: Schemas$CustomerBalanceCustomerBalanceSettings.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      available: "available",
      customer: "customer",
      livemode: "livemode",
      object: "object",
      settings: "settings",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CashBalance
 */
const SchemaOut$CashBalance: z.ZodType<
  External$CashBalance, // output type of this zod object
  z.ZodTypeDef,
  CashBalance // the object to be transformed
> = z
  .object({
    available: Schemas$CashBalanceAvailable.out.nullable().optional(),
    customer: z.string(),
    livemode: z.boolean(),
    object: z.enum(["cash_balance"]),
    settings: Schemas$CustomerBalanceCustomerBalanceSettings.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      available: "available",
      customer: "customer",
      livemode: "livemode",
      object: "object",
      settings: "settings",
    });
  });

export const Schemas$CashBalance = {
  in: SchemaIn$CashBalance,
  out: SchemaOut$CashBalance,
};
