import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsTj
 */
export type TaxRegistrationCreateBodyCountryOptionsTj = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsTj without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsTj = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsTj
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsTj: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsTj, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsTj
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsTj: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsTj, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsTj // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsTj = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsTj,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsTj,
};
