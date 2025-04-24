import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type LegalEntityUboDeclaration = {
  /**
   * The Unix timestamp marking when the beneficial owner attestation was made.
   */
  date?: number | null | undefined;
  /**
   * The IP address from which the beneficial owner attestation was made.
   */
  ip?: string | null | undefined;
  /**
   * The user-agent string from the browser where the beneficial owner attestation was made.
   */
  userAgent?: string | null | undefined;
};

/**
 * @internal
 * LegalEntityUboDeclaration without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$LegalEntityUboDeclaration = {
  date?: number | null | undefined;
  ip?: string | null | undefined;
  user_agent?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object LegalEntityUboDeclaration
 */
const SchemaIn$LegalEntityUboDeclaration: z.ZodType<
  LegalEntityUboDeclaration, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$LegalEntityUboDeclaration
 */
const SchemaOut$LegalEntityUboDeclaration: z.ZodType<
  External$LegalEntityUboDeclaration, // output type of this zod object
  z.ZodTypeDef,
  LegalEntityUboDeclaration // the object to be transformed
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

export const Schemas$LegalEntityUboDeclaration = {
  in: SchemaIn$LegalEntityUboDeclaration,
  out: SchemaOut$LegalEntityUboDeclaration,
};
