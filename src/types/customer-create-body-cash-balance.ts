import {
  CustomerCreateBodyCashBalanceSettings,
  External$CustomerCreateBodyCashBalanceSettings,
  Schemas$CustomerCreateBodyCashBalanceSettings,
} from "./customer-create-body-cash-balance-settings";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Balance information and default balance settings for this customer.
 */
export type CustomerCreateBodyCashBalance = {
  settings?: CustomerCreateBodyCashBalanceSettings | undefined;
};

/**
 * @internal
 * CustomerCreateBodyCashBalance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerCreateBodyCashBalance = {
  settings?: External$CustomerCreateBodyCashBalanceSettings | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerCreateBodyCashBalance
 */
const SchemaIn$CustomerCreateBodyCashBalance: z.ZodType<
  CustomerCreateBodyCashBalance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    settings: Schemas$CustomerCreateBodyCashBalanceSettings.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      settings: "settings",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerCreateBodyCashBalance
 */
const SchemaOut$CustomerCreateBodyCashBalance: z.ZodType<
  External$CustomerCreateBodyCashBalance, // output type of this zod object
  z.ZodTypeDef,
  CustomerCreateBodyCashBalance // the object to be transformed
> = z
  .object({
    settings: Schemas$CustomerCreateBodyCashBalanceSettings.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      settings: "settings",
    });
  });

export const Schemas$CustomerCreateBodyCashBalance = {
  in: SchemaIn$CustomerCreateBodyCashBalance,
  out: SchemaOut$CustomerCreateBodyCashBalance,
};
