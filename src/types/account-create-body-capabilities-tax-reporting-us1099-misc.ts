import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesTaxReportingUs1099Misc
 */
export type AccountCreateBodyCapabilitiesTaxReportingUs1099Misc = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesTaxReportingUs1099Misc without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesTaxReportingUs1099Misc = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesTaxReportingUs1099Misc
 */
const SchemaIn$AccountCreateBodyCapabilitiesTaxReportingUs1099Misc: z.ZodType<
  AccountCreateBodyCapabilitiesTaxReportingUs1099Misc, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesTaxReportingUs1099Misc
 */
const SchemaOut$AccountCreateBodyCapabilitiesTaxReportingUs1099Misc: z.ZodType<
  External$AccountCreateBodyCapabilitiesTaxReportingUs1099Misc, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesTaxReportingUs1099Misc // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesTaxReportingUs1099Misc = {
  in: SchemaIn$AccountCreateBodyCapabilitiesTaxReportingUs1099Misc,
  out: SchemaOut$AccountCreateBodyCapabilitiesTaxReportingUs1099Misc,
};
