import {
  External$IssuingNetworkTokenAddress,
  IssuingNetworkTokenAddress,
  Schemas$IssuingNetworkTokenAddress,
} from "./issuing-network-token-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingNetworkTokenWalletProvider = {
  /**
   * The wallet provider-given account ID of the digital wallet the token belongs to.
   */
  accountId?: string | undefined;
  /**
   * An evaluation on the trustworthiness of the wallet account between 1 and 5. A higher score indicates more trustworthy.
   */
  accountTrustScore?: number | undefined;
  /**
   * The method used for tokenizing a card.
   */
  cardNumberSource?: ("app" | "manual" | "on_file" | "other") | undefined;
  cardholderAddress?: IssuingNetworkTokenAddress | undefined;
  /**
   * The name of the cardholder tokenizing the card.
   */
  cardholderName?: string | undefined;
  /**
   * An evaluation on the trustworthiness of the device. A higher score indicates more trustworthy.
   */
  deviceTrustScore?: number | undefined;
  /**
   * The hashed email address of the cardholder's account with the wallet provider.
   */
  hashedAccountEmailAddress?: string | undefined;
  /**
   * The reasons for suggested tokenization given by the card network.
   */
  reasonCodes?:
    | (
        | "account_card_too_new"
        | "account_recently_changed"
        | "account_too_new"
        | "account_too_new_since_launch"
        | "additional_device"
        | "data_expired"
        | "defer_id_v_decision"
        | "device_recently_lost"
        | "good_activity_history"
        | "has_suspended_tokens"
        | "high_risk"
        | "inactive_account"
        | "long_account_tenure"
        | "low_account_score"
        | "low_device_score"
        | "low_phone_number_score"
        | "network_service_error"
        | "outside_home_territory"
        | "provisioning_cardholder_mismatch"
        | "provisioning_device_and_cardholder_mismatch"
        | "provisioning_device_mismatch"
        | "same_device_no_prior_authentication"
        | "same_device_successful_prior_authentication"
        | "software_update"
        | "suspicious_activity"
        | "too_many_different_cardholders"
        | "too_many_recent_attempts"
        | "too_many_recent_tokens"
      )[]
    | undefined;
  /**
   * The recommendation on responding to the tokenization request.
   */
  suggestedDecision?: ("approve" | "decline" | "require_auth") | undefined;
  /**
   * The version of the standard for mapping reason codes followed by the wallet provider.
   */
  suggestedDecisionVersion?: string | undefined;
};

/**
 * @internal
 * IssuingNetworkTokenWalletProvider without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingNetworkTokenWalletProvider = {
  account_id?: string | undefined;
  account_trust_score?: number | undefined;
  card_number_source?: ("app" | "manual" | "on_file" | "other") | undefined;
  cardholder_address?: External$IssuingNetworkTokenAddress | undefined;
  cardholder_name?: string | undefined;
  device_trust_score?: number | undefined;
  hashed_account_email_address?: string | undefined;
  reason_codes?:
    | (
        | "account_card_too_new"
        | "account_recently_changed"
        | "account_too_new"
        | "account_too_new_since_launch"
        | "additional_device"
        | "data_expired"
        | "defer_id_v_decision"
        | "device_recently_lost"
        | "good_activity_history"
        | "has_suspended_tokens"
        | "high_risk"
        | "inactive_account"
        | "long_account_tenure"
        | "low_account_score"
        | "low_device_score"
        | "low_phone_number_score"
        | "network_service_error"
        | "outside_home_territory"
        | "provisioning_cardholder_mismatch"
        | "provisioning_device_and_cardholder_mismatch"
        | "provisioning_device_mismatch"
        | "same_device_no_prior_authentication"
        | "same_device_successful_prior_authentication"
        | "software_update"
        | "suspicious_activity"
        | "too_many_different_cardholders"
        | "too_many_recent_attempts"
        | "too_many_recent_tokens"
      )[]
    | undefined;
  suggested_decision?: ("approve" | "decline" | "require_auth") | undefined;
  suggested_decision_version?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingNetworkTokenWalletProvider
 */
const SchemaIn$IssuingNetworkTokenWalletProvider: z.ZodType<
  IssuingNetworkTokenWalletProvider, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_id: z.string().optional(),
    account_trust_score: z.number().int().optional(),
    card_number_source: z
      .enum(["app", "manual", "on_file", "other"])
      .optional(),
    cardholder_address: Schemas$IssuingNetworkTokenAddress.in.optional(),
    cardholder_name: z.string().optional(),
    device_trust_score: z.number().int().optional(),
    hashed_account_email_address: z.string().optional(),
    reason_codes: z
      .array(
        z.enum([
          "account_card_too_new",
          "account_recently_changed",
          "account_too_new",
          "account_too_new_since_launch",
          "additional_device",
          "data_expired",
          "defer_id_v_decision",
          "device_recently_lost",
          "good_activity_history",
          "has_suspended_tokens",
          "high_risk",
          "inactive_account",
          "long_account_tenure",
          "low_account_score",
          "low_device_score",
          "low_phone_number_score",
          "network_service_error",
          "outside_home_territory",
          "provisioning_cardholder_mismatch",
          "provisioning_device_and_cardholder_mismatch",
          "provisioning_device_mismatch",
          "same_device_no_prior_authentication",
          "same_device_successful_prior_authentication",
          "software_update",
          "suspicious_activity",
          "too_many_different_cardholders",
          "too_many_recent_attempts",
          "too_many_recent_tokens",
        ]),
      )
      .optional(),
    suggested_decision: z
      .enum(["approve", "decline", "require_auth"])
      .optional(),
    suggested_decision_version: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_id: "accountId",
      account_trust_score: "accountTrustScore",
      card_number_source: "cardNumberSource",
      cardholder_address: "cardholderAddress",
      cardholder_name: "cardholderName",
      device_trust_score: "deviceTrustScore",
      hashed_account_email_address: "hashedAccountEmailAddress",
      reason_codes: "reasonCodes",
      suggested_decision: "suggestedDecision",
      suggested_decision_version: "suggestedDecisionVersion",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingNetworkTokenWalletProvider
 */
const SchemaOut$IssuingNetworkTokenWalletProvider: z.ZodType<
  External$IssuingNetworkTokenWalletProvider, // output type of this zod object
  z.ZodTypeDef,
  IssuingNetworkTokenWalletProvider // the object to be transformed
> = z
  .object({
    accountId: z.string().optional(),
    accountTrustScore: z.number().int().optional(),
    cardNumberSource: z.enum(["app", "manual", "on_file", "other"]).optional(),
    cardholderAddress: Schemas$IssuingNetworkTokenAddress.out.optional(),
    cardholderName: z.string().optional(),
    deviceTrustScore: z.number().int().optional(),
    hashedAccountEmailAddress: z.string().optional(),
    reasonCodes: z
      .array(
        z.enum([
          "account_card_too_new",
          "account_recently_changed",
          "account_too_new",
          "account_too_new_since_launch",
          "additional_device",
          "data_expired",
          "defer_id_v_decision",
          "device_recently_lost",
          "good_activity_history",
          "has_suspended_tokens",
          "high_risk",
          "inactive_account",
          "long_account_tenure",
          "low_account_score",
          "low_device_score",
          "low_phone_number_score",
          "network_service_error",
          "outside_home_territory",
          "provisioning_cardholder_mismatch",
          "provisioning_device_and_cardholder_mismatch",
          "provisioning_device_mismatch",
          "same_device_no_prior_authentication",
          "same_device_successful_prior_authentication",
          "software_update",
          "suspicious_activity",
          "too_many_different_cardholders",
          "too_many_recent_attempts",
          "too_many_recent_tokens",
        ]),
      )
      .optional(),
    suggestedDecision: z
      .enum(["approve", "decline", "require_auth"])
      .optional(),
    suggestedDecisionVersion: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountId: "account_id",
      accountTrustScore: "account_trust_score",
      cardNumberSource: "card_number_source",
      cardholderAddress: "cardholder_address",
      cardholderName: "cardholder_name",
      deviceTrustScore: "device_trust_score",
      hashedAccountEmailAddress: "hashed_account_email_address",
      reasonCodes: "reason_codes",
      suggestedDecision: "suggested_decision",
      suggestedDecisionVersion: "suggested_decision_version",
    });
  });

export const Schemas$IssuingNetworkTokenWalletProvider = {
  in: SchemaIn$IssuingNetworkTokenWalletProvider,
  out: SchemaOut$IssuingNetworkTokenWalletProvider,
};
