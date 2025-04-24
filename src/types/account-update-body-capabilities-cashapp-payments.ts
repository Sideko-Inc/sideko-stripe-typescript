import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesCashappPayments
 */
export type AccountUpdateBodyCapabilitiesCashappPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesCashappPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesCashappPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesCashappPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesCashappPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesCashappPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesCashappPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesCashappPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesCashappPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesCashappPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesCashappPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesCashappPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesCashappPayments,
};
