import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsCd
 */
export type TaxRegistrationCreateBodyCountryOptionsCd = {
  type: "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsCd without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsCd = {
  type: "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsCd
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsCd: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsCd, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsCd
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsCd: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsCd, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsCd // the object to be transformed
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsCd = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsCd,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsCd,
};
