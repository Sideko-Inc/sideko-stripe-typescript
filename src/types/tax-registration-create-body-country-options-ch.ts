import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsCh
 */
export type TaxRegistrationCreateBodyCountryOptionsCh = {
  type: "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsCh without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsCh = {
  type: "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsCh
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsCh: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsCh, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsCh
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsCh: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsCh, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsCh // the object to be transformed
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsCh = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsCh,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsCh,
};
