import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DeletedRadarValueListItem = {
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
  object: "radar.value_list_item";
};

/**
 * @internal
 * DeletedRadarValueListItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeletedRadarValueListItem = {
  deleted: boolean;
  id: string;
  object: "radar.value_list_item";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeletedRadarValueListItem
 */
const SchemaIn$DeletedRadarValueListItem: z.ZodType<
  DeletedRadarValueListItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["radar.value_list_item"]),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeletedRadarValueListItem
 */
const SchemaOut$DeletedRadarValueListItem: z.ZodType<
  External$DeletedRadarValueListItem, // output type of this zod object
  z.ZodTypeDef,
  DeletedRadarValueListItem // the object to be transformed
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["radar.value_list_item"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deleted: "deleted",
      id: "id",
      object: "object",
    });
  });

export const Schemas$DeletedRadarValueListItem = {
  in: SchemaIn$DeletedRadarValueListItem,
  out: SchemaOut$DeletedRadarValueListItem,
};
