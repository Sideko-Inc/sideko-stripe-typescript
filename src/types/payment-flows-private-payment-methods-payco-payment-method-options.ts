import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentFlowsPrivatePaymentMethodsPaycoPaymentMethodOptions = {
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod?: "manual" | undefined;
};

/**
 * @internal
 * PaymentFlowsPrivatePaymentMethodsPaycoPaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentFlowsPrivatePaymentMethodsPaycoPaymentMethodOptions =
  {
    capture_method?: "manual" | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentFlowsPrivatePaymentMethodsPaycoPaymentMethodOptions
 */
const SchemaIn$PaymentFlowsPrivatePaymentMethodsPaycoPaymentMethodOptions: z.ZodType<
  PaymentFlowsPrivatePaymentMethodsPaycoPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    capture_method: z.enum(["manual"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      capture_method: "captureMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentFlowsPrivatePaymentMethodsPaycoPaymentMethodOptions
 */
const SchemaOut$PaymentFlowsPrivatePaymentMethodsPaycoPaymentMethodOptions: z.ZodType<
  External$PaymentFlowsPrivatePaymentMethodsPaycoPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  PaymentFlowsPrivatePaymentMethodsPaycoPaymentMethodOptions // the object to be transformed
> = z
  .object({
    captureMethod: z.enum(["manual"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      captureMethod: "capture_method",
    });
  });

export const Schemas$PaymentFlowsPrivatePaymentMethodsPaycoPaymentMethodOptions =
  {
    in: SchemaIn$PaymentFlowsPrivatePaymentMethodsPaycoPaymentMethodOptions,
    out: SchemaOut$PaymentFlowsPrivatePaymentMethodsPaycoPaymentMethodOptions,
  };
