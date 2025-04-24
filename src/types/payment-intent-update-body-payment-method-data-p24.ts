import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodDataP24
 */
export type PaymentIntentUpdateBodyPaymentMethodDataP24 = {
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
 * PaymentIntentUpdateBodyPaymentMethodDataP24 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodDataP24 = {
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
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodDataP24
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodDataP24: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodDataP24, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodDataP24
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodDataP24: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodDataP24, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodDataP24 // the object to be transformed
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

export const Schemas$PaymentIntentUpdateBodyPaymentMethodDataP24 = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodDataP24,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodDataP24,
};
