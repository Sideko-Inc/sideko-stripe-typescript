import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesJcbPayments
 */
export type AccountCreateBodyCapabilitiesJcbPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesJcbPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesJcbPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesJcbPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesJcbPayments: z.ZodType<
  AccountCreateBodyCapabilitiesJcbPayments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesJcbPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesJcbPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesJcbPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesJcbPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesJcbPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesJcbPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesJcbPayments,
};
