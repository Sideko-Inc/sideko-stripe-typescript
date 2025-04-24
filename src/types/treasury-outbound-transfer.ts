import {
  External$OutboundTransfersPaymentMethodDetails,
  OutboundTransfersPaymentMethodDetails,
  Schemas$OutboundTransfersPaymentMethodDetails,
} from "./outbound-transfers-payment-method-details";
import {
  External$TreasuryOutboundTransferMetadata,
  Schemas$TreasuryOutboundTransferMetadata,
  TreasuryOutboundTransferMetadata,
} from "./treasury-outbound-transfer-metadata";
import {
  External$TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails,
  Schemas$TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails,
  TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails,
} from "./treasury-outbound-transfers-resource-outbound-transfer-resource-tracking-details";
import {
  External$TreasuryOutboundTransfersResourceReturnedDetails,
  Schemas$TreasuryOutboundTransfersResourceReturnedDetails,
  TreasuryOutboundTransfersResourceReturnedDetails,
} from "./treasury-outbound-transfers-resource-returned-details";
import {
  External$TreasuryOutboundTransfersResourceStatusTransitions,
  Schemas$TreasuryOutboundTransfersResourceStatusTransitions,
  TreasuryOutboundTransfersResourceStatusTransitions,
} from "./treasury-outbound-transfers-resource-status-transitions";
import {
  External$TreasuryTransaction,
  Schemas$TreasuryTransaction,
  TreasuryTransaction,
} from "./treasury-transaction";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Use [OutboundTransfers](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-transfers) to transfer funds from a [FinancialAccount](https://stripe.com/docs/api#financial_accounts) to a PaymentMethod belonging to the same entity. To send funds to a different party, use [OutboundPayments](https://stripe.com/docs/api#outbound_payments) instead. You can send funds over ACH rails or through a domestic wire transfer to a user's own external bank account.
 *
 * Simulate OutboundTransfer state changes with the `/v1/test_helpers/treasury/outbound_transfers` endpoints. These methods can only be called on test mode objects.
 *
 * Related guide: [Moving money with Treasury using OutboundTransfer objects](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-transfers)
 */
export type TreasuryOutboundTransfer = {
  /**
   * Amount (in cents) transferred.
   */
  amount: number;
  /**
   * Returns `true` if the object can be canceled, and `false` otherwise.
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
  /**
   * The PaymentMethod used as the payment instrument for an OutboundTransfer.
   */
  destinationPaymentMethod?: string | null | undefined;
  destinationPaymentMethodDetails: OutboundTransfersPaymentMethodDetails;
  /**
   * The date when funds are expected to arrive in the destination account.
   */
  expectedArrivalDate: number;
  /**
   * The FinancialAccount that funds were pulled from.
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
  metadata: TreasuryOutboundTransferMetadata;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "treasury.outbound_transfer";
  returnedDetails?:
    | TreasuryOutboundTransfersResourceReturnedDetails
    | undefined;
  /**
   * Information about the OutboundTransfer to be sent to the recipient account.
   */
  statementDescriptor: string;
  /**
   * Current status of the OutboundTransfer: `processing`, `failed`, `canceled`, `posted`, `returned`. An OutboundTransfer is `processing` if it has been created and is pending. The status changes to `posted` once the OutboundTransfer has been "confirmed" and funds have left the account, or to `failed` or `canceled`. If an OutboundTransfer fails to arrive at its destination, its status will change to `returned`.
   */
  status: "canceled" | "failed" | "posted" | "processing" | "returned";
  statusTransitions: TreasuryOutboundTransfersResourceStatusTransitions;
  trackingDetails?:
    | TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails
    | undefined;
  /**
   * The Transaction associated with this object.
   */
  transaction: string | TreasuryTransaction;
};

/**
 * @internal
 * TreasuryOutboundTransfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryOutboundTransfer = {
  amount: number;
  cancelable: boolean;
  created: number;
  currency: string;
  description?: string | null | undefined;
  destination_payment_method?: string | null | undefined;
  destination_payment_method_details: External$OutboundTransfersPaymentMethodDetails;
  expected_arrival_date: number;
  financial_account: string;
  hosted_regulatory_receipt_url?: string | null | undefined;
  id: string;
  livemode: boolean;
  metadata: External$TreasuryOutboundTransferMetadata;
  object: "treasury.outbound_transfer";
  returned_details?:
    | External$TreasuryOutboundTransfersResourceReturnedDetails
    | undefined;
  statement_descriptor: string;
  status: "canceled" | "failed" | "posted" | "processing" | "returned";
  status_transitions: External$TreasuryOutboundTransfersResourceStatusTransitions;
  tracking_details?:
    | External$TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails
    | undefined;
  transaction: string | External$TreasuryTransaction;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryOutboundTransfer
 */
const SchemaIn$TreasuryOutboundTransfer: z.ZodType<
  TreasuryOutboundTransfer, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    cancelable: z.boolean(),
    created: z.number().int(),
    currency: z.string(),
    description: z.string().nullable().optional(),
    destination_payment_method: z.string().nullable().optional(),
    destination_payment_method_details: z.lazy(
      () => Schemas$OutboundTransfersPaymentMethodDetails.in,
    ),
    expected_arrival_date: z.number().int(),
    financial_account: z.string(),
    hosted_regulatory_receipt_url: z.string().nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$TreasuryOutboundTransferMetadata.in,
    object: z.enum(["treasury.outbound_transfer"]),
    returned_details: z.lazy(() =>
      Schemas$TreasuryOutboundTransfersResourceReturnedDetails.in.optional(),
    ),
    statement_descriptor: z.string(),
    status: z.enum(["canceled", "failed", "posted", "processing", "returned"]),
    status_transitions:
      Schemas$TreasuryOutboundTransfersResourceStatusTransitions.in,
    tracking_details:
      Schemas$TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails.in.optional(),
    transaction: z.union([
      z.string(),
      z.lazy(() => Schemas$TreasuryTransaction.in),
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      cancelable: "cancelable",
      created: "created",
      currency: "currency",
      description: "description",
      destination_payment_method: "destinationPaymentMethod",
      destination_payment_method_details: "destinationPaymentMethodDetails",
      expected_arrival_date: "expectedArrivalDate",
      financial_account: "financialAccount",
      hosted_regulatory_receipt_url: "hostedRegulatoryReceiptUrl",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      returned_details: "returnedDetails",
      statement_descriptor: "statementDescriptor",
      status: "status",
      status_transitions: "statusTransitions",
      tracking_details: "trackingDetails",
      transaction: "transaction",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryOutboundTransfer
 */
const SchemaOut$TreasuryOutboundTransfer: z.ZodType<
  External$TreasuryOutboundTransfer, // output type of this zod object
  z.ZodTypeDef,
  TreasuryOutboundTransfer // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    cancelable: z.boolean(),
    created: z.number().int(),
    currency: z.string(),
    description: z.string().nullable().optional(),
    destinationPaymentMethod: z.string().nullable().optional(),
    destinationPaymentMethodDetails: z.lazy(
      () => Schemas$OutboundTransfersPaymentMethodDetails.out,
    ),
    expectedArrivalDate: z.number().int(),
    financialAccount: z.string(),
    hostedRegulatoryReceiptUrl: z.string().nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$TreasuryOutboundTransferMetadata.out,
    object: z.enum(["treasury.outbound_transfer"]),
    returnedDetails: z.lazy(() =>
      Schemas$TreasuryOutboundTransfersResourceReturnedDetails.out.optional(),
    ),
    statementDescriptor: z.string(),
    status: z.enum(["canceled", "failed", "posted", "processing", "returned"]),
    statusTransitions:
      Schemas$TreasuryOutboundTransfersResourceStatusTransitions.out,
    trackingDetails:
      Schemas$TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails.out.optional(),
    transaction: z.union([
      z.string(),
      z.lazy(() => Schemas$TreasuryTransaction.out),
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      cancelable: "cancelable",
      created: "created",
      currency: "currency",
      description: "description",
      destinationPaymentMethod: "destination_payment_method",
      destinationPaymentMethodDetails: "destination_payment_method_details",
      expectedArrivalDate: "expected_arrival_date",
      financialAccount: "financial_account",
      hostedRegulatoryReceiptUrl: "hosted_regulatory_receipt_url",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      returnedDetails: "returned_details",
      statementDescriptor: "statement_descriptor",
      status: "status",
      statusTransitions: "status_transitions",
      trackingDetails: "tracking_details",
      transaction: "transaction",
    });
  });

export const Schemas$TreasuryOutboundTransfer = {
  in: SchemaIn$TreasuryOutboundTransfer,
  out: SchemaOut$TreasuryOutboundTransfer,
};
