import {
  ApplicationFee,
  External$ApplicationFee,
  Schemas$ApplicationFee,
} from "./application-fee";
import { Charge, External$Charge, Schemas$Charge } from "./charge";
import {
  ConnectCollectionTransfer,
  External$ConnectCollectionTransfer,
  Schemas$ConnectCollectionTransfer,
} from "./connect-collection-transfer";
import {
  CustomerCashBalanceTransaction,
  External$CustomerCashBalanceTransaction,
  Schemas$CustomerCashBalanceTransaction,
} from "./customer-cash-balance-transaction";
import { Dispute, External$Dispute, Schemas$Dispute } from "./dispute";
import { External$Fee, Fee, Schemas$Fee } from "./fee";
import { External$FeeRefund, FeeRefund, Schemas$FeeRefund } from "./fee-refund";
import {
  External$IssuingAuthorization,
  IssuingAuthorization,
  Schemas$IssuingAuthorization,
} from "./issuing-authorization";
import {
  External$IssuingDispute,
  IssuingDispute,
  Schemas$IssuingDispute,
} from "./issuing-dispute";
import {
  External$IssuingTransaction,
  IssuingTransaction,
  Schemas$IssuingTransaction,
} from "./issuing-transaction";
import { External$Payout, Payout, Schemas$Payout } from "./payout";
import { External$Refund, Refund, Schemas$Refund } from "./refund";
import {
  External$ReserveTransaction,
  ReserveTransaction,
  Schemas$ReserveTransaction,
} from "./reserve-transaction";
import {
  External$TaxDeductedAtSource,
  Schemas$TaxDeductedAtSource,
  TaxDeductedAtSource,
} from "./tax-deducted-at-source";
import { External$Topup, Schemas$Topup, Topup } from "./topup";
import { External$Transfer, Schemas$Transfer, Transfer } from "./transfer";
import {
  External$TransferReversal,
  Schemas$TransferReversal,
  TransferReversal,
} from "./transfer-reversal";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Balance transactions represent funds moving through your Stripe account.
 * Stripe creates them for every type of transaction that enters or leaves your Stripe account balance.
 *
 * Related guide: [Balance transaction types](https://stripe.com/docs/reports/balance-transaction-types)
 */
export type BalanceTransaction = {
  /**
   * Gross amount of this transaction (in cents (or local equivalent)). A positive value represents funds charged to another party, and a negative value represents funds sent to another party.
   */
  amount: number;
  /**
   * The date that the transaction's net funds become available in the Stripe balance.
   */
  availableOn: number;
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
   * If applicable, this transaction uses an exchange rate. If money converts from currency A to currency B, then the `amount` in currency A, multipled by the `exchange_rate`, equals the `amount` in currency B. For example, if you charge a customer 10.00 EUR, the PaymentIntent's `amount` is `1000` and `currency` is `eur`. If this converts to 12.34 USD in your Stripe account, the BalanceTransaction's `amount` is `1234`, its `currency` is `usd`, and the `exchange_rate` is `1.234`.
   */
  exchangeRate?: number | null | undefined;
  /**
   * Fees (in cents (or local equivalent)) paid for this transaction. Represented as a positive integer when assessed.
   */
  fee: number;
  /**
   * Detailed breakdown of fees (in cents (or local equivalent)) paid for this transaction.
   */
  feeDetails: Fee[];
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Net impact to a Stripe balance (in cents (or local equivalent)). A positive value represents incrementing a Stripe balance, and a negative value decrementing a Stripe balance. You can calculate the net impact of a transaction on a balance by `amount` - `fee`
   */
  net: number;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "balance_transaction";
  /**
   * Learn more about how [reporting categories](https://stripe.com/docs/reports/reporting-categories) can help you understand balance transactions from an accounting perspective.
   */
  reportingCategory: string;
  /**
   * This transaction relates to the Stripe object.
   */
  source?:
    | (
        | string
        | ApplicationFee
        | Charge
        | ConnectCollectionTransfer
        | CustomerCashBalanceTransaction
        | Dispute
        | FeeRefund
        | IssuingAuthorization
        | IssuingDispute
        | IssuingTransaction
        | Payout
        | Refund
        | ReserveTransaction
        | TaxDeductedAtSource
        | Topup
        | Transfer
        | TransferReversal
      )
    | undefined;
  /**
   * The transaction's net funds status in the Stripe balance, which are either `available` or `pending`.
   */
  status: string;
  /**
   * Transaction type: `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `contribution`, `issuing_authorization_hold`, `issuing_authorization_release`, `issuing_dispute`, `issuing_transaction`, `obligation_outbound`, `obligation_reversal_inbound`, `payment`, `payment_failure_refund`, `payment_network_reserve_hold`, `payment_network_reserve_release`, `payment_refund`, `payment_reversal`, `payment_unreconciled`, `payout`, `payout_cancel`, `payout_failure`, `payout_minimum_balance_hold`, `payout_minimum_balance_release`, `refund`, `refund_failure`, `reserve_transaction`, `reserved_funds`, `stripe_fee`, `stripe_fx_fee`, `stripe_balance_payment_debit`, `stripe_balance_payment_debit_reversal`, `tax_fee`, `topup`, `topup_reversal`, `transfer`, `transfer_cancel`, `transfer_failure`, or `transfer_refund`. Learn more about [balance transaction types and what they represent](https://stripe.com/docs/reports/balance-transaction-types). To classify transactions for accounting purposes, consider `reporting_category` instead.
   */
  type:
    | "adjustment"
    | "advance"
    | "advance_funding"
    | "anticipation_repayment"
    | "application_fee"
    | "application_fee_refund"
    | "charge"
    | "climate_order_purchase"
    | "climate_order_refund"
    | "connect_collection_transfer"
    | "contribution"
    | "issuing_authorization_hold"
    | "issuing_authorization_release"
    | "issuing_dispute"
    | "issuing_transaction"
    | "obligation_outbound"
    | "obligation_reversal_inbound"
    | "payment"
    | "payment_failure_refund"
    | "payment_network_reserve_hold"
    | "payment_network_reserve_release"
    | "payment_refund"
    | "payment_reversal"
    | "payment_unreconciled"
    | "payout"
    | "payout_cancel"
    | "payout_failure"
    | "payout_minimum_balance_hold"
    | "payout_minimum_balance_release"
    | "refund"
    | "refund_failure"
    | "reserve_transaction"
    | "reserved_funds"
    | "stripe_balance_payment_debit"
    | "stripe_balance_payment_debit_reversal"
    | "stripe_fee"
    | "stripe_fx_fee"
    | "tax_fee"
    | "topup"
    | "topup_reversal"
    | "transfer"
    | "transfer_cancel"
    | "transfer_failure"
    | "transfer_refund";
};

/**
 * @internal
 * BalanceTransaction without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BalanceTransaction = {
  amount: number;
  available_on: number;
  created: number;
  currency: string;
  description?: string | null | undefined;
  exchange_rate?: number | null | undefined;
  fee: number;
  fee_details: External$Fee[];
  id: string;
  net: number;
  object: "balance_transaction";
  reporting_category: string;
  source?:
    | (
        | string
        | External$ApplicationFee
        | External$Charge
        | External$ConnectCollectionTransfer
        | External$CustomerCashBalanceTransaction
        | External$Dispute
        | External$FeeRefund
        | External$IssuingAuthorization
        | External$IssuingDispute
        | External$IssuingTransaction
        | External$Payout
        | External$Refund
        | External$ReserveTransaction
        | External$TaxDeductedAtSource
        | External$Topup
        | External$Transfer
        | External$TransferReversal
      )
    | undefined;
  status: string;
  type:
    | "adjustment"
    | "advance"
    | "advance_funding"
    | "anticipation_repayment"
    | "application_fee"
    | "application_fee_refund"
    | "charge"
    | "climate_order_purchase"
    | "climate_order_refund"
    | "connect_collection_transfer"
    | "contribution"
    | "issuing_authorization_hold"
    | "issuing_authorization_release"
    | "issuing_dispute"
    | "issuing_transaction"
    | "obligation_outbound"
    | "obligation_reversal_inbound"
    | "payment"
    | "payment_failure_refund"
    | "payment_network_reserve_hold"
    | "payment_network_reserve_release"
    | "payment_refund"
    | "payment_reversal"
    | "payment_unreconciled"
    | "payout"
    | "payout_cancel"
    | "payout_failure"
    | "payout_minimum_balance_hold"
    | "payout_minimum_balance_release"
    | "refund"
    | "refund_failure"
    | "reserve_transaction"
    | "reserved_funds"
    | "stripe_balance_payment_debit"
    | "stripe_balance_payment_debit_reversal"
    | "stripe_fee"
    | "stripe_fx_fee"
    | "tax_fee"
    | "topup"
    | "topup_reversal"
    | "transfer"
    | "transfer_cancel"
    | "transfer_failure"
    | "transfer_refund";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BalanceTransaction
 */
const SchemaIn$BalanceTransaction: z.ZodType<
  BalanceTransaction, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    available_on: z.number().int(),
    created: z.number().int(),
    currency: z.string(),
    description: z.string().nullable().optional(),
    exchange_rate: z.number().nullable().optional(),
    fee: z.number().int(),
    fee_details: z.array(Schemas$Fee.in),
    id: z.string(),
    net: z.number().int(),
    object: z.enum(["balance_transaction"]),
    reporting_category: z.string(),
    source: z
      .union([
        z.string(),
        z.lazy(() => Schemas$ApplicationFee.in),
        z.lazy(() => Schemas$Charge.in),
        z.lazy(() => Schemas$ConnectCollectionTransfer.in),
        z.lazy(() => Schemas$CustomerCashBalanceTransaction.in),
        z.lazy(() => Schemas$Dispute.in),
        z.lazy(() => Schemas$FeeRefund.in),
        z.lazy(() => Schemas$IssuingAuthorization.in),
        z.lazy(() => Schemas$IssuingDispute.in),
        z.lazy(() => Schemas$IssuingTransaction.in),
        z.lazy(() => Schemas$Payout.in),
        z.lazy(() => Schemas$Refund.in),
        Schemas$ReserveTransaction.in,
        Schemas$TaxDeductedAtSource.in,
        z.lazy(() => Schemas$Topup.in),
        z.lazy(() => Schemas$Transfer.in),
        z.lazy(() => Schemas$TransferReversal.in),
      ])
      .optional(),
    status: z.string(),
    type: z.enum([
      "adjustment",
      "advance",
      "advance_funding",
      "anticipation_repayment",
      "application_fee",
      "application_fee_refund",
      "charge",
      "climate_order_purchase",
      "climate_order_refund",
      "connect_collection_transfer",
      "contribution",
      "issuing_authorization_hold",
      "issuing_authorization_release",
      "issuing_dispute",
      "issuing_transaction",
      "obligation_outbound",
      "obligation_reversal_inbound",
      "payment",
      "payment_failure_refund",
      "payment_network_reserve_hold",
      "payment_network_reserve_release",
      "payment_refund",
      "payment_reversal",
      "payment_unreconciled",
      "payout",
      "payout_cancel",
      "payout_failure",
      "payout_minimum_balance_hold",
      "payout_minimum_balance_release",
      "refund",
      "refund_failure",
      "reserve_transaction",
      "reserved_funds",
      "stripe_balance_payment_debit",
      "stripe_balance_payment_debit_reversal",
      "stripe_fee",
      "stripe_fx_fee",
      "tax_fee",
      "topup",
      "topup_reversal",
      "transfer",
      "transfer_cancel",
      "transfer_failure",
      "transfer_refund",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      available_on: "availableOn",
      created: "created",
      currency: "currency",
      description: "description",
      exchange_rate: "exchangeRate",
      fee: "fee",
      fee_details: "feeDetails",
      id: "id",
      net: "net",
      object: "object",
      reporting_category: "reportingCategory",
      source: "source",
      status: "status",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BalanceTransaction
 */
const SchemaOut$BalanceTransaction: z.ZodType<
  External$BalanceTransaction, // output type of this zod object
  z.ZodTypeDef,
  BalanceTransaction // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    availableOn: z.number().int(),
    created: z.number().int(),
    currency: z.string(),
    description: z.string().nullable().optional(),
    exchangeRate: z.number().nullable().optional(),
    fee: z.number().int(),
    feeDetails: z.array(Schemas$Fee.out),
    id: z.string(),
    net: z.number().int(),
    object: z.enum(["balance_transaction"]),
    reportingCategory: z.string(),
    source: z
      .union([
        z.string(),
        z.lazy(() => Schemas$ApplicationFee.out),
        z.lazy(() => Schemas$Charge.out),
        z.lazy(() => Schemas$ConnectCollectionTransfer.out),
        z.lazy(() => Schemas$CustomerCashBalanceTransaction.out),
        z.lazy(() => Schemas$Dispute.out),
        z.lazy(() => Schemas$FeeRefund.out),
        z.lazy(() => Schemas$IssuingAuthorization.out),
        z.lazy(() => Schemas$IssuingDispute.out),
        z.lazy(() => Schemas$IssuingTransaction.out),
        z.lazy(() => Schemas$Payout.out),
        z.lazy(() => Schemas$Refund.out),
        Schemas$ReserveTransaction.out,
        Schemas$TaxDeductedAtSource.out,
        z.lazy(() => Schemas$Topup.out),
        z.lazy(() => Schemas$Transfer.out),
        z.lazy(() => Schemas$TransferReversal.out),
      ])
      .optional(),
    status: z.string(),
    type: z.enum([
      "adjustment",
      "advance",
      "advance_funding",
      "anticipation_repayment",
      "application_fee",
      "application_fee_refund",
      "charge",
      "climate_order_purchase",
      "climate_order_refund",
      "connect_collection_transfer",
      "contribution",
      "issuing_authorization_hold",
      "issuing_authorization_release",
      "issuing_dispute",
      "issuing_transaction",
      "obligation_outbound",
      "obligation_reversal_inbound",
      "payment",
      "payment_failure_refund",
      "payment_network_reserve_hold",
      "payment_network_reserve_release",
      "payment_refund",
      "payment_reversal",
      "payment_unreconciled",
      "payout",
      "payout_cancel",
      "payout_failure",
      "payout_minimum_balance_hold",
      "payout_minimum_balance_release",
      "refund",
      "refund_failure",
      "reserve_transaction",
      "reserved_funds",
      "stripe_balance_payment_debit",
      "stripe_balance_payment_debit_reversal",
      "stripe_fee",
      "stripe_fx_fee",
      "tax_fee",
      "topup",
      "topup_reversal",
      "transfer",
      "transfer_cancel",
      "transfer_failure",
      "transfer_refund",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      availableOn: "available_on",
      created: "created",
      currency: "currency",
      description: "description",
      exchangeRate: "exchange_rate",
      fee: "fee",
      feeDetails: "fee_details",
      id: "id",
      net: "net",
      object: "object",
      reportingCategory: "reporting_category",
      source: "source",
      status: "status",
      type: "type",
    });
  });

export const Schemas$BalanceTransaction = {
  in: SchemaIn$BalanceTransaction,
  out: SchemaOut$BalanceTransaction,
};
