import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsNo
 */
export type TaxRegistrationCreateBodyCountryOptionsNo = {
  type: "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsNo without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsNo = {
  type: "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsNo
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsNo: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsNo, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsNo
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsNo: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsNo, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsNo // the object to be transformed
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsNo = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsNo,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsNo,
};
