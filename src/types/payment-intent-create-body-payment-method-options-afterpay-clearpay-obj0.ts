import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsAfterpayClearpayObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsAfterpayClearpayObj0 = {
  captureMethod?: "manual" | undefined;
  reference?: string | undefined;
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsAfterpayClearpayObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsAfterpayClearpayObj0 =
  {
    capture_method?: "manual" | undefined;
    reference?: string | undefined;
    setup_future_usage?: "none" | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsAfterpayClearpayObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsAfterpayClearpayObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsAfterpayClearpayObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    capture_method: z.enum(["manual"]).optional(),
    reference: z.string().optional(),
    setup_future_usage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      capture_method: "captureMethod",
      reference: "reference",
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsAfterpayClearpayObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsAfterpayClearpayObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsAfterpayClearpayObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsAfterpayClearpayObj0 // the object to be transformed
> = z
  .object({
    captureMethod: z.enum(["manual"]).optional(),
    reference: z.string().optional(),
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      captureMethod: "capture_method",
      reference: "reference",
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsAfterpayClearpayObj0 =
  {
    in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsAfterpayClearpayObj0,
    out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsAfterpayClearpayObj0,
  };
