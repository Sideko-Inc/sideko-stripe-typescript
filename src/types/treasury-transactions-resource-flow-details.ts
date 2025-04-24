import {
  External$IssuingAuthorization,
  IssuingAuthorization,
  Schemas$IssuingAuthorization,
} from "./issuing-authorization";
import {
  External$TreasuryCreditReversal,
  Schemas$TreasuryCreditReversal,
  TreasuryCreditReversal,
} from "./treasury-credit-reversal";
import {
  External$TreasuryDebitReversal,
  Schemas$TreasuryDebitReversal,
  TreasuryDebitReversal,
} from "./treasury-debit-reversal";
import {
  External$TreasuryInboundTransfer,
  Schemas$TreasuryInboundTransfer,
  TreasuryInboundTransfer,
} from "./treasury-inbound-transfer";
import {
  External$TreasuryOutboundPayment,
  Schemas$TreasuryOutboundPayment,
  TreasuryOutboundPayment,
} from "./treasury-outbound-payment";
import {
  External$TreasuryOutboundTransfer,
  Schemas$TreasuryOutboundTransfer,
  TreasuryOutboundTransfer,
} from "./treasury-outbound-transfer";
import {
  External$TreasuryReceivedCredit,
  Schemas$TreasuryReceivedCredit,
  TreasuryReceivedCredit,
} from "./treasury-received-credit";
import {
  External$TreasuryReceivedDebit,
  Schemas$TreasuryReceivedDebit,
  TreasuryReceivedDebit,
} from "./treasury-received-debit";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TreasuryTransactionsResourceFlowDetails = {
  /**
   * You can reverse some [ReceivedCredits](https://stripe.com/docs/api#received_credits) depending on their network and source flow. Reversing a ReceivedCredit leads to the creation of a new object known as a CreditReversal.
   */
  creditReversal?: TreasuryCreditReversal | undefined;
  /**
   * You can reverse some [ReceivedDebits](https://stripe.com/docs/api#received_debits) depending on their network and source flow. Reversing a ReceivedDebit leads to the creation of a new object known as a DebitReversal.
   */
  debitReversal?: TreasuryDebitReversal | undefined;
  /**
   * Use [InboundTransfers](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/into/inbound-transfers) to add funds to your [FinancialAccount](https://stripe.com/docs/api#financial_accounts) via a PaymentMethod that is owned by you. The funds will be transferred via an ACH debit.
   *
   * Related guide: [Moving money with Treasury using InboundTransfer objects](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/into/inbound-transfers)
   */
  inboundTransfer?: TreasuryInboundTransfer | undefined;
  /**
   * When an [issued card](https://stripe.com/docs/issuing) is used to make a purchase, an Issuing `Authorization`
   * object is created. [Authorizations](https://stripe.com/docs/issuing/purchases/authorizations) must be approved for the
   * purchase to be completed successfully.
   *
   * Related guide: [Issued card authorizations](https://stripe.com/docs/issuing/purchases/authorizations)
   */
  issuingAuthorization?: IssuingAuthorization | undefined;
  /**
   * Use [OutboundPayments](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-payments) to send funds to another party's external bank account or [FinancialAccount](https://stripe.com/docs/api#financial_accounts). To send money to an account belonging to the same user, use an [OutboundTransfer](https://stripe.com/docs/api#outbound_transfers).
   *
   * Simulate OutboundPayment state changes with the `/v1/test_helpers/treasury/outbound_payments` endpoints. These methods can only be called on test mode objects.
   *
   * Related guide: [Moving money with Treasury using OutboundPayment objects](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-payments)
   */
  outboundPayment?: TreasuryOutboundPayment | undefined;
  /**
   * Use [OutboundTransfers](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-transfers) to transfer funds from a [FinancialAccount](https://stripe.com/docs/api#financial_accounts) to a PaymentMethod belonging to the same entity. To send funds to a different party, use [OutboundPayments](https://stripe.com/docs/api#outbound_payments) instead. You can send funds over ACH rails or through a domestic wire transfer to a user's own external bank account.
   *
   * Simulate OutboundTransfer state changes with the `/v1/test_helpers/treasury/outbound_transfers` endpoints. These methods can only be called on test mode objects.
   *
   * Related guide: [Moving money with Treasury using OutboundTransfer objects](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-transfers)
   */
  outboundTransfer?: TreasuryOutboundTransfer | undefined;
  /**
   * ReceivedCredits represent funds sent to a [FinancialAccount](https://stripe.com/docs/api#financial_accounts) (for example, via ACH or wire). These money movements are not initiated from the FinancialAccount.
   */
  receivedCredit?: TreasuryReceivedCredit | undefined;
  /**
   * ReceivedDebits represent funds pulled from a [FinancialAccount](https://stripe.com/docs/api#financial_accounts). These are not initiated from the FinancialAccount.
   */
  receivedDebit?: TreasuryReceivedDebit | undefined;
  /**
   * Type of the flow that created the Transaction. Set to the same value as `flow_type`.
   */
  type:
    | "credit_reversal"
    | "debit_reversal"
    | "inbound_transfer"
    | "issuing_authorization"
    | "other"
    | "outbound_payment"
    | "outbound_transfer"
    | "received_credit"
    | "received_debit";
};

/**
 * @internal
 * TreasuryTransactionsResourceFlowDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryTransactionsResourceFlowDetails = {
  credit_reversal?: External$TreasuryCreditReversal | undefined;
  debit_reversal?: External$TreasuryDebitReversal | undefined;
  inbound_transfer?: External$TreasuryInboundTransfer | undefined;
  issuing_authorization?: External$IssuingAuthorization | undefined;
  outbound_payment?: External$TreasuryOutboundPayment | undefined;
  outbound_transfer?: External$TreasuryOutboundTransfer | undefined;
  received_credit?: External$TreasuryReceivedCredit | undefined;
  received_debit?: External$TreasuryReceivedDebit | undefined;
  type:
    | "credit_reversal"
    | "debit_reversal"
    | "inbound_transfer"
    | "issuing_authorization"
    | "other"
    | "outbound_payment"
    | "outbound_transfer"
    | "received_credit"
    | "received_debit";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryTransactionsResourceFlowDetails
 */
const SchemaIn$TreasuryTransactionsResourceFlowDetails: z.ZodType<
  TreasuryTransactionsResourceFlowDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    credit_reversal: z.lazy(() => Schemas$TreasuryCreditReversal.in.optional()),
    debit_reversal: z.lazy(() => Schemas$TreasuryDebitReversal.in.optional()),
    inbound_transfer: z.lazy(() =>
      Schemas$TreasuryInboundTransfer.in.optional(),
    ),
    issuing_authorization: z.lazy(() =>
      Schemas$IssuingAuthorization.in.optional(),
    ),
    outbound_payment: z.lazy(() =>
      Schemas$TreasuryOutboundPayment.in.optional(),
    ),
    outbound_transfer: z.lazy(() =>
      Schemas$TreasuryOutboundTransfer.in.optional(),
    ),
    received_credit: z.lazy(() => Schemas$TreasuryReceivedCredit.in.optional()),
    received_debit: z.lazy(() => Schemas$TreasuryReceivedDebit.in.optional()),
    type: z.enum([
      "credit_reversal",
      "debit_reversal",
      "inbound_transfer",
      "issuing_authorization",
      "other",
      "outbound_payment",
      "outbound_transfer",
      "received_credit",
      "received_debit",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      credit_reversal: "creditReversal",
      debit_reversal: "debitReversal",
      inbound_transfer: "inboundTransfer",
      issuing_authorization: "issuingAuthorization",
      outbound_payment: "outboundPayment",
      outbound_transfer: "outboundTransfer",
      received_credit: "receivedCredit",
      received_debit: "receivedDebit",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryTransactionsResourceFlowDetails
 */
const SchemaOut$TreasuryTransactionsResourceFlowDetails: z.ZodType<
  External$TreasuryTransactionsResourceFlowDetails, // output type of this zod object
  z.ZodTypeDef,
  TreasuryTransactionsResourceFlowDetails // the object to be transformed
> = z
  .object({
    creditReversal: z.lazy(() => Schemas$TreasuryCreditReversal.out.optional()),
    debitReversal: z.lazy(() => Schemas$TreasuryDebitReversal.out.optional()),
    inboundTransfer: z.lazy(() =>
      Schemas$TreasuryInboundTransfer.out.optional(),
    ),
    issuingAuthorization: z.lazy(() =>
      Schemas$IssuingAuthorization.out.optional(),
    ),
    outboundPayment: z.lazy(() =>
      Schemas$TreasuryOutboundPayment.out.optional(),
    ),
    outboundTransfer: z.lazy(() =>
      Schemas$TreasuryOutboundTransfer.out.optional(),
    ),
    receivedCredit: z.lazy(() => Schemas$TreasuryReceivedCredit.out.optional()),
    receivedDebit: z.lazy(() => Schemas$TreasuryReceivedDebit.out.optional()),
    type: z.enum([
      "credit_reversal",
      "debit_reversal",
      "inbound_transfer",
      "issuing_authorization",
      "other",
      "outbound_payment",
      "outbound_transfer",
      "received_credit",
      "received_debit",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      creditReversal: "credit_reversal",
      debitReversal: "debit_reversal",
      inboundTransfer: "inbound_transfer",
      issuingAuthorization: "issuing_authorization",
      outboundPayment: "outbound_payment",
      outboundTransfer: "outbound_transfer",
      receivedCredit: "received_credit",
      receivedDebit: "received_debit",
      type: "type",
    });
  });

export const Schemas$TreasuryTransactionsResourceFlowDetails = {
  in: SchemaIn$TreasuryTransactionsResourceFlowDetails,
  out: SchemaOut$TreasuryTransactionsResourceFlowDetails,
};
