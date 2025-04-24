import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DeletedApplication = {
  /**
   * Always true for a deleted object
   */
  deleted: boolean;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The name of the application.
   */
  name?: string | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "application";
};

/**
 * @internal
 * DeletedApplication without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeletedApplication = {
  deleted: boolean;
  id: string;
  name?: string | null | undefined;
  object: "application";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeletedApplication
 */
const SchemaIn$DeletedApplication: z.ZodType<
  DeletedApplication, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    name: z.string().nullable().optional(),
    object: z.enum(["application"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deleted: "deleted",
      id: "id",
      name: "name",
      object: "object",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeletedApplication
 */
const SchemaOut$DeletedApplication: z.ZodType<
  External$DeletedApplication, // output type of this zod object
  z.ZodTypeDef,
  DeletedApplication // the object to be transformed
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    name: z.string().nullable().optional(),
    object: z.enum(["application"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deleted: "deleted",
      id: "id",
      name: "name",
      object: "object",
    });
  });

export const Schemas$DeletedApplication = {
  in: SchemaIn$DeletedApplication,
  out: SchemaOut$DeletedApplication,
};
