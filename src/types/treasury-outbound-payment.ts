import {
  External$OutboundPaymentsPaymentMethodDetails,
  OutboundPaymentsPaymentMethodDetails,
  Schemas$OutboundPaymentsPaymentMethodDetails,
} from "./outbound-payments-payment-method-details";
import {
  External$TreasuryOutboundPaymentMetadata,
  Schemas$TreasuryOutboundPaymentMetadata,
  TreasuryOutboundPaymentMetadata,
} from "./treasury-outbound-payment-metadata";
import {
  External$TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails,
  Schemas$TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails,
  TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails,
} from "./treasury-outbound-payments-resource-outbound-payment-resource-end-user-details";
import {
  External$TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions,
  Schemas$TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions,
  TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions,
} from "./treasury-outbound-payments-resource-outbound-payment-resource-status-transitions";
import {
  External$TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails,
  Schemas$TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails,
  TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails,
} from "./treasury-outbound-payments-resource-outbound-payment-resource-tracking-details";
import {
  External$TreasuryOutboundPaymentsResourceReturnedStatus,
  Schemas$TreasuryOutboundPaymentsResourceReturnedStatus,
  TreasuryOutboundPaymentsResourceReturnedStatus,
} from "./treasury-outbound-payments-resource-returned-status";
import {
  External$TreasuryTransaction,
  Schemas$TreasuryTransaction,
  TreasuryTransaction,
} from "./treasury-transaction";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Use [OutboundPayments](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-payments) to send funds to another party's external bank account or [FinancialAccount](https://stripe.com/docs/api#financial_accounts). To send money to an account belonging to the same user, use an [OutboundTransfer](https://stripe.com/docs/api#outbound_transfers).
 *
 * Simulate OutboundPayment state changes with the `/v1/test_helpers/treasury/outbound_payments` endpoints. These methods can only be called on test mode objects.
 *
 * Related guide: [Moving money with Treasury using OutboundPayment objects](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-payments)
 */
export type TreasuryOutboundPayment = {
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
   * ID of the [customer](https://stripe.com/docs/api/customers) to whom an OutboundPayment is sent.
   */
  customer?: string | null | undefined;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | null | undefined;
  /**
   * The PaymentMethod via which an OutboundPayment is sent. This field can be empty if the OutboundPayment was created using `destination_payment_method_data`.
   */
  destinationPaymentMethod?: string | null | undefined;
  destinationPaymentMethodDetails?:
    | OutboundPaymentsPaymentMethodDetails
    | undefined;
  endUserDetails?:
    | TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails
    | undefined;
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
  metadata: TreasuryOutboundPaymentMetadata;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "treasury.outbound_payment";
  returnedDetails?: TreasuryOutboundPaymentsResourceReturnedStatus | undefined;
  /**
   * The description that appears on the receiving end for an OutboundPayment (for example, bank statement for external bank transfer).
   */
  statementDescriptor: string;
  /**
   * Current status of the OutboundPayment: `processing`, `failed`, `posted`, `returned`, `canceled`. An OutboundPayment is `processing` if it has been created and is pending. The status changes to `posted` once the OutboundPayment has been "confirmed" and funds have left the account, or to `failed` or `canceled`. If an OutboundPayment fails to arrive at its destination, its status will change to `returned`.
   */
  status: "canceled" | "failed" | "posted" | "processing" | "returned";
  statusTransitions: TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions;
  trackingDetails?:
    | TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails
    | undefined;
  /**
   * The Transaction associated with this object.
   */
  transaction: string | TreasuryTransaction;
};

/**
 * @internal
 * TreasuryOutboundPayment without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryOutboundPayment = {
  amount: number;
  cancelable: boolean;
  created: number;
  currency: string;
  customer?: string | null | undefined;
  description?: string | null | undefined;
  destination_payment_method?: string | null | undefined;
  destination_payment_method_details?:
    | External$OutboundPaymentsPaymentMethodDetails
    | undefined;
  end_user_details?:
    | External$TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails
    | undefined;
  expected_arrival_date: number;
  financial_account: string;
  hosted_regulatory_receipt_url?: string | null | undefined;
  id: string;
  livemode: boolean;
  metadata: External$TreasuryOutboundPaymentMetadata;
  object: "treasury.outbound_payment";
  returned_details?:
    | External$TreasuryOutboundPaymentsResourceReturnedStatus
    | undefined;
  statement_descriptor: string;
  status: "canceled" | "failed" | "posted" | "processing" | "returned";
  status_transitions: External$TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions;
  tracking_details?:
    | External$TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails
    | undefined;
  transaction: string | External$TreasuryTransaction;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryOutboundPayment
 */
const SchemaIn$TreasuryOutboundPayment: z.ZodType<
  TreasuryOutboundPayment, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    cancelable: z.boolean(),
    created: z.number().int(),
    currency: z.string(),
    customer: z.string().nullable().optional(),
    description: z.string().nullable().optional(),
    destination_payment_method: z.string().nullable().optional(),
    destination_payment_method_details: z.lazy(() =>
      Schemas$OutboundPaymentsPaymentMethodDetails.in.optional(),
    ),
    end_user_details:
      Schemas$TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails.in.optional(),
    expected_arrival_date: z.number().int(),
    financial_account: z.string(),
    hosted_regulatory_receipt_url: z.string().nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$TreasuryOutboundPaymentMetadata.in,
    object: z.enum(["treasury.outbound_payment"]),
    returned_details: z.lazy(() =>
      Schemas$TreasuryOutboundPaymentsResourceReturnedStatus.in.optional(),
    ),
    statement_descriptor: z.string(),
    status: z.enum(["canceled", "failed", "posted", "processing", "returned"]),
    status_transitions:
      Schemas$TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions.in,
    tracking_details:
      Schemas$TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails.in.optional(),
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
      customer: "customer",
      description: "description",
      destination_payment_method: "destinationPaymentMethod",
      destination_payment_method_details: "destinationPaymentMethodDetails",
      end_user_details: "endUserDetails",
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryOutboundPayment
 */
const SchemaOut$TreasuryOutboundPayment: z.ZodType<
  External$TreasuryOutboundPayment, // output type of this zod object
  z.ZodTypeDef,
  TreasuryOutboundPayment // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    cancelable: z.boolean(),
    created: z.number().int(),
    currency: z.string(),
    customer: z.string().nullable().optional(),
    description: z.string().nullable().optional(),
    destinationPaymentMethod: z.string().nullable().optional(),
    destinationPaymentMethodDetails: z.lazy(() =>
      Schemas$OutboundPaymentsPaymentMethodDetails.out.optional(),
    ),
    endUserDetails:
      Schemas$TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails.out.optional(),
    expectedArrivalDate: z.number().int(),
    financialAccount: z.string(),
    hostedRegulatoryReceiptUrl: z.string().nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$TreasuryOutboundPaymentMetadata.out,
    object: z.enum(["treasury.outbound_payment"]),
    returnedDetails: z.lazy(() =>
      Schemas$TreasuryOutboundPaymentsResourceReturnedStatus.out.optional(),
    ),
    statementDescriptor: z.string(),
    status: z.enum(["canceled", "failed", "posted", "processing", "returned"]),
    statusTransitions:
      Schemas$TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions.out,
    trackingDetails:
      Schemas$TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails.out.optional(),
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
      customer: "customer",
      description: "description",
      destinationPaymentMethod: "destination_payment_method",
      destinationPaymentMethodDetails: "destination_payment_method_details",
      endUserDetails: "end_user_details",
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

export const Schemas$TreasuryOutboundPayment = {
  in: SchemaIn$TreasuryOutboundPayment,
  out: SchemaOut$TreasuryOutboundPayment,
};
