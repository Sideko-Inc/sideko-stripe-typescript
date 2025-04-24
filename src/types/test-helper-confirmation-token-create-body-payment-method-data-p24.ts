import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperConfirmationTokenCreateBodyPaymentMethodDataP24
 */
export type TestHelperConfirmationTokenCreateBodyPaymentMethodDataP24 = {
  bank?:
    | (
        | "alior_bank"
        | "bank_millennium"
        | "bank_nowy_bfg_sa"
        | "bank_pekao_sa"
        | "banki_spbdzielcze"
        | "blik"
        | "bnp_paribas"
        | "boz"
        | "citi_handlowy"
        | "credit_agricole"
        | "envelobank"
        | "etransfer_pocztowy24"
        | "getin_bank"
        | "ideabank"
        | "ing"
        | "inteligo"
        | "mbank_mtransfer"
        | "nest_przelew"
        | "noble_pay"
        | "pbac_z_ipko"
        | "plus_bank"
        | "santander_przelew24"
        | "tmobile_usbugi_bankowe"
        | "toyota_bank"
        | "velobank"
        | "volkswagen_bank"
      )
    | undefined;
};

/**
 * @internal
 * TestHelperConfirmationTokenCreateBodyPaymentMethodDataP24 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataP24 =
  {
    bank?:
      | (
          | "alior_bank"
          | "bank_millennium"
          | "bank_nowy_bfg_sa"
          | "bank_pekao_sa"
          | "banki_spbdzielcze"
          | "blik"
          | "bnp_paribas"
          | "boz"
          | "citi_handlowy"
          | "credit_agricole"
          | "envelobank"
          | "etransfer_pocztowy24"
          | "getin_bank"
          | "ideabank"
          | "ing"
          | "inteligo"
          | "mbank_mtransfer"
          | "nest_przelew"
          | "noble_pay"
          | "pbac_z_ipko"
          | "plus_bank"
          | "santander_przelew24"
          | "tmobile_usbugi_bankowe"
          | "toyota_bank"
          | "velobank"
          | "volkswagen_bank"
        )
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperConfirmationTokenCreateBodyPaymentMethodDataP24
 */
const SchemaIn$TestHelperConfirmationTokenCreateBodyPaymentMethodDataP24: z.ZodType<
  TestHelperConfirmationTokenCreateBodyPaymentMethodDataP24, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank: z
      .enum([
        "alior_bank",
        "bank_millennium",
        "bank_nowy_bfg_sa",
        "bank_pekao_sa",
        "banki_spbdzielcze",
        "blik",
        "bnp_paribas",
        "boz",
        "citi_handlowy",
        "credit_agricole",
        "envelobank",
        "etransfer_pocztowy24",
        "getin_bank",
        "ideabank",
        "ing",
        "inteligo",
        "mbank_mtransfer",
        "nest_przelew",
        "noble_pay",
        "pbac_z_ipko",
        "plus_bank",
        "santander_przelew24",
        "tmobile_usbugi_bankowe",
        "toyota_bank",
        "velobank",
        "volkswagen_bank",
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataP24
 */
const SchemaOut$TestHelperConfirmationTokenCreateBodyPaymentMethodDataP24: z.ZodType<
  External$TestHelperConfirmationTokenCreateBodyPaymentMethodDataP24, // output type of this zod object
  z.ZodTypeDef,
  TestHelperConfirmationTokenCreateBodyPaymentMethodDataP24 // the object to be transformed
> = z
  .object({
    bank: z
      .enum([
        "alior_bank",
        "bank_millennium",
        "bank_nowy_bfg_sa",
        "bank_pekao_sa",
        "banki_spbdzielcze",
        "blik",
        "bnp_paribas",
        "boz",
        "citi_handlowy",
        "credit_agricole",
        "envelobank",
        "etransfer_pocztowy24",
        "getin_bank",
        "ideabank",
        "ing",
        "inteligo",
        "mbank_mtransfer",
        "nest_przelew",
        "noble_pay",
        "pbac_z_ipko",
        "plus_bank",
        "santander_przelew24",
        "tmobile_usbugi_bankowe",
        "toyota_bank",
        "velobank",
        "volkswagen_bank",
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank: "bank",
    });
  });

export const Schemas$TestHelperConfirmationTokenCreateBodyPaymentMethodDataP24 =
  {
    in: SchemaIn$TestHelperConfirmationTokenCreateBodyPaymentMethodDataP24,
    out: SchemaOut$TestHelperConfirmationTokenCreateBodyPaymentMethodDataP24,
  };
