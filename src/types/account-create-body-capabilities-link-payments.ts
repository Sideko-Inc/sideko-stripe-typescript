import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesLinkPayments
 */
export type AccountCreateBodyCapabilitiesLinkPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesLinkPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesLinkPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesLinkPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesLinkPayments: z.ZodType<
  AccountCreateBodyCapabilitiesLinkPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesLinkPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesLinkPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesLinkPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesLinkPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesLinkPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesLinkPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesLinkPayments,
};
