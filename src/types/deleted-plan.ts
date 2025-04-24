import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DeletedPlan = {
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
  object: "plan";
};

/**
 * @internal
 * DeletedPlan without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeletedPlan = {
  deleted: boolean;
  id: string;
  object: "plan";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeletedPlan
 */
const SchemaIn$DeletedPlan: z.ZodType<
  DeletedPlan, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["plan"]),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeletedPlan
 */
const SchemaOut$DeletedPlan: z.ZodType<
  External$DeletedPlan, // output type of this zod object
  z.ZodTypeDef,
  DeletedPlan // the object to be transformed
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["plan"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deleted: "deleted",
      id: "id",
      object: "object",
    });
  });

export const Schemas$DeletedPlan = {
  in: SchemaIn$DeletedPlan,
  out: SchemaOut$DeletedPlan,
};
