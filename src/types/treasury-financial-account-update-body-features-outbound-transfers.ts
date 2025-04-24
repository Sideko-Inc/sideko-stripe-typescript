import {
  External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersAch,
  Schemas$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersAch,
  TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersAch,
} from "./treasury-financial-account-update-body-features-outbound-transfers-ach";
import {
  External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersUsDomesticWire,
  Schemas$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersUsDomesticWire,
  TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersUsDomesticWire,
} from "./treasury-financial-account-update-body-features-outbound-transfers-us-domestic-wire";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfers
 */
export type TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfers = {
  ach?:
    | TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersAch
    | undefined;
  usDomesticWire?:
    | TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersUsDomesticWire
    | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfers without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfers =
  {
    ach?:
      | External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersAch
      | undefined;
    us_domestic_wire?:
      | External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersUsDomesticWire
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfers
 */
const SchemaIn$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfers: z.ZodType<
  TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfers, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ach: Schemas$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersAch.in.optional(),
    us_domestic_wire:
      Schemas$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersUsDomesticWire.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach: "ach",
      us_domestic_wire: "usDomesticWire",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfers
 */
const SchemaOut$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfers: z.ZodType<
  External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfers, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfers // the object to be transformed
> = z
  .object({
    ach: Schemas$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersAch.out.optional(),
    usDomesticWire:
      Schemas$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersUsDomesticWire.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach: "ach",
      usDomesticWire: "us_domestic_wire",
    });
  });

export const Schemas$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfers =
  {
    in: SchemaIn$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfers,
    out: SchemaOut$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfers,
  };
