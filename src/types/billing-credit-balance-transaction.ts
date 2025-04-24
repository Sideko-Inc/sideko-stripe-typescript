import {
  BillingCreditGrant,
  External$BillingCreditGrant,
  Schemas$BillingCreditGrant,
} from "./billing-credit-grant";
import {
  BillingCreditGrantsResourceBalanceCredit,
  External$BillingCreditGrantsResourceBalanceCredit,
  Schemas$BillingCreditGrantsResourceBalanceCredit,
} from "./billing-credit-grants-resource-balance-credit";
import {
  BillingCreditGrantsResourceBalanceDebit,
  External$BillingCreditGrantsResourceBalanceDebit,
  Schemas$BillingCreditGrantsResourceBalanceDebit,
} from "./billing-credit-grants-resource-balance-debit";
import {
  External$TestHelpersTestClock,
  Schemas$TestHelpersTestClock,
  TestHelpersTestClock,
} from "./test-helpers-test-clock";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A credit balance transaction is a resource representing a transaction (either a credit or a debit) against an existing credit grant.
 */
export type BillingCreditBalanceTransaction = {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  credit?: BillingCreditGrantsResourceBalanceCredit | undefined;
  /**
   * The credit grant associated with this credit balance transaction.
   */
  creditGrant: string | BillingCreditGrant;
  debit?: BillingCreditGrantsResourceBalanceDebit | undefined;
  /**
   * The effective time of this credit balance transaction.
   */
  effectiveAt: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "billing.credit_balance_transaction";
  /**
   * ID of the test clock this credit balance transaction belongs to.
   */
  testClock?: (string | TestHelpersTestClock) | undefined;
  /**
   * The type of credit balance transaction (credit or debit).
   */
  type?: ("credit" | "debit") | null | undefined;
};

/**
 * @internal
 * BillingCreditBalanceTransaction without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingCreditBalanceTransaction = {
  created: number;
  credit?: External$BillingCreditGrantsResourceBalanceCredit | undefined;
  credit_grant: string | External$BillingCreditGrant;
  debit?: External$BillingCreditGrantsResourceBalanceDebit | undefined;
  effective_at: number;
  id: string;
  livemode: boolean;
  object: "billing.credit_balance_transaction";
  test_clock?: (string | External$TestHelpersTestClock) | undefined;
  type?: ("credit" | "debit") | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingCreditBalanceTransaction
 */
const SchemaIn$BillingCreditBalanceTransaction: z.ZodType<
  BillingCreditBalanceTransaction, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    created: z.number().int(),
    credit: z.lazy(() =>
      Schemas$BillingCreditGrantsResourceBalanceCredit.in.optional(),
    ),
    credit_grant: z.union([
      z.string(),
      z.lazy(() => Schemas$BillingCreditGrant.in),
    ]),
    debit: z.lazy(() =>
      Schemas$BillingCreditGrantsResourceBalanceDebit.in.optional(),
    ),
    effective_at: z.number().int(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["billing.credit_balance_transaction"]),
    test_clock: z
      .union([z.string(), Schemas$TestHelpersTestClock.in])
      .optional(),
    type: z.enum(["credit", "debit"]).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      credit: "credit",
      credit_grant: "creditGrant",
      debit: "debit",
      effective_at: "effectiveAt",
      id: "id",
      livemode: "livemode",
      object: "object",
      test_clock: "testClock",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingCreditBalanceTransaction
 */
const SchemaOut$BillingCreditBalanceTransaction: z.ZodType<
  External$BillingCreditBalanceTransaction, // output type of this zod object
  z.ZodTypeDef,
  BillingCreditBalanceTransaction // the object to be transformed
> = z
  .object({
    created: z.number().int(),
    credit: z.lazy(() =>
      Schemas$BillingCreditGrantsResourceBalanceCredit.out.optional(),
    ),
    creditGrant: z.union([
      z.string(),
      z.lazy(() => Schemas$BillingCreditGrant.out),
    ]),
    debit: z.lazy(() =>
      Schemas$BillingCreditGrantsResourceBalanceDebit.out.optional(),
    ),
    effectiveAt: z.number().int(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["billing.credit_balance_transaction"]),
    testClock: z
      .union([z.string(), Schemas$TestHelpersTestClock.out])
      .optional(),
    type: z.enum(["credit", "debit"]).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      credit: "credit",
      creditGrant: "credit_grant",
      debit: "debit",
      effectiveAt: "effective_at",
      id: "id",
      livemode: "livemode",
      object: "object",
      testClock: "test_clock",
      type: "type",
    });
  });

export const Schemas$BillingCreditBalanceTransaction = {
  in: SchemaIn$BillingCreditBalanceTransaction,
  out: SchemaOut$BillingCreditBalanceTransaction,
};
