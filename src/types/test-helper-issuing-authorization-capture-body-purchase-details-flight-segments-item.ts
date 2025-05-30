import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlightSegmentsItem
 */
export type TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlightSegmentsItem =
  {
    arrivalAirportCode?: string | undefined;
    carrier?: string | undefined;
    departureAirportCode?: string | undefined;
    flightNumber?: string | undefined;
    serviceClass?: string | undefined;
    stopoverAllowed?: boolean | undefined;
  };

/**
 * @internal
 * TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlightSegmentsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlightSegmentsItem =
  {
    arrival_airport_code?: string | undefined;
    carrier?: string | undefined;
    departure_airport_code?: string | undefined;
    flight_number?: string | undefined;
    service_class?: string | undefined;
    stopover_allowed?: boolean | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlightSegmentsItem
 */
const SchemaIn$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlightSegmentsItem: z.ZodType<
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlightSegmentsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    arrival_airport_code: z.string().optional(),
    carrier: z.string().optional(),
    departure_airport_code: z.string().optional(),
    flight_number: z.string().optional(),
    service_class: z.string().optional(),
    stopover_allowed: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      arrival_airport_code: "arrivalAirportCode",
      carrier: "carrier",
      departure_airport_code: "departureAirportCode",
      flight_number: "flightNumber",
      service_class: "serviceClass",
      stopover_allowed: "stopoverAllowed",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlightSegmentsItem
 */
const SchemaOut$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlightSegmentsItem: z.ZodType<
  External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlightSegmentsItem, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlightSegmentsItem // the object to be transformed
> = z
  .object({
    arrivalAirportCode: z.string().optional(),
    carrier: z.string().optional(),
    departureAirportCode: z.string().optional(),
    flightNumber: z.string().optional(),
    serviceClass: z.string().optional(),
    stopoverAllowed: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      arrivalAirportCode: "arrival_airport_code",
      carrier: "carrier",
      departureAirportCode: "departure_airport_code",
      flightNumber: "flight_number",
      serviceClass: "service_class",
      stopoverAllowed: "stopover_allowed",
    });
  });

export const Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlightSegmentsItem =
  {
    in: SchemaIn$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlightSegmentsItem,
    out: SchemaOut$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFlightSegmentsItem,
  };
