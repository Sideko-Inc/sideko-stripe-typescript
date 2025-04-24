import {
  ConnectAccountReference,
  External$ConnectAccountReference,
  Schemas$ConnectAccountReference,
} from "./connect-account-reference";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentPagesCheckoutSessionAutomaticTax = {
  /**
   * Indicates whether automatic tax is enabled for the session
   */
  enabled: boolean;
  liability?: ConnectAccountReference | undefined;
  /**
   * The status of the most recent automated tax calculation for this session.
   */
  status?:
    | ("complete" | "failed" | "requires_location_inputs")
    | null
    | undefined;
};

/**
 * @internal
 * PaymentPagesCheckoutSessionAutomaticTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentPagesCheckoutSessionAutomaticTax = {
  enabled: boolean;
  liability?: External$ConnectAccountReference | undefined;
  status?:
    | ("complete" | "failed" | "requires_location_inputs")
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentPagesCheckoutSessionAutomaticTax
 */
const SchemaIn$PaymentPagesCheckoutSessionAutomaticTax: z.ZodType<
  PaymentPagesCheckoutSessionAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    liability: z.lazy(() => Schemas$ConnectAccountReference.in.optional()),
    status: z
      .enum(["complete", "failed", "requires_location_inputs"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentPagesCheckoutSessionAutomaticTax
 */
const SchemaOut$PaymentPagesCheckoutSessionAutomaticTax: z.ZodType<
  External$PaymentPagesCheckoutSessionAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  PaymentPagesCheckoutSessionAutomaticTax // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    liability: z.lazy(() => Schemas$ConnectAccountReference.out.optional()),
    status: z
      .enum(["complete", "failed", "requires_location_inputs"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
      status: "status",
    });
  });

export const Schemas$PaymentPagesCheckoutSessionAutomaticTax = {
  in: SchemaIn$PaymentPagesCheckoutSessionAutomaticTax,
  out: SchemaOut$PaymentPagesCheckoutSessionAutomaticTax,
};
