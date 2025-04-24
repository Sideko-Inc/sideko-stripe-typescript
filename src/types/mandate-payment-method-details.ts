import {
  External$MandateAcssDebit,
  MandateAcssDebit,
  Schemas$MandateAcssDebit,
} from "./mandate-acss-debit";
import {
  External$MandateAuBecsDebit,
  MandateAuBecsDebit,
  Schemas$MandateAuBecsDebit,
} from "./mandate-au-becs-debit";
import {
  External$MandateBacsDebit,
  MandateBacsDebit,
  Schemas$MandateBacsDebit,
} from "./mandate-bacs-debit";
import {
  External$MandatePaypal,
  MandatePaypal,
  Schemas$MandatePaypal,
} from "./mandate-paypal";
import {
  External$MandateSepaDebit,
  MandateSepaDebit,
  Schemas$MandateSepaDebit,
} from "./mandate-sepa-debit";
import {
  External$MandateUsBankAccount,
  MandateUsBankAccount,
  Schemas$MandateUsBankAccount,
} from "./mandate-us-bank-account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type MandatePaymentMethodDetails = {
  acssDebit?: MandateAcssDebit | undefined;
  amazonPay?: Record<string, any> | undefined;
  auBecsDebit?: MandateAuBecsDebit | undefined;
  bacsDebit?: MandateBacsDebit | undefined;
  card?: Record<string, any> | undefined;
  cashapp?: Record<string, any> | undefined;
  kakaoPay?: Record<string, any> | undefined;
  krCard?: Record<string, any> | undefined;
  link?: Record<string, any> | undefined;
  naverPay?: Record<string, any> | undefined;
  nzBankAccount?: Record<string, any> | undefined;
  paypal?: MandatePaypal | undefined;
  revolutPay?: Record<string, any> | undefined;
  sepaDebit?: MandateSepaDebit | undefined;
  /**
   * This mandate corresponds with a specific payment method type. The `payment_method_details` includes an additional hash with the same name and contains mandate information that's specific to that payment method.
   */
  type: string;
  usBankAccount?: MandateUsBankAccount | undefined;
};

/**
 * @internal
 * MandatePaymentMethodDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$MandatePaymentMethodDetails = {
  acss_debit?: External$MandateAcssDebit | undefined;
  amazon_pay?: Record<string, any> | undefined;
  au_becs_debit?: External$MandateAuBecsDebit | undefined;
  bacs_debit?: External$MandateBacsDebit | undefined;
  card?: Record<string, any> | undefined;
  cashapp?: Record<string, any> | undefined;
  kakao_pay?: Record<string, any> | undefined;
  kr_card?: Record<string, any> | undefined;
  link?: Record<string, any> | undefined;
  naver_pay?: Record<string, any> | undefined;
  nz_bank_account?: Record<string, any> | undefined;
  paypal?: External$MandatePaypal | undefined;
  revolut_pay?: Record<string, any> | undefined;
  sepa_debit?: External$MandateSepaDebit | undefined;
  type: string;
  us_bank_account?: External$MandateUsBankAccount | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object MandatePaymentMethodDetails
 */
const SchemaIn$MandatePaymentMethodDetails: z.ZodType<
  MandatePaymentMethodDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    acss_debit: Schemas$MandateAcssDebit.in.optional(),
    amazon_pay: z.record(z.string(), z.any()).optional(),
    au_becs_debit: Schemas$MandateAuBecsDebit.in.optional(),
    bacs_debit: Schemas$MandateBacsDebit.in.optional(),
    card: z.record(z.string(), z.any()).optional(),
    cashapp: z.record(z.string(), z.any()).optional(),
    kakao_pay: z.record(z.string(), z.any()).optional(),
    kr_card: z.record(z.string(), z.any()).optional(),
    link: z.record(z.string(), z.any()).optional(),
    naver_pay: z.record(z.string(), z.any()).optional(),
    nz_bank_account: z.record(z.string(), z.any()).optional(),
    paypal: Schemas$MandatePaypal.in.optional(),
    revolut_pay: z.record(z.string(), z.any()).optional(),
    sepa_debit: Schemas$MandateSepaDebit.in.optional(),
    type: z.string(),
    us_bank_account: Schemas$MandateUsBankAccount.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acss_debit: "acssDebit",
      amazon_pay: "amazonPay",
      au_becs_debit: "auBecsDebit",
      bacs_debit: "bacsDebit",
      card: "card",
      cashapp: "cashapp",
      kakao_pay: "kakaoPay",
      kr_card: "krCard",
      link: "link",
      naver_pay: "naverPay",
      nz_bank_account: "nzBankAccount",
      paypal: "paypal",
      revolut_pay: "revolutPay",
      sepa_debit: "sepaDebit",
      type: "type",
      us_bank_account: "usBankAccount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$MandatePaymentMethodDetails
 */
const SchemaOut$MandatePaymentMethodDetails: z.ZodType<
  External$MandatePaymentMethodDetails, // output type of this zod object
  z.ZodTypeDef,
  MandatePaymentMethodDetails // the object to be transformed
> = z
  .object({
    acssDebit: Schemas$MandateAcssDebit.out.optional(),
    amazonPay: z.record(z.string(), z.any()).optional(),
    auBecsDebit: Schemas$MandateAuBecsDebit.out.optional(),
    bacsDebit: Schemas$MandateBacsDebit.out.optional(),
    card: z.record(z.string(), z.any()).optional(),
    cashapp: z.record(z.string(), z.any()).optional(),
    kakaoPay: z.record(z.string(), z.any()).optional(),
    krCard: z.record(z.string(), z.any()).optional(),
    link: z.record(z.string(), z.any()).optional(),
    naverPay: z.record(z.string(), z.any()).optional(),
    nzBankAccount: z.record(z.string(), z.any()).optional(),
    paypal: Schemas$MandatePaypal.out.optional(),
    revolutPay: z.record(z.string(), z.any()).optional(),
    sepaDebit: Schemas$MandateSepaDebit.out.optional(),
    type: z.string(),
    usBankAccount: Schemas$MandateUsBankAccount.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acssDebit: "acss_debit",
      amazonPay: "amazon_pay",
      auBecsDebit: "au_becs_debit",
      bacsDebit: "bacs_debit",
      card: "card",
      cashapp: "cashapp",
      kakaoPay: "kakao_pay",
      krCard: "kr_card",
      link: "link",
      naverPay: "naver_pay",
      nzBankAccount: "nz_bank_account",
      paypal: "paypal",
      revolutPay: "revolut_pay",
      sepaDebit: "sepa_debit",
      type: "type",
      usBankAccount: "us_bank_account",
    });
  });

export const Schemas$MandatePaymentMethodDetails = {
  in: SchemaIn$MandatePaymentMethodDetails,
  out: SchemaOut$MandatePaymentMethodDetails,
};
