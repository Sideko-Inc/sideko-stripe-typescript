import {
  BankConnectionsResourceBalanceApiResourceCreditBalanceUsed,
  External$BankConnectionsResourceBalanceApiResourceCreditBalanceUsed,
  Schemas$BankConnectionsResourceBalanceApiResourceCreditBalanceUsed,
} from "./bank-connections-resource-balance-api-resource-credit-balance-used";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BankConnectionsResourceBalanceApiResourceCreditBalance = {
  /**
   * The credit that has been used by the account holder.
   *
   * Each key is a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.
   *
   * Each value is a integer amount. A positive amount indicates money owed to the account holder. A negative amount indicates money owed by the account holder.
   */
  used?:
    | BankConnectionsResourceBalanceApiResourceCreditBalanceUsed
    | null
    | undefined;
};

/**
 * @internal
 * BankConnectionsResourceBalanceApiResourceCreditBalance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BankConnectionsResourceBalanceApiResourceCreditBalance = {
  used?:
    | External$BankConnectionsResourceBalanceApiResourceCreditBalanceUsed
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BankConnectionsResourceBalanceApiResourceCreditBalance
 */
const SchemaIn$BankConnectionsResourceBalanceApiResourceCreditBalance: z.ZodType<
  BankConnectionsResourceBalanceApiResourceCreditBalance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    used: Schemas$BankConnectionsResourceBalanceApiResourceCreditBalanceUsed.in
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      used: "used",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BankConnectionsResourceBalanceApiResourceCreditBalance
 */
const SchemaOut$BankConnectionsResourceBalanceApiResourceCreditBalance: z.ZodType<
  External$BankConnectionsResourceBalanceApiResourceCreditBalance, // output type of this zod object
  z.ZodTypeDef,
  BankConnectionsResourceBalanceApiResourceCreditBalance // the object to be transformed
> = z
  .object({
    used: Schemas$BankConnectionsResourceBalanceApiResourceCreditBalanceUsed.out
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      used: "used",
    });
  });

export const Schemas$BankConnectionsResourceBalanceApiResourceCreditBalance = {
  in: SchemaIn$BankConnectionsResourceBalanceApiResourceCreditBalance,
  out: SchemaOut$BankConnectionsResourceBalanceApiResourceCreditBalance,
};
