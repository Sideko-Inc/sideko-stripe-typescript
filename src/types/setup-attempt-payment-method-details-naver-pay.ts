import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SetupAttemptPaymentMethodDetailsNaverPay = {
  /**
   * Uniquely identifies this particular Naver Pay account. You can use this attribute to check whether two Naver Pay accounts are the same.
   */
  buyerId?: string | undefined;
};

/**
 * @internal
 * SetupAttemptPaymentMethodDetailsNaverPay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupAttemptPaymentMethodDetailsNaverPay = {
  buyer_id?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupAttemptPaymentMethodDetailsNaverPay
 */
const SchemaIn$SetupAttemptPaymentMethodDetailsNaverPay: z.ZodType<
  SetupAttemptPaymentMethodDetailsNaverPay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    buyer_id: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      buyer_id: "buyerId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupAttemptPaymentMethodDetailsNaverPay
 */
const SchemaOut$SetupAttemptPaymentMethodDetailsNaverPay: z.ZodType<
  External$SetupAttemptPaymentMethodDetailsNaverPay, // output type of this zod object
  z.ZodTypeDef,
  SetupAttemptPaymentMethodDetailsNaverPay // the object to be transformed
> = z
  .object({
    buyerId: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      buyerId: "buyer_id",
    });
  });

export const Schemas$SetupAttemptPaymentMethodDetailsNaverPay = {
  in: SchemaIn$SetupAttemptPaymentMethodDetailsNaverPay,
  out: SchemaOut$SetupAttemptPaymentMethodDetailsNaverPay,
};
