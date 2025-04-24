import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DeletedTerminalLocation = {
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
  object: "terminal.location";
};

/**
 * @internal
 * DeletedTerminalLocation without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeletedTerminalLocation = {
  deleted: boolean;
  id: string;
  object: "terminal.location";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeletedTerminalLocation
 */
const SchemaIn$DeletedTerminalLocation: z.ZodType<
  DeletedTerminalLocation, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["terminal.location"]),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeletedTerminalLocation
 */
const SchemaOut$DeletedTerminalLocation: z.ZodType<
  External$DeletedTerminalLocation, // output type of this zod object
  z.ZodTypeDef,
  DeletedTerminalLocation // the object to be transformed
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["terminal.location"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deleted: "deleted",
      id: "id",
      object: "object",
    });
  });

export const Schemas$DeletedTerminalLocation = {
  in: SchemaIn$DeletedTerminalLocation,
  out: SchemaOut$DeletedTerminalLocation,
};
