import {
  External$RadarValueListItem,
  RadarValueListItem,
  Schemas$RadarValueListItem,
} from "./radar-value-list-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * List of items contained within this value list.
 */
export type RadarValueListListItems = {
  /**
   * Details about each object.
   */
  data: RadarValueListItem[];
  /**
   * True if this list has another page of items after this one that can be fetched.
   */
  hasMore: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
   */
  object: "list";
  /**
   * The URL where this list can be accessed.
   */
  url: string;
};

/**
 * @internal
 * RadarValueListListItems without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RadarValueListListItems = {
  data: External$RadarValueListItem[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RadarValueListListItems
 */
const SchemaIn$RadarValueListListItems: z.ZodType<
  RadarValueListListItems, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$RadarValueListItem.in),
    has_more: z.boolean(),
    object: z.enum(["list"]),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      has_more: "hasMore",
      object: "object",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RadarValueListListItems
 */
const SchemaOut$RadarValueListListItems: z.ZodType<
  External$RadarValueListListItems, // output type of this zod object
  z.ZodTypeDef,
  RadarValueListListItems // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$RadarValueListItem.out),
    hasMore: z.boolean(),
    object: z.enum(["list"]),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      hasMore: "has_more",
      object: "object",
      url: "url",
    });
  });

export const Schemas$RadarValueListListItems = {
  in: SchemaIn$RadarValueListListItems,
  out: SchemaOut$RadarValueListListItems,
};
