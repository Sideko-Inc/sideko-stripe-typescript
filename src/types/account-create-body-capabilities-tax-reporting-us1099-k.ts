import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesTaxReportingUs1099K
 */
export type AccountCreateBodyCapabilitiesTaxReportingUs1099K = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesTaxReportingUs1099K without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesTaxReportingUs1099K = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesTaxReportingUs1099K
 */
const SchemaIn$AccountCreateBodyCapabilitiesTaxReportingUs1099K: z.ZodType<
  AccountCreateBodyCapabilitiesTaxReportingUs1099K, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesTaxReportingUs1099K
 */
const SchemaOut$AccountCreateBodyCapabilitiesTaxReportingUs1099K: z.ZodType<
  External$AccountCreateBodyCapabilitiesTaxReportingUs1099K, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesTaxReportingUs1099K // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesTaxReportingUs1099K = {
  in: SchemaIn$AccountCreateBodyCapabilitiesTaxReportingUs1099K,
  out: SchemaOut$AccountCreateBodyCapabilitiesTaxReportingUs1099K,
};
