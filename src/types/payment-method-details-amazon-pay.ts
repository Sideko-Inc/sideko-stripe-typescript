import {
  AmazonPayUnderlyingPaymentMethodFundingDetails,
  External$AmazonPayUnderlyingPaymentMethodFundingDetails,
  Schemas$AmazonPayUnderlyingPaymentMethodFundingDetails,
} from "./amazon-pay-underlying-payment-method-funding-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsAmazonPay = {
  funding?: AmazonPayUnderlyingPaymentMethodFundingDetails | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsAmazonPay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsAmazonPay = {
  funding?: External$AmazonPayUnderlyingPaymentMethodFundingDetails | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsAmazonPay
 */
const SchemaIn$PaymentMethodDetailsAmazonPay: z.ZodType<
  PaymentMethodDetailsAmazonPay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    funding:
      Schemas$AmazonPayUnderlyingPaymentMethodFundingDetails.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      funding: "funding",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsAmazonPay
 */
const SchemaOut$PaymentMethodDetailsAmazonPay: z.ZodType<
  External$PaymentMethodDetailsAmazonPay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsAmazonPay // the object to be transformed
> = z
  .object({
    funding:
      Schemas$AmazonPayUnderlyingPaymentMethodFundingDetails.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      funding: "funding",
    });
  });

export const Schemas$PaymentMethodDetailsAmazonPay = {
  in: SchemaIn$PaymentMethodDetailsAmazonPay,
  out: SchemaOut$PaymentMethodDetailsAmazonPay,
};
