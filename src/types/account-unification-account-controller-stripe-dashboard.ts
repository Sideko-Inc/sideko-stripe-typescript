import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type AccountUnificationAccountControllerStripeDashboard = {
  /**
   * A value indicating the Stripe dashboard this account has access to independent of the Connect application.
   */
  type: "express" | "full" | "none";
};

/**
 * @internal
 * AccountUnificationAccountControllerStripeDashboard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUnificationAccountControllerStripeDashboard = {
  type: "express" | "full" | "none";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUnificationAccountControllerStripeDashboard
 */
const SchemaIn$AccountUnificationAccountControllerStripeDashboard: z.ZodType<
  AccountUnificationAccountControllerStripeDashboard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    type: z.enum(["express", "full", "none"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUnificationAccountControllerStripeDashboard
 */
const SchemaOut$AccountUnificationAccountControllerStripeDashboard: z.ZodType<
  External$AccountUnificationAccountControllerStripeDashboard, // output type of this zod object
  z.ZodTypeDef,
  AccountUnificationAccountControllerStripeDashboard // the object to be transformed
> = z
  .object({
    type: z.enum(["express", "full", "none"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$AccountUnificationAccountControllerStripeDashboard = {
  in: SchemaIn$AccountUnificationAccountControllerStripeDashboard,
  out: SchemaOut$AccountUnificationAccountControllerStripeDashboard,
};
