import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0Routing
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0Routing =
  {
    requestedPriority?: ("domestic" | "international") | undefined;
  };

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0Routing without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0Routing =
  {
    requested_priority?: ("domestic" | "international") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0Routing
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0Routing: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0Routing, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    requested_priority: z.enum(["domestic", "international"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested_priority: "requestedPriority",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0Routing
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0Routing: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0Routing, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0Routing // the object to be transformed
> = z
  .object({
    requestedPriority: z.enum(["domestic", "international"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requestedPriority: "requested_priority",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0Routing =
  {
    in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0Routing,
    out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0Routing,
  };
