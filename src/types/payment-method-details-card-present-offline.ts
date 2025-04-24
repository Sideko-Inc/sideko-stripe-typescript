import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsCardPresentOffline = {
  /**
   * Time at which the payment was collected while offline
   */
  storedAt?: number | null | undefined;
  /**
   * The method used to process this payment method offline. Only deferred is allowed.
   */
  type?: "deferred" | null | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsCardPresentOffline without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsCardPresentOffline = {
  stored_at?: number | null | undefined;
  type?: "deferred" | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsCardPresentOffline
 */
const SchemaIn$PaymentMethodDetailsCardPresentOffline: z.ZodType<
  PaymentMethodDetailsCardPresentOffline, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    stored_at: z.number().int().nullable().optional(),
    type: z.enum(["deferred"]).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      stored_at: "storedAt",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsCardPresentOffline
 */
const SchemaOut$PaymentMethodDetailsCardPresentOffline: z.ZodType<
  External$PaymentMethodDetailsCardPresentOffline, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsCardPresentOffline // the object to be transformed
> = z
  .object({
    storedAt: z.number().int().nullable().optional(),
    type: z.enum(["deferred"]).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      storedAt: "stored_at",
      type: "type",
    });
  });

export const Schemas$PaymentMethodDetailsCardPresentOffline = {
  in: SchemaIn$PaymentMethodDetailsCardPresentOffline,
  out: SchemaOut$PaymentMethodDetailsCardPresentOffline,
};
