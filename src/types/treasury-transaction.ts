import {
  External$TreasuryTransactionEntries,
  Schemas$TreasuryTransactionEntries,
  TreasuryTransactionEntries,
} from "./treasury-transaction-entries";
import {
  External$TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions,
  Schemas$TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions,
  TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions,
} from "./treasury-transactions-resource-abstract-transaction-resource-status-transitions";
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
 * Transactions represent changes to a [FinancialAccount's](https://stripe.com/docs/api#financial_accounts) balance.
 */
export type TreasuryTransaction = {
  /**
   * Amount (in cents) transferred.
   */
  amount: number;
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
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description: string;
  /**
   * A list of TransactionEntries that are part of this Transaction. This cannot be expanded in any list endpoints.
   */
  entries?: TreasuryTransactionEntries | null | undefined;
  /**
   * The FinancialAccount associated with this object.
   */
  financialAccount: string;
  /**
   * ID of the flow that created the Transaction.
   */
  flow?: string | null | undefined;
  flowDetails?: TreasuryTransactionsResourceFlowDetails | undefined;
  /**
   * Type of the flow that created the Transaction.
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
  object: "treasury.transaction";
  /**
   * Status of the Transaction.
   */
  status: "open" | "posted" | "void";
  statusTransitions: TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions;
};

/**
 * @internal
 * TreasuryTransaction without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryTransaction = {
  amount: number;
  balance_impact: External$TreasuryTransactionsResourceBalanceImpact;
  created: number;
  currency: string;
  description: string;
  entries?: External$TreasuryTransactionEntries | null | undefined;
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
  object: "treasury.transaction";
  status: "open" | "posted" | "void";
  status_transitions: External$TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryTransaction
 */
const SchemaIn$TreasuryTransaction: z.ZodType<
  TreasuryTransaction, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    balance_impact: Schemas$TreasuryTransactionsResourceBalanceImpact.in,
    created: z.number().int(),
    currency: z.string(),
    description: z.string(),
    entries: z.lazy(() =>
      Schemas$TreasuryTransactionEntries.in.nullable().optional(),
    ),
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
    object: z.enum(["treasury.transaction"]),
    status: z.enum(["open", "posted", "void"]),
    status_transitions:
      Schemas$TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      balance_impact: "balanceImpact",
      created: "created",
      currency: "currency",
      description: "description",
      entries: "entries",
      financial_account: "financialAccount",
      flow: "flow",
      flow_details: "flowDetails",
      flow_type: "flowType",
      id: "id",
      livemode: "livemode",
      object: "object",
      status: "status",
      status_transitions: "statusTransitions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryTransaction
 */
const SchemaOut$TreasuryTransaction: z.ZodType<
  External$TreasuryTransaction, // output type of this zod object
  z.ZodTypeDef,
  TreasuryTransaction // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    balanceImpact: Schemas$TreasuryTransactionsResourceBalanceImpact.out,
    created: z.number().int(),
    currency: z.string(),
    description: z.string(),
    entries: z.lazy(() =>
      Schemas$TreasuryTransactionEntries.out.nullable().optional(),
    ),
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
    object: z.enum(["treasury.transaction"]),
    status: z.enum(["open", "posted", "void"]),
    statusTransitions:
      Schemas$TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      balanceImpact: "balance_impact",
      created: "created",
      currency: "currency",
      description: "description",
      entries: "entries",
      financialAccount: "financial_account",
      flow: "flow",
      flowDetails: "flow_details",
      flowType: "flow_type",
      id: "id",
      livemode: "livemode",
      object: "object",
      status: "status",
      statusTransitions: "status_transitions",
    });
  });

export const Schemas$TreasuryTransaction = {
  in: SchemaIn$TreasuryTransaction,
  out: SchemaOut$TreasuryTransaction,
};
