import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type Application = {
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
 * Application without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Application = {
  id: string;
  name?: string | null | undefined;
  object: "application";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Application
 */
const SchemaIn$Application: z.ZodType<
  Application, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    id: z.string(),
    name: z.string().nullable().optional(),
    object: z.enum(["application"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      name: "name",
      object: "object",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Application
 */
const SchemaOut$Application: z.ZodType<
  External$Application, // output type of this zod object
  z.ZodTypeDef,
  Application // the object to be transformed
> = z
  .object({
    id: z.string(),
    name: z.string().nullable().optional(),
    object: z.enum(["application"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      name: "name",
      object: "object",
    });
  });

export const Schemas$Application = {
  in: SchemaIn$Application,
  out: SchemaOut$Application,
};
