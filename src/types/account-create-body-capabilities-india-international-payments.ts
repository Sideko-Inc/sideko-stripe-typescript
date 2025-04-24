import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesIndiaInternationalPayments
 */
export type AccountCreateBodyCapabilitiesIndiaInternationalPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesIndiaInternationalPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesIndiaInternationalPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesIndiaInternationalPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesIndiaInternationalPayments: z.ZodType<
  AccountCreateBodyCapabilitiesIndiaInternationalPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesIndiaInternationalPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesIndiaInternationalPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesIndiaInternationalPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesIndiaInternationalPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesIndiaInternationalPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesIndiaInternationalPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesIndiaInternationalPayments,
};
