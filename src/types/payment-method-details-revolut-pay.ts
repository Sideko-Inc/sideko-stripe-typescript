import {
  External$RevolutPayUnderlyingPaymentMethodFundingDetails,
  RevolutPayUnderlyingPaymentMethodFundingDetails,
  Schemas$RevolutPayUnderlyingPaymentMethodFundingDetails,
} from "./revolut-pay-underlying-payment-method-funding-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsRevolutPay = {
  funding?: RevolutPayUnderlyingPaymentMethodFundingDetails | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsRevolutPay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsRevolutPay = {
  funding?:
    | External$RevolutPayUnderlyingPaymentMethodFundingDetails
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsRevolutPay
 */
const SchemaIn$PaymentMethodDetailsRevolutPay: z.ZodType<
  PaymentMethodDetailsRevolutPay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    funding:
      Schemas$RevolutPayUnderlyingPaymentMethodFundingDetails.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      funding: "funding",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsRevolutPay
 */
const SchemaOut$PaymentMethodDetailsRevolutPay: z.ZodType<
  External$PaymentMethodDetailsRevolutPay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsRevolutPay // the object to be transformed
> = z
  .object({
    funding:
      Schemas$RevolutPayUnderlyingPaymentMethodFundingDetails.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      funding: "funding",
    });
  });

export const Schemas$PaymentMethodDetailsRevolutPay = {
  in: SchemaIn$PaymentMethodDetailsRevolutPay,
  out: SchemaOut$PaymentMethodDetailsRevolutPay,
};
