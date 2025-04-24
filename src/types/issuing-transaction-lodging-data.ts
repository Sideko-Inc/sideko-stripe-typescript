import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingTransactionLodgingData = {
  /**
   * The time of checking into the lodging.
   */
  checkInAt?: number | null | undefined;
  /**
   * The number of nights stayed at the lodging.
   */
  nights?: number | null | undefined;
};

/**
 * @internal
 * IssuingTransactionLodgingData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingTransactionLodgingData = {
  check_in_at?: number | null | undefined;
  nights?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingTransactionLodgingData
 */
const SchemaIn$IssuingTransactionLodgingData: z.ZodType<
  IssuingTransactionLodgingData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    check_in_at: z.number().int().nullable().optional(),
    nights: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      check_in_at: "checkInAt",
      nights: "nights",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingTransactionLodgingData
 */
const SchemaOut$IssuingTransactionLodgingData: z.ZodType<
  External$IssuingTransactionLodgingData, // output type of this zod object
  z.ZodTypeDef,
  IssuingTransactionLodgingData // the object to be transformed
> = z
  .object({
    checkInAt: z.number().int().nullable().optional(),
    nights: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      checkInAt: "check_in_at",
      nights: "nights",
    });
  });

export const Schemas$IssuingTransactionLodgingData = {
  in: SchemaIn$IssuingTransactionLodgingData,
  out: SchemaOut$IssuingTransactionLodgingData,
};
