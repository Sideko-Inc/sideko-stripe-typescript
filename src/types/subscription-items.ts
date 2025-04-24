import {
  External$SubscriptionItem,
  Schemas$SubscriptionItem,
  SubscriptionItem,
} from "./subscription-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * List of subscription items, each with an attached price.
 */
export type SubscriptionItems = {
  /**
   * Details about each object.
   */
  data: SubscriptionItem[];
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
 * SubscriptionItems without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionItems = {
  data: External$SubscriptionItem[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionItems
 */
const SchemaIn$SubscriptionItems: z.ZodType<
  SubscriptionItems, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$SubscriptionItem.in)),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionItems
 */
const SchemaOut$SubscriptionItems: z.ZodType<
  External$SubscriptionItems, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionItems // the object to be transformed
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$SubscriptionItem.out)),
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

export const Schemas$SubscriptionItems = {
  in: SchemaIn$SubscriptionItems,
  out: SchemaOut$SubscriptionItems,
};
