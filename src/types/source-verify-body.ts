import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceVerifyBody
 */
export type SourceVerifyBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The values needed to verify the source.
   */
  values: string[];

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | string[]
    | any
    | null
    | undefined;
};

/**
 * @internal
 * SourceVerifyBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceVerifyBody = {
  expand?: string[] | undefined;
  values: string[];

  [additionalProperty: string]:
    | (string[] | undefined)
    | string[]
    | External$SourceVerifyBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceVerifyBody
 */
const SchemaIn$SourceVerifyBody: z.ZodType<
  SourceVerifyBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    values: z.array(z.string()),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      values: "values",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceVerifyBody
 */
const SchemaOut$SourceVerifyBody: z.ZodType<
  External$SourceVerifyBody, // output type of this zod object
  z.ZodTypeDef,
  SourceVerifyBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    values: z.array(z.string()),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      values: "values",
    });
  });

export const Schemas$SourceVerifyBody = {
  in: SchemaIn$SourceVerifyBody,
  out: SchemaOut$SourceVerifyBody,
};
