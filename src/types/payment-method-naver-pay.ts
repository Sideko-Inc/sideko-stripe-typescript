import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodNaverPay = {
  /**
   * Uniquely identifies this particular Naver Pay account. You can use this attribute to check whether two Naver Pay accounts are the same.
   */
  buyerId?: string | null | undefined;
  /**
   * Whether to fund this transaction with Naver Pay points or a card.
   */
  funding: "card" | "points";
};

/**
 * @internal
 * PaymentMethodNaverPay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodNaverPay = {
  buyer_id?: string | null | undefined;
  funding: "card" | "points";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodNaverPay
 */
const SchemaIn$PaymentMethodNaverPay: z.ZodType<
  PaymentMethodNaverPay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    buyer_id: z.string().nullable().optional(),
    funding: z.enum(["card", "points"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      buyer_id: "buyerId",
      funding: "funding",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodNaverPay
 */
const SchemaOut$PaymentMethodNaverPay: z.ZodType<
  External$PaymentMethodNaverPay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodNaverPay // the object to be transformed
> = z
  .object({
    buyerId: z.string().nullable().optional(),
    funding: z.enum(["card", "points"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      buyerId: "buyer_id",
      funding: "funding",
    });
  });

export const Schemas$PaymentMethodNaverPay = {
  in: SchemaIn$PaymentMethodNaverPay,
  out: SchemaOut$PaymentMethodNaverPay,
};
