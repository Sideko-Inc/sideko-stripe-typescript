import {
  External$TreasuryFinancialAccountFeatures,
  Schemas$TreasuryFinancialAccountFeatures,
  TreasuryFinancialAccountFeatures,
} from "./treasury-financial-account-features";
import {
  External$TreasuryFinancialAccountMetadata,
  Schemas$TreasuryFinancialAccountMetadata,
  TreasuryFinancialAccountMetadata,
} from "./treasury-financial-account-metadata";
import {
  External$TreasuryFinancialAccountsResourceBalance,
  Schemas$TreasuryFinancialAccountsResourceBalance,
  TreasuryFinancialAccountsResourceBalance,
} from "./treasury-financial-accounts-resource-balance";
import {
  External$TreasuryFinancialAccountsResourceFinancialAddress,
  Schemas$TreasuryFinancialAccountsResourceFinancialAddress,
  TreasuryFinancialAccountsResourceFinancialAddress,
} from "./treasury-financial-accounts-resource-financial-address";
import {
  External$TreasuryFinancialAccountsResourcePlatformRestrictions,
  Schemas$TreasuryFinancialAccountsResourcePlatformRestrictions,
  TreasuryFinancialAccountsResourcePlatformRestrictions,
} from "./treasury-financial-accounts-resource-platform-restrictions";
import {
  External$TreasuryFinancialAccountsResourceStatusDetails,
  Schemas$TreasuryFinancialAccountsResourceStatusDetails,
  TreasuryFinancialAccountsResourceStatusDetails,
} from "./treasury-financial-accounts-resource-status-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Stripe Treasury provides users with a container for money called a FinancialAccount that is separate from their Payments balance.
 * FinancialAccounts serve as the source and destination of Treasury’s money movement APIs.
 */
export type TreasuryFinancialAccount = {
  /**
   * The array of paths to active Features in the Features hash.
   */
  activeFeatures?:
    | (
        | "card_issuing"
        | "deposit_insurance"
        | "financial_addresses.aba"
        | "financial_addresses.aba.forwarding"
        | "inbound_transfers.ach"
        | "intra_stripe_flows"
        | "outbound_payments.ach"
        | "outbound_payments.us_domestic_wire"
        | "outbound_transfers.ach"
        | "outbound_transfers.us_domestic_wire"
        | "remote_deposit_capture"
      )[]
    | undefined;
  /**
   * Balance information for the FinancialAccount
   */
  balance: TreasuryFinancialAccountsResourceBalance;
  /**
   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
   */
  country: string;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Encodes whether a FinancialAccount has access to a particular Feature, with a `status` enum and associated `status_details`.
   * Stripe or the platform can control Features via the requested field.
   */
  features?: TreasuryFinancialAccountFeatures | undefined;
  /**
   * The set of credentials that resolve to a FinancialAccount.
   */
  financialAddresses: TreasuryFinancialAccountsResourceFinancialAddress[];
  /**
   * Unique identifier for the object.
   */
  id: string;
  isDefault?: boolean | undefined;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: TreasuryFinancialAccountMetadata | null | undefined;
  /**
   * The nickname for the FinancialAccount.
   */
  nickname?: string | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "treasury.financial_account";
  /**
   * The array of paths to pending Features in the Features hash.
   */
  pendingFeatures?:
    | (
        | "card_issuing"
        | "deposit_insurance"
        | "financial_addresses.aba"
        | "financial_addresses.aba.forwarding"
        | "inbound_transfers.ach"
        | "intra_stripe_flows"
        | "outbound_payments.ach"
        | "outbound_payments.us_domestic_wire"
        | "outbound_transfers.ach"
        | "outbound_transfers.us_domestic_wire"
        | "remote_deposit_capture"
      )[]
    | undefined;
  /**
   * Restrictions that a Connect Platform has placed on this FinancialAccount.
   */
  platformRestrictions?:
    | TreasuryFinancialAccountsResourcePlatformRestrictions
    | undefined;
  /**
   * The array of paths to restricted Features in the Features hash.
   */
  restrictedFeatures?:
    | (
        | "card_issuing"
        | "deposit_insurance"
        | "financial_addresses.aba"
        | "financial_addresses.aba.forwarding"
        | "inbound_transfers.ach"
        | "intra_stripe_flows"
        | "outbound_payments.ach"
        | "outbound_payments.us_domestic_wire"
        | "outbound_transfers.ach"
        | "outbound_transfers.us_domestic_wire"
        | "remote_deposit_capture"
      )[]
    | undefined;
  /**
   * Status of this FinancialAccount.
   */
  status: "closed" | "open";
  statusDetails: TreasuryFinancialAccountsResourceStatusDetails;
  /**
   * The currencies the FinancialAccount can hold a balance in. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.
   */
  supportedCurrencies: string[];
};

/**
 * @internal
 * TreasuryFinancialAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccount = {
  active_features?:
    | (
        | "card_issuing"
        | "deposit_insurance"
        | "financial_addresses.aba"
        | "financial_addresses.aba.forwarding"
        | "inbound_transfers.ach"
        | "intra_stripe_flows"
        | "outbound_payments.ach"
        | "outbound_payments.us_domestic_wire"
        | "outbound_transfers.ach"
        | "outbound_transfers.us_domestic_wire"
        | "remote_deposit_capture"
      )[]
    | undefined;
  balance: External$TreasuryFinancialAccountsResourceBalance;
  country: string;
  created: number;
  features?: External$TreasuryFinancialAccountFeatures | undefined;
  financial_addresses: External$TreasuryFinancialAccountsResourceFinancialAddress[];
  id: string;
  is_default?: boolean | undefined;
  livemode: boolean;
  metadata?: External$TreasuryFinancialAccountMetadata | null | undefined;
  nickname?: string | null | undefined;
  object: "treasury.financial_account";
  pending_features?:
    | (
        | "card_issuing"
        | "deposit_insurance"
        | "financial_addresses.aba"
        | "financial_addresses.aba.forwarding"
        | "inbound_transfers.ach"
        | "intra_stripe_flows"
        | "outbound_payments.ach"
        | "outbound_payments.us_domestic_wire"
        | "outbound_transfers.ach"
        | "outbound_transfers.us_domestic_wire"
        | "remote_deposit_capture"
      )[]
    | undefined;
  platform_restrictions?:
    | External$TreasuryFinancialAccountsResourcePlatformRestrictions
    | undefined;
  restricted_features?:
    | (
        | "card_issuing"
        | "deposit_insurance"
        | "financial_addresses.aba"
        | "financial_addresses.aba.forwarding"
        | "inbound_transfers.ach"
        | "intra_stripe_flows"
        | "outbound_payments.ach"
        | "outbound_payments.us_domestic_wire"
        | "outbound_transfers.ach"
        | "outbound_transfers.us_domestic_wire"
        | "remote_deposit_capture"
      )[]
    | undefined;
  status: "closed" | "open";
  status_details: External$TreasuryFinancialAccountsResourceStatusDetails;
  supported_currencies: string[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccount
 */
const SchemaIn$TreasuryFinancialAccount: z.ZodType<
  TreasuryFinancialAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active_features: z
      .array(
        z.enum([
          "card_issuing",
          "deposit_insurance",
          "financial_addresses.aba",
          "financial_addresses.aba.forwarding",
          "inbound_transfers.ach",
          "intra_stripe_flows",
          "outbound_payments.ach",
          "outbound_payments.us_domestic_wire",
          "outbound_transfers.ach",
          "outbound_transfers.us_domestic_wire",
          "remote_deposit_capture",
        ]),
      )
      .optional(),
    balance: Schemas$TreasuryFinancialAccountsResourceBalance.in,
    country: z.string(),
    created: z.number().int(),
    features: Schemas$TreasuryFinancialAccountFeatures.in.optional(),
    financial_addresses: z.array(
      Schemas$TreasuryFinancialAccountsResourceFinancialAddress.in,
    ),
    id: z.string(),
    is_default: z.boolean().optional(),
    livemode: z.boolean(),
    metadata: Schemas$TreasuryFinancialAccountMetadata.in.nullable().optional(),
    nickname: z.string().nullable().optional(),
    object: z.enum(["treasury.financial_account"]),
    pending_features: z
      .array(
        z.enum([
          "card_issuing",
          "deposit_insurance",
          "financial_addresses.aba",
          "financial_addresses.aba.forwarding",
          "inbound_transfers.ach",
          "intra_stripe_flows",
          "outbound_payments.ach",
          "outbound_payments.us_domestic_wire",
          "outbound_transfers.ach",
          "outbound_transfers.us_domestic_wire",
          "remote_deposit_capture",
        ]),
      )
      .optional(),
    platform_restrictions:
      Schemas$TreasuryFinancialAccountsResourcePlatformRestrictions.in.optional(),
    restricted_features: z
      .array(
        z.enum([
          "card_issuing",
          "deposit_insurance",
          "financial_addresses.aba",
          "financial_addresses.aba.forwarding",
          "inbound_transfers.ach",
          "intra_stripe_flows",
          "outbound_payments.ach",
          "outbound_payments.us_domestic_wire",
          "outbound_transfers.ach",
          "outbound_transfers.us_domestic_wire",
          "remote_deposit_capture",
        ]),
      )
      .optional(),
    status: z.enum(["closed", "open"]),
    status_details: Schemas$TreasuryFinancialAccountsResourceStatusDetails.in,
    supported_currencies: z.array(z.string()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active_features: "activeFeatures",
      balance: "balance",
      country: "country",
      created: "created",
      features: "features",
      financial_addresses: "financialAddresses",
      id: "id",
      is_default: "isDefault",
      livemode: "livemode",
      metadata: "metadata",
      nickname: "nickname",
      object: "object",
      pending_features: "pendingFeatures",
      platform_restrictions: "platformRestrictions",
      restricted_features: "restrictedFeatures",
      status: "status",
      status_details: "statusDetails",
      supported_currencies: "supportedCurrencies",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccount
 */
const SchemaOut$TreasuryFinancialAccount: z.ZodType<
  External$TreasuryFinancialAccount, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccount // the object to be transformed
> = z
  .object({
    activeFeatures: z
      .array(
        z.enum([
          "card_issuing",
          "deposit_insurance",
          "financial_addresses.aba",
          "financial_addresses.aba.forwarding",
          "inbound_transfers.ach",
          "intra_stripe_flows",
          "outbound_payments.ach",
          "outbound_payments.us_domestic_wire",
          "outbound_transfers.ach",
          "outbound_transfers.us_domestic_wire",
          "remote_deposit_capture",
        ]),
      )
      .optional(),
    balance: Schemas$TreasuryFinancialAccountsResourceBalance.out,
    country: z.string(),
    created: z.number().int(),
    features: Schemas$TreasuryFinancialAccountFeatures.out.optional(),
    financialAddresses: z.array(
      Schemas$TreasuryFinancialAccountsResourceFinancialAddress.out,
    ),
    id: z.string(),
    isDefault: z.boolean().optional(),
    livemode: z.boolean(),
    metadata: Schemas$TreasuryFinancialAccountMetadata.out
      .nullable()
      .optional(),
    nickname: z.string().nullable().optional(),
    object: z.enum(["treasury.financial_account"]),
    pendingFeatures: z
      .array(
        z.enum([
          "card_issuing",
          "deposit_insurance",
          "financial_addresses.aba",
          "financial_addresses.aba.forwarding",
          "inbound_transfers.ach",
          "intra_stripe_flows",
          "outbound_payments.ach",
          "outbound_payments.us_domestic_wire",
          "outbound_transfers.ach",
          "outbound_transfers.us_domestic_wire",
          "remote_deposit_capture",
        ]),
      )
      .optional(),
    platformRestrictions:
      Schemas$TreasuryFinancialAccountsResourcePlatformRestrictions.out.optional(),
    restrictedFeatures: z
      .array(
        z.enum([
          "card_issuing",
          "deposit_insurance",
          "financial_addresses.aba",
          "financial_addresses.aba.forwarding",
          "inbound_transfers.ach",
          "intra_stripe_flows",
          "outbound_payments.ach",
          "outbound_payments.us_domestic_wire",
          "outbound_transfers.ach",
          "outbound_transfers.us_domestic_wire",
          "remote_deposit_capture",
        ]),
      )
      .optional(),
    status: z.enum(["closed", "open"]),
    statusDetails: Schemas$TreasuryFinancialAccountsResourceStatusDetails.out,
    supportedCurrencies: z.array(z.string()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      activeFeatures: "active_features",
      balance: "balance",
      country: "country",
      created: "created",
      features: "features",
      financialAddresses: "financial_addresses",
      id: "id",
      isDefault: "is_default",
      livemode: "livemode",
      metadata: "metadata",
      nickname: "nickname",
      object: "object",
      pendingFeatures: "pending_features",
      platformRestrictions: "platform_restrictions",
      restrictedFeatures: "restricted_features",
      status: "status",
      statusDetails: "status_details",
      supportedCurrencies: "supported_currencies",
    });
  });

export const Schemas$TreasuryFinancialAccount = {
  in: SchemaIn$TreasuryFinancialAccount,
  out: SchemaOut$TreasuryFinancialAccount,
};
