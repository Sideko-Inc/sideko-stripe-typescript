import {
  BalanceAmountBySourceType,
  External$BalanceAmountBySourceType,
  Schemas$BalanceAmountBySourceType,
} from "./balance-amount-by-source-type";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BalanceNetAvailable = {
  /**
   * Net balance amount, subtracting fees from platform-set pricing.
   */
  amount: number;
  /**
   * ID of the external account for this net balance (not expandable).
   */
  destination: string;
  sourceTypes?: BalanceAmountBySourceType | undefined;
};

/**
 * @internal
 * BalanceNetAvailable without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BalanceNetAvailable = {
  amount: number;
  destination: string;
  source_types?: External$BalanceAmountBySourceType | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BalanceNetAvailable
 */
const SchemaIn$BalanceNetAvailable: z.ZodType<
  BalanceNetAvailable, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    destination: z.string(),
    source_types: Schemas$BalanceAmountBySourceType.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      destination: "destination",
      source_types: "sourceTypes",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BalanceNetAvailable
 */
const SchemaOut$BalanceNetAvailable: z.ZodType<
  External$BalanceNetAvailable, // output type of this zod object
  z.ZodTypeDef,
  BalanceNetAvailable // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    destination: z.string(),
    sourceTypes: Schemas$BalanceAmountBySourceType.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      destination: "destination",
      sourceTypes: "source_types",
    });
  });

export const Schemas$BalanceNetAvailable = {
  in: SchemaIn$BalanceNetAvailable,
  out: SchemaOut$BalanceNetAvailable,
};
