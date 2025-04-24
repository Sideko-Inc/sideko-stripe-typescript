import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyControllerStripeDashboard
 */
export type AccountCreateBodyControllerStripeDashboard = {
  type?: ("express" | "full" | "none") | undefined;
};

/**
 * @internal
 * AccountCreateBodyControllerStripeDashboard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyControllerStripeDashboard = {
  type?: ("express" | "full" | "none") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyControllerStripeDashboard
 */
const SchemaIn$AccountCreateBodyControllerStripeDashboard: z.ZodType<
  AccountCreateBodyControllerStripeDashboard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    type: z.enum(["express", "full", "none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyControllerStripeDashboard
 */
const SchemaOut$AccountCreateBodyControllerStripeDashboard: z.ZodType<
  External$AccountCreateBodyControllerStripeDashboard, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyControllerStripeDashboard // the object to be transformed
> = z
  .object({
    type: z.enum(["express", "full", "none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$AccountCreateBodyControllerStripeDashboard = {
  in: SchemaIn$AccountCreateBodyControllerStripeDashboard,
  out: SchemaOut$AccountCreateBodyControllerStripeDashboard,
};
