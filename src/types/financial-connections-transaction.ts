import {
  BankConnectionsResourceTransactionResourceStatusTransitions,
  External$BankConnectionsResourceTransactionResourceStatusTransitions,
  Schemas$BankConnectionsResourceTransactionResourceStatusTransitions,
} from "./bank-connections-resource-transaction-resource-status-transitions";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A Transaction represents a real transaction that affects a Financial Connections Account balance.
 */
export type FinancialConnectionsTransaction = {
  /**
   * The ID of the Financial Connections Account this transaction belongs to.
   */
  account: string;
  /**
   * The amount of this transaction, in cents (or local equivalent).
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * The description of this transaction.
   */
  description: string;
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
  object: "financial_connections.transaction";
  /**
   * The status of the transaction.
   */
  status: "pending" | "posted" | "void";
  statusTransitions: BankConnectionsResourceTransactionResourceStatusTransitions;
  /**
   * Time at which the transaction was transacted. Measured in seconds since the Unix epoch.
   */
  transactedAt: number;
  /**
   * The token of the transaction refresh that last updated or created this transaction.
   */
  transactionRefresh: string;
  /**
   * Time at which the object was last updated. Measured in seconds since the Unix epoch.
   */
  updated: number;
};

/**
 * @internal
 * FinancialConnectionsTransaction without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FinancialConnectionsTransaction = {
  account: string;
  amount: number;
  currency: string;
  description: string;
  id: string;
  livemode: boolean;
  object: "financial_connections.transaction";
  status: "pending" | "posted" | "void";
  status_transitions: External$BankConnectionsResourceTransactionResourceStatusTransitions;
  transacted_at: number;
  transaction_refresh: string;
  updated: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FinancialConnectionsTransaction
 */
const SchemaIn$FinancialConnectionsTransaction: z.ZodType<
  FinancialConnectionsTransaction, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account: z.string(),
    amount: z.number().int(),
    currency: z.string(),
    description: z.string(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["financial_connections.transaction"]),
    status: z.enum(["pending", "posted", "void"]),
    status_transitions:
      Schemas$BankConnectionsResourceTransactionResourceStatusTransitions.in,
    transacted_at: z.number().int(),
    transaction_refresh: z.string(),
    updated: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      amount: "amount",
      currency: "currency",
      description: "description",
      id: "id",
      livemode: "livemode",
      object: "object",
      status: "status",
      status_transitions: "statusTransitions",
      transacted_at: "transactedAt",
      transaction_refresh: "transactionRefresh",
      updated: "updated",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FinancialConnectionsTransaction
 */
const SchemaOut$FinancialConnectionsTransaction: z.ZodType<
  External$FinancialConnectionsTransaction, // output type of this zod object
  z.ZodTypeDef,
  FinancialConnectionsTransaction // the object to be transformed
> = z
  .object({
    account: z.string(),
    amount: z.number().int(),
    currency: z.string(),
    description: z.string(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["financial_connections.transaction"]),
    status: z.enum(["pending", "posted", "void"]),
    statusTransitions:
      Schemas$BankConnectionsResourceTransactionResourceStatusTransitions.out,
    transactedAt: z.number().int(),
    transactionRefresh: z.string(),
    updated: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      amount: "amount",
      currency: "currency",
      description: "description",
      id: "id",
      livemode: "livemode",
      object: "object",
      status: "status",
      statusTransitions: "status_transitions",
      transactedAt: "transacted_at",
      transactionRefresh: "transaction_refresh",
      updated: "updated",
    });
  });

export const Schemas$FinancialConnectionsTransaction = {
  in: SchemaIn$FinancialConnectionsTransaction,
  out: SchemaOut$FinancialConnectionsTransaction,
};
