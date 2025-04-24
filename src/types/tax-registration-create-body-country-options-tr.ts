import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsTr
 */
export type TaxRegistrationCreateBodyCountryOptionsTr = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsTr without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsTr = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsTr
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsTr: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsTr, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsTr
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsTr: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsTr, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsTr // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsTr = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsTr,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsTr,
};
