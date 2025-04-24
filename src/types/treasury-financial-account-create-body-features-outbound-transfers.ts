import {
  External$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersAch,
  Schemas$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersAch,
  TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersAch,
} from "./treasury-financial-account-create-body-features-outbound-transfers-ach";
import {
  External$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersUsDomesticWire,
  Schemas$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersUsDomesticWire,
  TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersUsDomesticWire,
} from "./treasury-financial-account-create-body-features-outbound-transfers-us-domestic-wire";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfers
 */
export type TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfers = {
  ach?:
    | TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersAch
    | undefined;
  usDomesticWire?:
    | TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersUsDomesticWire
    | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfers without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfers =
  {
    ach?:
      | External$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersAch
      | undefined;
    us_domestic_wire?:
      | External$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersUsDomesticWire
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfers
 */
const SchemaIn$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfers: z.ZodType<
  TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfers, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ach: Schemas$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersAch.in.optional(),
    us_domestic_wire:
      Schemas$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersUsDomesticWire.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach: "ach",
      us_domestic_wire: "usDomesticWire",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfers
 */
const SchemaOut$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfers: z.ZodType<
  External$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfers, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfers // the object to be transformed
> = z
  .object({
    ach: Schemas$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersAch.out.optional(),
    usDomesticWire:
      Schemas$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersUsDomesticWire.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach: "ach",
      usDomesticWire: "us_domestic_wire",
    });
  });

export const Schemas$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfers =
  {
    in: SchemaIn$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfers,
    out: SchemaOut$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfers,
  };
