import {
  External$TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfersAch,
  Schemas$TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfersAch,
  TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfersAch,
} from "./treasury-financial-account-update-body-features-inbound-transfers-ach";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfers
 */
export type TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfers = {
  ach?:
    | TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfersAch
    | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfers without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfers =
  {
    ach?:
      | External$TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfersAch
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfers
 */
const SchemaIn$TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfers: z.ZodType<
  TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfers, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ach: Schemas$TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfersAch.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach: "ach",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfers
 */
const SchemaOut$TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfers: z.ZodType<
  External$TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfers, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfers // the object to be transformed
> = z
  .object({
    ach: Schemas$TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfersAch.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach: "ach",
    });
  });

export const Schemas$TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfers =
  {
    in: SchemaIn$TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfers,
    out: SchemaOut$TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfers,
  };
