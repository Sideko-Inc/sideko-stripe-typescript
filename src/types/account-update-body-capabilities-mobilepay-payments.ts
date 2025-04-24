import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesMobilepayPayments
 */
export type AccountUpdateBodyCapabilitiesMobilepayPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesMobilepayPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesMobilepayPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesMobilepayPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesMobilepayPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesMobilepayPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesMobilepayPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesMobilepayPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesMobilepayPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesMobilepayPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesMobilepayPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesMobilepayPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesMobilepayPayments,
};
