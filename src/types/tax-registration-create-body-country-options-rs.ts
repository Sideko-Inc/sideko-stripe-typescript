import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsRs
 */
export type TaxRegistrationCreateBodyCountryOptionsRs = {
  type: "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsRs without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsRs = {
  type: "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsRs
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsRs: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsRs, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsRs
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsRs: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsRs, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsRs // the object to be transformed
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsRs = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsRs,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsRs,
};
