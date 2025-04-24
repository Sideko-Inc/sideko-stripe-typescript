import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * If specified, the funds from the subscription's invoices will be transferred to the destination and the ID of the resulting transfers will be found on the resulting charges.
 */
export type SubscriptionCreateBodyTransferData = {
  amountPercent?: number | undefined;
  destination: string;
};

/**
 * @internal
 * SubscriptionCreateBodyTransferData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionCreateBodyTransferData = {
  amount_percent?: number | undefined;
  destination: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionCreateBodyTransferData
 */
const SchemaIn$SubscriptionCreateBodyTransferData: z.ZodType<
  SubscriptionCreateBodyTransferData, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionCreateBodyTransferData
 */
const SchemaOut$SubscriptionCreateBodyTransferData: z.ZodType<
  External$SubscriptionCreateBodyTransferData, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionCreateBodyTransferData // the object to be transformed
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

export const Schemas$SubscriptionCreateBodyTransferData = {
  in: SchemaIn$SubscriptionCreateBodyTransferData,
  out: SchemaOut$SubscriptionCreateBodyTransferData,
};
