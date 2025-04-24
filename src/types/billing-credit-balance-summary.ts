import {
  CreditBalance,
  External$CreditBalance,
  Schemas$CreditBalance,
} from "./credit-balance";
import { Customer, External$Customer, Schemas$Customer } from "./customer";
import {
  DeletedCustomer,
  External$DeletedCustomer,
  Schemas$DeletedCustomer,
} from "./deleted-customer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Indicates the billing credit balance for billing credits granted to a customer.
 */
export type BillingCreditBalanceSummary = {
  /**
   * The billing credit balances. One entry per credit grant currency. If a customer only has credit grants in a single currency, then this will have a single balance entry.
   */
  balances: CreditBalance[];
  /**
   * The customer the balance is for.
   */
  customer: string | Customer | DeletedCustomer;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "billing.credit_balance_summary";
};

/**
 * @internal
 * BillingCreditBalanceSummary without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingCreditBalanceSummary = {
  balances: External$CreditBalance[];
  customer: string | External$Customer | External$DeletedCustomer;
  livemode: boolean;
  object: "billing.credit_balance_summary";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingCreditBalanceSummary
 */
const SchemaIn$BillingCreditBalanceSummary: z.ZodType<
  BillingCreditBalanceSummary, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    balances: z.array(Schemas$CreditBalance.in),
    customer: z.union([
      z.string(),
      z.lazy(() => Schemas$Customer.in),
      Schemas$DeletedCustomer.in,
    ]),
    livemode: z.boolean(),
    object: z.enum(["billing.credit_balance_summary"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      balances: "balances",
      customer: "customer",
      livemode: "livemode",
      object: "object",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingCreditBalanceSummary
 */
const SchemaOut$BillingCreditBalanceSummary: z.ZodType<
  External$BillingCreditBalanceSummary, // output type of this zod object
  z.ZodTypeDef,
  BillingCreditBalanceSummary // the object to be transformed
> = z
  .object({
    balances: z.array(Schemas$CreditBalance.out),
    customer: z.union([
      z.string(),
      z.lazy(() => Schemas$Customer.out),
      Schemas$DeletedCustomer.out,
    ]),
    livemode: z.boolean(),
    object: z.enum(["billing.credit_balance_summary"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      balances: "balances",
      customer: "customer",
      livemode: "livemode",
      object: "object",
    });
  });

export const Schemas$BillingCreditBalanceSummary = {
  in: SchemaIn$BillingCreditBalanceSummary,
  out: SchemaOut$BillingCreditBalanceSummary,
};
