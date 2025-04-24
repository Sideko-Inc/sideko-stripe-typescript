import { External$Networks, Networks, Schemas$Networks } from "./networks";
import {
  External$PaymentMethodCardChecks,
  PaymentMethodCardChecks,
  Schemas$PaymentMethodCardChecks,
} from "./payment-method-card-checks";
import {
  External$PaymentMethodCardGeneratedCard,
  PaymentMethodCardGeneratedCard,
  Schemas$PaymentMethodCardGeneratedCard,
} from "./payment-method-card-generated-card";
import {
  External$PaymentMethodCardWallet,
  PaymentMethodCardWallet,
  Schemas$PaymentMethodCardWallet,
} from "./payment-method-card-wallet";
import {
  External$ThreeDSecureUsage,
  Schemas$ThreeDSecureUsage,
  ThreeDSecureUsage,
} from "./three-d-secure-usage";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodCard = {
  /**
   * Card brand. Can be `amex`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
   */
  brand: string;
  checks?: PaymentMethodCardChecks | undefined;
  /**
   * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
   */
  country?: string | null | undefined;
  /**
   * The brand to use when displaying the card, this accounts for customer's brand choice on dual-branded cards. Can be `american_express`, `cartes_bancaires`, `diners_club`, `discover`, `eftpos_australia`, `interac`, `jcb`, `mastercard`, `union_pay`, `visa`, or `other` and may contain more values in the future.
   */
  displayBrand?: string | null | undefined;
  /**
   * Two-digit number representing the card's expiration month.
   */
  expMonth: number;
  /**
   * Four-digit number representing the card's expiration year.
   */
  expYear: number;
  /**
   * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who’ve signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
   *
   * *As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
   */
  fingerprint?: string | null | undefined;
  /**
   * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
   */
  funding: string;
  generatedFrom?: PaymentMethodCardGeneratedCard | undefined;
  /**
   * The last four digits of the card.
   */
  last4: string;
  networks?: Networks | undefined;
  /**
   * Status of a card based on the card issuer.
   */
  regulatedStatus?: ("regulated" | "unregulated") | null | undefined;
  threeDSecureUsage?: ThreeDSecureUsage | undefined;
  wallet?: PaymentMethodCardWallet | undefined;
};

/**
 * @internal
 * PaymentMethodCard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodCard = {
  brand: string;
  checks?: External$PaymentMethodCardChecks | undefined;
  country?: string | null | undefined;
  display_brand?: string | null | undefined;
  exp_month: number;
  exp_year: number;
  fingerprint?: string | null | undefined;
  funding: string;
  generated_from?: External$PaymentMethodCardGeneratedCard | undefined;
  last4: string;
  networks?: External$Networks | undefined;
  regulated_status?: ("regulated" | "unregulated") | null | undefined;
  three_d_secure_usage?: External$ThreeDSecureUsage | undefined;
  wallet?: External$PaymentMethodCardWallet | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodCard
 */
const SchemaIn$PaymentMethodCard: z.ZodType<
  PaymentMethodCard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    brand: z.string(),
    checks: Schemas$PaymentMethodCardChecks.in.optional(),
    country: z.string().nullable().optional(),
    display_brand: z.string().nullable().optional(),
    exp_month: z.number().int(),
    exp_year: z.number().int(),
    fingerprint: z.string().nullable().optional(),
    funding: z.string(),
    generated_from: z.lazy(() =>
      Schemas$PaymentMethodCardGeneratedCard.in.optional(),
    ),
    last4: z.string(),
    networks: Schemas$Networks.in.optional(),
    regulated_status: z
      .enum(["regulated", "unregulated"])
      .nullable()
      .optional(),
    three_d_secure_usage: Schemas$ThreeDSecureUsage.in.optional(),
    wallet: Schemas$PaymentMethodCardWallet.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      brand: "brand",
      checks: "checks",
      country: "country",
      display_brand: "displayBrand",
      exp_month: "expMonth",
      exp_year: "expYear",
      fingerprint: "fingerprint",
      funding: "funding",
      generated_from: "generatedFrom",
      last4: "last4",
      networks: "networks",
      regulated_status: "regulatedStatus",
      three_d_secure_usage: "threeDSecureUsage",
      wallet: "wallet",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodCard
 */
const SchemaOut$PaymentMethodCard: z.ZodType<
  External$PaymentMethodCard, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodCard // the object to be transformed
> = z
  .object({
    brand: z.string(),
    checks: Schemas$PaymentMethodCardChecks.out.optional(),
    country: z.string().nullable().optional(),
    displayBrand: z.string().nullable().optional(),
    expMonth: z.number().int(),
    expYear: z.number().int(),
    fingerprint: z.string().nullable().optional(),
    funding: z.string(),
    generatedFrom: z.lazy(() =>
      Schemas$PaymentMethodCardGeneratedCard.out.optional(),
    ),
    last4: z.string(),
    networks: Schemas$Networks.out.optional(),
    regulatedStatus: z.enum(["regulated", "unregulated"]).nullable().optional(),
    threeDSecureUsage: Schemas$ThreeDSecureUsage.out.optional(),
    wallet: Schemas$PaymentMethodCardWallet.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      brand: "brand",
      checks: "checks",
      country: "country",
      displayBrand: "display_brand",
      expMonth: "exp_month",
      expYear: "exp_year",
      fingerprint: "fingerprint",
      funding: "funding",
      generatedFrom: "generated_from",
      last4: "last4",
      networks: "networks",
      regulatedStatus: "regulated_status",
      threeDSecureUsage: "three_d_secure_usage",
      wallet: "wallet",
    });
  });

export const Schemas$PaymentMethodCard = {
  in: SchemaIn$PaymentMethodCard,
  out: SchemaOut$PaymentMethodCard,
};
