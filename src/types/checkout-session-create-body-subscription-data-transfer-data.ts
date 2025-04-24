import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodySubscriptionDataTransferData
 */
export type CheckoutSessionCreateBodySubscriptionDataTransferData = {
  amountPercent?: number | undefined;
  destination: string;
};

/**
 * @internal
 * CheckoutSessionCreateBodySubscriptionDataTransferData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodySubscriptionDataTransferData = {
  amount_percent?: number | undefined;
  destination: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodySubscriptionDataTransferData
 */
const SchemaIn$CheckoutSessionCreateBodySubscriptionDataTransferData: z.ZodType<
  CheckoutSessionCreateBodySubscriptionDataTransferData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_percent: z.number().optional(),
    destination: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_percent: "amountPercent",
      destination: "destination",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodySubscriptionDataTransferData
 */
const SchemaOut$CheckoutSessionCreateBodySubscriptionDataTransferData: z.ZodType<
  External$CheckoutSessionCreateBodySubscriptionDataTransferData, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodySubscriptionDataTransferData // the object to be transformed
> = z
  .object({
    amountPercent: z.number().optional(),
    destination: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountPercent: "amount_percent",
      destination: "destination",
    });
  });

export const Schemas$CheckoutSessionCreateBodySubscriptionDataTransferData = {
  in: SchemaIn$CheckoutSessionCreateBodySubscriptionDataTransferData,
  out: SchemaOut$CheckoutSessionCreateBodySubscriptionDataTransferData,
};
