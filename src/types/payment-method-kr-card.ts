import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodKrCard = {
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
   * The last four digits of the card. This may not be present for American Express cards.
   */
  last4?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodKrCard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodKrCard = {
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
  last4?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodKrCard
 */
const SchemaIn$PaymentMethodKrCard: z.ZodType<
  PaymentMethodKrCard, // output type of this zod object
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
    last4: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      brand: "brand",
      last4: "last4",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodKrCard
 */
const SchemaOut$PaymentMethodKrCard: z.ZodType<
  External$PaymentMethodKrCard, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodKrCard // the object to be transformed
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
    last4: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      brand: "brand",
      last4: "last4",
    });
  });

export const Schemas$PaymentMethodKrCard = {
  in: SchemaIn$PaymentMethodKrCard,
  out: SchemaOut$PaymentMethodKrCard,
};
