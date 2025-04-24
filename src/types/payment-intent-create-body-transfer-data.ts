import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The parameters that you can use to automatically create a Transfer.
 * Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
 */
export type PaymentIntentCreateBodyTransferData = {
  amount?: number | undefined;
  destination: string;
};

/**
 * @internal
 * PaymentIntentCreateBodyTransferData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyTransferData = {
  amount?: number | undefined;
  destination: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyTransferData
 */
const SchemaIn$PaymentIntentCreateBodyTransferData: z.ZodType<
  PaymentIntentCreateBodyTransferData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    destination: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      destination: "destination",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyTransferData
 */
const SchemaOut$PaymentIntentCreateBodyTransferData: z.ZodType<
  External$PaymentIntentCreateBodyTransferData, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyTransferData // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    destination: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      destination: "destination",
    });
  });

export const Schemas$PaymentIntentCreateBodyTransferData = {
  in: SchemaIn$PaymentIntentCreateBodyTransferData,
  out: SchemaOut$PaymentIntentCreateBodyTransferData,
};
