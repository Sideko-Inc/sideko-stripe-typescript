import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodDataIdeal
 */
export type PaymentIntentCreateBodyPaymentMethodDataIdeal = {
  bank?:
    | (
        | "abn_amro"
        | "asn_bank"
        | "bunq"
        | "handelsbanken"
        | "ing"
        | "knab"
        | "moneyou"
        | "n26"
        | "nn"
        | "rabobank"
        | "regiobank"
        | "revolut"
        | "sns_bank"
        | "triodos_bank"
        | "van_lanschot"
        | "yoursafe"
      )
    | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodDataIdeal without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodDataIdeal = {
  bank?:
    | (
        | "abn_amro"
        | "asn_bank"
        | "bunq"
        | "handelsbanken"
        | "ing"
        | "knab"
        | "moneyou"
        | "n26"
        | "nn"
        | "rabobank"
        | "regiobank"
        | "revolut"
        | "sns_bank"
        | "triodos_bank"
        | "van_lanschot"
        | "yoursafe"
      )
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodDataIdeal
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodDataIdeal: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodDataIdeal, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank: z
      .enum([
        "abn_amro",
        "asn_bank",
        "bunq",
        "handelsbanken",
        "ing",
        "knab",
        "moneyou",
        "n26",
        "nn",
        "rabobank",
        "regiobank",
        "revolut",
        "sns_bank",
        "triodos_bank",
        "van_lanschot",
        "yoursafe",
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank: "bank",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodDataIdeal
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodDataIdeal: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodDataIdeal, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodDataIdeal // the object to be transformed
> = z
  .object({
    bank: z
      .enum([
        "abn_amro",
        "asn_bank",
        "bunq",
        "handelsbanken",
        "ing",
        "knab",
        "moneyou",
        "n26",
        "nn",
        "rabobank",
        "regiobank",
        "revolut",
        "sns_bank",
        "triodos_bank",
        "van_lanschot",
        "yoursafe",
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank: "bank",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodDataIdeal = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodDataIdeal,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodDataIdeal,
};
