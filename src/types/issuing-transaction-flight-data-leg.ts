import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingTransactionFlightDataLeg = {
  /**
   * The three-letter IATA airport code of the flight's destination.
   */
  arrivalAirportCode?: string | null | undefined;
  /**
   * The airline carrier code.
   */
  carrier?: string | null | undefined;
  /**
   * The three-letter IATA airport code that the flight departed from.
   */
  departureAirportCode?: string | null | undefined;
  /**
   * The flight number.
   */
  flightNumber?: string | null | undefined;
  /**
   * The flight's service class.
   */
  serviceClass?: string | null | undefined;
  /**
   * Whether a stopover is allowed on this flight.
   */
  stopoverAllowed?: boolean | null | undefined;
};

/**
 * @internal
 * IssuingTransactionFlightDataLeg without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingTransactionFlightDataLeg = {
  arrival_airport_code?: string | null | undefined;
  carrier?: string | null | undefined;
  departure_airport_code?: string | null | undefined;
  flight_number?: string | null | undefined;
  service_class?: string | null | undefined;
  stopover_allowed?: boolean | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingTransactionFlightDataLeg
 */
const SchemaIn$IssuingTransactionFlightDataLeg: z.ZodType<
  IssuingTransactionFlightDataLeg, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    arrival_airport_code: z.string().nullable().optional(),
    carrier: z.string().nullable().optional(),
    departure_airport_code: z.string().nullable().optional(),
    flight_number: z.string().nullable().optional(),
    service_class: z.string().nullable().optional(),
    stopover_allowed: z.boolean().nullable().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingTransactionFlightDataLeg
 */
const SchemaOut$IssuingTransactionFlightDataLeg: z.ZodType<
  External$IssuingTransactionFlightDataLeg, // output type of this zod object
  z.ZodTypeDef,
  IssuingTransactionFlightDataLeg // the object to be transformed
> = z
  .object({
    arrivalAirportCode: z.string().nullable().optional(),
    carrier: z.string().nullable().optional(),
    departureAirportCode: z.string().nullable().optional(),
    flightNumber: z.string().nullable().optional(),
    serviceClass: z.string().nullable().optional(),
    stopoverAllowed: z.boolean().nullable().optional(),
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

export const Schemas$IssuingTransactionFlightDataLeg = {
  in: SchemaIn$IssuingTransactionFlightDataLeg,
  out: SchemaOut$IssuingTransactionFlightDataLeg,
};
