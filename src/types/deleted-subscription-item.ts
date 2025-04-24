import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DeletedSubscriptionItem = {
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
  object: "subscription_item";
};

/**
 * @internal
 * DeletedSubscriptionItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeletedSubscriptionItem = {
  deleted: boolean;
  id: string;
  object: "subscription_item";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeletedSubscriptionItem
 */
const SchemaIn$DeletedSubscriptionItem: z.ZodType<
  DeletedSubscriptionItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["subscription_item"]),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeletedSubscriptionItem
 */
const SchemaOut$DeletedSubscriptionItem: z.ZodType<
  External$DeletedSubscriptionItem, // output type of this zod object
  z.ZodTypeDef,
  DeletedSubscriptionItem // the object to be transformed
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["subscription_item"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deleted: "deleted",
      id: "id",
      object: "object",
    });
  });

export const Schemas$DeletedSubscriptionItem = {
  in: SchemaIn$DeletedSubscriptionItem,
  out: SchemaOut$DeletedSubscriptionItem,
};
