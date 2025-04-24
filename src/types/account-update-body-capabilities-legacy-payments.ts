import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesLegacyPayments
 */
export type AccountUpdateBodyCapabilitiesLegacyPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesLegacyPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesLegacyPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesLegacyPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesLegacyPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesLegacyPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesLegacyPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesLegacyPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesLegacyPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesLegacyPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesLegacyPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesLegacyPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesLegacyPayments,
};
