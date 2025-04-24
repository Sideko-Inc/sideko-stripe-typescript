import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TokenCreateBodyAccountCompanyOwnershipDeclaration
 */
export type TokenCreateBodyAccountCompanyOwnershipDeclaration = {
  date?: number | undefined;
  ip?: string | undefined;
  userAgent?: string | undefined;
};

/**
 * @internal
 * TokenCreateBodyAccountCompanyOwnershipDeclaration without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyAccountCompanyOwnershipDeclaration = {
  date?: number | undefined;
  ip?: string | undefined;
  user_agent?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyAccountCompanyOwnershipDeclaration
 */
const SchemaIn$TokenCreateBodyAccountCompanyOwnershipDeclaration: z.ZodType<
  TokenCreateBodyAccountCompanyOwnershipDeclaration, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyAccountCompanyOwnershipDeclaration
 */
const SchemaOut$TokenCreateBodyAccountCompanyOwnershipDeclaration: z.ZodType<
  External$TokenCreateBodyAccountCompanyOwnershipDeclaration, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyAccountCompanyOwnershipDeclaration // the object to be transformed
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

export const Schemas$TokenCreateBodyAccountCompanyOwnershipDeclaration = {
  in: SchemaIn$TokenCreateBodyAccountCompanyOwnershipDeclaration,
  out: SchemaOut$TokenCreateBodyAccountCompanyOwnershipDeclaration,
};
