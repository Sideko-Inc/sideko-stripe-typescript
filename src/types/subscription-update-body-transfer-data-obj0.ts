import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionUpdateBodyTransferDataObj0
 */
export type SubscriptionUpdateBodyTransferDataObj0 = {
  amountPercent?: number | undefined;
  destination: string;
};

/**
 * @internal
 * SubscriptionUpdateBodyTransferDataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionUpdateBodyTransferDataObj0 = {
  amount_percent?: number | undefined;
  destination: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionUpdateBodyTransferDataObj0
 */
const SchemaIn$SubscriptionUpdateBodyTransferDataObj0: z.ZodType<
  SubscriptionUpdateBodyTransferDataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionUpdateBodyTransferDataObj0
 */
const SchemaOut$SubscriptionUpdateBodyTransferDataObj0: z.ZodType<
  External$SubscriptionUpdateBodyTransferDataObj0, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionUpdateBodyTransferDataObj0 // the object to be transformed
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

export const Schemas$SubscriptionUpdateBodyTransferDataObj0 = {
  in: SchemaIn$SubscriptionUpdateBodyTransferDataObj0,
  out: SchemaOut$SubscriptionUpdateBodyTransferDataObj0,
};
