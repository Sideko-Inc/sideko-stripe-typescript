import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesOxxoPayments
 */
export type AccountUpdateBodyCapabilitiesOxxoPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesOxxoPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesOxxoPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesOxxoPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesOxxoPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesOxxoPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesOxxoPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesOxxoPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesOxxoPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesOxxoPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesOxxoPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesOxxoPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesOxxoPayments,
};
