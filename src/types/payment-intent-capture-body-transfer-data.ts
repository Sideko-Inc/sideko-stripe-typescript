import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The parameters that you can use to automatically create a transfer after the payment
 * is captured. Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
 */
export type PaymentIntentCaptureBodyTransferData = {
  amount?: number | undefined;
};

/**
 * @internal
 * PaymentIntentCaptureBodyTransferData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCaptureBodyTransferData = {
  amount?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCaptureBodyTransferData
 */
const SchemaIn$PaymentIntentCaptureBodyTransferData: z.ZodType<
  PaymentIntentCaptureBodyTransferData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCaptureBodyTransferData
 */
const SchemaOut$PaymentIntentCaptureBodyTransferData: z.ZodType<
  External$PaymentIntentCaptureBodyTransferData, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCaptureBodyTransferData // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
    });
  });

export const Schemas$PaymentIntentCaptureBodyTransferData = {
  in: SchemaIn$PaymentIntentCaptureBodyTransferData,
  out: SchemaOut$PaymentIntentCaptureBodyTransferData,
};
