import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesKonbiniPayments
 */
export type AccountUpdateBodyCapabilitiesKonbiniPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesKonbiniPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesKonbiniPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesKonbiniPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesKonbiniPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesKonbiniPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesKonbiniPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesKonbiniPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesKonbiniPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesKonbiniPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesKonbiniPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesKonbiniPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesKonbiniPayments,
};
