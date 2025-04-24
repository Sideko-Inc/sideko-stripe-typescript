import {
  External$PaymentMethodUsBankAccountStatusDetails,
  PaymentMethodUsBankAccountStatusDetails,
  Schemas$PaymentMethodUsBankAccountStatusDetails,
} from "./payment-method-us-bank-account-status-details";
import {
  External$UsBankAccountNetworks,
  Schemas$UsBankAccountNetworks,
  UsBankAccountNetworks,
} from "./us-bank-account-networks";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodUsBankAccount = {
  /**
   * Account holder type: individual or company.
   */
  accountHolderType?: ("company" | "individual") | null | undefined;
  /**
   * Account type: checkings or savings. Defaults to checking if omitted.
   */
  accountType?: ("checking" | "savings") | null | undefined;
  /**
   * The name of the bank.
   */
  bankName?: string | null | undefined;
  /**
   * The ID of the Financial Connections Account used to create the payment method.
   */
  financialConnectionsAccount?: string | null | undefined;
  /**
   * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
   */
  fingerprint?: string | null | undefined;
  /**
   * Last four digits of the bank account number.
   */
  last4?: string | null | undefined;
  networks?: UsBankAccountNetworks | undefined;
  /**
   * Routing number of the bank account.
   */
  routingNumber?: string | null | undefined;
  statusDetails?: PaymentMethodUsBankAccountStatusDetails | undefined;
};

/**
 * @internal
 * PaymentMethodUsBankAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodUsBankAccount = {
  account_holder_type?: ("company" | "individual") | null | undefined;
  account_type?: ("checking" | "savings") | null | undefined;
  bank_name?: string | null | undefined;
  financial_connections_account?: string | null | undefined;
  fingerprint?: string | null | undefined;
  last4?: string | null | undefined;
  networks?: External$UsBankAccountNetworks | undefined;
  routing_number?: string | null | undefined;
  status_details?: External$PaymentMethodUsBankAccountStatusDetails | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodUsBankAccount
 */
const SchemaIn$PaymentMethodUsBankAccount: z.ZodType<
  PaymentMethodUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_holder_type: z
      .enum(["company", "individual"])
      .nullable()
      .optional(),
    account_type: z.enum(["checking", "savings"]).nullable().optional(),
    bank_name: z.string().nullable().optional(),
    financial_connections_account: z.string().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    networks: Schemas$UsBankAccountNetworks.in.optional(),
    routing_number: z.string().nullable().optional(),
    status_details:
      Schemas$PaymentMethodUsBankAccountStatusDetails.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_holder_type: "accountHolderType",
      account_type: "accountType",
      bank_name: "bankName",
      financial_connections_account: "financialConnectionsAccount",
      fingerprint: "fingerprint",
      last4: "last4",
      networks: "networks",
      routing_number: "routingNumber",
      status_details: "statusDetails",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodUsBankAccount
 */
const SchemaOut$PaymentMethodUsBankAccount: z.ZodType<
  External$PaymentMethodUsBankAccount, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodUsBankAccount // the object to be transformed
> = z
  .object({
    accountHolderType: z.enum(["company", "individual"]).nullable().optional(),
    accountType: z.enum(["checking", "savings"]).nullable().optional(),
    bankName: z.string().nullable().optional(),
    financialConnectionsAccount: z.string().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    networks: Schemas$UsBankAccountNetworks.out.optional(),
    routingNumber: z.string().nullable().optional(),
    statusDetails:
      Schemas$PaymentMethodUsBankAccountStatusDetails.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountHolderType: "account_holder_type",
      accountType: "account_type",
      bankName: "bank_name",
      financialConnectionsAccount: "financial_connections_account",
      fingerprint: "fingerprint",
      last4: "last4",
      networks: "networks",
      routingNumber: "routing_number",
      statusDetails: "status_details",
    });
  });

export const Schemas$PaymentMethodUsBankAccount = {
  in: SchemaIn$PaymentMethodUsBankAccount,
  out: SchemaOut$PaymentMethodUsBankAccount,
};
