import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DeletedTestHelpersTestClock = {
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
  object: "test_helpers.test_clock";
};

/**
 * @internal
 * DeletedTestHelpersTestClock without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeletedTestHelpersTestClock = {
  deleted: boolean;
  id: string;
  object: "test_helpers.test_clock";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeletedTestHelpersTestClock
 */
const SchemaIn$DeletedTestHelpersTestClock: z.ZodType<
  DeletedTestHelpersTestClock, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["test_helpers.test_clock"]),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeletedTestHelpersTestClock
 */
const SchemaOut$DeletedTestHelpersTestClock: z.ZodType<
  External$DeletedTestHelpersTestClock, // output type of this zod object
  z.ZodTypeDef,
  DeletedTestHelpersTestClock // the object to be transformed
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["test_helpers.test_clock"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deleted: "deleted",
      id: "id",
      object: "object",
    });
  });

export const Schemas$DeletedTestHelpersTestClock = {
  in: SchemaIn$DeletedTestHelpersTestClock,
  out: SchemaOut$DeletedTestHelpersTestClock,
};
