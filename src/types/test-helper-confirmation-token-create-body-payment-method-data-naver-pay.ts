import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperConfirmationTokenCreateBodyPaymentMethodDataNaverPay
 */
export type TestHelperConfirmationTokenCreateBodyPaymentMethodDataNaverPay = {
  funding?: ("card" | "points") | undefined;
};

/**
 * @internal
 * TestHelperConfirmationTokenCreateBodyPaymentMethodDataNaverPay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataNaverPay =
  {
    funding?: ("card" | "points") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperConfirmationTokenCreateBodyPaymentMethodDataNaverPay
 */
const SchemaIn$TestHelperConfirmationTokenCreateBodyPaymentMethodDataNaverPay: z.ZodType<
  TestHelperConfirmationTokenCreateBodyPaymentMethodDataNaverPay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    funding: z.enum(["card", "points"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      funding: "funding",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataNaverPay
 */
const SchemaOut$TestHelperConfirmationTokenCreateBodyPaymentMethodDataNaverPay: z.ZodType<
  External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataNaverPay, // output type of this zod object
  z.ZodTypeDef,
  TestHelperConfirmationTokenCreateBodyPaymentMethodDataNaverPay // the object to be transformed
> = z
  .object({
    funding: z.enum(["card", "points"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      funding: "funding",
    });
  });

export const Schemas$TestHelperConfirmationTokenCreateBodyPaymentMethodDataNaverPay =
  {
    in: SchemaIn$TestHelperConfirmationTokenCreateBodyPaymentMethodDataNaverPay,
    out: SchemaOut$TestHelperConfirmationTokenCreateBodyPaymentMethodDataNaverPay,
  };
