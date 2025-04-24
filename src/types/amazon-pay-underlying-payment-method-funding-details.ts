import {
  External$PaymentMethodDetailsPassthroughCard,
  PaymentMethodDetailsPassthroughCard,
  Schemas$PaymentMethodDetailsPassthroughCard,
} from "./payment-method-details-passthrough-card";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type AmazonPayUnderlyingPaymentMethodFundingDetails = {
  card?: PaymentMethodDetailsPassthroughCard | undefined;
  /**
   * funding type of the underlying payment method.
   */
  type?: "card" | null | undefined;
};

/**
 * @internal
 * AmazonPayUnderlyingPaymentMethodFundingDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AmazonPayUnderlyingPaymentMethodFundingDetails = {
  card?: External$PaymentMethodDetailsPassthroughCard | undefined;
  type?: "card" | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AmazonPayUnderlyingPaymentMethodFundingDetails
 */
const SchemaIn$AmazonPayUnderlyingPaymentMethodFundingDetails: z.ZodType<
  AmazonPayUnderlyingPaymentMethodFundingDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    card: Schemas$PaymentMethodDetailsPassthroughCard.in.optional(),
    type: z.enum(["card"]).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card: "card",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AmazonPayUnderlyingPaymentMethodFundingDetails
 */
const SchemaOut$AmazonPayUnderlyingPaymentMethodFundingDetails: z.ZodType<
  External$AmazonPayUnderlyingPaymentMethodFundingDetails, // output type of this zod object
  z.ZodTypeDef,
  AmazonPayUnderlyingPaymentMethodFundingDetails // the object to be transformed
> = z
  .object({
    card: Schemas$PaymentMethodDetailsPassthroughCard.out.optional(),
    type: z.enum(["card"]).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card: "card",
      type: "type",
    });
  });

export const Schemas$AmazonPayUnderlyingPaymentMethodFundingDetails = {
  in: SchemaIn$AmazonPayUnderlyingPaymentMethodFundingDetails,
  out: SchemaOut$AmazonPayUnderlyingPaymentMethodFundingDetails,
};
