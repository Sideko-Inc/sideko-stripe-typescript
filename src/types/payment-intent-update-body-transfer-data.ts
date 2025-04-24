import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Use this parameter to automatically create a Transfer when the payment succeeds. Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
 */
export type PaymentIntentUpdateBodyTransferData = {
  amount?: number | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyTransferData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyTransferData = {
  amount?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyTransferData
 */
const SchemaIn$PaymentIntentUpdateBodyTransferData: z.ZodType<
  PaymentIntentUpdateBodyTransferData, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyTransferData
 */
const SchemaOut$PaymentIntentUpdateBodyTransferData: z.ZodType<
  External$PaymentIntentUpdateBodyTransferData, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyTransferData // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
    });
  });

export const Schemas$PaymentIntentUpdateBodyTransferData = {
  in: SchemaIn$PaymentIntentUpdateBodyTransferData,
  out: SchemaOut$PaymentIntentUpdateBodyTransferData,
};
