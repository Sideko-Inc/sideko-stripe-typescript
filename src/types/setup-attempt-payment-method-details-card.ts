import {
  External$SetupAttemptPaymentMethodDetailsCardChecks,
  Schemas$SetupAttemptPaymentMethodDetailsCardChecks,
  SetupAttemptPaymentMethodDetailsCardChecks,
} from "./setup-attempt-payment-method-details-card-checks";
import {
  External$SetupAttemptPaymentMethodDetailsCardWallet,
  Schemas$SetupAttemptPaymentMethodDetailsCardWallet,
  SetupAttemptPaymentMethodDetailsCardWallet,
} from "./setup-attempt-payment-method-details-card-wallet";
import {
  External$ThreeDSecureDetails,
  Schemas$ThreeDSecureDetails,
  ThreeDSecureDetails,
} from "./three-d-secure-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SetupAttemptPaymentMethodDetailsCard = {
  /**
   * Card brand. Can be `amex`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
   */
  brand?: string | null | undefined;
  checks?: SetupAttemptPaymentMethodDetailsCardChecks | undefined;
  /**
   * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
   */
  country?: string | null | undefined;
  /**
   * Two-digit number representing the card's expiration month.
   */
  expMonth?: number | null | undefined;
  /**
   * Four-digit number representing the card's expiration year.
   */
  expYear?: number | null | undefined;
  /**
   * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who’ve signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
   *
   * *As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
   */
  fingerprint?: string | null | undefined;
  /**
   * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
   */
  funding?: string | null | undefined;
  /**
   * The last four digits of the card.
   */
  last4?: string | null | undefined;
  /**
   * Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `interac`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
   */
  network?: string | null | undefined;
  threeDSecure?: ThreeDSecureDetails | undefined;
  wallet?: SetupAttemptPaymentMethodDetailsCardWallet | undefined;
};

/**
 * @internal
 * SetupAttemptPaymentMethodDetailsCard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupAttemptPaymentMethodDetailsCard = {
  brand?: string | null | undefined;
  checks?: External$SetupAttemptPaymentMethodDetailsCardChecks | undefined;
  country?: string | null | undefined;
  exp_month?: number | null | undefined;
  exp_year?: number | null | undefined;
  fingerprint?: string | null | undefined;
  funding?: string | null | undefined;
  last4?: string | null | undefined;
  network?: string | null | undefined;
  three_d_secure?: External$ThreeDSecureDetails | undefined;
  wallet?: External$SetupAttemptPaymentMethodDetailsCardWallet | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupAttemptPaymentMethodDetailsCard
 */
const SchemaIn$SetupAttemptPaymentMethodDetailsCard: z.ZodType<
  SetupAttemptPaymentMethodDetailsCard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    brand: z.string().nullable().optional(),
    checks: Schemas$SetupAttemptPaymentMethodDetailsCardChecks.in.optional(),
    country: z.string().nullable().optional(),
    exp_month: z.number().int().nullable().optional(),
    exp_year: z.number().int().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    funding: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    network: z.string().nullable().optional(),
    three_d_secure: Schemas$ThreeDSecureDetails.in.optional(),
    wallet: Schemas$SetupAttemptPaymentMethodDetailsCardWallet.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      brand: "brand",
      checks: "checks",
      country: "country",
      exp_month: "expMonth",
      exp_year: "expYear",
      fingerprint: "fingerprint",
      funding: "funding",
      last4: "last4",
      network: "network",
      three_d_secure: "threeDSecure",
      wallet: "wallet",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupAttemptPaymentMethodDetailsCard
 */
const SchemaOut$SetupAttemptPaymentMethodDetailsCard: z.ZodType<
  External$SetupAttemptPaymentMethodDetailsCard, // output type of this zod object
  z.ZodTypeDef,
  SetupAttemptPaymentMethodDetailsCard // the object to be transformed
> = z
  .object({
    brand: z.string().nullable().optional(),
    checks: Schemas$SetupAttemptPaymentMethodDetailsCardChecks.out.optional(),
    country: z.string().nullable().optional(),
    expMonth: z.number().int().nullable().optional(),
    expYear: z.number().int().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    funding: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    network: z.string().nullable().optional(),
    threeDSecure: Schemas$ThreeDSecureDetails.out.optional(),
    wallet: Schemas$SetupAttemptPaymentMethodDetailsCardWallet.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      brand: "brand",
      checks: "checks",
      country: "country",
      expMonth: "exp_month",
      expYear: "exp_year",
      fingerprint: "fingerprint",
      funding: "funding",
      last4: "last4",
      network: "network",
      threeDSecure: "three_d_secure",
      wallet: "wallet",
    });
  });

export const Schemas$SetupAttemptPaymentMethodDetailsCard = {
  in: SchemaIn$SetupAttemptPaymentMethodDetailsCard,
  out: SchemaOut$SetupAttemptPaymentMethodDetailsCard,
};
