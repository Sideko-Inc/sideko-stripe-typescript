import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsAfterpayClearpay
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsAfterpayClearpay = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsAfterpayClearpay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsAfterpayClearpay =
  {
    setup_future_usage?: "none" | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsAfterpayClearpay
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsAfterpayClearpay: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsAfterpayClearpay, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsAfterpayClearpay
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsAfterpayClearpay: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsAfterpayClearpay, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsAfterpayClearpay // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsAfterpayClearpay =
  {
    in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsAfterpayClearpay,
    out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsAfterpayClearpay,
  };
