import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesTaxReportingUs1099Misc
 */
export type AccountUpdateBodyCapabilitiesTaxReportingUs1099Misc = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesTaxReportingUs1099Misc without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesTaxReportingUs1099Misc = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesTaxReportingUs1099Misc
 */
const SchemaIn$AccountUpdateBodyCapabilitiesTaxReportingUs1099Misc: z.ZodType<
  AccountUpdateBodyCapabilitiesTaxReportingUs1099Misc, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesTaxReportingUs1099Misc
 */
const SchemaOut$AccountUpdateBodyCapabilitiesTaxReportingUs1099Misc: z.ZodType<
  External$AccountUpdateBodyCapabilitiesTaxReportingUs1099Misc, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesTaxReportingUs1099Misc // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesTaxReportingUs1099Misc = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesTaxReportingUs1099Misc,
  out: SchemaOut$AccountUpdateBodyCapabilitiesTaxReportingUs1099Misc,
};
