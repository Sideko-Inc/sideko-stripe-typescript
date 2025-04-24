import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodySettingsTreasuryTosAcceptance
 */
export type AccountCreateBodySettingsTreasuryTosAcceptance = {
  date?: number | undefined;
  ip?: string | undefined;
  userAgent?: (string | string) | undefined;
};

/**
 * @internal
 * AccountCreateBodySettingsTreasuryTosAcceptance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodySettingsTreasuryTosAcceptance = {
  date?: number | undefined;
  ip?: string | undefined;
  user_agent?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodySettingsTreasuryTosAcceptance
 */
const SchemaIn$AccountCreateBodySettingsTreasuryTosAcceptance: z.ZodType<
  AccountCreateBodySettingsTreasuryTosAcceptance, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodySettingsTreasuryTosAcceptance
 */
const SchemaOut$AccountCreateBodySettingsTreasuryTosAcceptance: z.ZodType<
  External$AccountCreateBodySettingsTreasuryTosAcceptance, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodySettingsTreasuryTosAcceptance // the object to be transformed
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

export const Schemas$AccountCreateBodySettingsTreasuryTosAcceptance = {
  in: SchemaIn$AccountCreateBodySettingsTreasuryTosAcceptance,
  out: SchemaOut$AccountCreateBodySettingsTreasuryTosAcceptance,
};
