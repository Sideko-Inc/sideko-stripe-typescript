import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The credit that has been used by the account holder.
 *
 * Each key is a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.
 *
 * Each value is a integer amount. A positive amount indicates money owed to the account holder. A negative amount indicates money owed by the account holder.
 */
export type BankConnectionsResourceBalanceApiResourceCreditBalanceUsed = {
  [additionalProperty: string]: number | null | undefined;
};

/**
 * @internal
 * BankConnectionsResourceBalanceApiResourceCreditBalanceUsed without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BankConnectionsResourceBalanceApiResourceCreditBalanceUsed =
  {
    [additionalProperty: string]:
      | (External$BankConnectionsResourceBalanceApiResourceCreditBalanceUsed | null)
      | null
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BankConnectionsResourceBalanceApiResourceCreditBalanceUsed
 */
const SchemaIn$BankConnectionsResourceBalanceApiResourceCreditBalanceUsed: z.ZodType<
  BankConnectionsResourceBalanceApiResourceCreditBalanceUsed, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(z.number().int())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BankConnectionsResourceBalanceApiResourceCreditBalanceUsed
 */
const SchemaOut$BankConnectionsResourceBalanceApiResourceCreditBalanceUsed: z.ZodType<
  External$BankConnectionsResourceBalanceApiResourceCreditBalanceUsed, // output type of this zod object
  z.ZodTypeDef,
  BankConnectionsResourceBalanceApiResourceCreditBalanceUsed // the object to be transformed
> = z
  .object({})
  .catchall(z.number().int())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$BankConnectionsResourceBalanceApiResourceCreditBalanceUsed =
  {
    in: SchemaIn$BankConnectionsResourceBalanceApiResourceCreditBalanceUsed,
    out: SchemaOut$BankConnectionsResourceBalanceApiResourceCreditBalanceUsed,
  };
