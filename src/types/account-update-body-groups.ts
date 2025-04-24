import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A hash of account group type to tokens. These are account groups this account should be added to.
 */
export type AccountUpdateBodyGroups = {
  paymentsPricing?: (string | string) | undefined;
};

/**
 * @internal
 * AccountUpdateBodyGroups without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyGroups = {
  payments_pricing?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyGroups
 */
const SchemaIn$AccountUpdateBodyGroups: z.ZodType<
  AccountUpdateBodyGroups, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    payments_pricing: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      payments_pricing: "paymentsPricing",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyGroups
 */
const SchemaOut$AccountUpdateBodyGroups: z.ZodType<
  External$AccountUpdateBodyGroups, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyGroups // the object to be transformed
> = z
  .object({
    paymentsPricing: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      paymentsPricing: "payments_pricing",
    });
  });

export const Schemas$AccountUpdateBodyGroups = {
  in: SchemaIn$AccountUpdateBodyGroups,
  out: SchemaOut$AccountUpdateBodyGroups,
};
