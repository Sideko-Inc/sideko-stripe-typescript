import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A hash of all cash balances available to this customer. You cannot delete a customer with any cash balances, even if the balance is 0. Amounts are represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
 */
export type CashBalanceAvailable = {
  [additionalProperty: string]: number | null | undefined;
};

/**
 * @internal
 * CashBalanceAvailable without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CashBalanceAvailable = {
  [additionalProperty: string]:
    | (External$CashBalanceAvailable | null)
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CashBalanceAvailable
 */
const SchemaIn$CashBalanceAvailable: z.ZodType<
  CashBalanceAvailable, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CashBalanceAvailable
 */
const SchemaOut$CashBalanceAvailable: z.ZodType<
  External$CashBalanceAvailable, // output type of this zod object
  z.ZodTypeDef,
  CashBalanceAvailable // the object to be transformed
> = z
  .object({})
  .catchall(z.number().int())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CashBalanceAvailable = {
  in: SchemaIn$CashBalanceAvailable,
  out: SchemaOut$CashBalanceAvailable,
};
