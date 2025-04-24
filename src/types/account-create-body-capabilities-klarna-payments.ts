import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesKlarnaPayments
 */
export type AccountCreateBodyCapabilitiesKlarnaPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesKlarnaPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesKlarnaPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesKlarnaPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesKlarnaPayments: z.ZodType<
  AccountCreateBodyCapabilitiesKlarnaPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesKlarnaPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesKlarnaPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesKlarnaPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesKlarnaPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesKlarnaPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesKlarnaPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesKlarnaPayments,
};
