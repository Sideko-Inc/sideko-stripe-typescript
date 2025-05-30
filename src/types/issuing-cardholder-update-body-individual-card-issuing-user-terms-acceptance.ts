import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingCardholderUpdateBodyIndividualCardIssuingUserTermsAcceptance
 */
export type IssuingCardholderUpdateBodyIndividualCardIssuingUserTermsAcceptance =
  {
    date?: number | undefined;
    ip?: string | undefined;
    userAgent?: (string | string) | undefined;
  };

/**
 * @internal
 * IssuingCardholderUpdateBodyIndividualCardIssuingUserTermsAcceptance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardholderUpdateBodyIndividualCardIssuingUserTermsAcceptance =
  {
    date?: number | undefined;
    ip?: string | undefined;
    user_agent?: (string | string) | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardholderUpdateBodyIndividualCardIssuingUserTermsAcceptance
 */
const SchemaIn$IssuingCardholderUpdateBodyIndividualCardIssuingUserTermsAcceptance: z.ZodType<
  IssuingCardholderUpdateBodyIndividualCardIssuingUserTermsAcceptance, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardholderUpdateBodyIndividualCardIssuingUserTermsAcceptance
 */
const SchemaOut$IssuingCardholderUpdateBodyIndividualCardIssuingUserTermsAcceptance: z.ZodType<
  External$IssuingCardholderUpdateBodyIndividualCardIssuingUserTermsAcceptance, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardholderUpdateBodyIndividualCardIssuingUserTermsAcceptance // the object to be transformed
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

export const Schemas$IssuingCardholderUpdateBodyIndividualCardIssuingUserTermsAcceptance =
  {
    in: SchemaIn$IssuingCardholderUpdateBodyIndividualCardIssuingUserTermsAcceptance,
    out: SchemaOut$IssuingCardholderUpdateBodyIndividualCardIssuingUserTermsAcceptance,
  };
