import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type AccountTermsOfService = {
  /**
   * The Unix timestamp marking when the account representative accepted the service agreement.
   */
  date?: number | null | undefined;
  /**
   * The IP address from which the account representative accepted the service agreement.
   */
  ip?: string | null | undefined;
  /**
   * The user agent of the browser from which the account representative accepted the service agreement.
   */
  userAgent?: string | undefined;
};

/**
 * @internal
 * AccountTermsOfService without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountTermsOfService = {
  date?: number | null | undefined;
  ip?: string | null | undefined;
  user_agent?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountTermsOfService
 */
const SchemaIn$AccountTermsOfService: z.ZodType<
  AccountTermsOfService, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    date: z.number().int().nullable().optional(),
    ip: z.string().nullable().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountTermsOfService
 */
const SchemaOut$AccountTermsOfService: z.ZodType<
  External$AccountTermsOfService, // output type of this zod object
  z.ZodTypeDef,
  AccountTermsOfService // the object to be transformed
> = z
  .object({
    date: z.number().int().nullable().optional(),
    ip: z.string().nullable().optional(),
    userAgent: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      date: "date",
      ip: "ip",
      userAgent: "user_agent",
    });
  });

export const Schemas$AccountTermsOfService = {
  in: SchemaIn$AccountTermsOfService,
  out: SchemaOut$AccountTermsOfService,
};
