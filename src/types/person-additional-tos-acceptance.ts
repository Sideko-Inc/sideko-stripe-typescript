import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PersonAdditionalTosAcceptance = {
  /**
   * The Unix timestamp marking when the legal guardian accepted the service agreement.
   */
  date?: number | null | undefined;
  /**
   * The IP address from which the legal guardian accepted the service agreement.
   */
  ip?: string | null | undefined;
  /**
   * The user agent of the browser from which the legal guardian accepted the service agreement.
   */
  userAgent?: string | null | undefined;
};

/**
 * @internal
 * PersonAdditionalTosAcceptance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PersonAdditionalTosAcceptance = {
  date?: number | null | undefined;
  ip?: string | null | undefined;
  user_agent?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PersonAdditionalTosAcceptance
 */
const SchemaIn$PersonAdditionalTosAcceptance: z.ZodType<
  PersonAdditionalTosAcceptance, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PersonAdditionalTosAcceptance
 */
const SchemaOut$PersonAdditionalTosAcceptance: z.ZodType<
  External$PersonAdditionalTosAcceptance, // output type of this zod object
  z.ZodTypeDef,
  PersonAdditionalTosAcceptance // the object to be transformed
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

export const Schemas$PersonAdditionalTosAcceptance = {
  in: SchemaIn$PersonAdditionalTosAcceptance,
  out: SchemaOut$PersonAdditionalTosAcceptance,
};
