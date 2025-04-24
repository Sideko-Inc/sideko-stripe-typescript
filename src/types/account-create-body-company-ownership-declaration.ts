import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCompanyOwnershipDeclaration
 */
export type AccountCreateBodyCompanyOwnershipDeclaration = {
  date?: number | undefined;
  ip?: string | undefined;
  userAgent?: string | undefined;
};

/**
 * @internal
 * AccountCreateBodyCompanyOwnershipDeclaration without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCompanyOwnershipDeclaration = {
  date?: number | undefined;
  ip?: string | undefined;
  user_agent?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCompanyOwnershipDeclaration
 */
const SchemaIn$AccountCreateBodyCompanyOwnershipDeclaration: z.ZodType<
  AccountCreateBodyCompanyOwnershipDeclaration, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    date: z.number().int().optional(),
    ip: z.string().optional(),
    user_agent: z.string().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCompanyOwnershipDeclaration
 */
const SchemaOut$AccountCreateBodyCompanyOwnershipDeclaration: z.ZodType<
  External$AccountCreateBodyCompanyOwnershipDeclaration, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCompanyOwnershipDeclaration // the object to be transformed
> = z
  .object({
    date: z.number().int().optional(),
    ip: z.string().optional(),
    userAgent: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      date: "date",
      ip: "ip",
      userAgent: "user_agent",
    });
  });

export const Schemas$AccountCreateBodyCompanyOwnershipDeclaration = {
  in: SchemaIn$AccountCreateBodyCompanyOwnershipDeclaration,
  out: SchemaOut$AccountCreateBodyCompanyOwnershipDeclaration,
};
