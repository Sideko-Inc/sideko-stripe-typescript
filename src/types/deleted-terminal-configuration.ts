import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DeletedTerminalConfiguration = {
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
  object: "terminal.configuration";
};

/**
 * @internal
 * DeletedTerminalConfiguration without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeletedTerminalConfiguration = {
  deleted: boolean;
  id: string;
  object: "terminal.configuration";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeletedTerminalConfiguration
 */
const SchemaIn$DeletedTerminalConfiguration: z.ZodType<
  DeletedTerminalConfiguration, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["terminal.configuration"]),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeletedTerminalConfiguration
 */
const SchemaOut$DeletedTerminalConfiguration: z.ZodType<
  External$DeletedTerminalConfiguration, // output type of this zod object
  z.ZodTypeDef,
  DeletedTerminalConfiguration // the object to be transformed
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["terminal.configuration"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deleted: "deleted",
      id: "id",
      object: "object",
    });
  });

export const Schemas$DeletedTerminalConfiguration = {
  in: SchemaIn$DeletedTerminalConfiguration,
  out: SchemaOut$DeletedTerminalConfiguration,
};
