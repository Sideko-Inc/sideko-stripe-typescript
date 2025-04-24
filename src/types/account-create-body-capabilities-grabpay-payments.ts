import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesGrabpayPayments
 */
export type AccountCreateBodyCapabilitiesGrabpayPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesGrabpayPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesGrabpayPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesGrabpayPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesGrabpayPayments: z.ZodType<
  AccountCreateBodyCapabilitiesGrabpayPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesGrabpayPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesGrabpayPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesGrabpayPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesGrabpayPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesGrabpayPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesGrabpayPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesGrabpayPayments,
};
