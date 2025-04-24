import {
  External$LinkedAccountOptionsUsBankAccount,
  LinkedAccountOptionsUsBankAccount,
  Schemas$LinkedAccountOptionsUsBankAccount,
} from "./linked-account-options-us-bank-account";
import {
  External$PaymentMethodOptionsUsBankAccountMandateOptions,
  PaymentMethodOptionsUsBankAccountMandateOptions,
  Schemas$PaymentMethodOptionsUsBankAccountMandateOptions,
} from "./payment-method-options-us-bank-account-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SetupIntentPaymentMethodOptionsUsBankAccount1 = {
  financialConnections?: LinkedAccountOptionsUsBankAccount | undefined;
  mandateOptions?: PaymentMethodOptionsUsBankAccountMandateOptions | undefined;
  /**
   * Bank account verification method.
   */
  verificationMethod?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * @internal
 * SetupIntentPaymentMethodOptionsUsBankAccount1 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentPaymentMethodOptionsUsBankAccount1 = {
  financial_connections?:
    | External$LinkedAccountOptionsUsBankAccount
    | undefined;
  mandate_options?:
    | External$PaymentMethodOptionsUsBankAccountMandateOptions
    | undefined;
  verification_method?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentPaymentMethodOptionsUsBankAccount1
 */
const SchemaIn$SetupIntentPaymentMethodOptionsUsBankAccount1: z.ZodType<
  SetupIntentPaymentMethodOptionsUsBankAccount1, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    financial_connections:
      Schemas$LinkedAccountOptionsUsBankAccount.in.optional(),
    mandate_options:
      Schemas$PaymentMethodOptionsUsBankAccountMandateOptions.in.optional(),
    verification_method: z
      .enum(["automatic", "instant", "microdeposits"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financial_connections: "financialConnections",
      mandate_options: "mandateOptions",
      verification_method: "verificationMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentPaymentMethodOptionsUsBankAccount1
 */
const SchemaOut$SetupIntentPaymentMethodOptionsUsBankAccount1: z.ZodType<
  External$SetupIntentPaymentMethodOptionsUsBankAccount1, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentPaymentMethodOptionsUsBankAccount1 // the object to be transformed
> = z
  .object({
    financialConnections:
      Schemas$LinkedAccountOptionsUsBankAccount.out.optional(),
    mandateOptions:
      Schemas$PaymentMethodOptionsUsBankAccountMandateOptions.out.optional(),
    verificationMethod: z
      .enum(["automatic", "instant", "microdeposits"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financialConnections: "financial_connections",
      mandateOptions: "mandate_options",
      verificationMethod: "verification_method",
    });
  });

export const Schemas$SetupIntentPaymentMethodOptionsUsBankAccount1 = {
  in: SchemaIn$SetupIntentPaymentMethodOptionsUsBankAccount1,
  out: SchemaOut$SetupIntentPaymentMethodOptionsUsBankAccount1,
};
