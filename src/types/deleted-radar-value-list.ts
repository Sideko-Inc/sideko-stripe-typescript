import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DeletedRadarValueList = {
  /**
   * Always true for a deleted object
   */
  deleted: boolean;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "radar.value_list";
};

/**
 * @internal
 * DeletedRadarValueList without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeletedRadarValueList = {
  deleted: boolean;
  id: string;
  object: "radar.value_list";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeletedRadarValueList
 */
const SchemaIn$DeletedRadarValueList: z.ZodType<
  DeletedRadarValueList, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["radar.value_list"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deleted: "deleted",
      id: "id",
      object: "object",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeletedRadarValueList
 */
const SchemaOut$DeletedRadarValueList: z.ZodType<
  External$DeletedRadarValueList, // output type of this zod object
  z.ZodTypeDef,
  DeletedRadarValueList // the object to be transformed
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["radar.value_list"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deleted: "deleted",
      id: "id",
      object: "object",
    });
  });

export const Schemas$DeletedRadarValueList = {
  in: SchemaIn$DeletedRadarValueList,
  out: SchemaOut$DeletedRadarValueList,
};
