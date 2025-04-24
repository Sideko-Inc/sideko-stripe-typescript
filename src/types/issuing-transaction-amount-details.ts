import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingTransactionAmountDetails = {
  /**
   * The fee charged by the ATM for the cash withdrawal.
   */
  atmFee?: number | null | undefined;
  /**
   * The amount of cash requested by the cardholder.
   */
  cashbackAmount?: number | null | undefined;
};

/**
 * @internal
 * IssuingTransactionAmountDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingTransactionAmountDetails = {
  atm_fee?: number | null | undefined;
  cashback_amount?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingTransactionAmountDetails
 */
const SchemaIn$IssuingTransactionAmountDetails: z.ZodType<
  IssuingTransactionAmountDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    atm_fee: z.number().int().nullable().optional(),
    cashback_amount: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      atm_fee: "atmFee",
      cashback_amount: "cashbackAmount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingTransactionAmountDetails
 */
const SchemaOut$IssuingTransactionAmountDetails: z.ZodType<
  External$IssuingTransactionAmountDetails, // output type of this zod object
  z.ZodTypeDef,
  IssuingTransactionAmountDetails // the object to be transformed
> = z
  .object({
    atmFee: z.number().int().nullable().optional(),
    cashbackAmount: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      atmFee: "atm_fee",
      cashbackAmount: "cashback_amount",
    });
  });

export const Schemas$IssuingTransactionAmountDetails = {
  in: SchemaIn$IssuingTransactionAmountDetails,
  out: SchemaOut$IssuingTransactionAmountDetails,
};
