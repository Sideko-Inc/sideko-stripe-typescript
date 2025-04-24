import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleUpdateBodyDefaultSettingsTransferDataObj0
 */
export type SubscriptionScheduleUpdateBodyDefaultSettingsTransferDataObj0 = {
  amountPercent?: number | undefined;
  destination: string;
};

/**
 * @internal
 * SubscriptionScheduleUpdateBodyDefaultSettingsTransferDataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleUpdateBodyDefaultSettingsTransferDataObj0 =
  {
    amount_percent?: number | undefined;
    destination: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleUpdateBodyDefaultSettingsTransferDataObj0
 */
const SchemaIn$SubscriptionScheduleUpdateBodyDefaultSettingsTransferDataObj0: z.ZodType<
  SubscriptionScheduleUpdateBodyDefaultSettingsTransferDataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleUpdateBodyDefaultSettingsTransferDataObj0
 */
const SchemaOut$SubscriptionScheduleUpdateBodyDefaultSettingsTransferDataObj0: z.ZodType<
  External$SubscriptionScheduleUpdateBodyDefaultSettingsTransferDataObj0, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleUpdateBodyDefaultSettingsTransferDataObj0 // the object to be transformed
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

export const Schemas$SubscriptionScheduleUpdateBodyDefaultSettingsTransferDataObj0 =
  {
    in: SchemaIn$SubscriptionScheduleUpdateBodyDefaultSettingsTransferDataObj0,
    out: SchemaOut$SubscriptionScheduleUpdateBodyDefaultSettingsTransferDataObj0,
  };
