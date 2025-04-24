import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyControllerFees
 */
export type AccountCreateBodyControllerFees = {
  payer?: ("account" | "application") | undefined;
};

/**
 * @internal
 * AccountCreateBodyControllerFees without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyControllerFees = {
  payer?: ("account" | "application") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyControllerFees
 */
const SchemaIn$AccountCreateBodyControllerFees: z.ZodType<
  AccountCreateBodyControllerFees, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    payer: z.enum(["account", "application"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      payer: "payer",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyControllerFees
 */
const SchemaOut$AccountCreateBodyControllerFees: z.ZodType<
  External$AccountCreateBodyControllerFees, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyControllerFees // the object to be transformed
> = z
  .object({
    payer: z.enum(["account", "application"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      payer: "payer",
    });
  });

export const Schemas$AccountCreateBodyControllerFees = {
  in: SchemaIn$AccountCreateBodyControllerFees,
  out: SchemaOut$AccountCreateBodyControllerFees,
};
