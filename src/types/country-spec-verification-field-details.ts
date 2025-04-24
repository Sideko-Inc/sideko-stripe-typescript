import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CountrySpecVerificationFieldDetails = {
  /**
   * Additional fields which are only required for some users.
   */
  additional: string[];
  /**
   * Fields which every account must eventually provide.
   */
  minimum: string[];
};

/**
 * @internal
 * CountrySpecVerificationFieldDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CountrySpecVerificationFieldDetails = {
  additional: string[];
  minimum: string[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CountrySpecVerificationFieldDetails
 */
const SchemaIn$CountrySpecVerificationFieldDetails: z.ZodType<
  CountrySpecVerificationFieldDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    additional: z.array(z.string()),
    minimum: z.array(z.string()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additional: "additional",
      minimum: "minimum",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CountrySpecVerificationFieldDetails
 */
const SchemaOut$CountrySpecVerificationFieldDetails: z.ZodType<
  External$CountrySpecVerificationFieldDetails, // output type of this zod object
  z.ZodTypeDef,
  CountrySpecVerificationFieldDetails // the object to be transformed
> = z
  .object({
    additional: z.array(z.string()),
    minimum: z.array(z.string()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      additional: "additional",
      minimum: "minimum",
    });
  });

export const Schemas$CountrySpecVerificationFieldDetails = {
  in: SchemaIn$CountrySpecVerificationFieldDetails,
  out: SchemaOut$CountrySpecVerificationFieldDetails,
};
