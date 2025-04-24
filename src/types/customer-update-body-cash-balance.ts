import {
  CustomerUpdateBodyCashBalanceSettings,
  External$CustomerUpdateBodyCashBalanceSettings,
  Schemas$CustomerUpdateBodyCashBalanceSettings,
} from "./customer-update-body-cash-balance-settings";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Balance information and default balance settings for this customer.
 */
export type CustomerUpdateBodyCashBalance = {
  settings?: CustomerUpdateBodyCashBalanceSettings | undefined;
};

/**
 * @internal
 * CustomerUpdateBodyCashBalance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerUpdateBodyCashBalance = {
  settings?: External$CustomerUpdateBodyCashBalanceSettings | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerUpdateBodyCashBalance
 */
const SchemaIn$CustomerUpdateBodyCashBalance: z.ZodType<
  CustomerUpdateBodyCashBalance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    settings: Schemas$CustomerUpdateBodyCashBalanceSettings.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      settings: "settings",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerUpdateBodyCashBalance
 */
const SchemaOut$CustomerUpdateBodyCashBalance: z.ZodType<
  External$CustomerUpdateBodyCashBalance, // output type of this zod object
  z.ZodTypeDef,
  CustomerUpdateBodyCashBalance // the object to be transformed
> = z
  .object({
    settings: Schemas$CustomerUpdateBodyCashBalanceSettings.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      settings: "settings",
    });
  });

export const Schemas$CustomerUpdateBodyCashBalance = {
  in: SchemaIn$CustomerUpdateBodyCashBalance,
  out: SchemaOut$CustomerUpdateBodyCashBalance,
};
