import {
  External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFlightSegmentsItem,
  Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFlightSegmentsItem,
  TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFlightSegmentsItem,
} from "./test-helper-issuing-transaction-create-unlinked-refund-body-purchase-details-flight-segments-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFlight
 */
export type TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFlight =
  {
    departureAt?: number | undefined;
    passengerName?: string | undefined;
    refundable?: boolean | undefined;
    segments?:
      | TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFlightSegmentsItem[]
      | undefined;
    travelAgency?: string | undefined;
  };

/**
 * @internal
 * TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFlight without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFlight =
  {
    departure_at?: number | undefined;
    passenger_name?: string | undefined;
    refundable?: boolean | undefined;
    segments?:
      | External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFlightSegmentsItem[]
      | undefined;
    travel_agency?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFlight
 */
const SchemaIn$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFlight: z.ZodType<
  TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFlight, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    departure_at: z.number().int().optional(),
    passenger_name: z.string().optional(),
    refundable: z.boolean().optional(),
    segments: z
      .array(
        Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFlightSegmentsItem.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFlight
 */
const SchemaOut$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFlight: z.ZodType<
  External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFlight, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFlight // the object to be transformed
> = z
  .object({
    departureAt: z.number().int().optional(),
    passengerName: z.string().optional(),
    refundable: z.boolean().optional(),
    segments: z
      .array(
        Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFlightSegmentsItem.out,
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

export const Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFlight =
  {
    in: SchemaIn$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFlight,
    out: SchemaOut$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFlight,
  };
