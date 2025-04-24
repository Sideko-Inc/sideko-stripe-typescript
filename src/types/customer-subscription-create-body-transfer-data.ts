import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * If specified, the funds from the subscription's invoices will be transferred to the destination and the ID of the resulting transfers will be found on the resulting charges.
 */
export type CustomerSubscriptionCreateBodyTransferData = {
  amountPercent?: number | undefined;
  destination: string;
};

/**
 * @internal
 * CustomerSubscriptionCreateBodyTransferData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionCreateBodyTransferData = {
  amount_percent?: number | undefined;
  destination: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionCreateBodyTransferData
 */
const SchemaIn$CustomerSubscriptionCreateBodyTransferData: z.ZodType<
  CustomerSubscriptionCreateBodyTransferData, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionCreateBodyTransferData
 */
const SchemaOut$CustomerSubscriptionCreateBodyTransferData: z.ZodType<
  External$CustomerSubscriptionCreateBodyTransferData, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionCreateBodyTransferData // the object to be transformed
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

export const Schemas$CustomerSubscriptionCreateBodyTransferData = {
  in: SchemaIn$CustomerSubscriptionCreateBodyTransferData,
  out: SchemaOut$CustomerSubscriptionCreateBodyTransferData,
};
