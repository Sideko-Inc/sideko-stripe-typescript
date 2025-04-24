import {
  External$PaymentIntentProcessingCustomerNotification,
  PaymentIntentProcessingCustomerNotification,
  Schemas$PaymentIntentProcessingCustomerNotification,
} from "./payment-intent-processing-customer-notification";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentIntentCardProcessing = {
  customerNotification?:
    | PaymentIntentProcessingCustomerNotification
    | undefined;
};

/**
 * @internal
 * PaymentIntentCardProcessing without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCardProcessing = {
  customer_notification?:
    | External$PaymentIntentProcessingCustomerNotification
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCardProcessing
 */
const SchemaIn$PaymentIntentCardProcessing: z.ZodType<
  PaymentIntentCardProcessing, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer_notification:
      Schemas$PaymentIntentProcessingCustomerNotification.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer_notification: "customerNotification",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCardProcessing
 */
const SchemaOut$PaymentIntentCardProcessing: z.ZodType<
  External$PaymentIntentCardProcessing, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCardProcessing // the object to be transformed
> = z
  .object({
    customerNotification:
      Schemas$PaymentIntentProcessingCustomerNotification.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customerNotification: "customer_notification",
    });
  });

export const Schemas$PaymentIntentCardProcessing = {
  in: SchemaIn$PaymentIntentCardProcessing,
  out: SchemaOut$PaymentIntentCardProcessing,
};
