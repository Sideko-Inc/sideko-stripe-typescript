import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPersonUpdateBodyAdditionalTosAcceptancesAccount
 */
export type AccountPersonUpdateBodyAdditionalTosAcceptancesAccount = {
  date?: number | undefined;
  ip?: string | undefined;
  userAgent?: (string | string) | undefined;
};

/**
 * @internal
 * AccountPersonUpdateBodyAdditionalTosAcceptancesAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPersonUpdateBodyAdditionalTosAcceptancesAccount = {
  date?: number | undefined;
  ip?: string | undefined;
  user_agent?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPersonUpdateBodyAdditionalTosAcceptancesAccount
 */
const SchemaIn$AccountPersonUpdateBodyAdditionalTosAcceptancesAccount: z.ZodType<
  AccountPersonUpdateBodyAdditionalTosAcceptancesAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    date: z.number().int().optional(),
    ip: z.string().optional(),
    user_agent: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      date: "date",
      ip: "ip",
      user_agent: "userAgent",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPersonUpdateBodyAdditionalTosAcceptancesAccount
 */
const SchemaOut$AccountPersonUpdateBodyAdditionalTosAcceptancesAccount: z.ZodType<
  External$AccountPersonUpdateBodyAdditionalTosAcceptancesAccount, // output type of this zod object
  z.ZodTypeDef,
  AccountPersonUpdateBodyAdditionalTosAcceptancesAccount // the object to be transformed
> = z
  .object({
    date: z.number().int().optional(),
    ip: z.string().optional(),
    userAgent: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      date: "date",
      ip: "ip",
      userAgent: "user_agent",
    });
  });

export const Schemas$AccountPersonUpdateBodyAdditionalTosAcceptancesAccount = {
  in: SchemaIn$AccountPersonUpdateBodyAdditionalTosAcceptancesAccount,
  out: SchemaOut$AccountPersonUpdateBodyAdditionalTosAcceptancesAccount,
};
