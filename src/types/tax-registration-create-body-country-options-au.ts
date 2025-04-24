import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsAu
 */
export type TaxRegistrationCreateBodyCountryOptionsAu = {
  type: "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsAu without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsAu = {
  type: "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsAu
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsAu: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsAu, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsAu
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsAu: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsAu, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsAu // the object to be transformed
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsAu = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsAu,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsAu,
};
