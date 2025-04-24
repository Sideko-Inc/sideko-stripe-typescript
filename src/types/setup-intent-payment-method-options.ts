import {
  External$SetupIntentPaymentMethodOptionsAcssDebit1,
  Schemas$SetupIntentPaymentMethodOptionsAcssDebit1,
  SetupIntentPaymentMethodOptionsAcssDebit1,
} from "./setup-intent-payment-method-options-acss-debit1";
import {
  External$SetupIntentPaymentMethodOptionsBacsDebit1,
  Schemas$SetupIntentPaymentMethodOptionsBacsDebit1,
  SetupIntentPaymentMethodOptionsBacsDebit1,
} from "./setup-intent-payment-method-options-bacs-debit1";
import {
  External$SetupIntentPaymentMethodOptionsCard1,
  Schemas$SetupIntentPaymentMethodOptionsCard1,
  SetupIntentPaymentMethodOptionsCard1,
} from "./setup-intent-payment-method-options-card1";
import {
  External$SetupIntentPaymentMethodOptionsPaypal1,
  Schemas$SetupIntentPaymentMethodOptionsPaypal1,
  SetupIntentPaymentMethodOptionsPaypal1,
} from "./setup-intent-payment-method-options-paypal1";
import {
  External$SetupIntentPaymentMethodOptionsSepaDebit1,
  Schemas$SetupIntentPaymentMethodOptionsSepaDebit1,
  SetupIntentPaymentMethodOptionsSepaDebit1,
} from "./setup-intent-payment-method-options-sepa-debit1";
import {
  External$SetupIntentPaymentMethodOptionsUsBankAccount1,
  Schemas$SetupIntentPaymentMethodOptionsUsBankAccount1,
  SetupIntentPaymentMethodOptionsUsBankAccount1,
} from "./setup-intent-payment-method-options-us-bank-account1";
import {
  External$SetupIntentTypeSpecificPaymentMethodOptionsClient,
  Schemas$SetupIntentTypeSpecificPaymentMethodOptionsClient,
  SetupIntentTypeSpecificPaymentMethodOptionsClient,
} from "./setup-intent-type-specific-payment-method-options-client";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SetupIntentPaymentMethodOptions = {
  acssDebit?:
    | (
        | SetupIntentPaymentMethodOptionsAcssDebit1
        | SetupIntentTypeSpecificPaymentMethodOptionsClient
      )
    | undefined;
  amazonPay?:
    | (Record<string, any> | SetupIntentTypeSpecificPaymentMethodOptionsClient)
    | undefined;
  bacsDebit?:
    | (
        | SetupIntentPaymentMethodOptionsBacsDebit1
        | SetupIntentTypeSpecificPaymentMethodOptionsClient
      )
    | undefined;
  card?:
    | (
        | SetupIntentPaymentMethodOptionsCard1
        | SetupIntentTypeSpecificPaymentMethodOptionsClient
      )
    | undefined;
  cardPresent?:
    | (Record<string, any> | SetupIntentTypeSpecificPaymentMethodOptionsClient)
    | undefined;
  link?:
    | (Record<string, any> | SetupIntentTypeSpecificPaymentMethodOptionsClient)
    | undefined;
  paypal?:
    | (
        | SetupIntentPaymentMethodOptionsPaypal1
        | SetupIntentTypeSpecificPaymentMethodOptionsClient
      )
    | undefined;
  sepaDebit?:
    | (
        | SetupIntentPaymentMethodOptionsSepaDebit1
        | SetupIntentTypeSpecificPaymentMethodOptionsClient
      )
    | undefined;
  usBankAccount?:
    | (
        | SetupIntentPaymentMethodOptionsUsBankAccount1
        | SetupIntentTypeSpecificPaymentMethodOptionsClient
      )
    | undefined;
};

/**
 * @internal
 * SetupIntentPaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentPaymentMethodOptions = {
  acss_debit?:
    | (
        | External$SetupIntentPaymentMethodOptionsAcssDebit1
        | External$SetupIntentTypeSpecificPaymentMethodOptionsClient
      )
    | undefined;
  amazon_pay?:
    | (
        | Record<string, any>
        | External$SetupIntentTypeSpecificPaymentMethodOptionsClient
      )
    | undefined;
  bacs_debit?:
    | (
        | External$SetupIntentPaymentMethodOptionsBacsDebit1
        | External$SetupIntentTypeSpecificPaymentMethodOptionsClient
      )
    | undefined;
  card?:
    | (
        | External$SetupIntentPaymentMethodOptionsCard1
        | External$SetupIntentTypeSpecificPaymentMethodOptionsClient
      )
    | undefined;
  card_present?:
    | (
        | Record<string, any>
        | External$SetupIntentTypeSpecificPaymentMethodOptionsClient
      )
    | undefined;
  link?:
    | (
        | Record<string, any>
        | External$SetupIntentTypeSpecificPaymentMethodOptionsClient
      )
    | undefined;
  paypal?:
    | (
        | External$SetupIntentPaymentMethodOptionsPaypal1
        | External$SetupIntentTypeSpecificPaymentMethodOptionsClient
      )
    | undefined;
  sepa_debit?:
    | (
        | External$SetupIntentPaymentMethodOptionsSepaDebit1
        | External$SetupIntentTypeSpecificPaymentMethodOptionsClient
      )
    | undefined;
  us_bank_account?:
    | (
        | External$SetupIntentPaymentMethodOptionsUsBankAccount1
        | External$SetupIntentTypeSpecificPaymentMethodOptionsClient
      )
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentPaymentMethodOptions
 */
const SchemaIn$SetupIntentPaymentMethodOptions: z.ZodType<
  SetupIntentPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    acss_debit: z
      .union([
        Schemas$SetupIntentPaymentMethodOptionsAcssDebit1.in,
        Schemas$SetupIntentTypeSpecificPaymentMethodOptionsClient.in,
      ])
      .optional(),
    amazon_pay: z
      .union([
        z.record(z.string(), z.any()),
        Schemas$SetupIntentTypeSpecificPaymentMethodOptionsClient.in,
      ])
      .optional(),
    bacs_debit: z
      .union([
        Schemas$SetupIntentPaymentMethodOptionsBacsDebit1.in,
        Schemas$SetupIntentTypeSpecificPaymentMethodOptionsClient.in,
      ])
      .optional(),
    card: z
      .union([
        Schemas$SetupIntentPaymentMethodOptionsCard1.in,
        Schemas$SetupIntentTypeSpecificPaymentMethodOptionsClient.in,
      ])
      .optional(),
    card_present: z
      .union([
        z.record(z.string(), z.any()),
        Schemas$SetupIntentTypeSpecificPaymentMethodOptionsClient.in,
      ])
      .optional(),
    link: z
      .union([
        z.record(z.string(), z.any()),
        Schemas$SetupIntentTypeSpecificPaymentMethodOptionsClient.in,
      ])
      .optional(),
    paypal: z
      .union([
        Schemas$SetupIntentPaymentMethodOptionsPaypal1.in,
        Schemas$SetupIntentTypeSpecificPaymentMethodOptionsClient.in,
      ])
      .optional(),
    sepa_debit: z
      .union([
        Schemas$SetupIntentPaymentMethodOptionsSepaDebit1.in,
        Schemas$SetupIntentTypeSpecificPaymentMethodOptionsClient.in,
      ])
      .optional(),
    us_bank_account: z
      .union([
        Schemas$SetupIntentPaymentMethodOptionsUsBankAccount1.in,
        Schemas$SetupIntentTypeSpecificPaymentMethodOptionsClient.in,
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acss_debit: "acssDebit",
      amazon_pay: "amazonPay",
      bacs_debit: "bacsDebit",
      card: "card",
      card_present: "cardPresent",
      link: "link",
      paypal: "paypal",
      sepa_debit: "sepaDebit",
      us_bank_account: "usBankAccount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentPaymentMethodOptions
 */
const SchemaOut$SetupIntentPaymentMethodOptions: z.ZodType<
  External$SetupIntentPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentPaymentMethodOptions // the object to be transformed
> = z
  .object({
    acssDebit: z
      .union([
        Schemas$SetupIntentPaymentMethodOptionsAcssDebit1.out,
        Schemas$SetupIntentTypeSpecificPaymentMethodOptionsClient.out,
      ])
      .optional(),
    amazonPay: z
      .union([
        z.record(z.string(), z.any()),
        Schemas$SetupIntentTypeSpecificPaymentMethodOptionsClient.out,
      ])
      .optional(),
    bacsDebit: z
      .union([
        Schemas$SetupIntentPaymentMethodOptionsBacsDebit1.out,
        Schemas$SetupIntentTypeSpecificPaymentMethodOptionsClient.out,
      ])
      .optional(),
    card: z
      .union([
        Schemas$SetupIntentPaymentMethodOptionsCard1.out,
        Schemas$SetupIntentTypeSpecificPaymentMethodOptionsClient.out,
      ])
      .optional(),
    cardPresent: z
      .union([
        z.record(z.string(), z.any()),
        Schemas$SetupIntentTypeSpecificPaymentMethodOptionsClient.out,
      ])
      .optional(),
    link: z
      .union([
        z.record(z.string(), z.any()),
        Schemas$SetupIntentTypeSpecificPaymentMethodOptionsClient.out,
      ])
      .optional(),
    paypal: z
      .union([
        Schemas$SetupIntentPaymentMethodOptionsPaypal1.out,
        Schemas$SetupIntentTypeSpecificPaymentMethodOptionsClient.out,
      ])
      .optional(),
    sepaDebit: z
      .union([
        Schemas$SetupIntentPaymentMethodOptionsSepaDebit1.out,
        Schemas$SetupIntentTypeSpecificPaymentMethodOptionsClient.out,
      ])
      .optional(),
    usBankAccount: z
      .union([
        Schemas$SetupIntentPaymentMethodOptionsUsBankAccount1.out,
        Schemas$SetupIntentTypeSpecificPaymentMethodOptionsClient.out,
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acssDebit: "acss_debit",
      amazonPay: "amazon_pay",
      bacsDebit: "bacs_debit",
      card: "card",
      cardPresent: "card_present",
      link: "link",
      paypal: "paypal",
      sepaDebit: "sepa_debit",
      usBankAccount: "us_bank_account",
    });
  });

export const Schemas$SetupIntentPaymentMethodOptions = {
  in: SchemaIn$SetupIntentPaymentMethodOptions,
  out: SchemaOut$SetupIntentPaymentMethodOptions,
};
