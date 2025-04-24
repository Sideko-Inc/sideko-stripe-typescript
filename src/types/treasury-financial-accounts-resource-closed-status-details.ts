import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TreasuryFinancialAccountsResourceClosedStatusDetails = {
  /**
   * The array that contains reasons for a FinancialAccount closure.
   */
  reasons: ("account_rejected" | "closed_by_platform" | "other")[];
};

/**
 * @internal
 * TreasuryFinancialAccountsResourceClosedStatusDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsResourceClosedStatusDetails = {
  reasons: ("account_rejected" | "closed_by_platform" | "other")[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsResourceClosedStatusDetails
 */
const SchemaIn$TreasuryFinancialAccountsResourceClosedStatusDetails: z.ZodType<
  TreasuryFinancialAccountsResourceClosedStatusDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    reasons: z.array(
      z.enum(["account_rejected", "closed_by_platform", "other"]),
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reasons: "reasons",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsResourceClosedStatusDetails
 */
const SchemaOut$TreasuryFinancialAccountsResourceClosedStatusDetails: z.ZodType<
  External$TreasuryFinancialAccountsResourceClosedStatusDetails, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsResourceClosedStatusDetails // the object to be transformed
> = z
  .object({
    reasons: z.array(
      z.enum(["account_rejected", "closed_by_platform", "other"]),
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reasons: "reasons",
    });
  });

export const Schemas$TreasuryFinancialAccountsResourceClosedStatusDetails = {
  in: SchemaIn$TreasuryFinancialAccountsResourceClosedStatusDetails,
  out: SchemaOut$TreasuryFinancialAccountsResourceClosedStatusDetails,
};
