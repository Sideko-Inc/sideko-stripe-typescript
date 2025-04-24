import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * If this is an `eps` PaymentMethod, this hash contains details about the EPS payment method.
 */
export type PaymentMethodCreateBodyEps = {
  bank?:
    | (
        | "arzte_und_apotheker_bank"
        | "austrian_anadi_bank_ag"
        | "bank_austria"
        | "bankhaus_carl_spangler"
        | "bankhaus_schelhammer_und_schattera_ag"
        | "bawag_psk_ag"
        | "bks_bank_ag"
        | "brull_kallmus_bank_ag"
        | "btv_vier_lander_bank"
        | "capital_bank_grawe_gruppe_ag"
        | "deutsche_bank_ag"
        | "dolomitenbank"
        | "easybank_ag"
        | "erste_bank_und_sparkassen"
        | "hypo_alpeadriabank_international_ag"
        | "hypo_bank_burgenland_aktiengesellschaft"
        | "hypo_noe_lb_fur_niederosterreich_u_wien"
        | "hypo_oberosterreich_salzburg_steiermark"
        | "hypo_tirol_bank_ag"
        | "hypo_vorarlberg_bank_ag"
        | "marchfelder_bank"
        | "oberbank_ag"
        | "raiffeisen_bankengruppe_osterreich"
        | "schoellerbank_ag"
        | "sparda_bank_wien"
        | "volksbank_gruppe"
        | "volkskreditbank_ag"
        | "vr_bank_braunau"
      )
    | undefined;
};

/**
 * @internal
 * PaymentMethodCreateBodyEps without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodCreateBodyEps = {
  bank?:
    | (
        | "arzte_und_apotheker_bank"
        | "austrian_anadi_bank_ag"
        | "bank_austria"
        | "bankhaus_carl_spangler"
        | "bankhaus_schelhammer_und_schattera_ag"
        | "bawag_psk_ag"
        | "bks_bank_ag"
        | "brull_kallmus_bank_ag"
        | "btv_vier_lander_bank"
        | "capital_bank_grawe_gruppe_ag"
        | "deutsche_bank_ag"
        | "dolomitenbank"
        | "easybank_ag"
        | "erste_bank_und_sparkassen"
        | "hypo_alpeadriabank_international_ag"
        | "hypo_bank_burgenland_aktiengesellschaft"
        | "hypo_noe_lb_fur_niederosterreich_u_wien"
        | "hypo_oberosterreich_salzburg_steiermark"
        | "hypo_tirol_bank_ag"
        | "hypo_vorarlberg_bank_ag"
        | "marchfelder_bank"
        | "oberbank_ag"
        | "raiffeisen_bankengruppe_osterreich"
        | "schoellerbank_ag"
        | "sparda_bank_wien"
        | "volksbank_gruppe"
        | "volkskreditbank_ag"
        | "vr_bank_braunau"
      )
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodCreateBodyEps
 */
const SchemaIn$PaymentMethodCreateBodyEps: z.ZodType<
  PaymentMethodCreateBodyEps, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank: z
      .enum([
        "arzte_und_apotheker_bank",
        "austrian_anadi_bank_ag",
        "bank_austria",
        "bankhaus_carl_spangler",
        "bankhaus_schelhammer_und_schattera_ag",
        "bawag_psk_ag",
        "bks_bank_ag",
        "brull_kallmus_bank_ag",
        "btv_vier_lander_bank",
        "capital_bank_grawe_gruppe_ag",
        "deutsche_bank_ag",
        "dolomitenbank",
        "easybank_ag",
        "erste_bank_und_sparkassen",
        "hypo_alpeadriabank_international_ag",
        "hypo_bank_burgenland_aktiengesellschaft",
        "hypo_noe_lb_fur_niederosterreich_u_wien",
        "hypo_oberosterreich_salzburg_steiermark",
        "hypo_tirol_bank_ag",
        "hypo_vorarlberg_bank_ag",
        "marchfelder_bank",
        "oberbank_ag",
        "raiffeisen_bankengruppe_osterreich",
        "schoellerbank_ag",
        "sparda_bank_wien",
        "volksbank_gruppe",
        "volkskreditbank_ag",
        "vr_bank_braunau",
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodCreateBodyEps
 */
const SchemaOut$PaymentMethodCreateBodyEps: z.ZodType<
  External$PaymentMethodCreateBodyEps, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodCreateBodyEps // the object to be transformed
> = z
  .object({
    bank: z
      .enum([
        "arzte_und_apotheker_bank",
        "austrian_anadi_bank_ag",
        "bank_austria",
        "bankhaus_carl_spangler",
        "bankhaus_schelhammer_und_schattera_ag",
        "bawag_psk_ag",
        "bks_bank_ag",
        "brull_kallmus_bank_ag",
        "btv_vier_lander_bank",
        "capital_bank_grawe_gruppe_ag",
        "deutsche_bank_ag",
        "dolomitenbank",
        "easybank_ag",
        "erste_bank_und_sparkassen",
        "hypo_alpeadriabank_international_ag",
        "hypo_bank_burgenland_aktiengesellschaft",
        "hypo_noe_lb_fur_niederosterreich_u_wien",
        "hypo_oberosterreich_salzburg_steiermark",
        "hypo_tirol_bank_ag",
        "hypo_vorarlberg_bank_ag",
        "marchfelder_bank",
        "oberbank_ag",
        "raiffeisen_bankengruppe_osterreich",
        "schoellerbank_ag",
        "sparda_bank_wien",
        "volksbank_gruppe",
        "volkskreditbank_ag",
        "vr_bank_braunau",
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank: "bank",
    });
  });

export const Schemas$PaymentMethodCreateBodyEps = {
  in: SchemaIn$PaymentMethodCreateBodyEps,
  out: SchemaOut$PaymentMethodCreateBodyEps,
};
