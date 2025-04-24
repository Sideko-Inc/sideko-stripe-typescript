import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesZipPayments
 */
export type AccountCreateBodyCapabilitiesZipPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesZipPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesZipPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesZipPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesZipPayments: z.ZodType<
  AccountCreateBodyCapabilitiesZipPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesZipPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesZipPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesZipPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesZipPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesZipPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesZipPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesZipPayments,
};
