import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodIdeal = {
  /**
   * The customer's bank, if provided. Can be one of `abn_amro`, `asn_bank`, `bunq`, `handelsbanken`, `ing`, `knab`, `moneyou`, `n26`, `nn`, `rabobank`, `regiobank`, `revolut`, `sns_bank`, `triodos_bank`, `van_lanschot`, or `yoursafe`.
   */
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
    | null
    | undefined;
  /**
   * The Bank Identifier Code of the customer's bank, if the bank was provided.
   */
  bic?:
    | (
        | "ABNANL2A"
        | "ASNBNL21"
        | "BITSNL2A"
        | "BUNQNL2A"
        | "FVLBNL22"
        | "HANDNL2A"
        | "INGBNL2A"
        | "KNABNL2H"
        | "MOYONL21"
        | "NNBANL2G"
        | "NTSBDEB1"
        | "RABONL2U"
        | "RBRBNL21"
        | "REVOIE23"
        | "REVOLT21"
        | "SNSBNL2A"
        | "TRIONL2U"
      )
    | null
    | undefined;
};

/**
 * @internal
 * PaymentMethodIdeal without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodIdeal = {
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
    | null
    | undefined;
  bic?:
    | (
        | "ABNANL2A"
        | "ASNBNL21"
        | "BITSNL2A"
        | "BUNQNL2A"
        | "FVLBNL22"
        | "HANDNL2A"
        | "INGBNL2A"
        | "KNABNL2H"
        | "MOYONL21"
        | "NNBANL2G"
        | "NTSBDEB1"
        | "RABONL2U"
        | "RBRBNL21"
        | "REVOIE23"
        | "REVOLT21"
        | "SNSBNL2A"
        | "TRIONL2U"
      )
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodIdeal
 */
const SchemaIn$PaymentMethodIdeal: z.ZodType<
  PaymentMethodIdeal, // output type of this zod object
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
      .nullable()
      .optional(),
    bic: z
      .enum([
        "ABNANL2A",
        "ASNBNL21",
        "BITSNL2A",
        "BUNQNL2A",
        "FVLBNL22",
        "HANDNL2A",
        "INGBNL2A",
        "KNABNL2H",
        "MOYONL21",
        "NNBANL2G",
        "NTSBDEB1",
        "RABONL2U",
        "RBRBNL21",
        "REVOIE23",
        "REVOLT21",
        "SNSBNL2A",
        "TRIONL2U",
      ])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank: "bank",
      bic: "bic",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodIdeal
 */
const SchemaOut$PaymentMethodIdeal: z.ZodType<
  External$PaymentMethodIdeal, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodIdeal // the object to be transformed
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
      .nullable()
      .optional(),
    bic: z
      .enum([
        "ABNANL2A",
        "ASNBNL21",
        "BITSNL2A",
        "BUNQNL2A",
        "FVLBNL22",
        "HANDNL2A",
        "INGBNL2A",
        "KNABNL2H",
        "MOYONL21",
        "NNBANL2G",
        "NTSBDEB1",
        "RABONL2U",
        "RBRBNL21",
        "REVOIE23",
        "REVOLT21",
        "SNSBNL2A",
        "TRIONL2U",
      ])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank: "bank",
      bic: "bic",
    });
  });

export const Schemas$PaymentMethodIdeal = {
  in: SchemaIn$PaymentMethodIdeal,
  out: SchemaOut$PaymentMethodIdeal,
};
