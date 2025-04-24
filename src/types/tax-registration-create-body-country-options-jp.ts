import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsJp
 */
export type TaxRegistrationCreateBodyCountryOptionsJp = {
  type: "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsJp without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsJp = {
  type: "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsJp
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsJp: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsJp, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsJp
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsJp: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsJp, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsJp // the object to be transformed
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsJp = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsJp,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsJp,
};
