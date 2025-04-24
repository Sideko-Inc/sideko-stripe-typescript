import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsAo
 */
export type TaxRegistrationCreateBodyCountryOptionsAo = {
  type: "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsAo without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsAo = {
  type: "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsAo
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsAo: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsAo, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsAo
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsAo: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsAo, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsAo // the object to be transformed
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsAo = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsAo,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsAo,
};
