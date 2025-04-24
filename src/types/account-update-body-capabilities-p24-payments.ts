import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesP24Payments
 */
export type AccountUpdateBodyCapabilitiesP24Payments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesP24Payments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesP24Payments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesP24Payments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesP24Payments: z.ZodType<
  AccountUpdateBodyCapabilitiesP24Payments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesP24Payments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesP24Payments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesP24Payments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesP24Payments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesP24Payments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesP24Payments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesP24Payments,
};
