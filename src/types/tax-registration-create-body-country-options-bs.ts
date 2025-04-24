import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsBs
 */
export type TaxRegistrationCreateBodyCountryOptionsBs = {
  type: "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsBs without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsBs = {
  type: "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsBs
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsBs: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsBs, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsBs
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsBs: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsBs, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsBs // the object to be transformed
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsBs = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsBs,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsBs,
};
