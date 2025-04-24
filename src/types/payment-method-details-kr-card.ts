import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsKrCard = {
  /**
   * The local credit or debit card brand.
   */
  brand?:
    | (
        | "bc"
        | "citi"
        | "hana"
        | "hyundai"
        | "jeju"
        | "jeonbuk"
        | "kakaobank"
        | "kbank"
        | "kdbbank"
        | "kookmin"
        | "kwangju"
        | "lotte"
        | "mg"
        | "nh"
        | "post"
        | "samsung"
        | "savingsbank"
        | "shinhan"
        | "shinhyup"
        | "suhyup"
        | "tossbank"
        | "woori"
      )
    | null
    | undefined;
  /**
   * A unique identifier for the buyer as determined by the local payment processor.
   */
  buyerId?: string | null | undefined;
  /**
   * The last four digits of the card. This may not be present for American Express cards.
   */
  last4?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsKrCard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsKrCard = {
  brand?:
    | (
        | "bc"
        | "citi"
        | "hana"
        | "hyundai"
        | "jeju"
        | "jeonbuk"
        | "kakaobank"
        | "kbank"
        | "kdbbank"
        | "kookmin"
        | "kwangju"
        | "lotte"
        | "mg"
        | "nh"
        | "post"
        | "samsung"
        | "savingsbank"
        | "shinhan"
        | "shinhyup"
        | "suhyup"
        | "tossbank"
        | "woori"
      )
    | null
    | undefined;
  buyer_id?: string | null | undefined;
  last4?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsKrCard
 */
const SchemaIn$PaymentMethodDetailsKrCard: z.ZodType<
  PaymentMethodDetailsKrCard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    brand: z
      .enum([
        "bc",
        "citi",
        "hana",
        "hyundai",
        "jeju",
        "jeonbuk",
        "kakaobank",
        "kbank",
        "kdbbank",
        "kookmin",
        "kwangju",
        "lotte",
        "mg",
        "nh",
        "post",
        "samsung",
        "savingsbank",
        "shinhan",
        "shinhyup",
        "suhyup",
        "tossbank",
        "woori",
      ])
      .nullable()
      .optional(),
    buyer_id: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      brand: "brand",
      buyer_id: "buyerId",
      last4: "last4",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsKrCard
 */
const SchemaOut$PaymentMethodDetailsKrCard: z.ZodType<
  External$PaymentMethodDetailsKrCard, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsKrCard // the object to be transformed
> = z
  .object({
    brand: z
      .enum([
        "bc",
        "citi",
        "hana",
        "hyundai",
        "jeju",
        "jeonbuk",
        "kakaobank",
        "kbank",
        "kdbbank",
        "kookmin",
        "kwangju",
        "lotte",
        "mg",
        "nh",
        "post",
        "samsung",
        "savingsbank",
        "shinhan",
        "shinhyup",
        "suhyup",
        "tossbank",
        "woori",
      ])
      .nullable()
      .optional(),
    buyerId: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      brand: "brand",
      buyerId: "buyer_id",
      last4: "last4",
    });
  });

export const Schemas$PaymentMethodDetailsKrCard = {
  in: SchemaIn$PaymentMethodDetailsKrCard,
  out: SchemaOut$PaymentMethodDetailsKrCard,
};
