import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFuel
 */
export type TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFuel =
  {
    industryProductCode?: string | undefined;
    quantityDecimal?: string | undefined;
    type?:
      | (
          | "diesel"
          | "other"
          | "unleaded_plus"
          | "unleaded_regular"
          | "unleaded_super"
        )
      | undefined;
    unit?:
      | (
          | "charging_minute"
          | "imperial_gallon"
          | "kilogram"
          | "kilowatt_hour"
          | "liter"
          | "other"
          | "pound"
          | "us_gallon"
        )
      | undefined;
    unitCostDecimal?: string | undefined;
  };

/**
 * @internal
 * TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFuel without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFuel =
  {
    industry_product_code?: string | undefined;
    quantity_decimal?: string | undefined;
    type?:
      | (
          | "diesel"
          | "other"
          | "unleaded_plus"
          | "unleaded_regular"
          | "unleaded_super"
        )
      | undefined;
    unit?:
      | (
          | "charging_minute"
          | "imperial_gallon"
          | "kilogram"
          | "kilowatt_hour"
          | "liter"
          | "other"
          | "pound"
          | "us_gallon"
        )
      | undefined;
    unit_cost_decimal?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFuel
 */
const SchemaIn$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFuel: z.ZodType<
  TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFuel, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    industry_product_code: z.string().optional(),
    quantity_decimal: z.string().optional(),
    type: z
      .enum([
        "diesel",
        "other",
        "unleaded_plus",
        "unleaded_regular",
        "unleaded_super",
      ])
      .optional(),
    unit: z
      .enum([
        "charging_minute",
        "imperial_gallon",
        "kilogram",
        "kilowatt_hour",
        "liter",
        "other",
        "pound",
        "us_gallon",
      ])
      .optional(),
    unit_cost_decimal: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      industry_product_code: "industryProductCode",
      quantity_decimal: "quantityDecimal",
      type: "type",
      unit: "unit",
      unit_cost_decimal: "unitCostDecimal",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFuel
 */
const SchemaOut$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFuel: z.ZodType<
  External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFuel, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFuel // the object to be transformed
> = z
  .object({
    industryProductCode: z.string().optional(),
    quantityDecimal: z.string().optional(),
    type: z
      .enum([
        "diesel",
        "other",
        "unleaded_plus",
        "unleaded_regular",
        "unleaded_super",
      ])
      .optional(),
    unit: z
      .enum([
        "charging_minute",
        "imperial_gallon",
        "kilogram",
        "kilowatt_hour",
        "liter",
        "other",
        "pound",
        "us_gallon",
      ])
      .optional(),
    unitCostDecimal: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      industryProductCode: "industry_product_code",
      quantityDecimal: "quantity_decimal",
      type: "type",
      unit: "unit",
      unitCostDecimal: "unit_cost_decimal",
    });
  });

export const Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFuel =
  {
    in: SchemaIn$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFuel,
    out: SchemaOut$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFuel,
  };
