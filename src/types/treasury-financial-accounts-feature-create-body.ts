import {
  External$TreasuryFinancialAccountsFeatureCreateBodyCardIssuing,
  Schemas$TreasuryFinancialAccountsFeatureCreateBodyCardIssuing,
  TreasuryFinancialAccountsFeatureCreateBodyCardIssuing,
} from "./treasury-financial-accounts-feature-create-body-card-issuing";
import {
  External$TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance,
  Schemas$TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance,
  TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance,
} from "./treasury-financial-accounts-feature-create-body-deposit-insurance";
import {
  External$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses,
  Schemas$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses,
  TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses,
} from "./treasury-financial-accounts-feature-create-body-financial-addresses";
import {
  External$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers,
  Schemas$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers,
  TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers,
} from "./treasury-financial-accounts-feature-create-body-inbound-transfers";
import {
  External$TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows,
  Schemas$TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows,
  TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows,
} from "./treasury-financial-accounts-feature-create-body-intra-stripe-flows";
import {
  External$TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments,
  Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments,
  TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments,
} from "./treasury-financial-accounts-feature-create-body-outbound-payments";
import {
  External$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers,
  Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers,
  TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers,
} from "./treasury-financial-accounts-feature-create-body-outbound-transfers";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountsFeatureCreateBody
 */
export type TreasuryFinancialAccountsFeatureCreateBody = {
  /**
   * Encodes the FinancialAccount's ability to be used with the Issuing product, including attaching cards to and drawing funds from the FinancialAccount.
   */
  cardIssuing?:
    | TreasuryFinancialAccountsFeatureCreateBodyCardIssuing
    | undefined;
  /**
   * Represents whether this FinancialAccount is eligible for deposit insurance. Various factors determine the insurance amount.
   */
  depositInsurance?:
    | TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance
    | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Contains Features that add FinancialAddresses to the FinancialAccount.
   */
  financialAddresses?:
    | TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses
    | undefined;
  /**
   * Contains settings related to adding funds to a FinancialAccount from another Account with the same owner.
   */
  inboundTransfers?:
    | TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers
    | undefined;
  /**
   * Represents the ability for the FinancialAccount to send money to, or receive money from other FinancialAccounts (for example, via OutboundPayment).
   */
  intraStripeFlows?:
    | TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows
    | undefined;
  /**
   * Includes Features related to initiating money movement out of the FinancialAccount to someone else's bucket of money.
   */
  outboundPayments?:
    | TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments
    | undefined;
  /**
   * Contains a Feature and settings related to moving money out of the FinancialAccount into another Account with the same owner.
   */
  outboundTransfers?:
    | TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers
    | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (TreasuryFinancialAccountsFeatureCreateBodyCardIssuing | undefined)
    | (TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance | undefined)
    | (string[] | undefined)
    | (TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses | undefined)
    | (TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers | undefined)
    | (TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows | undefined)
    | (TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments | undefined)
    | (TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountsFeatureCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsFeatureCreateBody = {
  card_issuing?:
    | External$TreasuryFinancialAccountsFeatureCreateBodyCardIssuing
    | undefined;
  deposit_insurance?:
    | External$TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance
    | undefined;
  expand?: string[] | undefined;
  financial_addresses?:
    | External$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses
    | undefined;
  inbound_transfers?:
    | External$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers
    | undefined;
  intra_stripe_flows?:
    | External$TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows
    | undefined;
  outbound_payments?:
    | External$TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments
    | undefined;
  outbound_transfers?:
    | External$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers
    | undefined;

  [additionalProperty: string]:
    | (
        | External$TreasuryFinancialAccountsFeatureCreateBodyCardIssuing
        | undefined
      )
    | (
        | External$TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance
        | undefined
      )
    | (string[] | undefined)
    | (
        | External$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses
        | undefined
      )
    | (
        | External$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers
        | undefined
      )
    | (
        | External$TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows
        | undefined
      )
    | (
        | External$TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments
        | undefined
      )
    | (
        | External$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers
        | undefined
      )
    | External$TreasuryFinancialAccountsFeatureCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsFeatureCreateBody
 */
const SchemaIn$TreasuryFinancialAccountsFeatureCreateBody: z.ZodType<
  TreasuryFinancialAccountsFeatureCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    card_issuing:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyCardIssuing.in.optional(),
    deposit_insurance:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance.in.optional(),
    expand: z.array(z.string()).optional(),
    financial_addresses:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses.in.optional(),
    inbound_transfers:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers.in.optional(),
    intra_stripe_flows:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows.in.optional(),
    outbound_payments:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments.in.optional(),
    outbound_transfers:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      card_issuing: "cardIssuing",
      deposit_insurance: "depositInsurance",
      expand: "expand",
      financial_addresses: "financialAddresses",
      inbound_transfers: "inboundTransfers",
      intra_stripe_flows: "intraStripeFlows",
      outbound_payments: "outboundPayments",
      outbound_transfers: "outboundTransfers",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsFeatureCreateBody
 */
const SchemaOut$TreasuryFinancialAccountsFeatureCreateBody: z.ZodType<
  External$TreasuryFinancialAccountsFeatureCreateBody, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsFeatureCreateBody // the object to be transformed
> = z
  .object({
    cardIssuing:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyCardIssuing.out.optional(),
    depositInsurance:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance.out.optional(),
    expand: z.array(z.string()).optional(),
    financialAddresses:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses.out.optional(),
    inboundTransfers:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers.out.optional(),
    intraStripeFlows:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows.out.optional(),
    outboundPayments:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundPayments.out.optional(),
    outboundTransfers:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      cardIssuing: "card_issuing",
      depositInsurance: "deposit_insurance",
      expand: "expand",
      financialAddresses: "financial_addresses",
      inboundTransfers: "inbound_transfers",
      intraStripeFlows: "intra_stripe_flows",
      outboundPayments: "outbound_payments",
      outboundTransfers: "outbound_transfers",
    });
  });

export const Schemas$TreasuryFinancialAccountsFeatureCreateBody = {
  in: SchemaIn$TreasuryFinancialAccountsFeatureCreateBody,
  out: SchemaOut$TreasuryFinancialAccountsFeatureCreateBody,
};
