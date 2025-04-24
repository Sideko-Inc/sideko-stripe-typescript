import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesP24Payments
 */
export type AccountCreateBodyCapabilitiesP24Payments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesP24Payments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesP24Payments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesP24Payments
 */
const SchemaIn$AccountCreateBodyCapabilitiesP24Payments: z.ZodType<
  AccountCreateBodyCapabilitiesP24Payments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesP24Payments
 */
const SchemaOut$AccountCreateBodyCapabilitiesP24Payments: z.ZodType<
  External$AccountCreateBodyCapabilitiesP24Payments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesP24Payments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesP24Payments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesP24Payments,
  out: SchemaOut$AccountCreateBodyCapabilitiesP24Payments,
};
