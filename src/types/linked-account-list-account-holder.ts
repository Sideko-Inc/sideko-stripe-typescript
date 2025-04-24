import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * If present, only return accounts that belong to the specified account holder. `account_holder[customer]` and `account_holder[account]` are mutually exclusive.
 */
export type LinkedAccountListAccountHolder = {
  account?: string | undefined;
  customer?: string | undefined;
};

/**
 * @internal
 * LinkedAccountListAccountHolder without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$LinkedAccountListAccountHolder = {
  account?: string | undefined;
  customer?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object LinkedAccountListAccountHolder
 */
const SchemaIn$LinkedAccountListAccountHolder: z.ZodType<
  LinkedAccountListAccountHolder, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$LinkedAccountListAccountHolder
 */
const SchemaOut$LinkedAccountListAccountHolder: z.ZodType<
  External$LinkedAccountListAccountHolder, // output type of this zod object
  z.ZodTypeDef,
  LinkedAccountListAccountHolder // the object to be transformed
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

export const Schemas$LinkedAccountListAccountHolder = {
  in: SchemaIn$LinkedAccountListAccountHolder,
  out: SchemaOut$LinkedAccountListAccountHolder,
};
