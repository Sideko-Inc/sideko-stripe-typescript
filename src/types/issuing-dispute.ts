import {
  BalanceTransaction,
  External$BalanceTransaction,
  Schemas$BalanceTransaction,
} from "./balance-transaction";
import {
  External$IssuingDisputeEvidence,
  IssuingDisputeEvidence,
  Schemas$IssuingDisputeEvidence,
} from "./issuing-dispute-evidence";
import {
  External$IssuingDisputeMetadata,
  IssuingDisputeMetadata,
  Schemas$IssuingDisputeMetadata,
} from "./issuing-dispute-metadata";
import {
  External$IssuingDisputeTreasury,
  IssuingDisputeTreasury,
  Schemas$IssuingDisputeTreasury,
} from "./issuing-dispute-treasury";
import {
  External$IssuingTransaction,
  IssuingTransaction,
  Schemas$IssuingTransaction,
} from "./issuing-transaction";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * As a [card issuer](https://stripe.com/docs/issuing), you can dispute transactions that the cardholder does not recognize, suspects to be fraudulent, or has other issues with.
 *
 * Related guide: [Issuing disputes](https://stripe.com/docs/issuing/purchases/disputes)
 */
export type IssuingDispute = {
  /**
   * Disputed amount in the card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Usually the amount of the `transaction`, but can differ (usually because of currency fluctuation).
   */
  amount: number;
  /**
   * List of balance transactions associated with the dispute.
   */
  balanceTransactions?: BalanceTransaction[] | null | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The currency the `transaction` was made in.
   */
  currency: string;
  evidence: IssuingDisputeEvidence;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * The enum that describes the dispute loss outcome. If the dispute is not lost, this field will be absent. New enum values may be added in the future, so be sure to handle unknown values.
   */
  lossReason?:
    | (
        | "cardholder_authentication_issuer_liability"
        | "eci5_token_transaction_with_tavv"
        | "excess_disputes_in_timeframe"
        | "has_not_met_the_minimum_dispute_amount_requirements"
        | "invalid_duplicate_dispute"
        | "invalid_incorrect_amount_dispute"
        | "invalid_no_authorization"
        | "invalid_use_of_disputes"
        | "merchandise_delivered_or_shipped"
        | "merchandise_or_service_as_described"
        | "not_cancelled"
        | "other"
        | "refund_issued"
        | "submitted_beyond_allowable_time_limit"
        | "transaction_3ds_required"
        | "transaction_approved_after_prior_fraud_dispute"
        | "transaction_authorized"
        | "transaction_electronically_read"
        | "transaction_qualifies_for_visa_easy_payment_service"
        | "transaction_unattended"
      )
    | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: IssuingDisputeMetadata;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "issuing.dispute";
  /**
   * Current status of the dispute.
   */
  status: "expired" | "lost" | "submitted" | "unsubmitted" | "won";
  /**
   * The transaction being disputed.
   */
  transaction: string | IssuingTransaction;
  treasury?: IssuingDisputeTreasury | undefined;
};

/**
 * @internal
 * IssuingDispute without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingDispute = {
  amount: number;
  balance_transactions?: External$BalanceTransaction[] | null | undefined;
  created: number;
  currency: string;
  evidence: External$IssuingDisputeEvidence;
  id: string;
  livemode: boolean;
  loss_reason?:
    | (
        | "cardholder_authentication_issuer_liability"
        | "eci5_token_transaction_with_tavv"
        | "excess_disputes_in_timeframe"
        | "has_not_met_the_minimum_dispute_amount_requirements"
        | "invalid_duplicate_dispute"
        | "invalid_incorrect_amount_dispute"
        | "invalid_no_authorization"
        | "invalid_use_of_disputes"
        | "merchandise_delivered_or_shipped"
        | "merchandise_or_service_as_described"
        | "not_cancelled"
        | "other"
        | "refund_issued"
        | "submitted_beyond_allowable_time_limit"
        | "transaction_3ds_required"
        | "transaction_approved_after_prior_fraud_dispute"
        | "transaction_authorized"
        | "transaction_electronically_read"
        | "transaction_qualifies_for_visa_easy_payment_service"
        | "transaction_unattended"
      )
    | undefined;
  metadata: External$IssuingDisputeMetadata;
  object: "issuing.dispute";
  status: "expired" | "lost" | "submitted" | "unsubmitted" | "won";
  transaction: string | External$IssuingTransaction;
  treasury?: External$IssuingDisputeTreasury | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingDispute
 */
const SchemaIn$IssuingDispute: z.ZodType<
  IssuingDispute, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    balance_transactions: z
      .array(z.lazy(() => Schemas$BalanceTransaction.in))
      .nullable()
      .optional(),
    created: z.number().int(),
    currency: z.string(),
    evidence: z.lazy(() => Schemas$IssuingDisputeEvidence.in),
    id: z.string(),
    livemode: z.boolean(),
    loss_reason: z
      .enum([
        "cardholder_authentication_issuer_liability",
        "eci5_token_transaction_with_tavv",
        "excess_disputes_in_timeframe",
        "has_not_met_the_minimum_dispute_amount_requirements",
        "invalid_duplicate_dispute",
        "invalid_incorrect_amount_dispute",
        "invalid_no_authorization",
        "invalid_use_of_disputes",
        "merchandise_delivered_or_shipped",
        "merchandise_or_service_as_described",
        "not_cancelled",
        "other",
        "refund_issued",
        "submitted_beyond_allowable_time_limit",
        "transaction_3ds_required",
        "transaction_approved_after_prior_fraud_dispute",
        "transaction_authorized",
        "transaction_electronically_read",
        "transaction_qualifies_for_visa_easy_payment_service",
        "transaction_unattended",
      ])
      .optional(),
    metadata: Schemas$IssuingDisputeMetadata.in,
    object: z.enum(["issuing.dispute"]),
    status: z.enum(["expired", "lost", "submitted", "unsubmitted", "won"]),
    transaction: z.union([
      z.string(),
      z.lazy(() => Schemas$IssuingTransaction.in),
    ]),
    treasury: Schemas$IssuingDisputeTreasury.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      balance_transactions: "balanceTransactions",
      created: "created",
      currency: "currency",
      evidence: "evidence",
      id: "id",
      livemode: "livemode",
      loss_reason: "lossReason",
      metadata: "metadata",
      object: "object",
      status: "status",
      transaction: "transaction",
      treasury: "treasury",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingDispute
 */
const SchemaOut$IssuingDispute: z.ZodType<
  External$IssuingDispute, // output type of this zod object
  z.ZodTypeDef,
  IssuingDispute // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    balanceTransactions: z
      .array(z.lazy(() => Schemas$BalanceTransaction.out))
      .nullable()
      .optional(),
    created: z.number().int(),
    currency: z.string(),
    evidence: z.lazy(() => Schemas$IssuingDisputeEvidence.out),
    id: z.string(),
    livemode: z.boolean(),
    lossReason: z
      .enum([
        "cardholder_authentication_issuer_liability",
        "eci5_token_transaction_with_tavv",
        "excess_disputes_in_timeframe",
        "has_not_met_the_minimum_dispute_amount_requirements",
        "invalid_duplicate_dispute",
        "invalid_incorrect_amount_dispute",
        "invalid_no_authorization",
        "invalid_use_of_disputes",
        "merchandise_delivered_or_shipped",
        "merchandise_or_service_as_described",
        "not_cancelled",
        "other",
        "refund_issued",
        "submitted_beyond_allowable_time_limit",
        "transaction_3ds_required",
        "transaction_approved_after_prior_fraud_dispute",
        "transaction_authorized",
        "transaction_electronically_read",
        "transaction_qualifies_for_visa_easy_payment_service",
        "transaction_unattended",
      ])
      .optional(),
    metadata: Schemas$IssuingDisputeMetadata.out,
    object: z.enum(["issuing.dispute"]),
    status: z.enum(["expired", "lost", "submitted", "unsubmitted", "won"]),
    transaction: z.union([
      z.string(),
      z.lazy(() => Schemas$IssuingTransaction.out),
    ]),
    treasury: Schemas$IssuingDisputeTreasury.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      balanceTransactions: "balance_transactions",
      created: "created",
      currency: "currency",
      evidence: "evidence",
      id: "id",
      livemode: "livemode",
      lossReason: "loss_reason",
      metadata: "metadata",
      object: "object",
      status: "status",
      transaction: "transaction",
      treasury: "treasury",
    });
  });

export const Schemas$IssuingDispute = {
  in: SchemaIn$IssuingDispute,
  out: SchemaOut$IssuingDispute,
};
