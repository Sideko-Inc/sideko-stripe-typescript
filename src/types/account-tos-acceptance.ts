import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type AccountTosAcceptance = {
  /**
   * The Unix timestamp marking when the account representative accepted their service agreement
   */
  date?: number | null | undefined;
  /**
   * The IP address from which the account representative accepted their service agreement
   */
  ip?: string | null | undefined;
  /**
   * The user's service agreement type
   */
  serviceAgreement?: string | undefined;
  /**
   * The user agent of the browser from which the account representative accepted their service agreement
   */
  userAgent?: string | null | undefined;
};

/**
 * @internal
 * AccountTosAcceptance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountTosAcceptance = {
  date?: number | null | undefined;
  ip?: string | null | undefined;
  service_agreement?: string | undefined;
  user_agent?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountTosAcceptance
 */
const SchemaIn$AccountTosAcceptance: z.ZodType<
  AccountTosAcceptance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    date: z.number().int().nullable().optional(),
    ip: z.string().nullable().optional(),
    service_agreement: z.string().optional(),
    user_agent: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      date: "date",
      ip: "ip",
      service_agreement: "serviceAgreement",
      user_agent: "userAgent",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountTosAcceptance
 */
const SchemaOut$AccountTosAcceptance: z.ZodType<
  External$AccountTosAcceptance, // output type of this zod object
  z.ZodTypeDef,
  AccountTosAcceptance // the object to be transformed
> = z
  .object({
    date: z.number().int().nullable().optional(),
    ip: z.string().nullable().optional(),
    serviceAgreement: z.string().optional(),
    userAgent: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      date: "date",
      ip: "ip",
      serviceAgreement: "service_agreement",
      userAgent: "user_agent",
    });
  });

export const Schemas$AccountTosAcceptance = {
  in: SchemaIn$AccountTosAcceptance,
  out: SchemaOut$AccountTosAcceptance,
};
