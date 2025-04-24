import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBodyPaymentMethodDataIdeal
 */
export type SetupIntentUpdateBodyPaymentMethodDataIdeal = {
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
 * SetupIntentUpdateBodyPaymentMethodDataIdeal without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodDataIdeal = {
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
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodDataIdeal
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodDataIdeal: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodDataIdeal, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodDataIdeal
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodDataIdeal: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodDataIdeal, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodDataIdeal // the object to be transformed
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

export const Schemas$SetupIntentUpdateBodyPaymentMethodDataIdeal = {
  in: SchemaIn$SetupIntentUpdateBodyPaymentMethodDataIdeal,
  out: SchemaOut$SetupIntentUpdateBodyPaymentMethodDataIdeal,
};
