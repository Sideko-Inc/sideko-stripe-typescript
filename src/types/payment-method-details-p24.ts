import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsP24 = {
  /**
   * The customer's bank. Can be one of `ing`, `citi_handlowy`, `tmobile_usbugi_bankowe`, `plus_bank`, `etransfer_pocztowy24`, `banki_spbdzielcze`, `bank_nowy_bfg_sa`, `getin_bank`, `velobank`, `blik`, `noble_pay`, `ideabank`, `envelobank`, `santander_przelew24`, `nest_przelew`, `mbank_mtransfer`, `inteligo`, `pbac_z_ipko`, `bnp_paribas`, `credit_agricole`, `toyota_bank`, `bank_pekao_sa`, `volkswagen_bank`, `bank_millennium`, `alior_bank`, or `boz`.
   */
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
    | null
    | undefined;
  /**
   * Unique reference for this Przelewy24 payment.
   */
  reference?: string | null | undefined;
  /**
   * Owner's verified full name. Values are verified or provided by Przelewy24 directly
   * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
   * Przelewy24 rarely provides this information so the attribute is usually empty.
   */
  verifiedName?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsP24 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsP24 = {
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
    | null
    | undefined;
  reference?: string | null | undefined;
  verified_name?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsP24
 */
const SchemaIn$PaymentMethodDetailsP24: z.ZodType<
  PaymentMethodDetailsP24, // output type of this zod object
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
      .nullable()
      .optional(),
    reference: z.string().nullable().optional(),
    verified_name: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank: "bank",
      reference: "reference",
      verified_name: "verifiedName",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsP24
 */
const SchemaOut$PaymentMethodDetailsP24: z.ZodType<
  External$PaymentMethodDetailsP24, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsP24 // the object to be transformed
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
      .nullable()
      .optional(),
    reference: z.string().nullable().optional(),
    verifiedName: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank: "bank",
      reference: "reference",
      verifiedName: "verified_name",
    });
  });

export const Schemas$PaymentMethodDetailsP24 = {
  in: SchemaIn$PaymentMethodDetailsP24,
  out: SchemaOut$PaymentMethodDetailsP24,
};
