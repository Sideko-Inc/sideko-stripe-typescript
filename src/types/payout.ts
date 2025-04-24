import {
  ApplicationFee,
  External$ApplicationFee,
  Schemas$ApplicationFee,
} from "./application-fee";
import {
  BalanceTransaction,
  External$BalanceTransaction,
  Schemas$BalanceTransaction,
} from "./balance-transaction";
import {
  BankAccount,
  External$BankAccount,
  Schemas$BankAccount,
} from "./bank-account";
import { Card, External$Card, Schemas$Card } from "./card";
import {
  DeletedBankAccount,
  External$DeletedBankAccount,
  Schemas$DeletedBankAccount,
} from "./deleted-bank-account";
import {
  DeletedCard,
  External$DeletedCard,
  Schemas$DeletedCard,
} from "./deleted-card";
import {
  External$PayoutMetadata,
  PayoutMetadata,
  Schemas$PayoutMetadata,
} from "./payout-metadata";
import {
  External$PayoutsTraceId,
  PayoutsTraceId,
  Schemas$PayoutsTraceId,
} from "./payouts-trace-id";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A `Payout` object is created when you receive funds from Stripe, or when you
 * initiate a payout to either a bank account or debit card of a [connected
 * Stripe account](/docs/connect/bank-debit-card-payouts). You can retrieve individual payouts,
 * and list all payouts. Payouts are made on [varying
 * schedules](/docs/connect/manage-payout-schedule), depending on your country and
 * industry.
 *
 * Related guide: [Receiving payouts](https://stripe.com/docs/payouts)
 */
export type Payout = {
  /**
   * The amount (in cents (or local equivalent)) that transfers to your bank account or debit card.
   */
  amount: number;
  /**
   * The application fee (if any) for the payout. [See the Connect documentation](https://stripe.com/docs/connect/instant-payouts#monetization-and-fees) for details.
   */
  applicationFee?: (string | ApplicationFee) | undefined;
  /**
   * The amount of the application fee (if any) requested for the payout. [See the Connect documentation](https://stripe.com/docs/connect/instant-payouts#monetization-and-fees) for details.
   */
  applicationFeeAmount?: number | null | undefined;
  /**
   * Date that you can expect the payout to arrive in the bank. This factors in delays to account for weekends or bank holidays.
   */
  arrivalDate: number;
  /**
   * Returns `true` if the payout is created by an [automated payout schedule](https://stripe.com/docs/payouts#payout-schedule) and `false` if it's [requested manually](https://stripe.com/docs/payouts#manual-payouts).
   */
  automatic: boolean;
  /**
   * ID of the balance transaction that describes the impact of this payout on your account balance.
   */
  balanceTransaction?: (string | BalanceTransaction) | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | null | undefined;
  /**
   * ID of the bank account or card the payout is sent to.
   */
  destination?:
    | (string | BankAccount | Card | DeletedBankAccount | DeletedCard)
    | undefined;
  /**
   * If the payout fails or cancels, this is the ID of the balance transaction that reverses the initial balance transaction and returns the funds from the failed payout back in your balance.
   */
  failureBalanceTransaction?: (string | BalanceTransaction) | undefined;
  /**
   * Error code that provides a reason for a payout failure, if available. View our [list of failure codes](https://stripe.com/docs/api#payout_failures).
   */
  failureCode?: string | null | undefined;
  /**
   * Message that provides the reason for a payout failure, if available.
   */
  failureMessage?: string | null | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: PayoutMetadata | null | undefined;
  /**
   * The method used to send this payout, which can be `standard` or `instant`. `instant` is supported for payouts to debit cards and bank accounts in certain countries. Learn more about [bank support for Instant Payouts](https://stripe.com/docs/payouts/instant-payouts-banks).
   */
  method: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "payout";
  /**
   * If the payout reverses another, this is the ID of the original payout.
   */
  originalPayout?: (string | Payout) | undefined;
  /**
   * If `completed`, you can use the [Balance Transactions API](https://stripe.com/docs/api/balance_transactions/list#balance_transaction_list-payout) to list all balance transactions that are paid out in this payout.
   */
  reconciliationStatus: "completed" | "in_progress" | "not_applicable";
  /**
   * If the payout reverses, this is the ID of the payout that reverses this payout.
   */
  reversedBy?: (string | Payout) | undefined;
  /**
   * The source balance this payout came from, which can be one of the following: `card`, `fpx`, or `bank_account`.
   */
  sourceType: string;
  /**
   * Extra information about a payout that displays on the user's bank statement.
   */
  statementDescriptor?: string | null | undefined;
  /**
   * Current status of the payout: `paid`, `pending`, `in_transit`, `canceled` or `failed`. A payout is `pending` until it's submitted to the bank, when it becomes `in_transit`. The status changes to `paid` if the transaction succeeds, or to `failed` or `canceled` (within 5 business days). Some payouts that fail might initially show as `paid`, then change to `failed`.
   */
  status: string;
  traceId?: PayoutsTraceId | undefined;
  /**
   * Can be `bank_account` or `card`.
   */
  type: "bank_account" | "card";
};

/**
 * @internal
 * Payout without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Payout = {
  amount: number;
  application_fee?: (string | External$ApplicationFee) | undefined;
  application_fee_amount?: number | null | undefined;
  arrival_date: number;
  automatic: boolean;
  balance_transaction?: (string | External$BalanceTransaction) | undefined;
  created: number;
  currency: string;
  description?: string | null | undefined;
  destination?:
    | (
        | string
        | External$BankAccount
        | External$Card
        | External$DeletedBankAccount
        | External$DeletedCard
      )
    | undefined;
  failure_balance_transaction?:
    | (string | External$BalanceTransaction)
    | undefined;
  failure_code?: string | null | undefined;
  failure_message?: string | null | undefined;
  id: string;
  livemode: boolean;
  metadata?: External$PayoutMetadata | null | undefined;
  method: string;
  object: "payout";
  original_payout?: (string | External$Payout) | undefined;
  reconciliation_status: "completed" | "in_progress" | "not_applicable";
  reversed_by?: (string | External$Payout) | undefined;
  source_type: string;
  statement_descriptor?: string | null | undefined;
  status: string;
  trace_id?: External$PayoutsTraceId | undefined;
  type: "bank_account" | "card";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Payout
 */
const SchemaIn$Payout: z.ZodType<
  Payout, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    application_fee: z
      .union([z.string(), z.lazy(() => Schemas$ApplicationFee.in)])
      .optional(),
    application_fee_amount: z.number().int().nullable().optional(),
    arrival_date: z.number().int(),
    automatic: z.boolean(),
    balance_transaction: z
      .union([z.string(), z.lazy(() => Schemas$BalanceTransaction.in)])
      .optional(),
    created: z.number().int(),
    currency: z.string(),
    description: z.string().nullable().optional(),
    destination: z
      .union([
        z.string(),
        z.lazy(() => Schemas$BankAccount.in),
        z.lazy(() => Schemas$Card.in),
        Schemas$DeletedBankAccount.in,
        Schemas$DeletedCard.in,
      ])
      .optional(),
    failure_balance_transaction: z
      .union([z.string(), z.lazy(() => Schemas$BalanceTransaction.in)])
      .optional(),
    failure_code: z.string().nullable().optional(),
    failure_message: z.string().nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$PayoutMetadata.in.nullable().optional(),
    method: z.string(),
    object: z.enum(["payout"]),
    original_payout: z
      .union([z.string(), z.lazy(() => Schemas$Payout.in)])
      .optional(),
    reconciliation_status: z.enum([
      "completed",
      "in_progress",
      "not_applicable",
    ]),
    reversed_by: z
      .union([z.string(), z.lazy(() => Schemas$Payout.in)])
      .optional(),
    source_type: z.string(),
    statement_descriptor: z.string().nullable().optional(),
    status: z.string(),
    trace_id: Schemas$PayoutsTraceId.in.optional(),
    type: z.enum(["bank_account", "card"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      application_fee: "applicationFee",
      application_fee_amount: "applicationFeeAmount",
      arrival_date: "arrivalDate",
      automatic: "automatic",
      balance_transaction: "balanceTransaction",
      created: "created",
      currency: "currency",
      description: "description",
      destination: "destination",
      failure_balance_transaction: "failureBalanceTransaction",
      failure_code: "failureCode",
      failure_message: "failureMessage",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      method: "method",
      object: "object",
      original_payout: "originalPayout",
      reconciliation_status: "reconciliationStatus",
      reversed_by: "reversedBy",
      source_type: "sourceType",
      statement_descriptor: "statementDescriptor",
      status: "status",
      trace_id: "traceId",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Payout
 */
const SchemaOut$Payout: z.ZodType<
  External$Payout, // output type of this zod object
  z.ZodTypeDef,
  Payout // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    applicationFee: z
      .union([z.string(), z.lazy(() => Schemas$ApplicationFee.out)])
      .optional(),
    applicationFeeAmount: z.number().int().nullable().optional(),
    arrivalDate: z.number().int(),
    automatic: z.boolean(),
    balanceTransaction: z
      .union([z.string(), z.lazy(() => Schemas$BalanceTransaction.out)])
      .optional(),
    created: z.number().int(),
    currency: z.string(),
    description: z.string().nullable().optional(),
    destination: z
      .union([
        z.string(),
        z.lazy(() => Schemas$BankAccount.out),
        z.lazy(() => Schemas$Card.out),
        Schemas$DeletedBankAccount.out,
        Schemas$DeletedCard.out,
      ])
      .optional(),
    failureBalanceTransaction: z
      .union([z.string(), z.lazy(() => Schemas$BalanceTransaction.out)])
      .optional(),
    failureCode: z.string().nullable().optional(),
    failureMessage: z.string().nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$PayoutMetadata.out.nullable().optional(),
    method: z.string(),
    object: z.enum(["payout"]),
    originalPayout: z
      .union([z.string(), z.lazy(() => Schemas$Payout.out)])
      .optional(),
    reconciliationStatus: z.enum([
      "completed",
      "in_progress",
      "not_applicable",
    ]),
    reversedBy: z
      .union([z.string(), z.lazy(() => Schemas$Payout.out)])
      .optional(),
    sourceType: z.string(),
    statementDescriptor: z.string().nullable().optional(),
    status: z.string(),
    traceId: Schemas$PayoutsTraceId.out.optional(),
    type: z.enum(["bank_account", "card"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      applicationFee: "application_fee",
      applicationFeeAmount: "application_fee_amount",
      arrivalDate: "arrival_date",
      automatic: "automatic",
      balanceTransaction: "balance_transaction",
      created: "created",
      currency: "currency",
      description: "description",
      destination: "destination",
      failureBalanceTransaction: "failure_balance_transaction",
      failureCode: "failure_code",
      failureMessage: "failure_message",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      method: "method",
      object: "object",
      originalPayout: "original_payout",
      reconciliationStatus: "reconciliation_status",
      reversedBy: "reversed_by",
      sourceType: "source_type",
      statementDescriptor: "statement_descriptor",
      status: "status",
      traceId: "trace_id",
      type: "type",
    });
  });

export const Schemas$Payout = {
  in: SchemaIn$Payout,
  out: SchemaOut$Payout,
};
