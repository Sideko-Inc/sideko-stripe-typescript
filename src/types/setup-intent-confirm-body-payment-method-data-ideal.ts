import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodDataIdeal
 */
export type SetupIntentConfirmBodyPaymentMethodDataIdeal = {
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
 * SetupIntentConfirmBodyPaymentMethodDataIdeal without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodDataIdeal = {
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
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodDataIdeal
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodDataIdeal: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodDataIdeal, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodDataIdeal
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodDataIdeal: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodDataIdeal, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodDataIdeal // the object to be transformed
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

export const Schemas$SetupIntentConfirmBodyPaymentMethodDataIdeal = {
  in: SchemaIn$SetupIntentConfirmBodyPaymentMethodDataIdeal,
  out: SchemaOut$SetupIntentConfirmBodyPaymentMethodDataIdeal,
};
