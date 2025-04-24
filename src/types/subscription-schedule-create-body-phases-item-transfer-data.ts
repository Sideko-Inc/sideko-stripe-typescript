import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleCreateBodyPhasesItemTransferData
 */
export type SubscriptionScheduleCreateBodyPhasesItemTransferData = {
  amountPercent?: number | undefined;
  destination: string;
};

/**
 * @internal
 * SubscriptionScheduleCreateBodyPhasesItemTransferData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleCreateBodyPhasesItemTransferData = {
  amount_percent?: number | undefined;
  destination: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleCreateBodyPhasesItemTransferData
 */
const SchemaIn$SubscriptionScheduleCreateBodyPhasesItemTransferData: z.ZodType<
  SubscriptionScheduleCreateBodyPhasesItemTransferData, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleCreateBodyPhasesItemTransferData
 */
const SchemaOut$SubscriptionScheduleCreateBodyPhasesItemTransferData: z.ZodType<
  External$SubscriptionScheduleCreateBodyPhasesItemTransferData, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleCreateBodyPhasesItemTransferData // the object to be transformed
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

export const Schemas$SubscriptionScheduleCreateBodyPhasesItemTransferData = {
  in: SchemaIn$SubscriptionScheduleCreateBodyPhasesItemTransferData,
  out: SchemaOut$SubscriptionScheduleCreateBodyPhasesItemTransferData,
};
