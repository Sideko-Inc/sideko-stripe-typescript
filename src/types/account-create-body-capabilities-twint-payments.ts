import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesTwintPayments
 */
export type AccountCreateBodyCapabilitiesTwintPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesTwintPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesTwintPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesTwintPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesTwintPayments: z.ZodType<
  AccountCreateBodyCapabilitiesTwintPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesTwintPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesTwintPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesTwintPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesTwintPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesTwintPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesTwintPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesTwintPayments,
};
