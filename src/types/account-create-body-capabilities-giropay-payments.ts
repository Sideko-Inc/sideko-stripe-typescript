import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesGiropayPayments
 */
export type AccountCreateBodyCapabilitiesGiropayPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesGiropayPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesGiropayPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesGiropayPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesGiropayPayments: z.ZodType<
  AccountCreateBodyCapabilitiesGiropayPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesGiropayPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesGiropayPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesGiropayPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesGiropayPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesGiropayPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesGiropayPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesGiropayPayments,
};
