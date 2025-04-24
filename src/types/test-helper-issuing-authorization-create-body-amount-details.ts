import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
 */
export type TestHelperIssuingAuthorizationCreateBodyAmountDetails = {
  atmFee?: number | undefined;
  cashbackAmount?: number | undefined;
};

/**
 * @internal
 * TestHelperIssuingAuthorizationCreateBodyAmountDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationCreateBodyAmountDetails = {
  atm_fee?: number | undefined;
  cashback_amount?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationCreateBodyAmountDetails
 */
const SchemaIn$TestHelperIssuingAuthorizationCreateBodyAmountDetails: z.ZodType<
  TestHelperIssuingAuthorizationCreateBodyAmountDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    atm_fee: z.number().int().optional(),
    cashback_amount: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      atm_fee: "atmFee",
      cashback_amount: "cashbackAmount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationCreateBodyAmountDetails
 */
const SchemaOut$TestHelperIssuingAuthorizationCreateBodyAmountDetails: z.ZodType<
  External$TestHelperIssuingAuthorizationCreateBodyAmountDetails, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationCreateBodyAmountDetails // the object to be transformed
> = z
  .object({
    atmFee: z.number().int().optional(),
    cashbackAmount: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      atmFee: "atm_fee",
      cashbackAmount: "cashback_amount",
    });
  });

export const Schemas$TestHelperIssuingAuthorizationCreateBodyAmountDetails = {
  in: SchemaIn$TestHelperIssuingAuthorizationCreateBodyAmountDetails,
  out: SchemaOut$TestHelperIssuingAuthorizationCreateBodyAmountDetails,
};
