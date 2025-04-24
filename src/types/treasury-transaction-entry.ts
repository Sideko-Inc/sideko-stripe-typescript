import {
  External$TreasuryTransaction,
  Schemas$TreasuryTransaction,
  TreasuryTransaction,
} from "./treasury-transaction";
import {
  External$TreasuryTransactionsResourceBalanceImpact,
  Schemas$TreasuryTransactionsResourceBalanceImpact,
  TreasuryTransactionsResourceBalanceImpact,
} from "./treasury-transactions-resource-balance-impact";
import {
  External$TreasuryTransactionsResourceFlowDetails,
  Schemas$TreasuryTransactionsResourceFlowDetails,
  TreasuryTransactionsResourceFlowDetails,
} from "./treasury-transactions-resource-flow-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TransactionEntries represent individual units of money movements within a single [Transaction](https://stripe.com/docs/api#transactions).
 */
export type TreasuryTransactionEntry = {
  /**
   * Change to a FinancialAccount's balance
   */
  balanceImpact: TreasuryTransactionsResourceBalanceImpact;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * When the TransactionEntry will impact the FinancialAccount's balance.
   */
  effectiveAt: number;
  /**
   * The FinancialAccount associated with this object.
   */
  financialAccount: string;
  /**
   * Token of the flow associated with the TransactionEntry.
   */
  flow?: string | null | undefined;
  flowDetails?: TreasuryTransactionsResourceFlowDetails | undefined;
  /**
   * Type of the flow associated with the TransactionEntry.
   */
  flowType:
    | "credit_reversal"
    | "debit_reversal"
    | "inbound_transfer"
    | "issuing_authorization"
    | "other"
    | "outbound_payment"
    | "outbound_transfer"
    | "received_credit"
    | "received_debit";
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
  object: "treasury.transaction_entry";
  /**
   * The Transaction associated with this object.
   */
  transaction: string | TreasuryTransaction;
  /**
   * The specific money movement that generated the TransactionEntry.
   */
  type:
    | "credit_reversal"
    | "credit_reversal_posting"
    | "debit_reversal"
    | "inbound_transfer"
    | "inbound_transfer_return"
    | "issuing_authorization_hold"
    | "issuing_authorization_release"
    | "other"
    | "outbound_payment"
    | "outbound_payment_cancellation"
    | "outbound_payment_failure"
    | "outbound_payment_posting"
    | "outbound_payment_return"
    | "outbound_transfer"
    | "outbound_transfer_cancellation"
    | "outbound_transfer_failure"
    | "outbound_transfer_posting"
    | "outbound_transfer_return"
    | "received_credit"
    | "received_debit";
};

/**
 * @internal
 * TreasuryTransactionEntry without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryTransactionEntry = {
  balance_impact: External$TreasuryTransactionsResourceBalanceImpact;
  created: number;
  currency: string;
  effective_at: number;
  financial_account: string;
  flow?: string | null | undefined;
  flow_details?: External$TreasuryTransactionsResourceFlowDetails | undefined;
  flow_type:
    | "credit_reversal"
    | "debit_reversal"
    | "inbound_transfer"
    | "issuing_authorization"
    | "other"
    | "outbound_payment"
    | "outbound_transfer"
    | "received_credit"
    | "received_debit";
  id: string;
  livemode: boolean;
  object: "treasury.transaction_entry";
  transaction: string | External$TreasuryTransaction;
  type:
    | "credit_reversal"
    | "credit_reversal_posting"
    | "debit_reversal"
    | "inbound_transfer"
    | "inbound_transfer_return"
    | "issuing_authorization_hold"
    | "issuing_authorization_release"
    | "other"
    | "outbound_payment"
    | "outbound_payment_cancellation"
    | "outbound_payment_failure"
    | "outbound_payment_posting"
    | "outbound_payment_return"
    | "outbound_transfer"
    | "outbound_transfer_cancellation"
    | "outbound_transfer_failure"
    | "outbound_transfer_posting"
    | "outbound_transfer_return"
    | "received_credit"
    | "received_debit";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryTransactionEntry
 */
const SchemaIn$TreasuryTransactionEntry: z.ZodType<
  TreasuryTransactionEntry, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    balance_impact: Schemas$TreasuryTransactionsResourceBalanceImpact.in,
    created: z.number().int(),
    currency: z.string(),
    effective_at: z.number().int(),
    financial_account: z.string(),
    flow: z.string().nullable().optional(),
    flow_details: z.lazy(() =>
      Schemas$TreasuryTransactionsResourceFlowDetails.in.optional(),
    ),
    flow_type: z.enum([
      "credit_reversal",
      "debit_reversal",
      "inbound_transfer",
      "issuing_authorization",
      "other",
      "outbound_payment",
      "outbound_transfer",
      "received_credit",
      "received_debit",
    ]),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["treasury.transaction_entry"]),
    transaction: z.union([
      z.string(),
      z.lazy(() => Schemas$TreasuryTransaction.in),
    ]),
    type: z.enum([
      "credit_reversal",
      "credit_reversal_posting",
      "debit_reversal",
      "inbound_transfer",
      "inbound_transfer_return",
      "issuing_authorization_hold",
      "issuing_authorization_release",
      "other",
      "outbound_payment",
      "outbound_payment_cancellation",
      "outbound_payment_failure",
      "outbound_payment_posting",
      "outbound_payment_return",
      "outbound_transfer",
      "outbound_transfer_cancellation",
      "outbound_transfer_failure",
      "outbound_transfer_posting",
      "outbound_transfer_return",
      "received_credit",
      "received_debit",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      balance_impact: "balanceImpact",
      created: "created",
      currency: "currency",
      effective_at: "effectiveAt",
      financial_account: "financialAccount",
      flow: "flow",
      flow_details: "flowDetails",
      flow_type: "flowType",
      id: "id",
      livemode: "livemode",
      object: "object",
      transaction: "transaction",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryTransactionEntry
 */
const SchemaOut$TreasuryTransactionEntry: z.ZodType<
  External$TreasuryTransactionEntry, // output type of this zod object
  z.ZodTypeDef,
  TreasuryTransactionEntry // the object to be transformed
> = z
  .object({
    balanceImpact: Schemas$TreasuryTransactionsResourceBalanceImpact.out,
    created: z.number().int(),
    currency: z.string(),
    effectiveAt: z.number().int(),
    financialAccount: z.string(),
    flow: z.string().nullable().optional(),
    flowDetails: z.lazy(() =>
      Schemas$TreasuryTransactionsResourceFlowDetails.out.optional(),
    ),
    flowType: z.enum([
      "credit_reversal",
      "debit_reversal",
      "inbound_transfer",
      "issuing_authorization",
      "other",
      "outbound_payment",
      "outbound_transfer",
      "received_credit",
      "received_debit",
    ]),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["treasury.transaction_entry"]),
    transaction: z.union([
      z.string(),
      z.lazy(() => Schemas$TreasuryTransaction.out),
    ]),
    type: z.enum([
      "credit_reversal",
      "credit_reversal_posting",
      "debit_reversal",
      "inbound_transfer",
      "inbound_transfer_return",
      "issuing_authorization_hold",
      "issuing_authorization_release",
      "other",
      "outbound_payment",
      "outbound_payment_cancellation",
      "outbound_payment_failure",
      "outbound_payment_posting",
      "outbound_payment_return",
      "outbound_transfer",
      "outbound_transfer_cancellation",
      "outbound_transfer_failure",
      "outbound_transfer_posting",
      "outbound_transfer_return",
      "received_credit",
      "received_debit",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      balanceImpact: "balance_impact",
      created: "created",
      currency: "currency",
      effectiveAt: "effective_at",
      financialAccount: "financial_account",
      flow: "flow",
      flowDetails: "flow_details",
      flowType: "flow_type",
      id: "id",
      livemode: "livemode",
      object: "object",
      transaction: "transaction",
      type: "type",
    });
  });

export const Schemas$TreasuryTransactionEntry = {
  in: SchemaIn$TreasuryTransactionEntry,
  out: SchemaOut$TreasuryTransactionEntry,
};
