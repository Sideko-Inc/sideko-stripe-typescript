import {
  External$IssuingTransactionFleetData,
  IssuingTransactionFleetData,
  Schemas$IssuingTransactionFleetData,
} from "./issuing-transaction-fleet-data";
import {
  External$IssuingTransactionFlightData,
  IssuingTransactionFlightData,
  Schemas$IssuingTransactionFlightData,
} from "./issuing-transaction-flight-data";
import {
  External$IssuingTransactionFuelData,
  IssuingTransactionFuelData,
  Schemas$IssuingTransactionFuelData,
} from "./issuing-transaction-fuel-data";
import {
  External$IssuingTransactionLodgingData,
  IssuingTransactionLodgingData,
  Schemas$IssuingTransactionLodgingData,
} from "./issuing-transaction-lodging-data";
import {
  External$IssuingTransactionReceiptData,
  IssuingTransactionReceiptData,
  Schemas$IssuingTransactionReceiptData,
} from "./issuing-transaction-receipt-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingTransactionPurchaseDetails = {
  fleet?: IssuingTransactionFleetData | undefined;
  flight?: IssuingTransactionFlightData | undefined;
  fuel?: IssuingTransactionFuelData | undefined;
  lodging?: IssuingTransactionLodgingData | undefined;
  /**
   * The line items in the purchase.
   */
  receipt?: IssuingTransactionReceiptData[] | null | undefined;
  /**
   * A merchant-specific order number.
   */
  reference?: string | null | undefined;
};

/**
 * @internal
 * IssuingTransactionPurchaseDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingTransactionPurchaseDetails = {
  fleet?: External$IssuingTransactionFleetData | undefined;
  flight?: External$IssuingTransactionFlightData | undefined;
  fuel?: External$IssuingTransactionFuelData | undefined;
  lodging?: External$IssuingTransactionLodgingData | undefined;
  receipt?: External$IssuingTransactionReceiptData[] | null | undefined;
  reference?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingTransactionPurchaseDetails
 */
const SchemaIn$IssuingTransactionPurchaseDetails: z.ZodType<
  IssuingTransactionPurchaseDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    fleet: Schemas$IssuingTransactionFleetData.in.optional(),
    flight: Schemas$IssuingTransactionFlightData.in.optional(),
    fuel: Schemas$IssuingTransactionFuelData.in.optional(),
    lodging: Schemas$IssuingTransactionLodgingData.in.optional(),
    receipt: z
      .array(Schemas$IssuingTransactionReceiptData.in)
      .nullable()
      .optional(),
    reference: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fleet: "fleet",
      flight: "flight",
      fuel: "fuel",
      lodging: "lodging",
      receipt: "receipt",
      reference: "reference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingTransactionPurchaseDetails
 */
const SchemaOut$IssuingTransactionPurchaseDetails: z.ZodType<
  External$IssuingTransactionPurchaseDetails, // output type of this zod object
  z.ZodTypeDef,
  IssuingTransactionPurchaseDetails // the object to be transformed
> = z
  .object({
    fleet: Schemas$IssuingTransactionFleetData.out.optional(),
    flight: Schemas$IssuingTransactionFlightData.out.optional(),
    fuel: Schemas$IssuingTransactionFuelData.out.optional(),
    lodging: Schemas$IssuingTransactionLodgingData.out.optional(),
    receipt: z
      .array(Schemas$IssuingTransactionReceiptData.out)
      .nullable()
      .optional(),
    reference: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fleet: "fleet",
      flight: "flight",
      fuel: "fuel",
      lodging: "lodging",
      receipt: "receipt",
      reference: "reference",
    });
  });

export const Schemas$IssuingTransactionPurchaseDetails = {
  in: SchemaIn$IssuingTransactionPurchaseDetails,
  out: SchemaOut$IssuingTransactionPurchaseDetails,
};
