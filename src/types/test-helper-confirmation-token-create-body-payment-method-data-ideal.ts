import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperConfirmationTokenCreateBodyPaymentMethodDataIdeal
 */
export type TestHelperConfirmationTokenCreateBodyPaymentMethodDataIdeal = {
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
 * TestHelperConfirmationTokenCreateBodyPaymentMethodDataIdeal without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataIdeal =
  {
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
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperConfirmationTokenCreateBodyPaymentMethodDataIdeal
 */
const SchemaIn$TestHelperConfirmationTokenCreateBodyPaymentMethodDataIdeal: z.ZodType<
  TestHelperConfirmationTokenCreateBodyPaymentMethodDataIdeal, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataIdeal
 */
const SchemaOut$TestHelperConfirmationTokenCreateBodyPaymentMethodDataIdeal: z.ZodType<
  External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataIdeal, // output type of this zod object
  z.ZodTypeDef,
  TestHelperConfirmationTokenCreateBodyPaymentMethodDataIdeal // the object to be transformed
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

export const Schemas$TestHelperConfirmationTokenCreateBodyPaymentMethodDataIdeal =
  {
    in: SchemaIn$TestHelperConfirmationTokenCreateBodyPaymentMethodDataIdeal,
    out: SchemaOut$TestHelperConfirmationTokenCreateBodyPaymentMethodDataIdeal,
  };
