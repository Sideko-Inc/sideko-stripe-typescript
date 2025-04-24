import { Customer, External$Customer, Schemas$Customer } from "./customer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ThresholdsResourceUsageAlertFilter = {
  /**
   * Limit the scope of the alert to this customer ID
   */
  customer?: (string | Customer) | undefined;
  type: "customer";
};

/**
 * @internal
 * ThresholdsResourceUsageAlertFilter without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ThresholdsResourceUsageAlertFilter = {
  customer?: (string | External$Customer) | undefined;
  type: "customer";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ThresholdsResourceUsageAlertFilter
 */
const SchemaIn$ThresholdsResourceUsageAlertFilter: z.ZodType<
  ThresholdsResourceUsageAlertFilter, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer: z
      .union([z.string(), z.lazy(() => Schemas$Customer.in)])
      .optional(),
    type: z.enum(["customer"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ThresholdsResourceUsageAlertFilter
 */
const SchemaOut$ThresholdsResourceUsageAlertFilter: z.ZodType<
  External$ThresholdsResourceUsageAlertFilter, // output type of this zod object
  z.ZodTypeDef,
  ThresholdsResourceUsageAlertFilter // the object to be transformed
> = z
  .object({
    customer: z
      .union([z.string(), z.lazy(() => Schemas$Customer.out)])
      .optional(),
    type: z.enum(["customer"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      type: "type",
    });
  });

export const Schemas$ThresholdsResourceUsageAlertFilter = {
  in: SchemaIn$ThresholdsResourceUsageAlertFilter,
  out: SchemaOut$ThresholdsResourceUsageAlertFilter,
};
