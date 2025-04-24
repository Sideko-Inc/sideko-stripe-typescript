import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * RadarValueListItemCreateBody
 */
export type RadarValueListItemCreateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The value of the item (whose type must match the type of the parent value list).
   */
  value: string;
  /**
   * The identifier of the value list which the created item will be added to.
   */
  valueList: string;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | string
    | string
    | any
    | null
    | undefined;
};

/**
 * @internal
 * RadarValueListItemCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RadarValueListItemCreateBody = {
  expand?: string[] | undefined;
  value: string;
  value_list: string;

  [additionalProperty: string]:
    | (string[] | undefined)
    | string
    | string
    | External$RadarValueListItemCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RadarValueListItemCreateBody
 */
const SchemaIn$RadarValueListItemCreateBody: z.ZodType<
  RadarValueListItemCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    value: z.string(),
    value_list: z.string(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      value: "value",
      value_list: "valueList",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RadarValueListItemCreateBody
 */
const SchemaOut$RadarValueListItemCreateBody: z.ZodType<
  External$RadarValueListItemCreateBody, // output type of this zod object
  z.ZodTypeDef,
  RadarValueListItemCreateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    value: z.string(),
    valueList: z.string(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      value: "value",
      valueList: "value_list",
    });
  });

export const Schemas$RadarValueListItemCreateBody = {
  in: SchemaIn$RadarValueListItemCreateBody,
  out: SchemaOut$RadarValueListItemCreateBody,
};
