import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingAuthorizationFleetFuelPriceData = {
  /**
   * Gross fuel amount that should equal Fuel Quantity multiplied by Fuel Unit Cost, inclusive of taxes.
   */
  grossAmountDecimal?: string | null | undefined;
};

/**
 * @internal
 * IssuingAuthorizationFleetFuelPriceData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingAuthorizationFleetFuelPriceData = {
  gross_amount_decimal?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingAuthorizationFleetFuelPriceData
 */
const SchemaIn$IssuingAuthorizationFleetFuelPriceData: z.ZodType<
  IssuingAuthorizationFleetFuelPriceData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    gross_amount_decimal: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      gross_amount_decimal: "grossAmountDecimal",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingAuthorizationFleetFuelPriceData
 */
const SchemaOut$IssuingAuthorizationFleetFuelPriceData: z.ZodType<
  External$IssuingAuthorizationFleetFuelPriceData, // output type of this zod object
  z.ZodTypeDef,
  IssuingAuthorizationFleetFuelPriceData // the object to be transformed
> = z
  .object({
    grossAmountDecimal: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      grossAmountDecimal: "gross_amount_decimal",
    });
  });

export const Schemas$IssuingAuthorizationFleetFuelPriceData = {
  in: SchemaIn$IssuingAuthorizationFleetFuelPriceData,
  out: SchemaOut$IssuingAuthorizationFleetFuelPriceData,
};
