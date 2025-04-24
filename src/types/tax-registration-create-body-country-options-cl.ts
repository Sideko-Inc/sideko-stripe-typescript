import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsCl
 */
export type TaxRegistrationCreateBodyCountryOptionsCl = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsCl without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsCl = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsCl
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsCl: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsCl, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsCl
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsCl: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsCl, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsCl // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsCl = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsCl,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsCl,
};
