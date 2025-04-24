import {
  External$TreasuryFinancialAccountsResourceOutboundAchToggleSettings,
  Schemas$TreasuryFinancialAccountsResourceOutboundAchToggleSettings,
  TreasuryFinancialAccountsResourceOutboundAchToggleSettings,
} from "./treasury-financial-accounts-resource-outbound-ach-toggle-settings";
import {
  External$TreasuryFinancialAccountsResourceToggleSettings,
  Schemas$TreasuryFinancialAccountsResourceToggleSettings,
  TreasuryFinancialAccountsResourceToggleSettings,
} from "./treasury-financial-accounts-resource-toggle-settings";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Settings related to Outbound Payments features on a Financial Account
 */
export type TreasuryFinancialAccountsResourceOutboundPayments = {
  /**
   * Toggle settings for enabling/disabling an outbound ACH specific feature
   */
  ach?: TreasuryFinancialAccountsResourceOutboundAchToggleSettings | undefined;
  /**
   * Toggle settings for enabling/disabling a feature
   */
  usDomesticWire?: TreasuryFinancialAccountsResourceToggleSettings | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountsResourceOutboundPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsResourceOutboundPayments = {
  ach?:
    | External$TreasuryFinancialAccountsResourceOutboundAchToggleSettings
    | undefined;
  us_domestic_wire?:
    | External$TreasuryFinancialAccountsResourceToggleSettings
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsResourceOutboundPayments
 */
const SchemaIn$TreasuryFinancialAccountsResourceOutboundPayments: z.ZodType<
  TreasuryFinancialAccountsResourceOutboundPayments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ach: Schemas$TreasuryFinancialAccountsResourceOutboundAchToggleSettings.in.optional(),
    us_domestic_wire:
      Schemas$TreasuryFinancialAccountsResourceToggleSettings.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach: "ach",
      us_domestic_wire: "usDomesticWire",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsResourceOutboundPayments
 */
const SchemaOut$TreasuryFinancialAccountsResourceOutboundPayments: z.ZodType<
  External$TreasuryFinancialAccountsResourceOutboundPayments, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsResourceOutboundPayments // the object to be transformed
> = z
  .object({
    ach: Schemas$TreasuryFinancialAccountsResourceOutboundAchToggleSettings.out.optional(),
    usDomesticWire:
      Schemas$TreasuryFinancialAccountsResourceToggleSettings.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach: "ach",
      usDomesticWire: "us_domestic_wire",
    });
  });

export const Schemas$TreasuryFinancialAccountsResourceOutboundPayments = {
  in: SchemaIn$TreasuryFinancialAccountsResourceOutboundPayments,
  out: SchemaOut$TreasuryFinancialAccountsResourceOutboundPayments,
};
