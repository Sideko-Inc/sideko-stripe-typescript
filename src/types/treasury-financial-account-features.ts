import {
  External$TreasuryFinancialAccountsResourceFinancialAddressesFeatures,
  Schemas$TreasuryFinancialAccountsResourceFinancialAddressesFeatures,
  TreasuryFinancialAccountsResourceFinancialAddressesFeatures,
} from "./treasury-financial-accounts-resource-financial-addresses-features";
import {
  External$TreasuryFinancialAccountsResourceInboundTransfers,
  Schemas$TreasuryFinancialAccountsResourceInboundTransfers,
  TreasuryFinancialAccountsResourceInboundTransfers,
} from "./treasury-financial-accounts-resource-inbound-transfers";
import {
  External$TreasuryFinancialAccountsResourceOutboundPayments,
  Schemas$TreasuryFinancialAccountsResourceOutboundPayments,
  TreasuryFinancialAccountsResourceOutboundPayments,
} from "./treasury-financial-accounts-resource-outbound-payments";
import {
  External$TreasuryFinancialAccountsResourceOutboundTransfers,
  Schemas$TreasuryFinancialAccountsResourceOutboundTransfers,
  TreasuryFinancialAccountsResourceOutboundTransfers,
} from "./treasury-financial-accounts-resource-outbound-transfers";
import {
  External$TreasuryFinancialAccountsResourceToggleSettings,
  Schemas$TreasuryFinancialAccountsResourceToggleSettings,
  TreasuryFinancialAccountsResourceToggleSettings,
} from "./treasury-financial-accounts-resource-toggle-settings";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Encodes whether a FinancialAccount has access to a particular Feature, with a `status` enum and associated `status_details`.
 * Stripe or the platform can control Features via the requested field.
 */
export type TreasuryFinancialAccountFeatures = {
  /**
   * Toggle settings for enabling/disabling a feature
   */
  cardIssuing?: TreasuryFinancialAccountsResourceToggleSettings | undefined;
  /**
   * Toggle settings for enabling/disabling a feature
   */
  depositInsurance?:
    | TreasuryFinancialAccountsResourceToggleSettings
    | undefined;
  /**
   * Settings related to Financial Addresses features on a Financial Account
   */
  financialAddresses?:
    | TreasuryFinancialAccountsResourceFinancialAddressesFeatures
    | undefined;
  /**
   * InboundTransfers contains inbound transfers features for a FinancialAccount.
   */
  inboundTransfers?:
    | TreasuryFinancialAccountsResourceInboundTransfers
    | undefined;
  /**
   * Toggle settings for enabling/disabling a feature
   */
  intraStripeFlows?:
    | TreasuryFinancialAccountsResourceToggleSettings
    | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "treasury.financial_account_features";
  /**
   * Settings related to Outbound Payments features on a Financial Account
   */
  outboundPayments?:
    | TreasuryFinancialAccountsResourceOutboundPayments
    | undefined;
  /**
   * OutboundTransfers contains outbound transfers features for a FinancialAccount.
   */
  outboundTransfers?:
    | TreasuryFinancialAccountsResourceOutboundTransfers
    | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountFeatures without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountFeatures = {
  card_issuing?:
    | External$TreasuryFinancialAccountsResourceToggleSettings
    | undefined;
  deposit_insurance?:
    | External$TreasuryFinancialAccountsResourceToggleSettings
    | undefined;
  financial_addresses?:
    | External$TreasuryFinancialAccountsResourceFinancialAddressesFeatures
    | undefined;
  inbound_transfers?:
    | External$TreasuryFinancialAccountsResourceInboundTransfers
    | undefined;
  intra_stripe_flows?:
    | External$TreasuryFinancialAccountsResourceToggleSettings
    | undefined;
  object: "treasury.financial_account_features";
  outbound_payments?:
    | External$TreasuryFinancialAccountsResourceOutboundPayments
    | undefined;
  outbound_transfers?:
    | External$TreasuryFinancialAccountsResourceOutboundTransfers
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountFeatures
 */
const SchemaIn$TreasuryFinancialAccountFeatures: z.ZodType<
  TreasuryFinancialAccountFeatures, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    card_issuing:
      Schemas$TreasuryFinancialAccountsResourceToggleSettings.in.optional(),
    deposit_insurance:
      Schemas$TreasuryFinancialAccountsResourceToggleSettings.in.optional(),
    financial_addresses:
      Schemas$TreasuryFinancialAccountsResourceFinancialAddressesFeatures.in.optional(),
    inbound_transfers:
      Schemas$TreasuryFinancialAccountsResourceInboundTransfers.in.optional(),
    intra_stripe_flows:
      Schemas$TreasuryFinancialAccountsResourceToggleSettings.in.optional(),
    object: z.enum(["treasury.financial_account_features"]),
    outbound_payments:
      Schemas$TreasuryFinancialAccountsResourceOutboundPayments.in.optional(),
    outbound_transfers:
      Schemas$TreasuryFinancialAccountsResourceOutboundTransfers.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card_issuing: "cardIssuing",
      deposit_insurance: "depositInsurance",
      financial_addresses: "financialAddresses",
      inbound_transfers: "inboundTransfers",
      intra_stripe_flows: "intraStripeFlows",
      object: "object",
      outbound_payments: "outboundPayments",
      outbound_transfers: "outboundTransfers",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountFeatures
 */
const SchemaOut$TreasuryFinancialAccountFeatures: z.ZodType<
  External$TreasuryFinancialAccountFeatures, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountFeatures // the object to be transformed
> = z
  .object({
    cardIssuing:
      Schemas$TreasuryFinancialAccountsResourceToggleSettings.out.optional(),
    depositInsurance:
      Schemas$TreasuryFinancialAccountsResourceToggleSettings.out.optional(),
    financialAddresses:
      Schemas$TreasuryFinancialAccountsResourceFinancialAddressesFeatures.out.optional(),
    inboundTransfers:
      Schemas$TreasuryFinancialAccountsResourceInboundTransfers.out.optional(),
    intraStripeFlows:
      Schemas$TreasuryFinancialAccountsResourceToggleSettings.out.optional(),
    object: z.enum(["treasury.financial_account_features"]),
    outboundPayments:
      Schemas$TreasuryFinancialAccountsResourceOutboundPayments.out.optional(),
    outboundTransfers:
      Schemas$TreasuryFinancialAccountsResourceOutboundTransfers.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cardIssuing: "card_issuing",
      depositInsurance: "deposit_insurance",
      financialAddresses: "financial_addresses",
      inboundTransfers: "inbound_transfers",
      intraStripeFlows: "intra_stripe_flows",
      object: "object",
      outboundPayments: "outbound_payments",
      outboundTransfers: "outbound_transfers",
    });
  });

export const Schemas$TreasuryFinancialAccountFeatures = {
  in: SchemaIn$TreasuryFinancialAccountFeatures,
  out: SchemaOut$TreasuryFinancialAccountFeatures,
};
