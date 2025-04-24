import {
  External$TreasuryFinancialAccountsResourceTogglesSettingStatusDetails,
  Schemas$TreasuryFinancialAccountsResourceTogglesSettingStatusDetails,
  TreasuryFinancialAccountsResourceTogglesSettingStatusDetails,
} from "./treasury-financial-accounts-resource-toggles-setting-status-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Toggle settings for enabling/disabling an inbound ACH specific feature
 */
export type TreasuryFinancialAccountsResourceInboundAchToggleSettings = {
  /**
   * Whether the FinancialAccount should have the Feature.
   */
  requested: boolean;
  /**
   * Whether the Feature is operational.
   */
  status: "active" | "pending" | "restricted";
  /**
   * Additional details; includes at least one entry when the status is not `active`.
   */
  statusDetails: TreasuryFinancialAccountsResourceTogglesSettingStatusDetails[];
};

/**
 * @internal
 * TreasuryFinancialAccountsResourceInboundAchToggleSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsResourceInboundAchToggleSettings =
  {
    requested: boolean;
    status: "active" | "pending" | "restricted";
    status_details: External$TreasuryFinancialAccountsResourceTogglesSettingStatusDetails[];
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsResourceInboundAchToggleSettings
 */
const SchemaIn$TreasuryFinancialAccountsResourceInboundAchToggleSettings: z.ZodType<
  TreasuryFinancialAccountsResourceInboundAchToggleSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    requested: z.boolean(),
    status: z.enum(["active", "pending", "restricted"]),
    status_details: z.array(
      Schemas$TreasuryFinancialAccountsResourceTogglesSettingStatusDetails.in,
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
      status: "status",
      status_details: "statusDetails",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsResourceInboundAchToggleSettings
 */
const SchemaOut$TreasuryFinancialAccountsResourceInboundAchToggleSettings: z.ZodType<
  External$TreasuryFinancialAccountsResourceInboundAchToggleSettings, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsResourceInboundAchToggleSettings // the object to be transformed
> = z
  .object({
    requested: z.boolean(),
    status: z.enum(["active", "pending", "restricted"]),
    statusDetails: z.array(
      Schemas$TreasuryFinancialAccountsResourceTogglesSettingStatusDetails.out,
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
      status: "status",
      statusDetails: "status_details",
    });
  });

export const Schemas$TreasuryFinancialAccountsResourceInboundAchToggleSettings =
  {
    in: SchemaIn$TreasuryFinancialAccountsResourceInboundAchToggleSettings,
    out: SchemaOut$TreasuryFinancialAccountsResourceInboundAchToggleSettings,
  };
