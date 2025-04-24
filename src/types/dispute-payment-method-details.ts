import {
  DisputePaymentMethodDetailsAmazonPay,
  External$DisputePaymentMethodDetailsAmazonPay,
  Schemas$DisputePaymentMethodDetailsAmazonPay,
} from "./dispute-payment-method-details-amazon-pay";
import {
  DisputePaymentMethodDetailsCard,
  External$DisputePaymentMethodDetailsCard,
  Schemas$DisputePaymentMethodDetailsCard,
} from "./dispute-payment-method-details-card";
import {
  DisputePaymentMethodDetailsKlarna,
  External$DisputePaymentMethodDetailsKlarna,
  Schemas$DisputePaymentMethodDetailsKlarna,
} from "./dispute-payment-method-details-klarna";
import {
  DisputePaymentMethodDetailsPaypal,
  External$DisputePaymentMethodDetailsPaypal,
  Schemas$DisputePaymentMethodDetailsPaypal,
} from "./dispute-payment-method-details-paypal";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DisputePaymentMethodDetails = {
  amazonPay?: DisputePaymentMethodDetailsAmazonPay | undefined;
  card?: DisputePaymentMethodDetailsCard | undefined;
  klarna?: DisputePaymentMethodDetailsKlarna | undefined;
  paypal?: DisputePaymentMethodDetailsPaypal | undefined;
  /**
   * Payment method type.
   */
  type: "amazon_pay" | "card" | "klarna" | "paypal";
};

/**
 * @internal
 * DisputePaymentMethodDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisputePaymentMethodDetails = {
  amazon_pay?: External$DisputePaymentMethodDetailsAmazonPay | undefined;
  card?: External$DisputePaymentMethodDetailsCard | undefined;
  klarna?: External$DisputePaymentMethodDetailsKlarna | undefined;
  paypal?: External$DisputePaymentMethodDetailsPaypal | undefined;
  type: "amazon_pay" | "card" | "klarna" | "paypal";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisputePaymentMethodDetails
 */
const SchemaIn$DisputePaymentMethodDetails: z.ZodType<
  DisputePaymentMethodDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amazon_pay: Schemas$DisputePaymentMethodDetailsAmazonPay.in.optional(),
    card: Schemas$DisputePaymentMethodDetailsCard.in.optional(),
    klarna: Schemas$DisputePaymentMethodDetailsKlarna.in.optional(),
    paypal: Schemas$DisputePaymentMethodDetailsPaypal.in.optional(),
    type: z.enum(["amazon_pay", "card", "klarna", "paypal"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amazon_pay: "amazonPay",
      card: "card",
      klarna: "klarna",
      paypal: "paypal",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisputePaymentMethodDetails
 */
const SchemaOut$DisputePaymentMethodDetails: z.ZodType<
  External$DisputePaymentMethodDetails, // output type of this zod object
  z.ZodTypeDef,
  DisputePaymentMethodDetails // the object to be transformed
> = z
  .object({
    amazonPay: Schemas$DisputePaymentMethodDetailsAmazonPay.out.optional(),
    card: Schemas$DisputePaymentMethodDetailsCard.out.optional(),
    klarna: Schemas$DisputePaymentMethodDetailsKlarna.out.optional(),
    paypal: Schemas$DisputePaymentMethodDetailsPaypal.out.optional(),
    type: z.enum(["amazon_pay", "card", "klarna", "paypal"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amazonPay: "amazon_pay",
      card: "card",
      klarna: "klarna",
      paypal: "paypal",
      type: "type",
    });
  });

export const Schemas$DisputePaymentMethodDetails = {
  in: SchemaIn$DisputePaymentMethodDetails,
  out: SchemaOut$DisputePaymentMethodDetails,
};
