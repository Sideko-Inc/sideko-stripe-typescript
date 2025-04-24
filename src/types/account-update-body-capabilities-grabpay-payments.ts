import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesGrabpayPayments
 */
export type AccountUpdateBodyCapabilitiesGrabpayPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesGrabpayPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesGrabpayPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesGrabpayPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesGrabpayPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesGrabpayPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesGrabpayPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesGrabpayPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesGrabpayPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesGrabpayPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesGrabpayPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesGrabpayPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesGrabpayPayments,
};
