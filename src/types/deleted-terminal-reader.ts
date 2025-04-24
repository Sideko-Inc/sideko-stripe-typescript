import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DeletedTerminalReader = {
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
  object: "terminal.reader";
};

/**
 * @internal
 * DeletedTerminalReader without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeletedTerminalReader = {
  deleted: boolean;
  id: string;
  object: "terminal.reader";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeletedTerminalReader
 */
const SchemaIn$DeletedTerminalReader: z.ZodType<
  DeletedTerminalReader, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["terminal.reader"]),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeletedTerminalReader
 */
const SchemaOut$DeletedTerminalReader: z.ZodType<
  External$DeletedTerminalReader, // output type of this zod object
  z.ZodTypeDef,
  DeletedTerminalReader // the object to be transformed
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["terminal.reader"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deleted: "deleted",
      id: "id",
      object: "object",
    });
  });

export const Schemas$DeletedTerminalReader = {
  in: SchemaIn$DeletedTerminalReader,
  out: SchemaOut$DeletedTerminalReader,
};
