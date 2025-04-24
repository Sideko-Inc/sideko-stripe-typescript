import {
  External$SetupAttemptPaymentMethodDetailsBancontact,
  Schemas$SetupAttemptPaymentMethodDetailsBancontact,
  SetupAttemptPaymentMethodDetailsBancontact,
} from "./setup-attempt-payment-method-details-bancontact";
import {
  External$SetupAttemptPaymentMethodDetailsCard,
  Schemas$SetupAttemptPaymentMethodDetailsCard,
  SetupAttemptPaymentMethodDetailsCard,
} from "./setup-attempt-payment-method-details-card";
import {
  External$SetupAttemptPaymentMethodDetailsCardPresent,
  Schemas$SetupAttemptPaymentMethodDetailsCardPresent,
  SetupAttemptPaymentMethodDetailsCardPresent,
} from "./setup-attempt-payment-method-details-card-present";
import {
  External$SetupAttemptPaymentMethodDetailsIdeal,
  Schemas$SetupAttemptPaymentMethodDetailsIdeal,
  SetupAttemptPaymentMethodDetailsIdeal,
} from "./setup-attempt-payment-method-details-ideal";
import {
  External$SetupAttemptPaymentMethodDetailsNaverPay,
  Schemas$SetupAttemptPaymentMethodDetailsNaverPay,
  SetupAttemptPaymentMethodDetailsNaverPay,
} from "./setup-attempt-payment-method-details-naver-pay";
import {
  External$SetupAttemptPaymentMethodDetailsSofort,
  Schemas$SetupAttemptPaymentMethodDetailsSofort,
  SetupAttemptPaymentMethodDetailsSofort,
} from "./setup-attempt-payment-method-details-sofort";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SetupAttemptPaymentMethodDetails = {
  acssDebit?: Record<string, any> | undefined;
  amazonPay?: Record<string, any> | undefined;
  auBecsDebit?: Record<string, any> | undefined;
  bacsDebit?: Record<string, any> | undefined;
  bancontact?: SetupAttemptPaymentMethodDetailsBancontact | undefined;
  boleto?: Record<string, any> | undefined;
  card?: SetupAttemptPaymentMethodDetailsCard | undefined;
  cardPresent?: SetupAttemptPaymentMethodDetailsCardPresent | undefined;
  cashapp?: Record<string, any> | undefined;
  ideal?: SetupAttemptPaymentMethodDetailsIdeal | undefined;
  kakaoPay?: Record<string, any> | undefined;
  klarna?: Record<string, any> | undefined;
  krCard?: Record<string, any> | undefined;
  link?: Record<string, any> | undefined;
  naverPay?: SetupAttemptPaymentMethodDetailsNaverPay | undefined;
  nzBankAccount?: Record<string, any> | undefined;
  paypal?: Record<string, any> | undefined;
  revolutPay?: Record<string, any> | undefined;
  sepaDebit?: Record<string, any> | undefined;
  sofort?: SetupAttemptPaymentMethodDetailsSofort | undefined;
  /**
   * The type of the payment method used in the SetupIntent (e.g., `card`). An additional hash is included on `payment_method_details` with a name matching this value. It contains confirmation-specific information for the payment method.
   */
  type: string;
  usBankAccount?: Record<string, any> | undefined;
};

/**
 * @internal
 * SetupAttemptPaymentMethodDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupAttemptPaymentMethodDetails = {
  acss_debit?: Record<string, any> | undefined;
  amazon_pay?: Record<string, any> | undefined;
  au_becs_debit?: Record<string, any> | undefined;
  bacs_debit?: Record<string, any> | undefined;
  bancontact?: External$SetupAttemptPaymentMethodDetailsBancontact | undefined;
  boleto?: Record<string, any> | undefined;
  card?: External$SetupAttemptPaymentMethodDetailsCard | undefined;
  card_present?:
    | External$SetupAttemptPaymentMethodDetailsCardPresent
    | undefined;
  cashapp?: Record<string, any> | undefined;
  ideal?: External$SetupAttemptPaymentMethodDetailsIdeal | undefined;
  kakao_pay?: Record<string, any> | undefined;
  klarna?: Record<string, any> | undefined;
  kr_card?: Record<string, any> | undefined;
  link?: Record<string, any> | undefined;
  naver_pay?: External$SetupAttemptPaymentMethodDetailsNaverPay | undefined;
  nz_bank_account?: Record<string, any> | undefined;
  paypal?: Record<string, any> | undefined;
  revolut_pay?: Record<string, any> | undefined;
  sepa_debit?: Record<string, any> | undefined;
  sofort?: External$SetupAttemptPaymentMethodDetailsSofort | undefined;
  type: string;
  us_bank_account?: Record<string, any> | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupAttemptPaymentMethodDetails
 */
const SchemaIn$SetupAttemptPaymentMethodDetails: z.ZodType<
  SetupAttemptPaymentMethodDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    acss_debit: z.record(z.string(), z.any()).optional(),
    amazon_pay: z.record(z.string(), z.any()).optional(),
    au_becs_debit: z.record(z.string(), z.any()).optional(),
    bacs_debit: z.record(z.string(), z.any()).optional(),
    bancontact: z.lazy(() =>
      Schemas$SetupAttemptPaymentMethodDetailsBancontact.in.optional(),
    ),
    boleto: z.record(z.string(), z.any()).optional(),
    card: Schemas$SetupAttemptPaymentMethodDetailsCard.in.optional(),
    card_present: z.lazy(() =>
      Schemas$SetupAttemptPaymentMethodDetailsCardPresent.in.optional(),
    ),
    cashapp: z.record(z.string(), z.any()).optional(),
    ideal: z.lazy(() =>
      Schemas$SetupAttemptPaymentMethodDetailsIdeal.in.optional(),
    ),
    kakao_pay: z.record(z.string(), z.any()).optional(),
    klarna: z.record(z.string(), z.any()).optional(),
    kr_card: z.record(z.string(), z.any()).optional(),
    link: z.record(z.string(), z.any()).optional(),
    naver_pay: Schemas$SetupAttemptPaymentMethodDetailsNaverPay.in.optional(),
    nz_bank_account: z.record(z.string(), z.any()).optional(),
    paypal: z.record(z.string(), z.any()).optional(),
    revolut_pay: z.record(z.string(), z.any()).optional(),
    sepa_debit: z.record(z.string(), z.any()).optional(),
    sofort: z.lazy(() =>
      Schemas$SetupAttemptPaymentMethodDetailsSofort.in.optional(),
    ),
    type: z.string(),
    us_bank_account: z.record(z.string(), z.any()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acss_debit: "acssDebit",
      amazon_pay: "amazonPay",
      au_becs_debit: "auBecsDebit",
      bacs_debit: "bacsDebit",
      bancontact: "bancontact",
      boleto: "boleto",
      card: "card",
      card_present: "cardPresent",
      cashapp: "cashapp",
      ideal: "ideal",
      kakao_pay: "kakaoPay",
      klarna: "klarna",
      kr_card: "krCard",
      link: "link",
      naver_pay: "naverPay",
      nz_bank_account: "nzBankAccount",
      paypal: "paypal",
      revolut_pay: "revolutPay",
      sepa_debit: "sepaDebit",
      sofort: "sofort",
      type: "type",
      us_bank_account: "usBankAccount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupAttemptPaymentMethodDetails
 */
const SchemaOut$SetupAttemptPaymentMethodDetails: z.ZodType<
  External$SetupAttemptPaymentMethodDetails, // output type of this zod object
  z.ZodTypeDef,
  SetupAttemptPaymentMethodDetails // the object to be transformed
> = z
  .object({
    acssDebit: z.record(z.string(), z.any()).optional(),
    amazonPay: z.record(z.string(), z.any()).optional(),
    auBecsDebit: z.record(z.string(), z.any()).optional(),
    bacsDebit: z.record(z.string(), z.any()).optional(),
    bancontact: z.lazy(() =>
      Schemas$SetupAttemptPaymentMethodDetailsBancontact.out.optional(),
    ),
    boleto: z.record(z.string(), z.any()).optional(),
    card: Schemas$SetupAttemptPaymentMethodDetailsCard.out.optional(),
    cardPresent: z.lazy(() =>
      Schemas$SetupAttemptPaymentMethodDetailsCardPresent.out.optional(),
    ),
    cashapp: z.record(z.string(), z.any()).optional(),
    ideal: z.lazy(() =>
      Schemas$SetupAttemptPaymentMethodDetailsIdeal.out.optional(),
    ),
    kakaoPay: z.record(z.string(), z.any()).optional(),
    klarna: z.record(z.string(), z.any()).optional(),
    krCard: z.record(z.string(), z.any()).optional(),
    link: z.record(z.string(), z.any()).optional(),
    naverPay: Schemas$SetupAttemptPaymentMethodDetailsNaverPay.out.optional(),
    nzBankAccount: z.record(z.string(), z.any()).optional(),
    paypal: z.record(z.string(), z.any()).optional(),
    revolutPay: z.record(z.string(), z.any()).optional(),
    sepaDebit: z.record(z.string(), z.any()).optional(),
    sofort: z.lazy(() =>
      Schemas$SetupAttemptPaymentMethodDetailsSofort.out.optional(),
    ),
    type: z.string(),
    usBankAccount: z.record(z.string(), z.any()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acssDebit: "acss_debit",
      amazonPay: "amazon_pay",
      auBecsDebit: "au_becs_debit",
      bacsDebit: "bacs_debit",
      bancontact: "bancontact",
      boleto: "boleto",
      card: "card",
      cardPresent: "card_present",
      cashapp: "cashapp",
      ideal: "ideal",
      kakaoPay: "kakao_pay",
      klarna: "klarna",
      krCard: "kr_card",
      link: "link",
      naverPay: "naver_pay",
      nzBankAccount: "nz_bank_account",
      paypal: "paypal",
      revolutPay: "revolut_pay",
      sepaDebit: "sepa_debit",
      sofort: "sofort",
      type: "type",
      usBankAccount: "us_bank_account",
    });
  });

export const Schemas$SetupAttemptPaymentMethodDetails = {
  in: SchemaIn$SetupAttemptPaymentMethodDetails,
  out: SchemaOut$SetupAttemptPaymentMethodDetails,
};
