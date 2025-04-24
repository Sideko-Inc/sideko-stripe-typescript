import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesIdealPayments
 */
export type AccountUpdateBodyCapabilitiesIdealPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesIdealPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesIdealPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesIdealPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesIdealPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesIdealPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesIdealPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesIdealPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesIdealPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesIdealPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesIdealPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesIdealPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesIdealPayments,
};
