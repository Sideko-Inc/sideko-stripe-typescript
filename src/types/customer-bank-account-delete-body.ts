import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerBankAccountDeleteBody
 */
export type CustomerBankAccountDeleteBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]: (string[] | undefined) | any | null | undefined;
};

/**
 * @internal
 * CustomerBankAccountDeleteBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerBankAccountDeleteBody = {
  expand?: string[] | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | External$CustomerBankAccountDeleteBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerBankAccountDeleteBody
 */
const SchemaIn$CustomerBankAccountDeleteBody: z.ZodType<
  CustomerBankAccountDeleteBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerBankAccountDeleteBody
 */
const SchemaOut$CustomerBankAccountDeleteBody: z.ZodType<
  External$CustomerBankAccountDeleteBody, // output type of this zod object
  z.ZodTypeDef,
  CustomerBankAccountDeleteBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
    });
  });

export const Schemas$CustomerBankAccountDeleteBody = {
  in: SchemaIn$CustomerBankAccountDeleteBody,
  out: SchemaOut$CustomerBankAccountDeleteBody,
};
