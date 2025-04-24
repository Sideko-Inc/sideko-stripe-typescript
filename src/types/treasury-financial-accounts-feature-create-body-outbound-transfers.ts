import {
  External$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersAch,
  Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersAch,
  TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersAch,
} from "./treasury-financial-accounts-feature-create-body-outbound-transfers-ach";
import {
  External$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersUsDomesticWire,
  Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersUsDomesticWire,
  TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersUsDomesticWire,
} from "./treasury-financial-accounts-feature-create-body-outbound-transfers-us-domestic-wire";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Contains a Feature and settings related to moving money out of the FinancialAccount into another Account with the same owner.
 */
export type TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers = {
  ach?:
    | TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersAch
    | undefined;
  usDomesticWire?:
    | TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersUsDomesticWire
    | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers =
  {
    ach?:
      | External$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersAch
      | undefined;
    us_domestic_wire?:
      | External$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersUsDomesticWire
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers
 */
const SchemaIn$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers: z.ZodType<
  TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ach: Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersAch.in.optional(),
    us_domestic_wire:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersUsDomesticWire.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach: "ach",
      us_domestic_wire: "usDomesticWire",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers
 */
const SchemaOut$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers: z.ZodType<
  External$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers // the object to be transformed
> = z
  .object({
    ach: Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersAch.out.optional(),
    usDomesticWire:
      Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersUsDomesticWire.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach: "ach",
      usDomesticWire: "us_domestic_wire",
    });
  });

export const Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers =
  {
    in: SchemaIn$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers,
    out: SchemaOut$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfers,
  };
