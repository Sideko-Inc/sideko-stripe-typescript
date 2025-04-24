import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesJcbPayments
 */
export type AccountUpdateBodyCapabilitiesJcbPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesJcbPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesJcbPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesJcbPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesJcbPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesJcbPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesJcbPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesJcbPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesJcbPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesJcbPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesJcbPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesJcbPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesJcbPayments,
};
