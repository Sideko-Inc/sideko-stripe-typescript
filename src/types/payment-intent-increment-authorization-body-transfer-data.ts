import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The parameters used to automatically create a transfer after the payment is captured.
 * Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
 */
export type PaymentIntentIncrementAuthorizationBodyTransferData = {
  amount?: number | undefined;
};

/**
 * @internal
 * PaymentIntentIncrementAuthorizationBodyTransferData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentIncrementAuthorizationBodyTransferData = {
  amount?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentIncrementAuthorizationBodyTransferData
 */
const SchemaIn$PaymentIntentIncrementAuthorizationBodyTransferData: z.ZodType<
  PaymentIntentIncrementAuthorizationBodyTransferData, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentIncrementAuthorizationBodyTransferData
 */
const SchemaOut$PaymentIntentIncrementAuthorizationBodyTransferData: z.ZodType<
  External$PaymentIntentIncrementAuthorizationBodyTransferData, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentIncrementAuthorizationBodyTransferData // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
    });
  });

export const Schemas$PaymentIntentIncrementAuthorizationBodyTransferData = {
  in: SchemaIn$PaymentIntentIncrementAuthorizationBodyTransferData,
  out: SchemaOut$PaymentIntentIncrementAuthorizationBodyTransferData,
};
