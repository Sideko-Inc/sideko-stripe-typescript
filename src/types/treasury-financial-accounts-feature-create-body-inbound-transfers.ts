import {
  External$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfersAch,
  Schemas$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfersAch,
  TreasuryFinancialAccountsFeatureCreateBodyInboundTransfersAch,
} from "./treasury-financial-accounts-feature-create-body-inbound-transfers-ach";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Contains settings related to adding funds to a FinancialAccount from another Account with the same owner.
 */
export type TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers = {
  ach?:
    | TreasuryFinancialAccountsFeatureCreateBodyInboundTransfersAch
    | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers =
  {
    ach?:
      | External$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfersAch
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers
 */
const SchemaIn$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers: z.ZodType<
  TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ach: Schemas$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfersAch.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach: "ach",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers
 */
const SchemaOut$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers: z.ZodType<
  External$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers // the object to be transformed
> = z
  .object({
    ach: Schemas$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfersAch.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach: "ach",
    });
  });

export const Schemas$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers =
  {
    in: SchemaIn$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers,
    out: SchemaOut$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfers,
  };
