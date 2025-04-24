import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsAfterpayClearpayObj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsAfterpayClearpayObj0 = {
  captureMethod?: "manual" | undefined;
  reference?: string | undefined;
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsAfterpayClearpayObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsAfterpayClearpayObj0 =
  {
    capture_method?: "manual" | undefined;
    reference?: string | undefined;
    setup_future_usage?: "none" | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsAfterpayClearpayObj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsAfterpayClearpayObj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsAfterpayClearpayObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsAfterpayClearpayObj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsAfterpayClearpayObj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsAfterpayClearpayObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsAfterpayClearpayObj0 // the object to be transformed
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

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsAfterpayClearpayObj0 =
  {
    in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsAfterpayClearpayObj0,
    out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsAfterpayClearpayObj0,
  };
