import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsZw
 */
export type TaxRegistrationCreateBodyCountryOptionsZw = {
  type: "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsZw without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsZw = {
  type: "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsZw
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsZw: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsZw, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsZw
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsZw: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsZw, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsZw // the object to be transformed
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsZw = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsZw,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsZw,
};
