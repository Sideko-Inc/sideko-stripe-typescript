import {
  External$TreasuryFinancialAccountUpdateBodyFeaturesCardIssuing,
  Schemas$TreasuryFinancialAccountUpdateBodyFeaturesCardIssuing,
  TreasuryFinancialAccountUpdateBodyFeaturesCardIssuing,
} from "./treasury-financial-account-update-body-features-card-issuing";
import {
  External$TreasuryFinancialAccountUpdateBodyFeaturesDepositInsurance,
  Schemas$TreasuryFinancialAccountUpdateBodyFeaturesDepositInsurance,
  TreasuryFinancialAccountUpdateBodyFeaturesDepositInsurance,
} from "./treasury-financial-account-update-body-features-deposit-insurance";
import {
  External$TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddresses,
  Schemas$TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddresses,
  TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddresses,
} from "./treasury-financial-account-update-body-features-financial-addresses";
import {
  External$TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfers,
  Schemas$TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfers,
  TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfers,
} from "./treasury-financial-account-update-body-features-inbound-transfers";
import {
  External$TreasuryFinancialAccountUpdateBodyFeaturesIntraStripeFlows,
  Schemas$TreasuryFinancialAccountUpdateBodyFeaturesIntraStripeFlows,
  TreasuryFinancialAccountUpdateBodyFeaturesIntraStripeFlows,
} from "./treasury-financial-account-update-body-features-intra-stripe-flows";
import {
  External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPayments,
  Schemas$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPayments,
  TreasuryFinancialAccountUpdateBodyFeaturesOutboundPayments,
} from "./treasury-financial-account-update-body-features-outbound-payments";
import {
  External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfers,
  Schemas$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfers,
  TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfers,
} from "./treasury-financial-account-update-body-features-outbound-transfers";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Encodes whether a FinancialAccount has access to a particular feature, with a status enum and associated `status_details`. Stripe or the platform may control features via the requested field.
 */
export type TreasuryFinancialAccountUpdateBodyFeatures = {
  cardIssuing?:
    | TreasuryFinancialAccountUpdateBodyFeaturesCardIssuing
    | undefined;
  depositInsurance?:
    | TreasuryFinancialAccountUpdateBodyFeaturesDepositInsurance
    | undefined;
  financialAddresses?:
    | TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddresses
    | undefined;
  inboundTransfers?:
    | TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfers
    | undefined;
  intraStripeFlows?:
    | TreasuryFinancialAccountUpdateBodyFeaturesIntraStripeFlows
    | undefined;
  outboundPayments?:
    | TreasuryFinancialAccountUpdateBodyFeaturesOutboundPayments
    | undefined;
  outboundTransfers?:
    | TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfers
    | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountUpdateBodyFeatures without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountUpdateBodyFeatures = {
  card_issuing?:
    | External$TreasuryFinancialAccountUpdateBodyFeaturesCardIssuing
    | undefined;
  deposit_insurance?:
    | External$TreasuryFinancialAccountUpdateBodyFeaturesDepositInsurance
    | undefined;
  financial_addresses?:
    | External$TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddresses
    | undefined;
  inbound_transfers?:
    | External$TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfers
    | undefined;
  intra_stripe_flows?:
    | External$TreasuryFinancialAccountUpdateBodyFeaturesIntraStripeFlows
    | undefined;
  outbound_payments?:
    | External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPayments
    | undefined;
  outbound_transfers?:
    | External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfers
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountUpdateBodyFeatures
 */
const SchemaIn$TreasuryFinancialAccountUpdateBodyFeatures: z.ZodType<
  TreasuryFinancialAccountUpdateBodyFeatures, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    card_issuing:
      Schemas$TreasuryFinancialAccountUpdateBodyFeaturesCardIssuing.in.optional(),
    deposit_insurance:
      Schemas$TreasuryFinancialAccountUpdateBodyFeaturesDepositInsurance.in.optional(),
    financial_addresses:
      Schemas$TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddresses.in.optional(),
    inbound_transfers:
      Schemas$TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfers.in.optional(),
    intra_stripe_flows:
      Schemas$TreasuryFinancialAccountUpdateBodyFeaturesIntraStripeFlows.in.optional(),
    outbound_payments:
      Schemas$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPayments.in.optional(),
    outbound_transfers:
      Schemas$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfers.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountUpdateBodyFeatures
 */
const SchemaOut$TreasuryFinancialAccountUpdateBodyFeatures: z.ZodType<
  External$TreasuryFinancialAccountUpdateBodyFeatures, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountUpdateBodyFeatures // the object to be transformed
> = z
  .object({
    cardIssuing:
      Schemas$TreasuryFinancialAccountUpdateBodyFeaturesCardIssuing.out.optional(),
    depositInsurance:
      Schemas$TreasuryFinancialAccountUpdateBodyFeaturesDepositInsurance.out.optional(),
    financialAddresses:
      Schemas$TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddresses.out.optional(),
    inboundTransfers:
      Schemas$TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfers.out.optional(),
    intraStripeFlows:
      Schemas$TreasuryFinancialAccountUpdateBodyFeaturesIntraStripeFlows.out.optional(),
    outboundPayments:
      Schemas$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPayments.out.optional(),
    outboundTransfers:
      Schemas$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfers.out.optional(),
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

export const Schemas$TreasuryFinancialAccountUpdateBodyFeatures = {
  in: SchemaIn$TreasuryFinancialAccountUpdateBodyFeatures,
  out: SchemaOut$TreasuryFinancialAccountUpdateBodyFeatures,
};
