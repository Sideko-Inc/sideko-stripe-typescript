import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsVn
 */
export type TaxRegistrationCreateBodyCountryOptionsVn = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsVn without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsVn = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsVn
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsVn: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsVn, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsVn
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsVn: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsVn, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsVn // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsVn = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsVn,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsVn,
};
