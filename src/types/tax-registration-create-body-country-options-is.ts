import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsIs
 */
export type TaxRegistrationCreateBodyCountryOptionsIs = {
  type: "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsIs without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsIs = {
  type: "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsIs
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsIs: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsIs, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsIs
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsIs: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsIs, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsIs // the object to be transformed
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsIs = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsIs,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsIs,
};
