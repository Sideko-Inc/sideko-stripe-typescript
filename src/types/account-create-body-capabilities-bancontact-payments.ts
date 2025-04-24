import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesBancontactPayments
 */
export type AccountCreateBodyCapabilitiesBancontactPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesBancontactPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesBancontactPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesBancontactPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesBancontactPayments: z.ZodType<
  AccountCreateBodyCapabilitiesBancontactPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesBancontactPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesBancontactPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesBancontactPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesBancontactPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesBancontactPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesBancontactPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesBancontactPayments,
};
