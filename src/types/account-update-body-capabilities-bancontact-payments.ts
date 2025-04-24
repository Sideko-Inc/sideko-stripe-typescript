import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesBancontactPayments
 */
export type AccountUpdateBodyCapabilitiesBancontactPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesBancontactPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesBancontactPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesBancontactPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesBancontactPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesBancontactPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesBancontactPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesBancontactPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesBancontactPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesBancontactPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesBancontactPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesBancontactPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesBancontactPayments,
};
