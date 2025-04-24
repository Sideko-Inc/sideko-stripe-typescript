import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DeletedAccount = {
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
  object: "account";
};

/**
 * @internal
 * DeletedAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeletedAccount = {
  deleted: boolean;
  id: string;
  object: "account";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeletedAccount
 */
const SchemaIn$DeletedAccount: z.ZodType<
  DeletedAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["account"]),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeletedAccount
 */
const SchemaOut$DeletedAccount: z.ZodType<
  External$DeletedAccount, // output type of this zod object
  z.ZodTypeDef,
  DeletedAccount // the object to be transformed
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["account"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deleted: "deleted",
      id: "id",
      object: "object",
    });
  });

export const Schemas$DeletedAccount = {
  in: SchemaIn$DeletedAccount,
  out: SchemaOut$DeletedAccount,
};
