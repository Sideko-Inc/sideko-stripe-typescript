import {
  External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFlightSegmentsItem,
  Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFlightSegmentsItem,
  TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFlightSegmentsItem,
} from "./test-helper-issuing-transaction-create-force-capture-body-purchase-details-flight-segments-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFlight
 */
export type TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFlight =
  {
    departureAt?: number | undefined;
    passengerName?: string | undefined;
    refundable?: boolean | undefined;
    segments?:
      | TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFlightSegmentsItem[]
      | undefined;
    travelAgency?: string | undefined;
  };

/**
 * @internal
 * TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFlight without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFlight =
  {
    departure_at?: number | undefined;
    passenger_name?: string | undefined;
    refundable?: boolean | undefined;
    segments?:
      | External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFlightSegmentsItem[]
      | undefined;
    travel_agency?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFlight
 */
const SchemaIn$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFlight: z.ZodType<
  TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFlight, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    departure_at: z.number().int().optional(),
    passenger_name: z.string().optional(),
    refundable: z.boolean().optional(),
    segments: z
      .array(
        Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFlightSegmentsItem.in,
      )
      .optional(),
    travel_agency: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      departure_at: "departureAt",
      passenger_name: "passengerName",
      refundable: "refundable",
      segments: "segments",
      travel_agency: "travelAgency",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFlight
 */
const SchemaOut$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFlight: z.ZodType<
  External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFlight, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFlight // the object to be transformed
> = z
  .object({
    departureAt: z.number().int().optional(),
    passengerName: z.string().optional(),
    refundable: z.boolean().optional(),
    segments: z
      .array(
        Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFlightSegmentsItem.out,
      )
      .optional(),
    travelAgency: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      departureAt: "departure_at",
      passengerName: "passenger_name",
      refundable: "refundable",
      segments: "segments",
      travelAgency: "travel_agency",
    });
  });

export const Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFlight =
  {
    in: SchemaIn$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFlight,
    out: SchemaOut$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFlight,
  };
