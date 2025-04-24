import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingCardholderUserTermsAcceptance = {
  /**
   * The Unix timestamp marking when the cardholder accepted the Authorized User Terms.
   */
  date?: number | null | undefined;
  /**
   * The IP address from which the cardholder accepted the Authorized User Terms.
   */
  ip?: string | null | undefined;
  /**
   * The user agent of the browser from which the cardholder accepted the Authorized User Terms.
   */
  userAgent?: string | null | undefined;
};

/**
 * @internal
 * IssuingCardholderUserTermsAcceptance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardholderUserTermsAcceptance = {
  date?: number | null | undefined;
  ip?: string | null | undefined;
  user_agent?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardholderUserTermsAcceptance
 */
const SchemaIn$IssuingCardholderUserTermsAcceptance: z.ZodType<
  IssuingCardholderUserTermsAcceptance, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardholderUserTermsAcceptance
 */
const SchemaOut$IssuingCardholderUserTermsAcceptance: z.ZodType<
  External$IssuingCardholderUserTermsAcceptance, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardholderUserTermsAcceptance // the object to be transformed
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

export const Schemas$IssuingCardholderUserTermsAcceptance = {
  in: SchemaIn$IssuingCardholderUserTermsAcceptance,
  out: SchemaOut$IssuingCardholderUserTermsAcceptance,
};
