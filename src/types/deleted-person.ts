import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DeletedPerson = {
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
  object: "person";
};

/**
 * @internal
 * DeletedPerson without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeletedPerson = {
  deleted: boolean;
  id: string;
  object: "person";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeletedPerson
 */
const SchemaIn$DeletedPerson: z.ZodType<
  DeletedPerson, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["person"]),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeletedPerson
 */
const SchemaOut$DeletedPerson: z.ZodType<
  External$DeletedPerson, // output type of this zod object
  z.ZodTypeDef,
  DeletedPerson // the object to be transformed
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["person"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deleted: "deleted",
      id: "id",
      object: "object",
    });
  });

export const Schemas$DeletedPerson = {
  in: SchemaIn$DeletedPerson,
  out: SchemaOut$DeletedPerson,
};
