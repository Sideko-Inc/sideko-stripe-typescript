import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesZipPayments
 */
export type AccountUpdateBodyCapabilitiesZipPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesZipPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesZipPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesZipPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesZipPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesZipPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesZipPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesZipPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesZipPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesZipPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesZipPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesZipPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesZipPayments,
};
