import {
  BalanceAmount,
  External$BalanceAmount,
  Schemas$BalanceAmount,
} from "./balance-amount";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BalanceDetail = {
  /**
   * Funds that are available for use.
   */
  available: BalanceAmount[];
};

/**
 * @internal
 * BalanceDetail without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BalanceDetail = {
  available: External$BalanceAmount[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BalanceDetail
 */
const SchemaIn$BalanceDetail: z.ZodType<
  BalanceDetail, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    available: z.array(Schemas$BalanceAmount.in),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      available: "available",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BalanceDetail
 */
const SchemaOut$BalanceDetail: z.ZodType<
  External$BalanceDetail, // output type of this zod object
  z.ZodTypeDef,
  BalanceDetail // the object to be transformed
> = z
  .object({
    available: z.array(Schemas$BalanceAmount.out),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      available: "available",
    });
  });

export const Schemas$BalanceDetail = {
  in: SchemaIn$BalanceDetail,
  out: SchemaOut$BalanceDetail,
};
