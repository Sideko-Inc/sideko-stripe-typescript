import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesLegacyPayments
 */
export type AccountCreateBodyCapabilitiesLegacyPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesLegacyPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesLegacyPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesLegacyPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesLegacyPayments: z.ZodType<
  AccountCreateBodyCapabilitiesLegacyPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesLegacyPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesLegacyPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesLegacyPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesLegacyPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesLegacyPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesLegacyPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesLegacyPayments,
};
