import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesAffirmPayments
 */
export type AccountUpdateBodyCapabilitiesAffirmPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesAffirmPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesAffirmPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesAffirmPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesAffirmPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesAffirmPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesAffirmPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesAffirmPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesAffirmPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesAffirmPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesAffirmPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesAffirmPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesAffirmPayments,
};
