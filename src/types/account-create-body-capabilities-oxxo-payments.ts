import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesOxxoPayments
 */
export type AccountCreateBodyCapabilitiesOxxoPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesOxxoPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesOxxoPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesOxxoPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesOxxoPayments: z.ZodType<
  AccountCreateBodyCapabilitiesOxxoPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesOxxoPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesOxxoPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesOxxoPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesOxxoPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesOxxoPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesOxxoPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesOxxoPayments,
};
