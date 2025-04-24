import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BalanceAmountBySourceType = {
  /**
   * Amount coming from [legacy US ACH payments](https://docs.stripe.com/ach-deprecated).
   */
  bankAccount?: number | undefined;
  /**
   * Amount coming from most payment methods, including cards as well as [non-legacy bank debits](https://docs.stripe.com/payments/bank-debits).
   */
  card?: number | undefined;
  /**
   * Amount coming from [FPX](https://docs.stripe.com/payments/fpx), a Malaysian payment method.
   */
  fpx?: number | undefined;
};

/**
 * @internal
 * BalanceAmountBySourceType without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BalanceAmountBySourceType = {
  bank_account?: number | undefined;
  card?: number | undefined;
  fpx?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BalanceAmountBySourceType
 */
const SchemaIn$BalanceAmountBySourceType: z.ZodType<
  BalanceAmountBySourceType, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_account: z.number().int().optional(),
    card: z.number().int().optional(),
    fpx: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank_account: "bankAccount",
      card: "card",
      fpx: "fpx",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BalanceAmountBySourceType
 */
const SchemaOut$BalanceAmountBySourceType: z.ZodType<
  External$BalanceAmountBySourceType, // output type of this zod object
  z.ZodTypeDef,
  BalanceAmountBySourceType // the object to be transformed
> = z
  .object({
    bankAccount: z.number().int().optional(),
    card: z.number().int().optional(),
    fpx: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankAccount: "bank_account",
      card: "card",
      fpx: "fpx",
    });
  });

export const Schemas$BalanceAmountBySourceType = {
  in: SchemaIn$BalanceAmountBySourceType,
  out: SchemaOut$BalanceAmountBySourceType,
};
