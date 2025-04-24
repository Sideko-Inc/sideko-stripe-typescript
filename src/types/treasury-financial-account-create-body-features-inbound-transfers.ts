import {
  External$TreasuryFinancialAccountCreateBodyFeaturesInboundTransfersAch,
  Schemas$TreasuryFinancialAccountCreateBodyFeaturesInboundTransfersAch,
  TreasuryFinancialAccountCreateBodyFeaturesInboundTransfersAch,
} from "./treasury-financial-account-create-body-features-inbound-transfers-ach";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountCreateBodyFeaturesInboundTransfers
 */
export type TreasuryFinancialAccountCreateBodyFeaturesInboundTransfers = {
  ach?:
    | TreasuryFinancialAccountCreateBodyFeaturesInboundTransfersAch
    | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountCreateBodyFeaturesInboundTransfers without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountCreateBodyFeaturesInboundTransfers =
  {
    ach?:
      | External$TreasuryFinancialAccountCreateBodyFeaturesInboundTransfersAch
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountCreateBodyFeaturesInboundTransfers
 */
const SchemaIn$TreasuryFinancialAccountCreateBodyFeaturesInboundTransfers: z.ZodType<
  TreasuryFinancialAccountCreateBodyFeaturesInboundTransfers, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ach: Schemas$TreasuryFinancialAccountCreateBodyFeaturesInboundTransfersAch.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach: "ach",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountCreateBodyFeaturesInboundTransfers
 */
const SchemaOut$TreasuryFinancialAccountCreateBodyFeaturesInboundTransfers: z.ZodType<
  External$TreasuryFinancialAccountCreateBodyFeaturesInboundTransfers, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountCreateBodyFeaturesInboundTransfers // the object to be transformed
> = z
  .object({
    ach: Schemas$TreasuryFinancialAccountCreateBodyFeaturesInboundTransfersAch.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach: "ach",
    });
  });

export const Schemas$TreasuryFinancialAccountCreateBodyFeaturesInboundTransfers =
  {
    in: SchemaIn$TreasuryFinancialAccountCreateBodyFeaturesInboundTransfers,
    out: SchemaOut$TreasuryFinancialAccountCreateBodyFeaturesInboundTransfers,
  };
