import {
  External$TreasuryDebitReversalMetadata,
  Schemas$TreasuryDebitReversalMetadata,
  TreasuryDebitReversalMetadata,
} from "./treasury-debit-reversal-metadata";
import {
  External$TreasuryReceivedDebitsResourceDebitReversalLinkedFlows,
  Schemas$TreasuryReceivedDebitsResourceDebitReversalLinkedFlows,
  TreasuryReceivedDebitsResourceDebitReversalLinkedFlows,
} from "./treasury-received-debits-resource-debit-reversal-linked-flows";
import {
  External$TreasuryReceivedDebitsResourceStatusTransitions,
  Schemas$TreasuryReceivedDebitsResourceStatusTransitions,
  TreasuryReceivedDebitsResourceStatusTransitions,
} from "./treasury-received-debits-resource-status-transitions";
import {
  External$TreasuryTransaction,
  Schemas$TreasuryTransaction,
  TreasuryTransaction,
} from "./treasury-transaction";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * You can reverse some [ReceivedDebits](https://stripe.com/docs/api#received_debits) depending on their network and source flow. Reversing a ReceivedDebit leads to the creation of a new object known as a DebitReversal.
 */
export type TreasuryDebitReversal = {
  /**
   * Amount (in cents) transferred.
   */
  amount: number;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * The FinancialAccount to reverse funds from.
   */
  financialAccount?: string | null | undefined;
  /**
   * A [hosted transaction receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.
   */
  hostedRegulatoryReceiptUrl?: string | null | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  linkedFlows?:
    | TreasuryReceivedDebitsResourceDebitReversalLinkedFlows
    | undefined;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: TreasuryDebitReversalMetadata;
  /**
   * The rails used to reverse the funds.
   */
  network: "ach" | "card";
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "treasury.debit_reversal";
  /**
   * The ReceivedDebit being reversed.
   */
  receivedDebit: string;
  /**
   * Status of the DebitReversal
   */
  status: "failed" | "processing" | "succeeded";
  statusTransitions: TreasuryReceivedDebitsResourceStatusTransitions;
  /**
   * The Transaction associated with this object.
   */
  transaction?: (string | TreasuryTransaction) | undefined;
};

/**
 * @internal
 * TreasuryDebitReversal without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryDebitReversal = {
  amount: number;
  created: number;
  currency: string;
  financial_account?: string | null | undefined;
  hosted_regulatory_receipt_url?: string | null | undefined;
  id: string;
  linked_flows?:
    | External$TreasuryReceivedDebitsResourceDebitReversalLinkedFlows
    | undefined;
  livemode: boolean;
  metadata: External$TreasuryDebitReversalMetadata;
  network: "ach" | "card";
  object: "treasury.debit_reversal";
  received_debit: string;
  status: "failed" | "processing" | "succeeded";
  status_transitions: External$TreasuryReceivedDebitsResourceStatusTransitions;
  transaction?: (string | External$TreasuryTransaction) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryDebitReversal
 */
const SchemaIn$TreasuryDebitReversal: z.ZodType<
  TreasuryDebitReversal, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    created: z.number().int(),
    currency: z.string(),
    financial_account: z.string().nullable().optional(),
    hosted_regulatory_receipt_url: z.string().nullable().optional(),
    id: z.string(),
    linked_flows:
      Schemas$TreasuryReceivedDebitsResourceDebitReversalLinkedFlows.in.optional(),
    livemode: z.boolean(),
    metadata: Schemas$TreasuryDebitReversalMetadata.in,
    network: z.enum(["ach", "card"]),
    object: z.enum(["treasury.debit_reversal"]),
    received_debit: z.string(),
    status: z.enum(["failed", "processing", "succeeded"]),
    status_transitions:
      Schemas$TreasuryReceivedDebitsResourceStatusTransitions.in,
    transaction: z
      .union([z.string(), z.lazy(() => Schemas$TreasuryTransaction.in)])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      created: "created",
      currency: "currency",
      financial_account: "financialAccount",
      hosted_regulatory_receipt_url: "hostedRegulatoryReceiptUrl",
      id: "id",
      linked_flows: "linkedFlows",
      livemode: "livemode",
      metadata: "metadata",
      network: "network",
      object: "object",
      received_debit: "receivedDebit",
      status: "status",
      status_transitions: "statusTransitions",
      transaction: "transaction",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryDebitReversal
 */
const SchemaOut$TreasuryDebitReversal: z.ZodType<
  External$TreasuryDebitReversal, // output type of this zod object
  z.ZodTypeDef,
  TreasuryDebitReversal // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    created: z.number().int(),
    currency: z.string(),
    financialAccount: z.string().nullable().optional(),
    hostedRegulatoryReceiptUrl: z.string().nullable().optional(),
    id: z.string(),
    linkedFlows:
      Schemas$TreasuryReceivedDebitsResourceDebitReversalLinkedFlows.out.optional(),
    livemode: z.boolean(),
    metadata: Schemas$TreasuryDebitReversalMetadata.out,
    network: z.enum(["ach", "card"]),
    object: z.enum(["treasury.debit_reversal"]),
    receivedDebit: z.string(),
    status: z.enum(["failed", "processing", "succeeded"]),
    statusTransitions:
      Schemas$TreasuryReceivedDebitsResourceStatusTransitions.out,
    transaction: z
      .union([z.string(), z.lazy(() => Schemas$TreasuryTransaction.out)])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      created: "created",
      currency: "currency",
      financialAccount: "financial_account",
      hostedRegulatoryReceiptUrl: "hosted_regulatory_receipt_url",
      id: "id",
      linkedFlows: "linked_flows",
      livemode: "livemode",
      metadata: "metadata",
      network: "network",
      object: "object",
      receivedDebit: "received_debit",
      status: "status",
      statusTransitions: "status_transitions",
      transaction: "transaction",
    });
  });

export const Schemas$TreasuryDebitReversal = {
  in: SchemaIn$TreasuryDebitReversal,
  out: SchemaOut$TreasuryDebitReversal,
};
