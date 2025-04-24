import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TokenCreateBodyPersonAdditionalTosAcceptancesAccount
 */
export type TokenCreateBodyPersonAdditionalTosAcceptancesAccount = {
  date?: number | undefined;
  ip?: string | undefined;
  userAgent?: (string | string) | undefined;
};

/**
 * @internal
 * TokenCreateBodyPersonAdditionalTosAcceptancesAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyPersonAdditionalTosAcceptancesAccount = {
  date?: number | undefined;
  ip?: string | undefined;
  user_agent?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyPersonAdditionalTosAcceptancesAccount
 */
const SchemaIn$TokenCreateBodyPersonAdditionalTosAcceptancesAccount: z.ZodType<
  TokenCreateBodyPersonAdditionalTosAcceptancesAccount, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyPersonAdditionalTosAcceptancesAccount
 */
const SchemaOut$TokenCreateBodyPersonAdditionalTosAcceptancesAccount: z.ZodType<
  External$TokenCreateBodyPersonAdditionalTosAcceptancesAccount, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyPersonAdditionalTosAcceptancesAccount // the object to be transformed
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

export const Schemas$TokenCreateBodyPersonAdditionalTosAcceptancesAccount = {
  in: SchemaIn$TokenCreateBodyPersonAdditionalTosAcceptancesAccount,
  out: SchemaOut$TokenCreateBodyPersonAdditionalTosAcceptancesAccount,
};
