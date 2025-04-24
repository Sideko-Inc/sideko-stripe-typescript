import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CheckoutCardInstallmentsOptions = {
  /**
   * Indicates if installments are enabled
   */
  enabled?: boolean | undefined;
};

/**
 * @internal
 * CheckoutCardInstallmentsOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutCardInstallmentsOptions = {
  enabled?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutCardInstallmentsOptions
 */
const SchemaIn$CheckoutCardInstallmentsOptions: z.ZodType<
  CheckoutCardInstallmentsOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutCardInstallmentsOptions
 */
const SchemaOut$CheckoutCardInstallmentsOptions: z.ZodType<
  External$CheckoutCardInstallmentsOptions, // output type of this zod object
  z.ZodTypeDef,
  CheckoutCardInstallmentsOptions // the object to be transformed
> = z
  .object({
    enabled: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

export const Schemas$CheckoutCardInstallmentsOptions = {
  in: SchemaIn$CheckoutCardInstallmentsOptions,
  out: SchemaOut$CheckoutCardInstallmentsOptions,
};
