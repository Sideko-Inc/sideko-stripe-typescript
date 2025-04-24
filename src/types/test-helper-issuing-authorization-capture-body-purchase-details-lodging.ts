import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsLodging
 */
export type TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsLodging = {
  checkInAt?: number | undefined;
  nights?: number | undefined;
};

/**
 * @internal
 * TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsLodging without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsLodging =
  {
    check_in_at?: number | undefined;
    nights?: number | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsLodging
 */
const SchemaIn$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsLodging: z.ZodType<
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsLodging, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    check_in_at: z.number().int().optional(),
    nights: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      check_in_at: "checkInAt",
      nights: "nights",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsLodging
 */
const SchemaOut$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsLodging: z.ZodType<
  External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsLodging, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsLodging // the object to be transformed
> = z
  .object({
    checkInAt: z.number().int().optional(),
    nights: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      checkInAt: "check_in_at",
      nights: "nights",
    });
  });

export const Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsLodging =
  {
    in: SchemaIn$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsLodging,
    out: SchemaOut$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsLodging,
  };
