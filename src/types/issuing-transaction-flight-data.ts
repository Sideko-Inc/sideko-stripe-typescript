import {
  External$IssuingTransactionFlightDataLeg,
  IssuingTransactionFlightDataLeg,
  Schemas$IssuingTransactionFlightDataLeg,
} from "./issuing-transaction-flight-data-leg";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingTransactionFlightData = {
  /**
   * The time that the flight departed.
   */
  departureAt?: number | null | undefined;
  /**
   * The name of the passenger.
   */
  passengerName?: string | null | undefined;
  /**
   * Whether the ticket is refundable.
   */
  refundable?: boolean | null | undefined;
  /**
   * The legs of the trip.
   */
  segments?: IssuingTransactionFlightDataLeg[] | null | undefined;
  /**
   * The travel agency that issued the ticket.
   */
  travelAgency?: string | null | undefined;
};

/**
 * @internal
 * IssuingTransactionFlightData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingTransactionFlightData = {
  departure_at?: number | null | undefined;
  passenger_name?: string | null | undefined;
  refundable?: boolean | null | undefined;
  segments?: External$IssuingTransactionFlightDataLeg[] | null | undefined;
  travel_agency?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingTransactionFlightData
 */
const SchemaIn$IssuingTransactionFlightData: z.ZodType<
  IssuingTransactionFlightData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    departure_at: z.number().int().nullable().optional(),
    passenger_name: z.string().nullable().optional(),
    refundable: z.boolean().nullable().optional(),
    segments: z
      .array(Schemas$IssuingTransactionFlightDataLeg.in)
      .nullable()
      .optional(),
    travel_agency: z.string().nullable().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingTransactionFlightData
 */
const SchemaOut$IssuingTransactionFlightData: z.ZodType<
  External$IssuingTransactionFlightData, // output type of this zod object
  z.ZodTypeDef,
  IssuingTransactionFlightData // the object to be transformed
> = z
  .object({
    departureAt: z.number().int().nullable().optional(),
    passengerName: z.string().nullable().optional(),
    refundable: z.boolean().nullable().optional(),
    segments: z
      .array(Schemas$IssuingTransactionFlightDataLeg.out)
      .nullable()
      .optional(),
    travelAgency: z.string().nullable().optional(),
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

export const Schemas$IssuingTransactionFlightData = {
  in: SchemaIn$IssuingTransactionFlightData,
  out: SchemaOut$IssuingTransactionFlightData,
};
