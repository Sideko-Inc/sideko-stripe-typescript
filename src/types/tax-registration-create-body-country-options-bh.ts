import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsBh
 */
export type TaxRegistrationCreateBodyCountryOptionsBh = {
  type: "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsBh without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsBh = {
  type: "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsBh
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsBh: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsBh, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsBh
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsBh: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsBh, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsBh // the object to be transformed
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsBh = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsBh,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsBh,
};
