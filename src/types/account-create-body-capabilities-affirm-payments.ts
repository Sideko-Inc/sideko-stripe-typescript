import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesAffirmPayments
 */
export type AccountCreateBodyCapabilitiesAffirmPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesAffirmPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesAffirmPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesAffirmPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesAffirmPayments: z.ZodType<
  AccountCreateBodyCapabilitiesAffirmPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesAffirmPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesAffirmPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesAffirmPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesAffirmPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesAffirmPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesAffirmPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesAffirmPayments,
};
