import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSourceVerifyBody
 */
export type CustomerSourceVerifyBody = {
  /**
   * Two positive integers, in *cents*, equal to the values of the microdeposits sent to the bank account.
   */
  amounts?: number[] | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (number[] | undefined)
    | (string[] | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * CustomerSourceVerifyBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSourceVerifyBody = {
  amounts?: number[] | undefined;
  expand?: string[] | undefined;

  [additionalProperty: string]:
    | (number[] | undefined)
    | (string[] | undefined)
    | External$CustomerSourceVerifyBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSourceVerifyBody
 */
const SchemaIn$CustomerSourceVerifyBody: z.ZodType<
  CustomerSourceVerifyBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amounts: z.array(z.number().int()).optional(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amounts: "amounts",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSourceVerifyBody
 */
const SchemaOut$CustomerSourceVerifyBody: z.ZodType<
  External$CustomerSourceVerifyBody, // output type of this zod object
  z.ZodTypeDef,
  CustomerSourceVerifyBody // the object to be transformed
> = z
  .object({
    amounts: z.array(z.number().int()).optional(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amounts: "amounts",
      expand: "expand",
    });
  });

export const Schemas$CustomerSourceVerifyBody = {
  in: SchemaIn$CustomerSourceVerifyBody,
  out: SchemaOut$CustomerSourceVerifyBody,
};
