import {
  External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlightSegmentsItem,
  Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlightSegmentsItem,
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlightSegmentsItem,
} from "./test-helper-issuing-authorization-capture-body-purchase-details-flight-segments-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlight
 */
export type TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlight = {
  departureAt?: number | undefined;
  passengerName?: string | undefined;
  refundable?: boolean | undefined;
  segments?:
    | TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlightSegmentsItem[]
    | undefined;
  travelAgency?: string | undefined;
};

/**
 * @internal
 * TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlight without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlight =
  {
    departure_at?: number | undefined;
    passenger_name?: string | undefined;
    refundable?: boolean | undefined;
    segments?:
      | External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlightSegmentsItem[]
      | undefined;
    travel_agency?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlight
 */
const SchemaIn$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlight: z.ZodType<
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlight, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    departure_at: z.number().int().optional(),
    passenger_name: z.string().optional(),
    refundable: z.boolean().optional(),
    segments: z
      .array(
        Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlightSegmentsItem.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlight
 */
const SchemaOut$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlight: z.ZodType<
  External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlight, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlight // the object to be transformed
> = z
  .object({
    departureAt: z.number().int().optional(),
    passengerName: z.string().optional(),
    refundable: z.boolean().optional(),
    segments: z
      .array(
        Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlightSegmentsItem.out,
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

export const Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlight =
  {
    in: SchemaIn$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlight,
    out: SchemaOut$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlight,
  };
