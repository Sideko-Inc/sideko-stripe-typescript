import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerUpdateBodyCashBalanceSettings
 */
export type CustomerUpdateBodyCashBalanceSettings = {
  reconciliationMode?:
    | ("automatic" | "manual" | "merchant_default")
    | undefined;
};

/**
 * @internal
 * CustomerUpdateBodyCashBalanceSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerUpdateBodyCashBalanceSettings = {
  reconciliation_mode?:
    | ("automatic" | "manual" | "merchant_default")
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerUpdateBodyCashBalanceSettings
 */
const SchemaIn$CustomerUpdateBodyCashBalanceSettings: z.ZodType<
  CustomerUpdateBodyCashBalanceSettings, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerUpdateBodyCashBalanceSettings
 */
const SchemaOut$CustomerUpdateBodyCashBalanceSettings: z.ZodType<
  External$CustomerUpdateBodyCashBalanceSettings, // output type of this zod object
  z.ZodTypeDef,
  CustomerUpdateBodyCashBalanceSettings // the object to be transformed
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

export const Schemas$CustomerUpdateBodyCashBalanceSettings = {
  in: SchemaIn$CustomerUpdateBodyCashBalanceSettings,
  out: SchemaOut$CustomerUpdateBodyCashBalanceSettings,
};
