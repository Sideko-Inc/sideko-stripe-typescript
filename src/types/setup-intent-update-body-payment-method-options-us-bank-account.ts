import {
  External$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnections,
  Schemas$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnections,
  SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnections,
} from "./setup-intent-update-body-payment-method-options-us-bank-account-financial-connections";
import {
  External$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountMandateOptions,
  Schemas$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountMandateOptions,
  SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountMandateOptions,
} from "./setup-intent-update-body-payment-method-options-us-bank-account-mandate-options";
import {
  External$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountNetworks,
  Schemas$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountNetworks,
  SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountNetworks,
} from "./setup-intent-update-body-payment-method-options-us-bank-account-networks";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccount
 */
export type SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccount = {
  financialConnections?:
    | SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnections
    | undefined;
  mandateOptions?:
    | SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountMandateOptions
    | undefined;
  networks?:
    | SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountNetworks
    | undefined;
  verificationMethod?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * @internal
 * SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccount = {
  financial_connections?:
    | External$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnections
    | undefined;
  mandate_options?:
    | External$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountMandateOptions
    | undefined;
  networks?:
    | External$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountNetworks
    | undefined;
  verification_method?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccount
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccount: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    financial_connections:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnections.in.optional(),
    mandate_options:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountMandateOptions.in.optional(),
    networks:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountNetworks.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccount
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccount: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccount // the object to be transformed
> = z
  .object({
    financialConnections:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountFinancialConnections.out.optional(),
    mandateOptions:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountMandateOptions.out.optional(),
    networks:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccountNetworks.out.optional(),
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

export const Schemas$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccount = {
  in: SchemaIn$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccount,
  out: SchemaOut$SetupIntentUpdateBodyPaymentMethodOptionsUsBankAccount,
};
