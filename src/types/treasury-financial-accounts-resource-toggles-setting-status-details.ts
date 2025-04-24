import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Additional details on the FinancialAccount Features information.
 */
export type TreasuryFinancialAccountsResourceTogglesSettingStatusDetails = {
  /**
   * Represents the reason why the status is `pending` or `restricted`.
   */
  code:
    | "activating"
    | "capability_not_requested"
    | "financial_account_closed"
    | "rejected_other"
    | "rejected_unsupported_business"
    | "requirements_past_due"
    | "requirements_pending_verification"
    | "restricted_by_platform"
    | "restricted_other";
  /**
   * Represents what the user should do, if anything, to activate the Feature.
   */
  resolution?:
    | ("contact_stripe" | "provide_information" | "remove_restriction")
    | null
    | undefined;
  /**
   * The `platform_restrictions` that are restricting this Feature.
   */
  restriction?: ("inbound_flows" | "outbound_flows") | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountsResourceTogglesSettingStatusDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsResourceTogglesSettingStatusDetails =
  {
    code:
      | "activating"
      | "capability_not_requested"
      | "financial_account_closed"
      | "rejected_other"
      | "rejected_unsupported_business"
      | "requirements_past_due"
      | "requirements_pending_verification"
      | "restricted_by_platform"
      | "restricted_other";
    resolution?:
      | ("contact_stripe" | "provide_information" | "remove_restriction")
      | null
      | undefined;
    restriction?: ("inbound_flows" | "outbound_flows") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsResourceTogglesSettingStatusDetails
 */
const SchemaIn$TreasuryFinancialAccountsResourceTogglesSettingStatusDetails: z.ZodType<
  TreasuryFinancialAccountsResourceTogglesSettingStatusDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    code: z.enum([
      "activating",
      "capability_not_requested",
      "financial_account_closed",
      "rejected_other",
      "rejected_unsupported_business",
      "requirements_past_due",
      "requirements_pending_verification",
      "restricted_by_platform",
      "restricted_other",
    ]),
    resolution: z
      .enum(["contact_stripe", "provide_information", "remove_restriction"])
      .nullable()
      .optional(),
    restriction: z.enum(["inbound_flows", "outbound_flows"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      code: "code",
      resolution: "resolution",
      restriction: "restriction",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsResourceTogglesSettingStatusDetails
 */
const SchemaOut$TreasuryFinancialAccountsResourceTogglesSettingStatusDetails: z.ZodType<
  External$TreasuryFinancialAccountsResourceTogglesSettingStatusDetails, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsResourceTogglesSettingStatusDetails // the object to be transformed
> = z
  .object({
    code: z.enum([
      "activating",
      "capability_not_requested",
      "financial_account_closed",
      "rejected_other",
      "rejected_unsupported_business",
      "requirements_past_due",
      "requirements_pending_verification",
      "restricted_by_platform",
      "restricted_other",
    ]),
    resolution: z
      .enum(["contact_stripe", "provide_information", "remove_restriction"])
      .nullable()
      .optional(),
    restriction: z.enum(["inbound_flows", "outbound_flows"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      code: "code",
      resolution: "resolution",
      restriction: "restriction",
    });
  });

export const Schemas$TreasuryFinancialAccountsResourceTogglesSettingStatusDetails =
  {
    in: SchemaIn$TreasuryFinancialAccountsResourceTogglesSettingStatusDetails,
    out: SchemaOut$TreasuryFinancialAccountsResourceTogglesSettingStatusDetails,
  };
