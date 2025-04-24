import {
  External$TreasuryFinancialAccountsResourceInboundAchToggleSettings,
  Schemas$TreasuryFinancialAccountsResourceInboundAchToggleSettings,
  TreasuryFinancialAccountsResourceInboundAchToggleSettings,
} from "./treasury-financial-accounts-resource-inbound-ach-toggle-settings";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InboundTransfers contains inbound transfers features for a FinancialAccount.
 */
export type TreasuryFinancialAccountsResourceInboundTransfers = {
  /**
   * Toggle settings for enabling/disabling an inbound ACH specific feature
   */
  ach?: TreasuryFinancialAccountsResourceInboundAchToggleSettings | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountsResourceInboundTransfers without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsResourceInboundTransfers = {
  ach?:
    | External$TreasuryFinancialAccountsResourceInboundAchToggleSettings
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsResourceInboundTransfers
 */
const SchemaIn$TreasuryFinancialAccountsResourceInboundTransfers: z.ZodType<
  TreasuryFinancialAccountsResourceInboundTransfers, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ach: Schemas$TreasuryFinancialAccountsResourceInboundAchToggleSettings.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach: "ach",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsResourceInboundTransfers
 */
const SchemaOut$TreasuryFinancialAccountsResourceInboundTransfers: z.ZodType<
  External$TreasuryFinancialAccountsResourceInboundTransfers, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsResourceInboundTransfers // the object to be transformed
> = z
  .object({
    ach: Schemas$TreasuryFinancialAccountsResourceInboundAchToggleSettings.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach: "ach",
    });
  });

export const Schemas$TreasuryFinancialAccountsResourceInboundTransfers = {
  in: SchemaIn$TreasuryFinancialAccountsResourceInboundTransfers,
  out: SchemaOut$TreasuryFinancialAccountsResourceInboundTransfers,
};
