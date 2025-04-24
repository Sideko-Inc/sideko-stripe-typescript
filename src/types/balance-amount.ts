import {
  BalanceAmountBySourceType,
  External$BalanceAmountBySourceType,
  Schemas$BalanceAmountBySourceType,
} from "./balance-amount-by-source-type";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BalanceAmount = {
  /**
   * Balance amount.
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  sourceTypes?: BalanceAmountBySourceType | undefined;
};

/**
 * @internal
 * BalanceAmount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BalanceAmount = {
  amount: number;
  currency: string;
  source_types?: External$BalanceAmountBySourceType | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BalanceAmount
 */
const SchemaIn$BalanceAmount: z.ZodType<
  BalanceAmount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    source_types: Schemas$BalanceAmountBySourceType.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      source_types: "sourceTypes",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BalanceAmount
 */
const SchemaOut$BalanceAmount: z.ZodType<
  External$BalanceAmount, // output type of this zod object
  z.ZodTypeDef,
  BalanceAmount // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    sourceTypes: Schemas$BalanceAmountBySourceType.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      sourceTypes: "source_types",
    });
  });

export const Schemas$BalanceAmount = {
  in: SchemaIn$BalanceAmount,
  out: SchemaOut$BalanceAmount,
};
