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
 * OutboundTransfers contains outbound transfers features for a FinancialAccount.
 */
export type TreasuryFinancialAccountsResourceOutboundTransfers = {
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
 * TreasuryFinancialAccountsResourceOutboundTransfers without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsResourceOutboundTransfers = {
  ach?:
    | External$TreasuryFinancialAccountsResourceOutboundAchToggleSettings
    | undefined;
  us_domestic_wire?:
    | External$TreasuryFinancialAccountsResourceToggleSettings
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsResourceOutboundTransfers
 */
const SchemaIn$TreasuryFinancialAccountsResourceOutboundTransfers: z.ZodType<
  TreasuryFinancialAccountsResourceOutboundTransfers, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsResourceOutboundTransfers
 */
const SchemaOut$TreasuryFinancialAccountsResourceOutboundTransfers: z.ZodType<
  External$TreasuryFinancialAccountsResourceOutboundTransfers, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsResourceOutboundTransfers // the object to be transformed
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

export const Schemas$TreasuryFinancialAccountsResourceOutboundTransfers = {
  in: SchemaIn$TreasuryFinancialAccountsResourceOutboundTransfers,
  out: SchemaOut$TreasuryFinancialAccountsResourceOutboundTransfers,
};
