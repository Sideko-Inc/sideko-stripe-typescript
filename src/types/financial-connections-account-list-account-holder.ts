import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * If present, only return accounts that belong to the specified account holder. `account_holder[customer]` and `account_holder[account]` are mutually exclusive.
 */
export type FinancialConnectionsAccountListAccountHolder = {
  account?: string | undefined;
  customer?: string | undefined;
};

/**
 * @internal
 * FinancialConnectionsAccountListAccountHolder without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FinancialConnectionsAccountListAccountHolder = {
  account?: string | undefined;
  customer?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FinancialConnectionsAccountListAccountHolder
 */
const SchemaIn$FinancialConnectionsAccountListAccountHolder: z.ZodType<
  FinancialConnectionsAccountListAccountHolder, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account: z.string().optional(),
    customer: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      customer: "customer",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FinancialConnectionsAccountListAccountHolder
 */
const SchemaOut$FinancialConnectionsAccountListAccountHolder: z.ZodType<
  External$FinancialConnectionsAccountListAccountHolder, // output type of this zod object
  z.ZodTypeDef,
  FinancialConnectionsAccountListAccountHolder // the object to be transformed
> = z
  .object({
    account: z.string().optional(),
    customer: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      customer: "customer",
    });
  });

export const Schemas$FinancialConnectionsAccountListAccountHolder = {
  in: SchemaIn$FinancialConnectionsAccountListAccountHolder,
  out: SchemaOut$FinancialConnectionsAccountListAccountHolder,
};
