import {
  External$TreasuryCreditReversalMetadata,
  Schemas$TreasuryCreditReversalMetadata,
  TreasuryCreditReversalMetadata,
} from "./treasury-credit-reversal-metadata";
import {
  External$TreasuryReceivedCreditsResourceStatusTransitions,
  Schemas$TreasuryReceivedCreditsResourceStatusTransitions,
  TreasuryReceivedCreditsResourceStatusTransitions,
} from "./treasury-received-credits-resource-status-transitions";
import {
  External$TreasuryTransaction,
  Schemas$TreasuryTransaction,
  TreasuryTransaction,
} from "./treasury-transaction";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * You can reverse some [ReceivedCredits](https://stripe.com/docs/api#received_credits) depending on their network and source flow. Reversing a ReceivedCredit leads to the creation of a new object known as a CreditReversal.
 */
export type TreasuryCreditReversal = {
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
  financialAccount: string;
  /**
   * A [hosted transaction receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.
   */
  hostedRegulatoryReceiptUrl?: string | null | undefined;
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
  metadata: TreasuryCreditReversalMetadata;
  /**
   * The rails used to reverse the funds.
   */
  network: "ach" | "stripe";
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "treasury.credit_reversal";
  /**
   * The ReceivedCredit being reversed.
   */
  receivedCredit: string;
  /**
   * Status of the CreditReversal
   */
  status: "canceled" | "posted" | "processing";
  statusTransitions: TreasuryReceivedCreditsResourceStatusTransitions;
  /**
   * The Transaction associated with this object.
   */
  transaction?: (string | TreasuryTransaction) | undefined;
};

/**
 * @internal
 * TreasuryCreditReversal without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryCreditReversal = {
  amount: number;
  created: number;
  currency: string;
  financial_account: string;
  hosted_regulatory_receipt_url?: string | null | undefined;
  id: string;
  livemode: boolean;
  metadata: External$TreasuryCreditReversalMetadata;
  network: "ach" | "stripe";
  object: "treasury.credit_reversal";
  received_credit: string;
  status: "canceled" | "posted" | "processing";
  status_transitions: External$TreasuryReceivedCreditsResourceStatusTransitions;
  transaction?: (string | External$TreasuryTransaction) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryCreditReversal
 */
const SchemaIn$TreasuryCreditReversal: z.ZodType<
  TreasuryCreditReversal, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    created: z.number().int(),
    currency: z.string(),
    financial_account: z.string(),
    hosted_regulatory_receipt_url: z.string().nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$TreasuryCreditReversalMetadata.in,
    network: z.enum(["ach", "stripe"]),
    object: z.enum(["treasury.credit_reversal"]),
    received_credit: z.string(),
    status: z.enum(["canceled", "posted", "processing"]),
    status_transitions:
      Schemas$TreasuryReceivedCreditsResourceStatusTransitions.in,
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
      livemode: "livemode",
      metadata: "metadata",
      network: "network",
      object: "object",
      received_credit: "receivedCredit",
      status: "status",
      status_transitions: "statusTransitions",
      transaction: "transaction",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryCreditReversal
 */
const SchemaOut$TreasuryCreditReversal: z.ZodType<
  External$TreasuryCreditReversal, // output type of this zod object
  z.ZodTypeDef,
  TreasuryCreditReversal // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    created: z.number().int(),
    currency: z.string(),
    financialAccount: z.string(),
    hostedRegulatoryReceiptUrl: z.string().nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$TreasuryCreditReversalMetadata.out,
    network: z.enum(["ach", "stripe"]),
    object: z.enum(["treasury.credit_reversal"]),
    receivedCredit: z.string(),
    status: z.enum(["canceled", "posted", "processing"]),
    statusTransitions:
      Schemas$TreasuryReceivedCreditsResourceStatusTransitions.out,
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
      livemode: "livemode",
      metadata: "metadata",
      network: "network",
      object: "object",
      receivedCredit: "received_credit",
      status: "status",
      statusTransitions: "status_transitions",
      transaction: "transaction",
    });
  });

export const Schemas$TreasuryCreditReversal = {
  in: SchemaIn$TreasuryCreditReversal,
  out: SchemaOut$TreasuryCreditReversal,
};
