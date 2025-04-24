import {
  External$PaymentMethodDetailsPassthroughCard,
  PaymentMethodDetailsPassthroughCard,
  Schemas$PaymentMethodDetailsPassthroughCard,
} from "./payment-method-details-passthrough-card";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type RevolutPayUnderlyingPaymentMethodFundingDetails = {
  card?: PaymentMethodDetailsPassthroughCard | undefined;
  /**
   * funding type of the underlying payment method.
   */
  type?: "card" | null | undefined;
};

/**
 * @internal
 * RevolutPayUnderlyingPaymentMethodFundingDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RevolutPayUnderlyingPaymentMethodFundingDetails = {
  card?: External$PaymentMethodDetailsPassthroughCard | undefined;
  type?: "card" | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RevolutPayUnderlyingPaymentMethodFundingDetails
 */
const SchemaIn$RevolutPayUnderlyingPaymentMethodFundingDetails: z.ZodType<
  RevolutPayUnderlyingPaymentMethodFundingDetails, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RevolutPayUnderlyingPaymentMethodFundingDetails
 */
const SchemaOut$RevolutPayUnderlyingPaymentMethodFundingDetails: z.ZodType<
  External$RevolutPayUnderlyingPaymentMethodFundingDetails, // output type of this zod object
  z.ZodTypeDef,
  RevolutPayUnderlyingPaymentMethodFundingDetails // the object to be transformed
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

export const Schemas$RevolutPayUnderlyingPaymentMethodFundingDetails = {
  in: SchemaIn$RevolutPayUnderlyingPaymentMethodFundingDetails,
  out: SchemaOut$RevolutPayUnderlyingPaymentMethodFundingDetails,
};
