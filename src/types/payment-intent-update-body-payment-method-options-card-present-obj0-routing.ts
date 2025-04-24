import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0Routing
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0Routing =
  {
    requestedPriority?: ("domestic" | "international") | undefined;
  };

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0Routing without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0Routing =
  {
    requested_priority?: ("domestic" | "international") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0Routing
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0Routing: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0Routing, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0Routing
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0Routing: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0Routing, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0Routing // the object to be transformed
> = z
  .object({
    requestedPriority: z.enum(["domestic", "international"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requestedPriority: "requested_priority",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0Routing =
  {
    in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0Routing,
    out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0Routing,
  };
