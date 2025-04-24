import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type LegalEntityDirectorshipDeclaration = {
  /**
   * The Unix timestamp marking when the directorship declaration attestation was made.
   */
  date?: number | null | undefined;
  /**
   * The IP address from which the directorship declaration attestation was made.
   */
  ip?: string | null | undefined;
  /**
   * The user-agent string from the browser where the directorship declaration attestation was made.
   */
  userAgent?: string | null | undefined;
};

/**
 * @internal
 * LegalEntityDirectorshipDeclaration without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$LegalEntityDirectorshipDeclaration = {
  date?: number | null | undefined;
  ip?: string | null | undefined;
  user_agent?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object LegalEntityDirectorshipDeclaration
 */
const SchemaIn$LegalEntityDirectorshipDeclaration: z.ZodType<
  LegalEntityDirectorshipDeclaration, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    date: z.number().int().nullable().optional(),
    ip: z.string().nullable().optional(),
    user_agent: z.string().nullable().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$LegalEntityDirectorshipDeclaration
 */
const SchemaOut$LegalEntityDirectorshipDeclaration: z.ZodType<
  External$LegalEntityDirectorshipDeclaration, // output type of this zod object
  z.ZodTypeDef,
  LegalEntityDirectorshipDeclaration // the object to be transformed
> = z
  .object({
    date: z.number().int().nullable().optional(),
    ip: z.string().nullable().optional(),
    userAgent: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      date: "date",
      ip: "ip",
      userAgent: "user_agent",
    });
  });

export const Schemas$LegalEntityDirectorshipDeclaration = {
  in: SchemaIn$LegalEntityDirectorshipDeclaration,
  out: SchemaOut$LegalEntityDirectorshipDeclaration,
};
