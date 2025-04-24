import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsAffirm
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsAffirm = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsAffirm without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsAffirm = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsAffirm
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsAffirm: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsAffirm, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    setup_future_usage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsAffirm
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsAffirm: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsAffirm, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsAffirm // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsAffirm = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsAffirm,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsAffirm,
};
