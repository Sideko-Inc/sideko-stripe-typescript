import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0Routing
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0Routing =
  {
    requestedPriority?: ("domestic" | "international") | undefined;
  };

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0Routing without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0Routing =
  {
    requested_priority?: ("domestic" | "international") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0Routing
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0Routing: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0Routing, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0Routing
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0Routing: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0Routing, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0Routing // the object to be transformed
> = z
  .object({
    requestedPriority: z.enum(["domestic", "international"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requestedPriority: "requested_priority",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0Routing =
  {
    in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0Routing,
    out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0Routing,
  };
