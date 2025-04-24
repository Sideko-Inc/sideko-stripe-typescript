import {
  External$InboundTransfers,
  InboundTransfers,
  Schemas$InboundTransfers,
} from "./inbound-transfers";
import {
  External$TreasuryInboundTransferMetadata,
  Schemas$TreasuryInboundTransferMetadata,
  TreasuryInboundTransferMetadata,
} from "./treasury-inbound-transfer-metadata";
import {
  External$TreasuryInboundTransfersResourceFailureDetails,
  Schemas$TreasuryInboundTransfersResourceFailureDetails,
  TreasuryInboundTransfersResourceFailureDetails,
} from "./treasury-inbound-transfers-resource-failure-details";
import {
  External$TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows,
  Schemas$TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows,
  TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows,
} from "./treasury-inbound-transfers-resource-inbound-transfer-resource-linked-flows";
import {
  External$TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions,
  Schemas$TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions,
  TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions,
} from "./treasury-inbound-transfers-resource-inbound-transfer-resource-status-transitions";
import {
  External$TreasuryTransaction,
  Schemas$TreasuryTransaction,
  TreasuryTransaction,
} from "./treasury-transaction";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Use [InboundTransfers](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/into/inbound-transfers) to add funds to your [FinancialAccount](https://stripe.com/docs/api#financial_accounts) via a PaymentMethod that is owned by you. The funds will be transferred via an ACH debit.
 *
 * Related guide: [Moving money with Treasury using InboundTransfer objects](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/into/inbound-transfers)
 */
export type TreasuryInboundTransfer = {
  /**
   * Amount (in cents) transferred.
   */
  amount: number;
  /**
   * Returns `true` if the InboundTransfer is able to be canceled.
   */
  cancelable: boolean;
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
  failureDetails?: TreasuryInboundTransfersResourceFailureDetails | undefined;
  /**
   * The FinancialAccount that received the funds.
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
  linkedFlows: TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: TreasuryInboundTransferMetadata;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "treasury.inbound_transfer";
  /**
   * The origin payment method to be debited for an InboundTransfer.
   */
  originPaymentMethod?: string | null | undefined;
  originPaymentMethodDetails?: InboundTransfers | undefined;
  /**
   * Returns `true` if the funds for an InboundTransfer were returned after the InboundTransfer went to the `succeeded` state.
   */
  returned?: boolean | null | undefined;
  /**
   * Statement descriptor shown when funds are debited from the source. Not all payment networks support `statement_descriptor`.
   */
  statementDescriptor: string;
  /**
   * Status of the InboundTransfer: `processing`, `succeeded`, `failed`, and `canceled`. An InboundTransfer is `processing` if it is created and pending. The status changes to `succeeded` once the funds have been "confirmed" and a `transaction` is created and posted. The status changes to `failed` if the transfer fails.
   */
  status: "canceled" | "failed" | "processing" | "succeeded";
  statusTransitions: TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions;
  /**
   * The Transaction associated with this object.
   */
  transaction?: (string | TreasuryTransaction) | undefined;
};

/**
 * @internal
 * TreasuryInboundTransfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryInboundTransfer = {
  amount: number;
  cancelable: boolean;
  created: number;
  currency: string;
  description?: string | null | undefined;
  failure_details?:
    | External$TreasuryInboundTransfersResourceFailureDetails
    | undefined;
  financial_account: string;
  hosted_regulatory_receipt_url?: string | null | undefined;
  id: string;
  linked_flows: External$TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows;
  livemode: boolean;
  metadata: External$TreasuryInboundTransferMetadata;
  object: "treasury.inbound_transfer";
  origin_payment_method?: string | null | undefined;
  origin_payment_method_details?: External$InboundTransfers | undefined;
  returned?: boolean | null | undefined;
  statement_descriptor: string;
  status: "canceled" | "failed" | "processing" | "succeeded";
  status_transitions: External$TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions;
  transaction?: (string | External$TreasuryTransaction) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryInboundTransfer
 */
const SchemaIn$TreasuryInboundTransfer: z.ZodType<
  TreasuryInboundTransfer, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    cancelable: z.boolean(),
    created: z.number().int(),
    currency: z.string(),
    description: z.string().nullable().optional(),
    failure_details:
      Schemas$TreasuryInboundTransfersResourceFailureDetails.in.optional(),
    financial_account: z.string(),
    hosted_regulatory_receipt_url: z.string().nullable().optional(),
    id: z.string(),
    linked_flows:
      Schemas$TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows.in,
    livemode: z.boolean(),
    metadata: Schemas$TreasuryInboundTransferMetadata.in,
    object: z.enum(["treasury.inbound_transfer"]),
    origin_payment_method: z.string().nullable().optional(),
    origin_payment_method_details: z.lazy(() =>
      Schemas$InboundTransfers.in.optional(),
    ),
    returned: z.boolean().nullable().optional(),
    statement_descriptor: z.string(),
    status: z.enum(["canceled", "failed", "processing", "succeeded"]),
    status_transitions:
      Schemas$TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions.in,
    transaction: z
      .union([z.string(), z.lazy(() => Schemas$TreasuryTransaction.in)])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      cancelable: "cancelable",
      created: "created",
      currency: "currency",
      description: "description",
      failure_details: "failureDetails",
      financial_account: "financialAccount",
      hosted_regulatory_receipt_url: "hostedRegulatoryReceiptUrl",
      id: "id",
      linked_flows: "linkedFlows",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      origin_payment_method: "originPaymentMethod",
      origin_payment_method_details: "originPaymentMethodDetails",
      returned: "returned",
      statement_descriptor: "statementDescriptor",
      status: "status",
      status_transitions: "statusTransitions",
      transaction: "transaction",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryInboundTransfer
 */
const SchemaOut$TreasuryInboundTransfer: z.ZodType<
  External$TreasuryInboundTransfer, // output type of this zod object
  z.ZodTypeDef,
  TreasuryInboundTransfer // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    cancelable: z.boolean(),
    created: z.number().int(),
    currency: z.string(),
    description: z.string().nullable().optional(),
    failureDetails:
      Schemas$TreasuryInboundTransfersResourceFailureDetails.out.optional(),
    financialAccount: z.string(),
    hostedRegulatoryReceiptUrl: z.string().nullable().optional(),
    id: z.string(),
    linkedFlows:
      Schemas$TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows.out,
    livemode: z.boolean(),
    metadata: Schemas$TreasuryInboundTransferMetadata.out,
    object: z.enum(["treasury.inbound_transfer"]),
    originPaymentMethod: z.string().nullable().optional(),
    originPaymentMethodDetails: z.lazy(() =>
      Schemas$InboundTransfers.out.optional(),
    ),
    returned: z.boolean().nullable().optional(),
    statementDescriptor: z.string(),
    status: z.enum(["canceled", "failed", "processing", "succeeded"]),
    statusTransitions:
      Schemas$TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions.out,
    transaction: z
      .union([z.string(), z.lazy(() => Schemas$TreasuryTransaction.out)])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      cancelable: "cancelable",
      created: "created",
      currency: "currency",
      description: "description",
      failureDetails: "failure_details",
      financialAccount: "financial_account",
      hostedRegulatoryReceiptUrl: "hosted_regulatory_receipt_url",
      id: "id",
      linkedFlows: "linked_flows",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      originPaymentMethod: "origin_payment_method",
      originPaymentMethodDetails: "origin_payment_method_details",
      returned: "returned",
      statementDescriptor: "statement_descriptor",
      status: "status",
      statusTransitions: "status_transitions",
      transaction: "transaction",
    });
  });

export const Schemas$TreasuryInboundTransfer = {
  in: SchemaIn$TreasuryInboundTransfer,
  out: SchemaOut$TreasuryInboundTransfer,
};
