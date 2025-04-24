import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A hash of settings for this cash balance.
 */
export type CustomerCashBalanceModifyBodySettings = {
  reconciliationMode?:
    | ("automatic" | "manual" | "merchant_default")
    | undefined;
};

/**
 * @internal
 * CustomerCashBalanceModifyBodySettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerCashBalanceModifyBodySettings = {
  reconciliation_mode?:
    | ("automatic" | "manual" | "merchant_default")
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerCashBalanceModifyBodySettings
 */
const SchemaIn$CustomerCashBalanceModifyBodySettings: z.ZodType<
  CustomerCashBalanceModifyBodySettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    reconciliation_mode: z
      .enum(["automatic", "manual", "merchant_default"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reconciliation_mode: "reconciliationMode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerCashBalanceModifyBodySettings
 */
const SchemaOut$CustomerCashBalanceModifyBodySettings: z.ZodType<
  External$CustomerCashBalanceModifyBodySettings, // output type of this zod object
  z.ZodTypeDef,
  CustomerCashBalanceModifyBodySettings // the object to be transformed
> = z
  .object({
    reconciliationMode: z
      .enum(["automatic", "manual", "merchant_default"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reconciliationMode: "reconciliation_mode",
    });
  });

export const Schemas$CustomerCashBalanceModifyBodySettings = {
  in: SchemaIn$CustomerCashBalanceModifyBodySettings,
  out: SchemaOut$CustomerCashBalanceModifyBodySettings,
};
