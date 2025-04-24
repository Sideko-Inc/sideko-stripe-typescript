import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetCardholderPromptData
 */
export type TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetCardholderPromptData =
  {
    driverId?: string | undefined;
    odometer?: number | undefined;
    unspecifiedId?: string | undefined;
    userId?: string | undefined;
    vehicleNumber?: string | undefined;
  };

/**
 * @internal
 * TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetCardholderPromptData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetCardholderPromptData =
  {
    driver_id?: string | undefined;
    odometer?: number | undefined;
    unspecified_id?: string | undefined;
    user_id?: string | undefined;
    vehicle_number?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetCardholderPromptData
 */
const SchemaIn$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetCardholderPromptData: z.ZodType<
  TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetCardholderPromptData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    driver_id: z.string().optional(),
    odometer: z.number().int().optional(),
    unspecified_id: z.string().optional(),
    user_id: z.string().optional(),
    vehicle_number: z.string().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetCardholderPromptData
 */
const SchemaOut$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetCardholderPromptData: z.ZodType<
  External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetCardholderPromptData, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetCardholderPromptData // the object to be transformed
> = z
  .object({
    driverId: z.string().optional(),
    odometer: z.number().int().optional(),
    unspecifiedId: z.string().optional(),
    userId: z.string().optional(),
    vehicleNumber: z.string().optional(),
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

export const Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetCardholderPromptData =
  {
    in: SchemaIn$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetCardholderPromptData,
    out: SchemaOut$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetCardholderPromptData,
  };
