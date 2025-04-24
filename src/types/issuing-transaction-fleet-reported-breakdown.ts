import {
  External$IssuingTransactionFleetFuelPriceData,
  IssuingTransactionFleetFuelPriceData,
  Schemas$IssuingTransactionFleetFuelPriceData,
} from "./issuing-transaction-fleet-fuel-price-data";
import {
  External$IssuingTransactionFleetNonFuelPriceData,
  IssuingTransactionFleetNonFuelPriceData,
  Schemas$IssuingTransactionFleetNonFuelPriceData,
} from "./issuing-transaction-fleet-non-fuel-price-data";
import {
  External$IssuingTransactionFleetTaxData,
  IssuingTransactionFleetTaxData,
  Schemas$IssuingTransactionFleetTaxData,
} from "./issuing-transaction-fleet-tax-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingTransactionFleetReportedBreakdown = {
  fuel?: IssuingTransactionFleetFuelPriceData | undefined;
  nonFuel?: IssuingTransactionFleetNonFuelPriceData | undefined;
  tax?: IssuingTransactionFleetTaxData | undefined;
};

/**
 * @internal
 * IssuingTransactionFleetReportedBreakdown without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingTransactionFleetReportedBreakdown = {
  fuel?: External$IssuingTransactionFleetFuelPriceData | undefined;
  non_fuel?: External$IssuingTransactionFleetNonFuelPriceData | undefined;
  tax?: External$IssuingTransactionFleetTaxData | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingTransactionFleetReportedBreakdown
 */
const SchemaIn$IssuingTransactionFleetReportedBreakdown: z.ZodType<
  IssuingTransactionFleetReportedBreakdown, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    fuel: Schemas$IssuingTransactionFleetFuelPriceData.in.optional(),
    non_fuel: Schemas$IssuingTransactionFleetNonFuelPriceData.in.optional(),
    tax: Schemas$IssuingTransactionFleetTaxData.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fuel: "fuel",
      non_fuel: "nonFuel",
      tax: "tax",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingTransactionFleetReportedBreakdown
 */
const SchemaOut$IssuingTransactionFleetReportedBreakdown: z.ZodType<
  External$IssuingTransactionFleetReportedBreakdown, // output type of this zod object
  z.ZodTypeDef,
  IssuingTransactionFleetReportedBreakdown // the object to be transformed
> = z
  .object({
    fuel: Schemas$IssuingTransactionFleetFuelPriceData.out.optional(),
    nonFuel: Schemas$IssuingTransactionFleetNonFuelPriceData.out.optional(),
    tax: Schemas$IssuingTransactionFleetTaxData.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fuel: "fuel",
      nonFuel: "non_fuel",
      tax: "tax",
    });
  });

export const Schemas$IssuingTransactionFleetReportedBreakdown = {
  in: SchemaIn$IssuingTransactionFleetReportedBreakdown,
  out: SchemaOut$IssuingTransactionFleetReportedBreakdown,
};
