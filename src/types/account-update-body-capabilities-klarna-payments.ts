import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesKlarnaPayments
 */
export type AccountUpdateBodyCapabilitiesKlarnaPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesKlarnaPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesKlarnaPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesKlarnaPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesKlarnaPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesKlarnaPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesKlarnaPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesKlarnaPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesKlarnaPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesKlarnaPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesKlarnaPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesKlarnaPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesKlarnaPayments,
};
