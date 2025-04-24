import {
  External$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnections,
  Schemas$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnections,
  SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnections,
} from "./setup-intent-confirm-body-payment-method-options-us-bank-account-financial-connections";
import {
  External$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountMandateOptions,
  Schemas$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountMandateOptions,
  SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountMandateOptions,
} from "./setup-intent-confirm-body-payment-method-options-us-bank-account-mandate-options";
import {
  External$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountNetworks,
  Schemas$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountNetworks,
  SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountNetworks,
} from "./setup-intent-confirm-body-payment-method-options-us-bank-account-networks";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccount
 */
export type SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccount = {
  financialConnections?:
    | SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnections
    | undefined;
  mandateOptions?:
    | SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountMandateOptions
    | undefined;
  networks?:
    | SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountNetworks
    | undefined;
  verificationMethod?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * @internal
 * SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccount = {
  financial_connections?:
    | External$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnections
    | undefined;
  mandate_options?:
    | External$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountMandateOptions
    | undefined;
  networks?:
    | External$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountNetworks
    | undefined;
  verification_method?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccount
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccount: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    financial_connections:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnections.in.optional(),
    mandate_options:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountMandateOptions.in.optional(),
    networks:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountNetworks.in.optional(),
    verification_method: z
      .enum(["automatic", "instant", "microdeposits"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financial_connections: "financialConnections",
      mandate_options: "mandateOptions",
      networks: "networks",
      verification_method: "verificationMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccount
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccount: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccount // the object to be transformed
> = z
  .object({
    financialConnections:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountFinancialConnections.out.optional(),
    mandateOptions:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountMandateOptions.out.optional(),
    networks:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccountNetworks.out.optional(),
    verificationMethod: z
      .enum(["automatic", "instant", "microdeposits"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financialConnections: "financial_connections",
      mandateOptions: "mandate_options",
      networks: "networks",
      verificationMethod: "verification_method",
    });
  });

export const Schemas$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccount = {
  in: SchemaIn$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccount,
  out: SchemaOut$SetupIntentConfirmBodyPaymentMethodOptionsUsBankAccount,
};
