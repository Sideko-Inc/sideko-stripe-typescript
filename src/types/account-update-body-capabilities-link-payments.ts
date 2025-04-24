import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesLinkPayments
 */
export type AccountUpdateBodyCapabilitiesLinkPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesLinkPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesLinkPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesLinkPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesLinkPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesLinkPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesLinkPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesLinkPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesLinkPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesLinkPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesLinkPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesLinkPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesLinkPayments,
};
