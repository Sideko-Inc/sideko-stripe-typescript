import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsAfterpayClearpayObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsAfterpayClearpayObj0 = {
  captureMethod?: "manual" | undefined;
  reference?: string | undefined;
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsAfterpayClearpayObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsAfterpayClearpayObj0 =
  {
    capture_method?: "manual" | undefined;
    reference?: string | undefined;
    setup_future_usage?: "none" | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsAfterpayClearpayObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsAfterpayClearpayObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsAfterpayClearpayObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsAfterpayClearpayObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsAfterpayClearpayObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsAfterpayClearpayObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsAfterpayClearpayObj0 // the object to be transformed
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

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsAfterpayClearpayObj0 =
  {
    in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsAfterpayClearpayObj0,
    out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsAfterpayClearpayObj0,
  };
