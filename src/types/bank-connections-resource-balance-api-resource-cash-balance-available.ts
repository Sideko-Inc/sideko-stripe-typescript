import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The funds available to the account holder. Typically this is the current balance after subtracting any outbound pending transactions and adding any inbound pending transactions.
 *
 * Each key is a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.
 *
 * Each value is a integer amount. A positive amount indicates money owed to the account holder. A negative amount indicates money owed by the account holder.
 */
export type BankConnectionsResourceBalanceApiResourceCashBalanceAvailable = {
  [additionalProperty: string]: number | null | undefined;
};

/**
 * @internal
 * BankConnectionsResourceBalanceApiResourceCashBalanceAvailable without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BankConnectionsResourceBalanceApiResourceCashBalanceAvailable =
  {
    [additionalProperty: string]:
      | (External$BankConnectionsResourceBalanceApiResourceCashBalanceAvailable | null)
      | null
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BankConnectionsResourceBalanceApiResourceCashBalanceAvailable
 */
const SchemaIn$BankConnectionsResourceBalanceApiResourceCashBalanceAvailable: z.ZodType<
  BankConnectionsResourceBalanceApiResourceCashBalanceAvailable, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BankConnectionsResourceBalanceApiResourceCashBalanceAvailable
 */
const SchemaOut$BankConnectionsResourceBalanceApiResourceCashBalanceAvailable: z.ZodType<
  External$BankConnectionsResourceBalanceApiResourceCashBalanceAvailable, // output type of this zod object
  z.ZodTypeDef,
  BankConnectionsResourceBalanceApiResourceCashBalanceAvailable // the object to be transformed
> = z
  .object({})
  .catchall(z.number().int())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$BankConnectionsResourceBalanceApiResourceCashBalanceAvailable =
  {
    in: SchemaIn$BankConnectionsResourceBalanceApiResourceCashBalanceAvailable,
    out: SchemaOut$BankConnectionsResourceBalanceApiResourceCashBalanceAvailable,
  };
