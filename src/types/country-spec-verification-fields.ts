import {
  CountrySpecVerificationFieldDetails,
  External$CountrySpecVerificationFieldDetails,
  Schemas$CountrySpecVerificationFieldDetails,
} from "./country-spec-verification-field-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CountrySpecVerificationFields = {
  company: CountrySpecVerificationFieldDetails;
  individual: CountrySpecVerificationFieldDetails;
};

/**
 * @internal
 * CountrySpecVerificationFields without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CountrySpecVerificationFields = {
  company: External$CountrySpecVerificationFieldDetails;
  individual: External$CountrySpecVerificationFieldDetails;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CountrySpecVerificationFields
 */
const SchemaIn$CountrySpecVerificationFields: z.ZodType<
  CountrySpecVerificationFields, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    company: Schemas$CountrySpecVerificationFieldDetails.in,
    individual: Schemas$CountrySpecVerificationFieldDetails.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      company: "company",
      individual: "individual",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CountrySpecVerificationFields
 */
const SchemaOut$CountrySpecVerificationFields: z.ZodType<
  External$CountrySpecVerificationFields, // output type of this zod object
  z.ZodTypeDef,
  CountrySpecVerificationFields // the object to be transformed
> = z
  .object({
    company: Schemas$CountrySpecVerificationFieldDetails.out,
    individual: Schemas$CountrySpecVerificationFieldDetails.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      company: "company",
      individual: "individual",
    });
  });

export const Schemas$CountrySpecVerificationFields = {
  in: SchemaIn$CountrySpecVerificationFields,
  out: SchemaOut$CountrySpecVerificationFields,
};
