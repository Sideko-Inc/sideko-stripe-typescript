import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsSg
 */
export type TaxRegistrationCreateBodyCountryOptionsSg = {
  type: "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsSg without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsSg = {
  type: "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsSg
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsSg: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsSg, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsSg
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsSg: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsSg, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsSg // the object to be transformed
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsSg = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsSg,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsSg,
};
