import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleUpdateBodyPhasesItemTransferData
 */
export type SubscriptionScheduleUpdateBodyPhasesItemTransferData = {
  amountPercent?: number | undefined;
  destination: string;
};

/**
 * @internal
 * SubscriptionScheduleUpdateBodyPhasesItemTransferData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleUpdateBodyPhasesItemTransferData = {
  amount_percent?: number | undefined;
  destination: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleUpdateBodyPhasesItemTransferData
 */
const SchemaIn$SubscriptionScheduleUpdateBodyPhasesItemTransferData: z.ZodType<
  SubscriptionScheduleUpdateBodyPhasesItemTransferData, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleUpdateBodyPhasesItemTransferData
 */
const SchemaOut$SubscriptionScheduleUpdateBodyPhasesItemTransferData: z.ZodType<
  External$SubscriptionScheduleUpdateBodyPhasesItemTransferData, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleUpdateBodyPhasesItemTransferData // the object to be transformed
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

export const Schemas$SubscriptionScheduleUpdateBodyPhasesItemTransferData = {
  in: SchemaIn$SubscriptionScheduleUpdateBodyPhasesItemTransferData,
  out: SchemaOut$SubscriptionScheduleUpdateBodyPhasesItemTransferData,
};
