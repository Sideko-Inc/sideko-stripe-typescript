import {
  ConnectAccountReference,
  External$ConnectAccountReference,
  Schemas$ConnectAccountReference,
} from "./connect-account-reference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type AutomaticTax = {
  /**
   * If Stripe disabled automatic tax, this enum describes why.
   */
  disabledReason?:
    | ("finalization_requires_location_inputs" | "finalization_system_error")
    | null
    | undefined;
  /**
   * Whether Stripe automatically computes tax on this invoice. Note that incompatible invoice items (invoice items with manually specified [tax rates](https://stripe.com/docs/api/tax_rates), negative amounts, or `tax_behavior=unspecified`) cannot be added to automatic tax invoices.
   */
  enabled: boolean;
  liability?: ConnectAccountReference | undefined;
  /**
   * The status of the most recent automated tax calculation for this invoice.
   */
  status?:
    | ("complete" | "failed" | "requires_location_inputs")
    | null
    | undefined;
};

/**
 * @internal
 * AutomaticTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AutomaticTax = {
  disabled_reason?:
    | ("finalization_requires_location_inputs" | "finalization_system_error")
    | null
    | undefined;
  enabled: boolean;
  liability?: External$ConnectAccountReference | undefined;
  status?:
    | ("complete" | "failed" | "requires_location_inputs")
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AutomaticTax
 */
const SchemaIn$AutomaticTax: z.ZodType<
  AutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    disabled_reason: z
      .enum([
        "finalization_requires_location_inputs",
        "finalization_system_error",
      ])
      .nullable()
      .optional(),
    enabled: z.boolean(),
    liability: z.lazy(() => Schemas$ConnectAccountReference.in.optional()),
    status: z
      .enum(["complete", "failed", "requires_location_inputs"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disabled_reason: "disabledReason",
      enabled: "enabled",
      liability: "liability",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AutomaticTax
 */
const SchemaOut$AutomaticTax: z.ZodType<
  External$AutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  AutomaticTax // the object to be transformed
> = z
  .object({
    disabledReason: z
      .enum([
        "finalization_requires_location_inputs",
        "finalization_system_error",
      ])
      .nullable()
      .optional(),
    enabled: z.boolean(),
    liability: z.lazy(() => Schemas$ConnectAccountReference.out.optional()),
    status: z
      .enum(["complete", "failed", "requires_location_inputs"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disabledReason: "disabled_reason",
      enabled: "enabled",
      liability: "liability",
      status: "status",
    });
  });

export const Schemas$AutomaticTax = {
  in: SchemaIn$AutomaticTax,
  out: SchemaOut$AutomaticTax,
};
