import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingTransactionFleetNonFuelPriceData = {
  /**
   * Gross non-fuel amount that should equal the sum of the line items, inclusive of taxes.
   */
  grossAmountDecimal?: string | null | undefined;
};

/**
 * @internal
 * IssuingTransactionFleetNonFuelPriceData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingTransactionFleetNonFuelPriceData = {
  gross_amount_decimal?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingTransactionFleetNonFuelPriceData
 */
const SchemaIn$IssuingTransactionFleetNonFuelPriceData: z.ZodType<
  IssuingTransactionFleetNonFuelPriceData, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingTransactionFleetNonFuelPriceData
 */
const SchemaOut$IssuingTransactionFleetNonFuelPriceData: z.ZodType<
  External$IssuingTransactionFleetNonFuelPriceData, // output type of this zod object
  z.ZodTypeDef,
  IssuingTransactionFleetNonFuelPriceData // the object to be transformed
> = z
  .object({
    grossAmountDecimal: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      grossAmountDecimal: "gross_amount_decimal",
    });
  });

export const Schemas$IssuingTransactionFleetNonFuelPriceData = {
  in: SchemaIn$IssuingTransactionFleetNonFuelPriceData,
  out: SchemaOut$IssuingTransactionFleetNonFuelPriceData,
};
