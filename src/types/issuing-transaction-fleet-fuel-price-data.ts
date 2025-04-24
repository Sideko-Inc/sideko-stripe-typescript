import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingTransactionFleetFuelPriceData = {
  /**
   * Gross fuel amount that should equal Fuel Volume multipled by Fuel Unit Cost, inclusive of taxes.
   */
  grossAmountDecimal?: string | null | undefined;
};

/**
 * @internal
 * IssuingTransactionFleetFuelPriceData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingTransactionFleetFuelPriceData = {
  gross_amount_decimal?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingTransactionFleetFuelPriceData
 */
const SchemaIn$IssuingTransactionFleetFuelPriceData: z.ZodType<
  IssuingTransactionFleetFuelPriceData, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingTransactionFleetFuelPriceData
 */
const SchemaOut$IssuingTransactionFleetFuelPriceData: z.ZodType<
  External$IssuingTransactionFleetFuelPriceData, // output type of this zod object
  z.ZodTypeDef,
  IssuingTransactionFleetFuelPriceData // the object to be transformed
> = z
  .object({
    grossAmountDecimal: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      grossAmountDecimal: "gross_amount_decimal",
    });
  });

export const Schemas$IssuingTransactionFleetFuelPriceData = {
  in: SchemaIn$IssuingTransactionFleetFuelPriceData,
  out: SchemaOut$IssuingTransactionFleetFuelPriceData,
};
