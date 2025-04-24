import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingTransactionFleetCardholderPromptData = {
  /**
   * Driver ID.
   */
  driverId?: string | null | undefined;
  /**
   * Odometer reading.
   */
  odometer?: number | null | undefined;
  /**
   * An alphanumeric ID. This field is used when a vehicle ID, driver ID, or generic ID is entered by the cardholder, but the merchant or card network did not specify the prompt type.
   */
  unspecifiedId?: string | null | undefined;
  /**
   * User ID.
   */
  userId?: string | null | undefined;
  /**
   * Vehicle number.
   */
  vehicleNumber?: string | null | undefined;
};

/**
 * @internal
 * IssuingTransactionFleetCardholderPromptData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingTransactionFleetCardholderPromptData = {
  driver_id?: string | null | undefined;
  odometer?: number | null | undefined;
  unspecified_id?: string | null | undefined;
  user_id?: string | null | undefined;
  vehicle_number?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingTransactionFleetCardholderPromptData
 */
const SchemaIn$IssuingTransactionFleetCardholderPromptData: z.ZodType<
  IssuingTransactionFleetCardholderPromptData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    driver_id: z.string().nullable().optional(),
    odometer: z.number().int().nullable().optional(),
    unspecified_id: z.string().nullable().optional(),
    user_id: z.string().nullable().optional(),
    vehicle_number: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      driver_id: "driverId",
      odometer: "odometer",
      unspecified_id: "unspecifiedId",
      user_id: "userId",
      vehicle_number: "vehicleNumber",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingTransactionFleetCardholderPromptData
 */
const SchemaOut$IssuingTransactionFleetCardholderPromptData: z.ZodType<
  External$IssuingTransactionFleetCardholderPromptData, // output type of this zod object
  z.ZodTypeDef,
  IssuingTransactionFleetCardholderPromptData // the object to be transformed
> = z
  .object({
    driverId: z.string().nullable().optional(),
    odometer: z.number().int().nullable().optional(),
    unspecifiedId: z.string().nullable().optional(),
    userId: z.string().nullable().optional(),
    vehicleNumber: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      driverId: "driver_id",
      odometer: "odometer",
      unspecifiedId: "unspecified_id",
      userId: "user_id",
      vehicleNumber: "vehicle_number",
    });
  });

export const Schemas$IssuingTransactionFleetCardholderPromptData = {
  in: SchemaIn$IssuingTransactionFleetCardholderPromptData,
  out: SchemaOut$IssuingTransactionFleetCardholderPromptData,
};
