import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesCashappPayments
 */
export type AccountCreateBodyCapabilitiesCashappPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesCashappPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesCashappPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesCashappPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesCashappPayments: z.ZodType<
  AccountCreateBodyCapabilitiesCashappPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesCashappPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesCashappPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesCashappPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesCashappPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesCashappPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesCashappPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesCashappPayments,
};
