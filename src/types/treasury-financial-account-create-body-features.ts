import {
  External$TreasuryFinancialAccountCreateBodyFeaturesCardIssuing,
  Schemas$TreasuryFinancialAccountCreateBodyFeaturesCardIssuing,
  TreasuryFinancialAccountCreateBodyFeaturesCardIssuing,
} from "./treasury-financial-account-create-body-features-card-issuing";
import {
  External$TreasuryFinancialAccountCreateBodyFeaturesDepositInsurance,
  Schemas$TreasuryFinancialAccountCreateBodyFeaturesDepositInsurance,
  TreasuryFinancialAccountCreateBodyFeaturesDepositInsurance,
} from "./treasury-financial-account-create-body-features-deposit-insurance";
import {
  External$TreasuryFinancialAccountCreateBodyFeaturesFinancialAddresses,
  Schemas$TreasuryFinancialAccountCreateBodyFeaturesFinancialAddresses,
  TreasuryFinancialAccountCreateBodyFeaturesFinancialAddresses,
} from "./treasury-financial-account-create-body-features-financial-addresses";
import {
  External$TreasuryFinancialAccountCreateBodyFeaturesInboundTransfers,
  Schemas$TreasuryFinancialAccountCreateBodyFeaturesInboundTransfers,
  TreasuryFinancialAccountCreateBodyFeaturesInboundTransfers,
} from "./treasury-financial-account-create-body-features-inbound-transfers";
import {
  External$TreasuryFinancialAccountCreateBodyFeaturesIntraStripeFlows,
  Schemas$TreasuryFinancialAccountCreateBodyFeaturesIntraStripeFlows,
  TreasuryFinancialAccountCreateBodyFeaturesIntraStripeFlows,
} from "./treasury-financial-account-create-body-features-intra-stripe-flows";
import {
  External$TreasuryFinancialAccountCreateBodyFeaturesOutboundPayments,
  Schemas$TreasuryFinancialAccountCreateBodyFeaturesOutboundPayments,
  TreasuryFinancialAccountCreateBodyFeaturesOutboundPayments,
} from "./treasury-financial-account-create-body-features-outbound-payments";
import {
  External$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfers,
  Schemas$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfers,
  TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfers,
} from "./treasury-financial-account-create-body-features-outbound-transfers";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Encodes whether a FinancialAccount has access to a particular feature. Stripe or the platform can control features via the requested field.
 */
export type TreasuryFinancialAccountCreateBodyFeatures = {
  cardIssuing?:
    | TreasuryFinancialAccountCreateBodyFeaturesCardIssuing
    | undefined;
  depositInsurance?:
    | TreasuryFinancialAccountCreateBodyFeaturesDepositInsurance
    | undefined;
  financialAddresses?:
    | TreasuryFinancialAccountCreateBodyFeaturesFinancialAddresses
    | undefined;
  inboundTransfers?:
    | TreasuryFinancialAccountCreateBodyFeaturesInboundTransfers
    | undefined;
  intraStripeFlows?:
    | TreasuryFinancialAccountCreateBodyFeaturesIntraStripeFlows
    | undefined;
  outboundPayments?:
    | TreasuryFinancialAccountCreateBodyFeaturesOutboundPayments
    | undefined;
  outboundTransfers?:
    | TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfers
    | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountCreateBodyFeatures without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountCreateBodyFeatures = {
  card_issuing?:
    | External$TreasuryFinancialAccountCreateBodyFeaturesCardIssuing
    | undefined;
  deposit_insurance?:
    | External$TreasuryFinancialAccountCreateBodyFeaturesDepositInsurance
    | undefined;
  financial_addresses?:
    | External$TreasuryFinancialAccountCreateBodyFeaturesFinancialAddresses
    | undefined;
  inbound_transfers?:
    | External$TreasuryFinancialAccountCreateBodyFeaturesInboundTransfers
    | undefined;
  intra_stripe_flows?:
    | External$TreasuryFinancialAccountCreateBodyFeaturesIntraStripeFlows
    | undefined;
  outbound_payments?:
    | External$TreasuryFinancialAccountCreateBodyFeaturesOutboundPayments
    | undefined;
  outbound_transfers?:
    | External$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfers
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountCreateBodyFeatures
 */
const SchemaIn$TreasuryFinancialAccountCreateBodyFeatures: z.ZodType<
  TreasuryFinancialAccountCreateBodyFeatures, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    card_issuing:
      Schemas$TreasuryFinancialAccountCreateBodyFeaturesCardIssuing.in.optional(),
    deposit_insurance:
      Schemas$TreasuryFinancialAccountCreateBodyFeaturesDepositInsurance.in.optional(),
    financial_addresses:
      Schemas$TreasuryFinancialAccountCreateBodyFeaturesFinancialAddresses.in.optional(),
    inbound_transfers:
      Schemas$TreasuryFinancialAccountCreateBodyFeaturesInboundTransfers.in.optional(),
    intra_stripe_flows:
      Schemas$TreasuryFinancialAccountCreateBodyFeaturesIntraStripeFlows.in.optional(),
    outbound_payments:
      Schemas$TreasuryFinancialAccountCreateBodyFeaturesOutboundPayments.in.optional(),
    outbound_transfers:
      Schemas$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfers.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card_issuing: "cardIssuing",
      deposit_insurance: "depositInsurance",
      financial_addresses: "financialAddresses",
      inbound_transfers: "inboundTransfers",
      intra_stripe_flows: "intraStripeFlows",
      outbound_payments: "outboundPayments",
      outbound_transfers: "outboundTransfers",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountCreateBodyFeatures
 */
const SchemaOut$TreasuryFinancialAccountCreateBodyFeatures: z.ZodType<
  External$TreasuryFinancialAccountCreateBodyFeatures, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountCreateBodyFeatures // the object to be transformed
> = z
  .object({
    cardIssuing:
      Schemas$TreasuryFinancialAccountCreateBodyFeaturesCardIssuing.out.optional(),
    depositInsurance:
      Schemas$TreasuryFinancialAccountCreateBodyFeaturesDepositInsurance.out.optional(),
    financialAddresses:
      Schemas$TreasuryFinancialAccountCreateBodyFeaturesFinancialAddresses.out.optional(),
    inboundTransfers:
      Schemas$TreasuryFinancialAccountCreateBodyFeaturesInboundTransfers.out.optional(),
    intraStripeFlows:
      Schemas$TreasuryFinancialAccountCreateBodyFeaturesIntraStripeFlows.out.optional(),
    outboundPayments:
      Schemas$TreasuryFinancialAccountCreateBodyFeaturesOutboundPayments.out.optional(),
    outboundTransfers:
      Schemas$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfers.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cardIssuing: "card_issuing",
      depositInsurance: "deposit_insurance",
      financialAddresses: "financial_addresses",
      inboundTransfers: "inbound_transfers",
      intraStripeFlows: "intra_stripe_flows",
      outboundPayments: "outbound_payments",
      outboundTransfers: "outbound_transfers",
    });
  });

export const Schemas$TreasuryFinancialAccountCreateBodyFeatures = {
  in: SchemaIn$TreasuryFinancialAccountCreateBodyFeatures,
  out: SchemaOut$TreasuryFinancialAccountCreateBodyFeatures,
};
