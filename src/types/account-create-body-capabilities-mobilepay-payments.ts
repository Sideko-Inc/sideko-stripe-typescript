import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesMobilepayPayments
 */
export type AccountCreateBodyCapabilitiesMobilepayPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesMobilepayPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesMobilepayPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesMobilepayPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesMobilepayPayments: z.ZodType<
  AccountCreateBodyCapabilitiesMobilepayPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesMobilepayPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesMobilepayPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesMobilepayPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesMobilepayPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesMobilepayPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesMobilepayPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesMobilepayPayments,
};
