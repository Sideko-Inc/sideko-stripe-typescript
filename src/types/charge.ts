import { Account, External$Account, Schemas$Account } from "./account";
import {
  Application,
  External$Application,
  Schemas$Application,
} from "./application";
import {
  ApplicationFee,
  External$ApplicationFee,
  Schemas$ApplicationFee,
} from "./application-fee";
import {
  BalanceTransaction,
  External$BalanceTransaction,
  Schemas$BalanceTransaction,
} from "./balance-transaction";
import {
  BillingDetails,
  External$BillingDetails,
  Schemas$BillingDetails,
} from "./billing-details";
import {
  ChargeFraudDetails,
  External$ChargeFraudDetails,
  Schemas$ChargeFraudDetails,
} from "./charge-fraud-details";
import {
  ChargeMetadata,
  External$ChargeMetadata,
  Schemas$ChargeMetadata,
} from "./charge-metadata";
import {
  ChargeOutcome,
  External$ChargeOutcome,
  Schemas$ChargeOutcome,
} from "./charge-outcome";
import {
  ChargeRefunds,
  External$ChargeRefunds,
  Schemas$ChargeRefunds,
} from "./charge-refunds";
import {
  ChargeTransferData,
  External$ChargeTransferData,
  Schemas$ChargeTransferData,
} from "./charge-transfer-data";
import { Customer, External$Customer, Schemas$Customer } from "./customer";
import {
  DeletedCustomer,
  External$DeletedCustomer,
  Schemas$DeletedCustomer,
} from "./deleted-customer";
import {
  External$PaymentFlowsPaymentIntentPresentmentDetails,
  PaymentFlowsPaymentIntentPresentmentDetails,
  Schemas$PaymentFlowsPaymentIntentPresentmentDetails,
} from "./payment-flows-payment-intent-presentment-details";
import {
  External$PaymentIntent,
  PaymentIntent,
  Schemas$PaymentIntent,
} from "./payment-intent";
import {
  External$PaymentMethodDetails,
  PaymentMethodDetails,
  Schemas$PaymentMethodDetails,
} from "./payment-method-details";
import {
  External$RadarRadarOptions,
  RadarRadarOptions,
  Schemas$RadarRadarOptions,
} from "./radar-radar-options";
import { External$Review, Review, Schemas$Review } from "./review";
import { External$Shipping, Schemas$Shipping, Shipping } from "./shipping";
import { External$Transfer, Schemas$Transfer, Transfer } from "./transfer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The `Charge` object represents a single attempt to move money into your Stripe account.
 * PaymentIntent confirmation is the most common way to create Charges, but transferring
 * money to a different Stripe account through Connect also creates Charges.
 * Some legacy payment flows create Charges directly, which is not recommended for new integrations.
 */
export type Charge = {
  /**
   * Amount intended to be collected by this payment. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
   */
  amount: number;
  /**
   * Amount in cents (or local equivalent) captured (can be less than the amount attribute on the charge if a partial capture was made).
   */
  amountCaptured: number;
  /**
   * Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the charge if a partial refund was issued).
   */
  amountRefunded: number;
  /**
   * ID of the Connect application that created the charge.
   */
  application?: (string | Application) | undefined;
  /**
   * The application fee (if any) for the charge. [See the Connect documentation](https://stripe.com/docs/connect/direct-charges#collect-fees) for details.
   */
  applicationFee?: (string | ApplicationFee) | undefined;
  /**
   * The amount of the application fee (if any) requested for the charge. [See the Connect documentation](https://stripe.com/docs/connect/direct-charges#collect-fees) for details.
   */
  applicationFeeAmount?: number | null | undefined;
  /**
   * ID of the balance transaction that describes the impact of this charge on your account balance (not including refunds or disputes).
   */
  balanceTransaction?: (string | BalanceTransaction) | undefined;
  billingDetails: BillingDetails;
  /**
   * The full statement descriptor that is passed to card networks, and that is displayed on your customers' credit card and bank statements. Allows you to see what the statement descriptor looks like after the static and dynamic portions are combined. This value only exists for card payments.
   */
  calculatedStatementDescriptor?: string | null | undefined;
  /**
   * If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured.
   */
  captured: boolean;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * ID of the customer this charge is for if one exists.
   */
  customer?: (string | Customer | DeletedCustomer) | undefined;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | null | undefined;
  /**
   * Whether the charge has been disputed.
   */
  disputed: boolean;
  /**
   * ID of the balance transaction that describes the reversal of the balance on your account due to payment failure.
   */
  failureBalanceTransaction?: (string | BalanceTransaction) | undefined;
  /**
   * Error code explaining reason for charge failure if available (see [the errors section](https://stripe.com/docs/error-codes) for a list of codes).
   */
  failureCode?: string | null | undefined;
  /**
   * Message to user further explaining reason for charge failure if available.
   */
  failureMessage?: string | null | undefined;
  fraudDetails?: ChargeFraudDetails | undefined;
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
  metadata: ChargeMetadata;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "charge";
  /**
   * The account (if any) the charge was made on behalf of without triggering an automatic transfer. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers) for details.
   */
  onBehalfOf?: (string | Account) | undefined;
  outcome?: ChargeOutcome | undefined;
  /**
   * `true` if the charge succeeded, or was successfully authorized for later capture.
   */
  paid: boolean;
  /**
   * ID of the PaymentIntent associated with this charge, if one exists.
   */
  paymentIntent?: (string | PaymentIntent) | undefined;
  /**
   * ID of the payment method used in this charge.
   */
  paymentMethod?: string | null | undefined;
  paymentMethodDetails?: PaymentMethodDetails | undefined;
  presentmentDetails?: PaymentFlowsPaymentIntentPresentmentDetails | undefined;
  /**
   * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
   */
  radarOptions?: RadarRadarOptions | undefined;
  /**
   * This is the email address that the receipt for this charge was sent to.
   */
  receiptEmail?: string | null | undefined;
  /**
   * This is the transaction number that appears on email receipts sent for this charge. This attribute will be `null` until a receipt has been sent.
   */
  receiptNumber?: string | null | undefined;
  /**
   * This is the URL to view the receipt for this charge. The receipt is kept up-to-date to the latest state of the charge, including any refunds. If the charge is for an Invoice, the receipt will be stylized as an Invoice receipt.
   */
  receiptUrl?: string | null | undefined;
  /**
   * Whether the charge has been fully refunded. If the charge is only partially refunded, this attribute will still be false.
   */
  refunded: boolean;
  /**
   * A list of refunds that have been applied to the charge.
   */
  refunds?: ChargeRefunds | null | undefined;
  /**
   * ID of the review associated with this charge if one exists.
   */
  review?: (string | Review) | undefined;
  shipping?: Shipping | undefined;
  /**
   * The transfer ID which created this charge. Only present if the charge came from another Stripe account. [See the Connect documentation](https://docs.stripe.com/connect/destination-charges) for details.
   */
  sourceTransfer?: (string | Transfer) | undefined;
  /**
   * For a non-card charge, text that appears on the customer's statement as the statement descriptor. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
   *
   * For a card charge, this value is ignored unless you don't specify a `statement_descriptor_suffix`, in which case this value is used as the suffix.
   */
  statementDescriptor?: string | null | undefined;
  /**
   * Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement. If the account has no prefix value, the suffix is concatenated to the account's statement descriptor.
   */
  statementDescriptorSuffix?: string | null | undefined;
  /**
   * The status of the payment is either `succeeded`, `pending`, or `failed`.
   */
  status: "failed" | "pending" | "succeeded";
  /**
   * ID of the transfer to the `destination` account (only applicable if the charge was created using the `destination` parameter).
   */
  transfer?: (string | Transfer) | undefined;
  transferData?: ChargeTransferData | undefined;
  /**
   * A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options) for details.
   */
  transferGroup?: string | null | undefined;
};

/**
 * @internal
 * Charge without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Charge = {
  amount: number;
  amount_captured: number;
  amount_refunded: number;
  application?: (string | External$Application) | undefined;
  application_fee?: (string | External$ApplicationFee) | undefined;
  application_fee_amount?: number | null | undefined;
  balance_transaction?: (string | External$BalanceTransaction) | undefined;
  billing_details: External$BillingDetails;
  calculated_statement_descriptor?: string | null | undefined;
  captured: boolean;
  created: number;
  currency: string;
  customer?:
    | (string | External$Customer | External$DeletedCustomer)
    | undefined;
  description?: string | null | undefined;
  disputed: boolean;
  failure_balance_transaction?:
    | (string | External$BalanceTransaction)
    | undefined;
  failure_code?: string | null | undefined;
  failure_message?: string | null | undefined;
  fraud_details?: External$ChargeFraudDetails | undefined;
  id: string;
  livemode: boolean;
  metadata: External$ChargeMetadata;
  object: "charge";
  on_behalf_of?: (string | External$Account) | undefined;
  outcome?: External$ChargeOutcome | undefined;
  paid: boolean;
  payment_intent?: (string | External$PaymentIntent) | undefined;
  payment_method?: string | null | undefined;
  payment_method_details?: External$PaymentMethodDetails | undefined;
  presentment_details?:
    | External$PaymentFlowsPaymentIntentPresentmentDetails
    | undefined;
  radar_options?: External$RadarRadarOptions | undefined;
  receipt_email?: string | null | undefined;
  receipt_number?: string | null | undefined;
  receipt_url?: string | null | undefined;
  refunded: boolean;
  refunds?: External$ChargeRefunds | null | undefined;
  review?: (string | External$Review) | undefined;
  shipping?: External$Shipping | undefined;
  source_transfer?: (string | External$Transfer) | undefined;
  statement_descriptor?: string | null | undefined;
  statement_descriptor_suffix?: string | null | undefined;
  status: "failed" | "pending" | "succeeded";
  transfer?: (string | External$Transfer) | undefined;
  transfer_data?: External$ChargeTransferData | undefined;
  transfer_group?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Charge
 */
const SchemaIn$Charge: z.ZodType<
  Charge, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    amount_captured: z.number().int(),
    amount_refunded: z.number().int(),
    application: z.union([z.string(), Schemas$Application.in]).optional(),
    application_fee: z
      .union([z.string(), z.lazy(() => Schemas$ApplicationFee.in)])
      .optional(),
    application_fee_amount: z.number().int().nullable().optional(),
    balance_transaction: z
      .union([z.string(), z.lazy(() => Schemas$BalanceTransaction.in)])
      .optional(),
    billing_details: Schemas$BillingDetails.in,
    calculated_statement_descriptor: z.string().nullable().optional(),
    captured: z.boolean(),
    created: z.number().int(),
    currency: z.string(),
    customer: z
      .union([
        z.string(),
        z.lazy(() => Schemas$Customer.in),
        Schemas$DeletedCustomer.in,
      ])
      .optional(),
    description: z.string().nullable().optional(),
    disputed: z.boolean(),
    failure_balance_transaction: z
      .union([z.string(), z.lazy(() => Schemas$BalanceTransaction.in)])
      .optional(),
    failure_code: z.string().nullable().optional(),
    failure_message: z.string().nullable().optional(),
    fraud_details: Schemas$ChargeFraudDetails.in.optional(),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$ChargeMetadata.in,
    object: z.enum(["charge"]),
    on_behalf_of: z
      .union([z.string(), z.lazy(() => Schemas$Account.in)])
      .optional(),
    outcome: Schemas$ChargeOutcome.in.optional(),
    paid: z.boolean(),
    payment_intent: z
      .union([z.string(), z.lazy(() => Schemas$PaymentIntent.in)])
      .optional(),
    payment_method: z.string().nullable().optional(),
    payment_method_details: z.lazy(() =>
      Schemas$PaymentMethodDetails.in.optional(),
    ),
    presentment_details:
      Schemas$PaymentFlowsPaymentIntentPresentmentDetails.in.optional(),
    radar_options: Schemas$RadarRadarOptions.in.optional(),
    receipt_email: z.string().nullable().optional(),
    receipt_number: z.string().nullable().optional(),
    receipt_url: z.string().nullable().optional(),
    refunded: z.boolean(),
    refunds: z.lazy(() => Schemas$ChargeRefunds.in.nullable().optional()),
    review: z.union([z.string(), z.lazy(() => Schemas$Review.in)]).optional(),
    shipping: Schemas$Shipping.in.optional(),
    source_transfer: z
      .union([z.string(), z.lazy(() => Schemas$Transfer.in)])
      .optional(),
    statement_descriptor: z.string().nullable().optional(),
    statement_descriptor_suffix: z.string().nullable().optional(),
    status: z.enum(["failed", "pending", "succeeded"]),
    transfer: z
      .union([z.string(), z.lazy(() => Schemas$Transfer.in)])
      .optional(),
    transfer_data: z.lazy(() => Schemas$ChargeTransferData.in.optional()),
    transfer_group: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amount_captured: "amountCaptured",
      amount_refunded: "amountRefunded",
      application: "application",
      application_fee: "applicationFee",
      application_fee_amount: "applicationFeeAmount",
      balance_transaction: "balanceTransaction",
      billing_details: "billingDetails",
      calculated_statement_descriptor: "calculatedStatementDescriptor",
      captured: "captured",
      created: "created",
      currency: "currency",
      customer: "customer",
      description: "description",
      disputed: "disputed",
      failure_balance_transaction: "failureBalanceTransaction",
      failure_code: "failureCode",
      failure_message: "failureMessage",
      fraud_details: "fraudDetails",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      on_behalf_of: "onBehalfOf",
      outcome: "outcome",
      paid: "paid",
      payment_intent: "paymentIntent",
      payment_method: "paymentMethod",
      payment_method_details: "paymentMethodDetails",
      presentment_details: "presentmentDetails",
      radar_options: "radarOptions",
      receipt_email: "receiptEmail",
      receipt_number: "receiptNumber",
      receipt_url: "receiptUrl",
      refunded: "refunded",
      refunds: "refunds",
      review: "review",
      shipping: "shipping",
      source_transfer: "sourceTransfer",
      statement_descriptor: "statementDescriptor",
      statement_descriptor_suffix: "statementDescriptorSuffix",
      status: "status",
      transfer: "transfer",
      transfer_data: "transferData",
      transfer_group: "transferGroup",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Charge
 */
const SchemaOut$Charge: z.ZodType<
  External$Charge, // output type of this zod object
  z.ZodTypeDef,
  Charge // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    amountCaptured: z.number().int(),
    amountRefunded: z.number().int(),
    application: z.union([z.string(), Schemas$Application.out]).optional(),
    applicationFee: z
      .union([z.string(), z.lazy(() => Schemas$ApplicationFee.out)])
      .optional(),
    applicationFeeAmount: z.number().int().nullable().optional(),
    balanceTransaction: z
      .union([z.string(), z.lazy(() => Schemas$BalanceTransaction.out)])
      .optional(),
    billingDetails: Schemas$BillingDetails.out,
    calculatedStatementDescriptor: z.string().nullable().optional(),
    captured: z.boolean(),
    created: z.number().int(),
    currency: z.string(),
    customer: z
      .union([
        z.string(),
        z.lazy(() => Schemas$Customer.out),
        Schemas$DeletedCustomer.out,
      ])
      .optional(),
    description: z.string().nullable().optional(),
    disputed: z.boolean(),
    failureBalanceTransaction: z
      .union([z.string(), z.lazy(() => Schemas$BalanceTransaction.out)])
      .optional(),
    failureCode: z.string().nullable().optional(),
    failureMessage: z.string().nullable().optional(),
    fraudDetails: Schemas$ChargeFraudDetails.out.optional(),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$ChargeMetadata.out,
    object: z.enum(["charge"]),
    onBehalfOf: z
      .union([z.string(), z.lazy(() => Schemas$Account.out)])
      .optional(),
    outcome: Schemas$ChargeOutcome.out.optional(),
    paid: z.boolean(),
    paymentIntent: z
      .union([z.string(), z.lazy(() => Schemas$PaymentIntent.out)])
      .optional(),
    paymentMethod: z.string().nullable().optional(),
    paymentMethodDetails: z.lazy(() =>
      Schemas$PaymentMethodDetails.out.optional(),
    ),
    presentmentDetails:
      Schemas$PaymentFlowsPaymentIntentPresentmentDetails.out.optional(),
    radarOptions: Schemas$RadarRadarOptions.out.optional(),
    receiptEmail: z.string().nullable().optional(),
    receiptNumber: z.string().nullable().optional(),
    receiptUrl: z.string().nullable().optional(),
    refunded: z.boolean(),
    refunds: z.lazy(() => Schemas$ChargeRefunds.out.nullable().optional()),
    review: z.union([z.string(), z.lazy(() => Schemas$Review.out)]).optional(),
    shipping: Schemas$Shipping.out.optional(),
    sourceTransfer: z
      .union([z.string(), z.lazy(() => Schemas$Transfer.out)])
      .optional(),
    statementDescriptor: z.string().nullable().optional(),
    statementDescriptorSuffix: z.string().nullable().optional(),
    status: z.enum(["failed", "pending", "succeeded"]),
    transfer: z
      .union([z.string(), z.lazy(() => Schemas$Transfer.out)])
      .optional(),
    transferData: z.lazy(() => Schemas$ChargeTransferData.out.optional()),
    transferGroup: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amountCaptured: "amount_captured",
      amountRefunded: "amount_refunded",
      application: "application",
      applicationFee: "application_fee",
      applicationFeeAmount: "application_fee_amount",
      balanceTransaction: "balance_transaction",
      billingDetails: "billing_details",
      calculatedStatementDescriptor: "calculated_statement_descriptor",
      captured: "captured",
      created: "created",
      currency: "currency",
      customer: "customer",
      description: "description",
      disputed: "disputed",
      failureBalanceTransaction: "failure_balance_transaction",
      failureCode: "failure_code",
      failureMessage: "failure_message",
      fraudDetails: "fraud_details",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      onBehalfOf: "on_behalf_of",
      outcome: "outcome",
      paid: "paid",
      paymentIntent: "payment_intent",
      paymentMethod: "payment_method",
      paymentMethodDetails: "payment_method_details",
      presentmentDetails: "presentment_details",
      radarOptions: "radar_options",
      receiptEmail: "receipt_email",
      receiptNumber: "receipt_number",
      receiptUrl: "receipt_url",
      refunded: "refunded",
      refunds: "refunds",
      review: "review",
      shipping: "shipping",
      sourceTransfer: "source_transfer",
      statementDescriptor: "statement_descriptor",
      statementDescriptorSuffix: "statement_descriptor_suffix",
      status: "status",
      transfer: "transfer",
      transferData: "transfer_data",
      transferGroup: "transfer_group",
    });
  });

export const Schemas$Charge = {
  in: SchemaIn$Charge,
  out: SchemaOut$Charge,
};
