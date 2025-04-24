import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerCreateBodyCashBalanceSettings
 */
export type CustomerCreateBodyCashBalanceSettings = {
  reconciliationMode?:
    | ("automatic" | "manual" | "merchant_default")
    | undefined;
};

/**
 * @internal
 * CustomerCreateBodyCashBalanceSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerCreateBodyCashBalanceSettings = {
  reconciliation_mode?:
    | ("automatic" | "manual" | "merchant_default")
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerCreateBodyCashBalanceSettings
 */
const SchemaIn$CustomerCreateBodyCashBalanceSettings: z.ZodType<
  CustomerCreateBodyCashBalanceSettings, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerCreateBodyCashBalanceSettings
 */
const SchemaOut$CustomerCreateBodyCashBalanceSettings: z.ZodType<
  External$CustomerCreateBodyCashBalanceSettings, // output type of this zod object
  z.ZodTypeDef,
  CustomerCreateBodyCashBalanceSettings // the object to be transformed
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

export const Schemas$CustomerCreateBodyCashBalanceSettings = {
  in: SchemaIn$CustomerCreateBodyCashBalanceSettings,
  out: SchemaOut$CustomerCreateBodyCashBalanceSettings,
};
