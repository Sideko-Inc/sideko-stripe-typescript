import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type AccountUnificationAccountControllerLosses = {
  /**
   * A value indicating who is liable when this account can't pay back negative balances from payments.
   */
  payments: "application" | "stripe";
};

/**
 * @internal
 * AccountUnificationAccountControllerLosses without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUnificationAccountControllerLosses = {
  payments: "application" | "stripe";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUnificationAccountControllerLosses
 */
const SchemaIn$AccountUnificationAccountControllerLosses: z.ZodType<
  AccountUnificationAccountControllerLosses, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    payments: z.enum(["application", "stripe"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      payments: "payments",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUnificationAccountControllerLosses
 */
const SchemaOut$AccountUnificationAccountControllerLosses: z.ZodType<
  External$AccountUnificationAccountControllerLosses, // output type of this zod object
  z.ZodTypeDef,
  AccountUnificationAccountControllerLosses // the object to be transformed
> = z
  .object({
    payments: z.enum(["application", "stripe"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      payments: "payments",
    });
  });

export const Schemas$AccountUnificationAccountControllerLosses = {
  in: SchemaIn$AccountUnificationAccountControllerLosses,
  out: SchemaOut$AccountUnificationAccountControllerLosses,
};
