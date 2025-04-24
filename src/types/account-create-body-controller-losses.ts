import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyControllerLosses
 */
export type AccountCreateBodyControllerLosses = {
  payments?: ("application" | "stripe") | undefined;
};

/**
 * @internal
 * AccountCreateBodyControllerLosses without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyControllerLosses = {
  payments?: ("application" | "stripe") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyControllerLosses
 */
const SchemaIn$AccountCreateBodyControllerLosses: z.ZodType<
  AccountCreateBodyControllerLosses, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    payments: z.enum(["application", "stripe"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      payments: "payments",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyControllerLosses
 */
const SchemaOut$AccountCreateBodyControllerLosses: z.ZodType<
  External$AccountCreateBodyControllerLosses, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyControllerLosses // the object to be transformed
> = z
  .object({
    payments: z.enum(["application", "stripe"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      payments: "payments",
    });
  });

export const Schemas$AccountCreateBodyControllerLosses = {
  in: SchemaIn$AccountCreateBodyControllerLosses,
  out: SchemaOut$AccountCreateBodyControllerLosses,
};
