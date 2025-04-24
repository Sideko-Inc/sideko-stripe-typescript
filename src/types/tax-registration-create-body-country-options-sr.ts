import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsSr
 */
export type TaxRegistrationCreateBodyCountryOptionsSr = {
  type: "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsSr without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsSr = {
  type: "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsSr
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsSr: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsSr, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsSr
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsSr: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsSr, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsSr // the object to be transformed
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsSr = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsSr,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsSr,
};
