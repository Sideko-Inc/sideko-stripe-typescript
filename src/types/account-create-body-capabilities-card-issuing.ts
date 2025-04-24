import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesCardIssuing
 */
export type AccountCreateBodyCapabilitiesCardIssuing = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesCardIssuing without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesCardIssuing = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesCardIssuing
 */
const SchemaIn$AccountCreateBodyCapabilitiesCardIssuing: z.ZodType<
  AccountCreateBodyCapabilitiesCardIssuing, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesCardIssuing
 */
const SchemaOut$AccountCreateBodyCapabilitiesCardIssuing: z.ZodType<
  External$AccountCreateBodyCapabilitiesCardIssuing, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesCardIssuing // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesCardIssuing = {
  in: SchemaIn$AccountCreateBodyCapabilitiesCardIssuing,
  out: SchemaOut$AccountCreateBodyCapabilitiesCardIssuing,
};
