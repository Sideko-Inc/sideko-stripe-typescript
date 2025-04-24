import {
  BillingCreditGrantsResourceAmount,
  External$BillingCreditGrantsResourceAmount,
  Schemas$BillingCreditGrantsResourceAmount,
} from "./billing-credit-grants-resource-amount";
import {
  BillingCreditGrantsResourceBalanceCreditsApplied,
  External$BillingCreditGrantsResourceBalanceCreditsApplied,
  Schemas$BillingCreditGrantsResourceBalanceCreditsApplied,
} from "./billing-credit-grants-resource-balance-credits-applied";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingCreditGrantsResourceBalanceDebit = {
  amount: BillingCreditGrantsResourceAmount;
  creditsApplied?: BillingCreditGrantsResourceBalanceCreditsApplied | undefined;
  /**
   * The type of debit transaction.
   */
  type: "credits_applied" | "credits_expired" | "credits_voided";
};

/**
 * @internal
 * BillingCreditGrantsResourceBalanceDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingCreditGrantsResourceBalanceDebit = {
  amount: External$BillingCreditGrantsResourceAmount;
  credits_applied?:
    | External$BillingCreditGrantsResourceBalanceCreditsApplied
    | undefined;
  type: "credits_applied" | "credits_expired" | "credits_voided";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingCreditGrantsResourceBalanceDebit
 */
const SchemaIn$BillingCreditGrantsResourceBalanceDebit: z.ZodType<
  BillingCreditGrantsResourceBalanceDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: Schemas$BillingCreditGrantsResourceAmount.in,
    credits_applied: z.lazy(() =>
      Schemas$BillingCreditGrantsResourceBalanceCreditsApplied.in.optional(),
    ),
    type: z.enum(["credits_applied", "credits_expired", "credits_voided"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      credits_applied: "creditsApplied",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingCreditGrantsResourceBalanceDebit
 */
const SchemaOut$BillingCreditGrantsResourceBalanceDebit: z.ZodType<
  External$BillingCreditGrantsResourceBalanceDebit, // output type of this zod object
  z.ZodTypeDef,
  BillingCreditGrantsResourceBalanceDebit // the object to be transformed
> = z
  .object({
    amount: Schemas$BillingCreditGrantsResourceAmount.out,
    creditsApplied: z.lazy(() =>
      Schemas$BillingCreditGrantsResourceBalanceCreditsApplied.out.optional(),
    ),
    type: z.enum(["credits_applied", "credits_expired", "credits_voided"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      creditsApplied: "credits_applied",
      type: "type",
    });
  });

export const Schemas$BillingCreditGrantsResourceBalanceDebit = {
  in: SchemaIn$BillingCreditGrantsResourceBalanceDebit,
  out: SchemaOut$BillingCreditGrantsResourceBalanceDebit,
};
