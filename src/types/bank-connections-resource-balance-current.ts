import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The balances owed to (or by) the account holder, before subtracting any outbound pending transactions or adding any inbound pending transactions.
 *
 * Each key is a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.
 *
 * Each value is a integer amount. A positive amount indicates money owed to the account holder. A negative amount indicates money owed by the account holder.
 */
export type BankConnectionsResourceBalanceCurrent = {
  [additionalProperty: string]: number | null | undefined;
};

/**
 * @internal
 * BankConnectionsResourceBalanceCurrent without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BankConnectionsResourceBalanceCurrent = {
  [additionalProperty: string]:
    | External$BankConnectionsResourceBalanceCurrent
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BankConnectionsResourceBalanceCurrent
 */
const SchemaIn$BankConnectionsResourceBalanceCurrent: z.ZodType<
  BankConnectionsResourceBalanceCurrent, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BankConnectionsResourceBalanceCurrent
 */
const SchemaOut$BankConnectionsResourceBalanceCurrent: z.ZodType<
  External$BankConnectionsResourceBalanceCurrent, // output type of this zod object
  z.ZodTypeDef,
  BankConnectionsResourceBalanceCurrent // the object to be transformed
> = z
  .object({})
  .catchall(z.number().int())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$BankConnectionsResourceBalanceCurrent = {
  in: SchemaIn$BankConnectionsResourceBalanceCurrent,
  out: SchemaOut$BankConnectionsResourceBalanceCurrent,
};
