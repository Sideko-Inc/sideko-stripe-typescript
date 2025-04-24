import {
  BalanceTransaction,
  External$BalanceTransaction,
  Schemas$BalanceTransaction,
} from "./balance-transaction";
import { Charge, External$Charge, Schemas$Charge } from "./charge";
import {
  DisputeEvidence,
  External$DisputeEvidence,
  Schemas$DisputeEvidence,
} from "./dispute-evidence";
import {
  DisputeEvidenceDetails,
  External$DisputeEvidenceDetails,
  Schemas$DisputeEvidenceDetails,
} from "./dispute-evidence-details";
import {
  DisputeMetadata,
  External$DisputeMetadata,
  Schemas$DisputeMetadata,
} from "./dispute-metadata";
import {
  DisputePaymentMethodDetails,
  External$DisputePaymentMethodDetails,
  Schemas$DisputePaymentMethodDetails,
} from "./dispute-payment-method-details";
import {
  External$PaymentIntent,
  PaymentIntent,
  Schemas$PaymentIntent,
} from "./payment-intent";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A dispute occurs when a customer questions your charge with their card issuer.
 * When this happens, you have the opportunity to respond to the dispute with
 * evidence that shows that the charge is legitimate.
 *
 * Related guide: [Disputes and fraud](https://stripe.com/docs/disputes)
 */
export type Dispute = {
  /**
   * Disputed amount. Usually the amount of the charge, but it can differ (usually because of currency fluctuation or because only part of the order is disputed).
   */
  amount: number;
  /**
   * List of zero, one, or two balance transactions that show funds withdrawn and reinstated to your Stripe account as a result of this dispute.
   */
  balanceTransactions: BalanceTransaction[];
  /**
   * ID of the charge that's disputed.
   */
  charge: string | Charge;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * List of eligibility types that are included in `enhanced_evidence`.
   */
  enhancedEligibilityTypes: "visa_compelling_evidence_3"[];
  evidence: DisputeEvidence;
  evidenceDetails: DisputeEvidenceDetails;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * If true, it's still possible to refund the disputed payment. After the payment has been fully refunded, no further funds are withdrawn from your Stripe account as a result of this dispute.
   */
  isChargeRefundable: boolean;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: DisputeMetadata;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "dispute";
  /**
   * ID of the PaymentIntent that's disputed.
   */
  paymentIntent?: (string | PaymentIntent) | undefined;
  paymentMethodDetails?: DisputePaymentMethodDetails | undefined;
  /**
   * Reason given by cardholder for dispute. Possible values are `bank_cannot_process`, `check_returned`, `credit_not_processed`, `customer_initiated`, `debit_not_authorized`, `duplicate`, `fraudulent`, `general`, `incorrect_account_details`, `insufficient_funds`, `product_not_received`, `product_unacceptable`, `subscription_canceled`, or `unrecognized`. Learn more about [dispute reasons](https://stripe.com/docs/disputes/categories).
   */
  reason: string;
  /**
   * Current status of dispute. Possible values are `warning_needs_response`, `warning_under_review`, `warning_closed`, `needs_response`, `under_review`, `won`, or `lost`.
   */
  status:
    | "lost"
    | "needs_response"
    | "under_review"
    | "warning_closed"
    | "warning_needs_response"
    | "warning_under_review"
    | "won";
};

/**
 * @internal
 * Dispute without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Dispute = {
  amount: number;
  balance_transactions: External$BalanceTransaction[];
  charge: string | External$Charge;
  created: number;
  currency: string;
  enhanced_eligibility_types: "visa_compelling_evidence_3"[];
  evidence: External$DisputeEvidence;
  evidence_details: External$DisputeEvidenceDetails;
  id: string;
  is_charge_refundable: boolean;
  livemode: boolean;
  metadata: External$DisputeMetadata;
  object: "dispute";
  payment_intent?: (string | External$PaymentIntent) | undefined;
  payment_method_details?: External$DisputePaymentMethodDetails | undefined;
  reason: string;
  status:
    | "lost"
    | "needs_response"
    | "under_review"
    | "warning_closed"
    | "warning_needs_response"
    | "warning_under_review"
    | "won";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Dispute
 */
const SchemaIn$Dispute: z.ZodType<
  Dispute, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    balance_transactions: z.array(z.lazy(() => Schemas$BalanceTransaction.in)),
    charge: z.union([z.string(), z.lazy(() => Schemas$Charge.in)]),
    created: z.number().int(),
    currency: z.string(),
    enhanced_eligibility_types: z.array(z.enum(["visa_compelling_evidence_3"])),
    evidence: z.lazy(() => Schemas$DisputeEvidence.in),
    evidence_details: Schemas$DisputeEvidenceDetails.in,
    id: z.string(),
    is_charge_refundable: z.boolean(),
    livemode: z.boolean(),
    metadata: Schemas$DisputeMetadata.in,
    object: z.enum(["dispute"]),
    payment_intent: z
      .union([z.string(), z.lazy(() => Schemas$PaymentIntent.in)])
      .optional(),
    payment_method_details: Schemas$DisputePaymentMethodDetails.in.optional(),
    reason: z.string(),
    status: z.enum([
      "lost",
      "needs_response",
      "under_review",
      "warning_closed",
      "warning_needs_response",
      "warning_under_review",
      "won",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      balance_transactions: "balanceTransactions",
      charge: "charge",
      created: "created",
      currency: "currency",
      enhanced_eligibility_types: "enhancedEligibilityTypes",
      evidence: "evidence",
      evidence_details: "evidenceDetails",
      id: "id",
      is_charge_refundable: "isChargeRefundable",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      payment_intent: "paymentIntent",
      payment_method_details: "paymentMethodDetails",
      reason: "reason",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Dispute
 */
const SchemaOut$Dispute: z.ZodType<
  External$Dispute, // output type of this zod object
  z.ZodTypeDef,
  Dispute // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    balanceTransactions: z.array(z.lazy(() => Schemas$BalanceTransaction.out)),
    charge: z.union([z.string(), z.lazy(() => Schemas$Charge.out)]),
    created: z.number().int(),
    currency: z.string(),
    enhancedEligibilityTypes: z.array(z.enum(["visa_compelling_evidence_3"])),
    evidence: z.lazy(() => Schemas$DisputeEvidence.out),
    evidenceDetails: Schemas$DisputeEvidenceDetails.out,
    id: z.string(),
    isChargeRefundable: z.boolean(),
    livemode: z.boolean(),
    metadata: Schemas$DisputeMetadata.out,
    object: z.enum(["dispute"]),
    paymentIntent: z
      .union([z.string(), z.lazy(() => Schemas$PaymentIntent.out)])
      .optional(),
    paymentMethodDetails: Schemas$DisputePaymentMethodDetails.out.optional(),
    reason: z.string(),
    status: z.enum([
      "lost",
      "needs_response",
      "under_review",
      "warning_closed",
      "warning_needs_response",
      "warning_under_review",
      "won",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      balanceTransactions: "balance_transactions",
      charge: "charge",
      created: "created",
      currency: "currency",
      enhancedEligibilityTypes: "enhanced_eligibility_types",
      evidence: "evidence",
      evidenceDetails: "evidence_details",
      id: "id",
      isChargeRefundable: "is_charge_refundable",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      paymentIntent: "payment_intent",
      paymentMethodDetails: "payment_method_details",
      reason: "reason",
      status: "status",
    });
  });

export const Schemas$Dispute = {
  in: SchemaIn$Dispute,
  out: SchemaOut$Dispute,
};
