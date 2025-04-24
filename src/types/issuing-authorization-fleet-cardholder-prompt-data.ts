import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingAuthorizationFleetCardholderPromptData = {
  /**
   * [Deprecated] An alphanumeric ID, though typical point of sales only support numeric entry. The card program can be configured to prompt for a vehicle ID, driver ID, or generic ID.
   */
  alphanumericId?: string | null | undefined;
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
 * IssuingAuthorizationFleetCardholderPromptData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingAuthorizationFleetCardholderPromptData = {
  alphanumeric_id?: string | null | undefined;
  driver_id?: string | null | undefined;
  odometer?: number | null | undefined;
  unspecified_id?: string | null | undefined;
  user_id?: string | null | undefined;
  vehicle_number?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingAuthorizationFleetCardholderPromptData
 */
const SchemaIn$IssuingAuthorizationFleetCardholderPromptData: z.ZodType<
  IssuingAuthorizationFleetCardholderPromptData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    alphanumeric_id: z.string().nullable().optional(),
    driver_id: z.string().nullable().optional(),
    odometer: z.number().int().nullable().optional(),
    unspecified_id: z.string().nullable().optional(),
    user_id: z.string().nullable().optional(),
    vehicle_number: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      alphanumeric_id: "alphanumericId",
      driver_id: "driverId",
      odometer: "odometer",
      unspecified_id: "unspecifiedId",
      user_id: "userId",
      vehicle_number: "vehicleNumber",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingAuthorizationFleetCardholderPromptData
 */
const SchemaOut$IssuingAuthorizationFleetCardholderPromptData: z.ZodType<
  External$IssuingAuthorizationFleetCardholderPromptData, // output type of this zod object
  z.ZodTypeDef,
  IssuingAuthorizationFleetCardholderPromptData // the object to be transformed
> = z
  .object({
    alphanumericId: z.string().nullable().optional(),
    driverId: z.string().nullable().optional(),
    odometer: z.number().int().nullable().optional(),
    unspecifiedId: z.string().nullable().optional(),
    userId: z.string().nullable().optional(),
    vehicleNumber: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      alphanumericId: "alphanumeric_id",
      driverId: "driver_id",
      odometer: "odometer",
      unspecifiedId: "unspecified_id",
      userId: "user_id",
      vehicleNumber: "vehicle_number",
    });
  });

export const Schemas$IssuingAuthorizationFleetCardholderPromptData = {
  in: SchemaIn$IssuingAuthorizationFleetCardholderPromptData,
  out: SchemaOut$IssuingAuthorizationFleetCardholderPromptData,
};
