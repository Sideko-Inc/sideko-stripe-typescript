import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentIntentDataTransferData
 */
export type CheckoutSessionCreateBodyPaymentIntentDataTransferData = {
  amount?: number | undefined;
  destination: string;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentIntentDataTransferData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentIntentDataTransferData = {
  amount?: number | undefined;
  destination: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentIntentDataTransferData
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentIntentDataTransferData: z.ZodType<
  CheckoutSessionCreateBodyPaymentIntentDataTransferData, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentIntentDataTransferData
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentIntentDataTransferData: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentIntentDataTransferData, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentIntentDataTransferData // the object to be transformed
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

export const Schemas$CheckoutSessionCreateBodyPaymentIntentDataTransferData = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentIntentDataTransferData,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentIntentDataTransferData,
};
