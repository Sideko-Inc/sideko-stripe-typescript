import {
  External$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections,
  Schemas$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections,
  SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections,
} from "./setup-intent-create-body-payment-method-options-us-bank-account-financial-connections";
import {
  External$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountMandateOptions,
  Schemas$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountMandateOptions,
  SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountMandateOptions,
} from "./setup-intent-create-body-payment-method-options-us-bank-account-mandate-options";
import {
  External$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountNetworks,
  Schemas$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountNetworks,
  SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountNetworks,
} from "./setup-intent-create-body-payment-method-options-us-bank-account-networks";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyPaymentMethodOptionsUsBankAccount
 */
export type SetupIntentCreateBodyPaymentMethodOptionsUsBankAccount = {
  financialConnections?:
    | SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections
    | undefined;
  mandateOptions?:
    | SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountMandateOptions
    | undefined;
  networks?:
    | SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountNetworks
    | undefined;
  verificationMethod?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * @internal
 * SetupIntentCreateBodyPaymentMethodOptionsUsBankAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccount = {
  financial_connections?:
    | External$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections
    | undefined;
  mandate_options?:
    | External$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountMandateOptions
    | undefined;
  networks?:
    | External$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountNetworks
    | undefined;
  verification_method?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyPaymentMethodOptionsUsBankAccount
 */
const SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccount: z.ZodType<
  SetupIntentCreateBodyPaymentMethodOptionsUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    financial_connections:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections.in.optional(),
    mandate_options:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountMandateOptions.in.optional(),
    networks:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountNetworks.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccount
 */
const SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccount: z.ZodType<
  External$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyPaymentMethodOptionsUsBankAccount // the object to be transformed
> = z
  .object({
    financialConnections:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountFinancialConnections.out.optional(),
    mandateOptions:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountMandateOptions.out.optional(),
    networks:
      Schemas$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountNetworks.out.optional(),
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

export const Schemas$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccount = {
  in: SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccount,
  out: SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccount,
};
