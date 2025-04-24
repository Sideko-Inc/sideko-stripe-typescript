import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CustomerBalanceCustomerBalanceSettings = {
  /**
   * The configuration for how funds that land in the customer cash balance are reconciled.
   */
  reconciliationMode: "automatic" | "manual";
  /**
   * A flag to indicate if reconciliation mode returned is the user's default or is specific to this customer cash balance
   */
  usingMerchantDefault: boolean;
};

/**
 * @internal
 * CustomerBalanceCustomerBalanceSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerBalanceCustomerBalanceSettings = {
  reconciliation_mode: "automatic" | "manual";
  using_merchant_default: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerBalanceCustomerBalanceSettings
 */
const SchemaIn$CustomerBalanceCustomerBalanceSettings: z.ZodType<
  CustomerBalanceCustomerBalanceSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    reconciliation_mode: z.enum(["automatic", "manual"]),
    using_merchant_default: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reconciliation_mode: "reconciliationMode",
      using_merchant_default: "usingMerchantDefault",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerBalanceCustomerBalanceSettings
 */
const SchemaOut$CustomerBalanceCustomerBalanceSettings: z.ZodType<
  External$CustomerBalanceCustomerBalanceSettings, // output type of this zod object
  z.ZodTypeDef,
  CustomerBalanceCustomerBalanceSettings // the object to be transformed
> = z
  .object({
    reconciliationMode: z.enum(["automatic", "manual"]),
    usingMerchantDefault: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reconciliationMode: "reconciliation_mode",
      usingMerchantDefault: "using_merchant_default",
    });
  });

export const Schemas$CustomerBalanceCustomerBalanceSettings = {
  in: SchemaIn$CustomerBalanceCustomerBalanceSettings,
  out: SchemaOut$CustomerBalanceCustomerBalanceSettings,
};
