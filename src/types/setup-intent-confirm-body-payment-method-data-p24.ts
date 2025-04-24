import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodDataP24
 */
export type SetupIntentConfirmBodyPaymentMethodDataP24 = {
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
 * SetupIntentConfirmBodyPaymentMethodDataP24 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodDataP24 = {
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
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodDataP24
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodDataP24: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodDataP24, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodDataP24
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodDataP24: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodDataP24, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodDataP24 // the object to be transformed
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

export const Schemas$SetupIntentConfirmBodyPaymentMethodDataP24 = {
  in: SchemaIn$SetupIntentConfirmBodyPaymentMethodDataP24,
  out: SchemaOut$SetupIntentConfirmBodyPaymentMethodDataP24,
};
