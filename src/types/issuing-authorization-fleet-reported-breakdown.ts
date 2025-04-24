import {
  External$IssuingAuthorizationFleetFuelPriceData,
  IssuingAuthorizationFleetFuelPriceData,
  Schemas$IssuingAuthorizationFleetFuelPriceData,
} from "./issuing-authorization-fleet-fuel-price-data";
import {
  External$IssuingAuthorizationFleetNonFuelPriceData,
  IssuingAuthorizationFleetNonFuelPriceData,
  Schemas$IssuingAuthorizationFleetNonFuelPriceData,
} from "./issuing-authorization-fleet-non-fuel-price-data";
import {
  External$IssuingAuthorizationFleetTaxData,
  IssuingAuthorizationFleetTaxData,
  Schemas$IssuingAuthorizationFleetTaxData,
} from "./issuing-authorization-fleet-tax-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingAuthorizationFleetReportedBreakdown = {
  fuel?: IssuingAuthorizationFleetFuelPriceData | undefined;
  nonFuel?: IssuingAuthorizationFleetNonFuelPriceData | undefined;
  tax?: IssuingAuthorizationFleetTaxData | undefined;
};

/**
 * @internal
 * IssuingAuthorizationFleetReportedBreakdown without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingAuthorizationFleetReportedBreakdown = {
  fuel?: External$IssuingAuthorizationFleetFuelPriceData | undefined;
  non_fuel?: External$IssuingAuthorizationFleetNonFuelPriceData | undefined;
  tax?: External$IssuingAuthorizationFleetTaxData | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingAuthorizationFleetReportedBreakdown
 */
const SchemaIn$IssuingAuthorizationFleetReportedBreakdown: z.ZodType<
  IssuingAuthorizationFleetReportedBreakdown, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    fuel: Schemas$IssuingAuthorizationFleetFuelPriceData.in.optional(),
    non_fuel: Schemas$IssuingAuthorizationFleetNonFuelPriceData.in.optional(),
    tax: Schemas$IssuingAuthorizationFleetTaxData.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingAuthorizationFleetReportedBreakdown
 */
const SchemaOut$IssuingAuthorizationFleetReportedBreakdown: z.ZodType<
  External$IssuingAuthorizationFleetReportedBreakdown, // output type of this zod object
  z.ZodTypeDef,
  IssuingAuthorizationFleetReportedBreakdown // the object to be transformed
> = z
  .object({
    fuel: Schemas$IssuingAuthorizationFleetFuelPriceData.out.optional(),
    nonFuel: Schemas$IssuingAuthorizationFleetNonFuelPriceData.out.optional(),
    tax: Schemas$IssuingAuthorizationFleetTaxData.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fuel: "fuel",
      nonFuel: "non_fuel",
      tax: "tax",
    });
  });

export const Schemas$IssuingAuthorizationFleetReportedBreakdown = {
  in: SchemaIn$IssuingAuthorizationFleetReportedBreakdown,
  out: SchemaOut$IssuingAuthorizationFleetReportedBreakdown,
};
