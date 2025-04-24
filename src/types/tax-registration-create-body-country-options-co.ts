import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsCo
 */
export type TaxRegistrationCreateBodyCountryOptionsCo = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsCo without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsCo = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsCo
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsCo: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsCo, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsCo
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsCo: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsCo, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsCo // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsCo = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsCo,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsCo,
};
