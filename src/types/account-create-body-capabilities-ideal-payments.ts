import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesIdealPayments
 */
export type AccountCreateBodyCapabilitiesIdealPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesIdealPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesIdealPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesIdealPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesIdealPayments: z.ZodType<
  AccountCreateBodyCapabilitiesIdealPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesIdealPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesIdealPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesIdealPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesIdealPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesIdealPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesIdealPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesIdealPayments,
};
