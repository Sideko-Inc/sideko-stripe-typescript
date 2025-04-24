import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCompanyDirectorshipDeclaration
 */
export type AccountUpdateBodyCompanyDirectorshipDeclaration = {
  date?: number | undefined;
  ip?: string | undefined;
  userAgent?: string | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCompanyDirectorshipDeclaration without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCompanyDirectorshipDeclaration = {
  date?: number | undefined;
  ip?: string | undefined;
  user_agent?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCompanyDirectorshipDeclaration
 */
const SchemaIn$AccountUpdateBodyCompanyDirectorshipDeclaration: z.ZodType<
  AccountUpdateBodyCompanyDirectorshipDeclaration, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCompanyDirectorshipDeclaration
 */
const SchemaOut$AccountUpdateBodyCompanyDirectorshipDeclaration: z.ZodType<
  External$AccountUpdateBodyCompanyDirectorshipDeclaration, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCompanyDirectorshipDeclaration // the object to be transformed
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

export const Schemas$AccountUpdateBodyCompanyDirectorshipDeclaration = {
  in: SchemaIn$AccountUpdateBodyCompanyDirectorshipDeclaration,
  out: SchemaOut$AccountUpdateBodyCompanyDirectorshipDeclaration,
};
