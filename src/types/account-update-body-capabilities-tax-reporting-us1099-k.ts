import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesTaxReportingUs1099K
 */
export type AccountUpdateBodyCapabilitiesTaxReportingUs1099K = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesTaxReportingUs1099K without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesTaxReportingUs1099K = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesTaxReportingUs1099K
 */
const SchemaIn$AccountUpdateBodyCapabilitiesTaxReportingUs1099K: z.ZodType<
  AccountUpdateBodyCapabilitiesTaxReportingUs1099K, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesTaxReportingUs1099K
 */
const SchemaOut$AccountUpdateBodyCapabilitiesTaxReportingUs1099K: z.ZodType<
  External$AccountUpdateBodyCapabilitiesTaxReportingUs1099K, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesTaxReportingUs1099K // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesTaxReportingUs1099K = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesTaxReportingUs1099K,
  out: SchemaOut$AccountUpdateBodyCapabilitiesTaxReportingUs1099K,
};
