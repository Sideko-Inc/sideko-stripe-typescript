import { External$Payout, Payout, Schemas$Payout } from "./payout";
import {
  External$TreasuryCreditReversal,
  Schemas$TreasuryCreditReversal,
  TreasuryCreditReversal,
} from "./treasury-credit-reversal";
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
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TreasuryReceivedCreditsResourceSourceFlowsDetails = {
  /**
   * You can reverse some [ReceivedCredits](https://stripe.com/docs/api#received_credits) depending on their network and source flow. Reversing a ReceivedCredit leads to the creation of a new object known as a CreditReversal.
   */
  creditReversal?: TreasuryCreditReversal | undefined;
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
   * A `Payout` object is created when you receive funds from Stripe, or when you
   * initiate a payout to either a bank account or debit card of a [connected
   * Stripe account](/docs/connect/bank-debit-card-payouts). You can retrieve individual payouts,
   * and list all payouts. Payouts are made on [varying
   * schedules](/docs/connect/manage-payout-schedule), depending on your country and
   * industry.
   *
   * Related guide: [Receiving payouts](https://stripe.com/docs/payouts)
   */
  payout?: Payout | undefined;
  /**
   * The type of the source flow that originated the ReceivedCredit.
   */
  type:
    | "credit_reversal"
    | "other"
    | "outbound_payment"
    | "outbound_transfer"
    | "payout";
};

/**
 * @internal
 * TreasuryReceivedCreditsResourceSourceFlowsDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryReceivedCreditsResourceSourceFlowsDetails = {
  credit_reversal?: External$TreasuryCreditReversal | undefined;
  outbound_payment?: External$TreasuryOutboundPayment | undefined;
  outbound_transfer?: External$TreasuryOutboundTransfer | undefined;
  payout?: External$Payout | undefined;
  type:
    | "credit_reversal"
    | "other"
    | "outbound_payment"
    | "outbound_transfer"
    | "payout";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryReceivedCreditsResourceSourceFlowsDetails
 */
const SchemaIn$TreasuryReceivedCreditsResourceSourceFlowsDetails: z.ZodType<
  TreasuryReceivedCreditsResourceSourceFlowsDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    credit_reversal: z.lazy(() => Schemas$TreasuryCreditReversal.in.optional()),
    outbound_payment: z.lazy(() =>
      Schemas$TreasuryOutboundPayment.in.optional(),
    ),
    outbound_transfer: z.lazy(() =>
      Schemas$TreasuryOutboundTransfer.in.optional(),
    ),
    payout: z.lazy(() => Schemas$Payout.in.optional()),
    type: z.enum([
      "credit_reversal",
      "other",
      "outbound_payment",
      "outbound_transfer",
      "payout",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      credit_reversal: "creditReversal",
      outbound_payment: "outboundPayment",
      outbound_transfer: "outboundTransfer",
      payout: "payout",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryReceivedCreditsResourceSourceFlowsDetails
 */
const SchemaOut$TreasuryReceivedCreditsResourceSourceFlowsDetails: z.ZodType<
  External$TreasuryReceivedCreditsResourceSourceFlowsDetails, // output type of this zod object
  z.ZodTypeDef,
  TreasuryReceivedCreditsResourceSourceFlowsDetails // the object to be transformed
> = z
  .object({
    creditReversal: z.lazy(() => Schemas$TreasuryCreditReversal.out.optional()),
    outboundPayment: z.lazy(() =>
      Schemas$TreasuryOutboundPayment.out.optional(),
    ),
    outboundTransfer: z.lazy(() =>
      Schemas$TreasuryOutboundTransfer.out.optional(),
    ),
    payout: z.lazy(() => Schemas$Payout.out.optional()),
    type: z.enum([
      "credit_reversal",
      "other",
      "outbound_payment",
      "outbound_transfer",
      "payout",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      creditReversal: "credit_reversal",
      outboundPayment: "outbound_payment",
      outboundTransfer: "outbound_transfer",
      payout: "payout",
      type: "type",
    });
  });

export const Schemas$TreasuryReceivedCreditsResourceSourceFlowsDetails = {
  in: SchemaIn$TreasuryReceivedCreditsResourceSourceFlowsDetails,
  out: SchemaOut$TreasuryReceivedCreditsResourceSourceFlowsDetails,
};
