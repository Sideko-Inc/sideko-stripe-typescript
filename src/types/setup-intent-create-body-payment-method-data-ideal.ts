import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyPaymentMethodDataIdeal
 */
export type SetupIntentCreateBodyPaymentMethodDataIdeal = {
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
 * SetupIntentCreateBodyPaymentMethodDataIdeal without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyPaymentMethodDataIdeal = {
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
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyPaymentMethodDataIdeal
 */
const SchemaIn$SetupIntentCreateBodyPaymentMethodDataIdeal: z.ZodType<
  SetupIntentCreateBodyPaymentMethodDataIdeal, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyPaymentMethodDataIdeal
 */
const SchemaOut$SetupIntentCreateBodyPaymentMethodDataIdeal: z.ZodType<
  External$SetupIntentCreateBodyPaymentMethodDataIdeal, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyPaymentMethodDataIdeal // the object to be transformed
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

export const Schemas$SetupIntentCreateBodyPaymentMethodDataIdeal = {
  in: SchemaIn$SetupIntentCreateBodyPaymentMethodDataIdeal,
  out: SchemaOut$SetupIntentCreateBodyPaymentMethodDataIdeal,
};
