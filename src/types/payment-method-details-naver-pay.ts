import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsNaverPay = {
  /**
   * A unique identifier for the buyer as determined by the local payment processor.
   */
  buyerId?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsNaverPay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsNaverPay = {
  buyer_id?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsNaverPay
 */
const SchemaIn$PaymentMethodDetailsNaverPay: z.ZodType<
  PaymentMethodDetailsNaverPay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    buyer_id: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      buyer_id: "buyerId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsNaverPay
 */
const SchemaOut$PaymentMethodDetailsNaverPay: z.ZodType<
  External$PaymentMethodDetailsNaverPay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsNaverPay // the object to be transformed
> = z
  .object({
    buyerId: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      buyerId: "buyer_id",
    });
  });

export const Schemas$PaymentMethodDetailsNaverPay = {
  in: SchemaIn$PaymentMethodDetailsNaverPay,
  out: SchemaOut$PaymentMethodDetailsNaverPay,
};
