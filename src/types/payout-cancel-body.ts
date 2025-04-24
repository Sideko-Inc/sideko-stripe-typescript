import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PayoutCancelBody
 */
export type PayoutCancelBody = {
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
 * PayoutCancelBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PayoutCancelBody = {
  expand?: string[] | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | External$PayoutCancelBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PayoutCancelBody
 */
const SchemaIn$PayoutCancelBody: z.ZodType<
  PayoutCancelBody, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PayoutCancelBody
 */
const SchemaOut$PayoutCancelBody: z.ZodType<
  External$PayoutCancelBody, // output type of this zod object
  z.ZodTypeDef,
  PayoutCancelBody // the object to be transformed
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

export const Schemas$PayoutCancelBody = {
  in: SchemaIn$PayoutCancelBody,
  out: SchemaOut$PayoutCancelBody,
};
