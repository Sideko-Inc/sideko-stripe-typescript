import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Value list items allow you to add specific values to a given Radar value list, which can then be used in rules.
 *
 * Related guide: [Managing list items](https://stripe.com/docs/radar/lists#managing-list-items)
 */
export type RadarValueListItem = {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The name or email address of the user who added this item to the value list.
   */
  createdBy: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "radar.value_list_item";
  /**
   * The value of the item.
   */
  value: string;
  /**
   * The identifier of the value list this item belongs to.
   */
  valueList: string;
};

/**
 * @internal
 * RadarValueListItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RadarValueListItem = {
  created: number;
  created_by: string;
  id: string;
  livemode: boolean;
  object: "radar.value_list_item";
  value: string;
  value_list: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RadarValueListItem
 */
const SchemaIn$RadarValueListItem: z.ZodType<
  RadarValueListItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    created: z.number().int(),
    created_by: z.string(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["radar.value_list_item"]),
    value: z.string(),
    value_list: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      created_by: "createdBy",
      id: "id",
      livemode: "livemode",
      object: "object",
      value: "value",
      value_list: "valueList",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RadarValueListItem
 */
const SchemaOut$RadarValueListItem: z.ZodType<
  External$RadarValueListItem, // output type of this zod object
  z.ZodTypeDef,
  RadarValueListItem // the object to be transformed
> = z
  .object({
    created: z.number().int(),
    createdBy: z.string(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["radar.value_list_item"]),
    value: z.string(),
    valueList: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      createdBy: "created_by",
      id: "id",
      livemode: "livemode",
      object: "object",
      value: "value",
      valueList: "value_list",
    });
  });

export const Schemas$RadarValueListItem = {
  in: SchemaIn$RadarValueListItem,
  out: SchemaOut$RadarValueListItem,
};
