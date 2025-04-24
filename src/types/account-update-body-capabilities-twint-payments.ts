import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesTwintPayments
 */
export type AccountUpdateBodyCapabilitiesTwintPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesTwintPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesTwintPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesTwintPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesTwintPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesTwintPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesTwintPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesTwintPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesTwintPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesTwintPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesTwintPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesTwintPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesTwintPayments,
};
