import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleCreateBodyDefaultSettingsTransferDataObj0
 */
export type SubscriptionScheduleCreateBodyDefaultSettingsTransferDataObj0 = {
  amountPercent?: number | undefined;
  destination: string;
};

/**
 * @internal
 * SubscriptionScheduleCreateBodyDefaultSettingsTransferDataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleCreateBodyDefaultSettingsTransferDataObj0 =
  {
    amount_percent?: number | undefined;
    destination: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleCreateBodyDefaultSettingsTransferDataObj0
 */
const SchemaIn$SubscriptionScheduleCreateBodyDefaultSettingsTransferDataObj0: z.ZodType<
  SubscriptionScheduleCreateBodyDefaultSettingsTransferDataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleCreateBodyDefaultSettingsTransferDataObj0
 */
const SchemaOut$SubscriptionScheduleCreateBodyDefaultSettingsTransferDataObj0: z.ZodType<
  External$SubscriptionScheduleCreateBodyDefaultSettingsTransferDataObj0, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleCreateBodyDefaultSettingsTransferDataObj0 // the object to be transformed
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

export const Schemas$SubscriptionScheduleCreateBodyDefaultSettingsTransferDataObj0 =
  {
    in: SchemaIn$SubscriptionScheduleCreateBodyDefaultSettingsTransferDataObj0,
    out: SchemaOut$SubscriptionScheduleCreateBodyDefaultSettingsTransferDataObj0,
  };
