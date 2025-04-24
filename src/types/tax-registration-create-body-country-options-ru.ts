import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsRu
 */
export type TaxRegistrationCreateBodyCountryOptionsRu = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsRu without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsRu = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsRu
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsRu: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsRu, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsRu
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsRu: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsRu, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsRu // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsRu = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsRu,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsRu,
};
