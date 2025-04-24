import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingAuthorizationAmountDetails = {
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
 * IssuingAuthorizationAmountDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingAuthorizationAmountDetails = {
  atm_fee?: number | null | undefined;
  cashback_amount?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingAuthorizationAmountDetails
 */
const SchemaIn$IssuingAuthorizationAmountDetails: z.ZodType<
  IssuingAuthorizationAmountDetails, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingAuthorizationAmountDetails
 */
const SchemaOut$IssuingAuthorizationAmountDetails: z.ZodType<
  External$IssuingAuthorizationAmountDetails, // output type of this zod object
  z.ZodTypeDef,
  IssuingAuthorizationAmountDetails // the object to be transformed
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

export const Schemas$IssuingAuthorizationAmountDetails = {
  in: SchemaIn$IssuingAuthorizationAmountDetails,
  out: SchemaOut$IssuingAuthorizationAmountDetails,
};
