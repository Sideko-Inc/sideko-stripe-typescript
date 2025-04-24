import { Account, External$Account, Schemas$Account } from "./account";
import {
  BankAccountMetadata,
  External$BankAccountMetadata,
  Schemas$BankAccountMetadata,
} from "./bank-account-metadata";
import { Customer, External$Customer, Schemas$Customer } from "./customer";
import {
  DeletedCustomer,
  External$DeletedCustomer,
  Schemas$DeletedCustomer,
} from "./deleted-customer";
import {
  External$ExternalAccountRequirements,
  ExternalAccountRequirements,
  Schemas$ExternalAccountRequirements,
} from "./external-account-requirements";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * These bank accounts are payment methods on `Customer` objects.
 *
 * On the other hand [External Accounts](/api#external_accounts) are transfer
 * destinations on `Account` objects for connected accounts.
 * They can be bank accounts or debit cards as well, and are documented in the links above.
 *
 * Related guide: [Bank debits and transfers](/payments/bank-debits-transfers)
 */
export type BankAccount = {
  /**
   * The account this bank account belongs to. Only applicable on Accounts (not customers or recipients) This property is only available when returned as an [External Account](/api/external_account_bank_accounts/object) where [controller.is_controller](/api/accounts/object#account_object-controller-is_controller) is `true`.
   */
  account?: (string | Account) | undefined;
  /**
   * The name of the person or business that owns the bank account.
   */
  accountHolderName?: string | null | undefined;
  /**
   * The type of entity that holds the account. This can be either `individual` or `company`.
   */
  accountHolderType?: string | null | undefined;
  /**
   * The bank account type. This can only be `checking` or `savings` in most countries. In Japan, this can only be `futsu` or `toza`.
   */
  accountType?: string | null | undefined;
  /**
   * A set of available payout methods for this bank account. Only values from this set should be passed as the `method` when creating a payout.
   */
  availablePayoutMethods?: ("instant" | "standard")[] | null | undefined;
  /**
   * Name of the bank associated with the routing number (e.g., `WELLS FARGO`).
   */
  bankName?: string | null | undefined;
  /**
   * Two-letter ISO code representing the country the bank account is located in.
   */
  country: string;
  /**
   * Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account.
   */
  currency: string;
  /**
   * The ID of the customer that the bank account is associated with.
   */
  customer?: (string | Customer | DeletedCustomer) | undefined;
  /**
   * Whether this bank account is the default external account for its currency.
   */
  defaultForCurrency?: boolean | null | undefined;
  /**
   * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
   */
  fingerprint?: string | null | undefined;
  futureRequirements?: ExternalAccountRequirements | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The last four digits of the bank account number.
   */
  last4: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: BankAccountMetadata | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "bank_account";
  requirements?: ExternalAccountRequirements | undefined;
  /**
   * The routing transit number for the bank account.
   */
  routingNumber?: string | null | undefined;
  /**
   * For bank accounts, possible values are `new`, `validated`, `verified`, `verification_failed`, or `errored`. A bank account that hasn't had any activity or validation performed is `new`. If Stripe can determine that the bank account exists, its status will be `validated`. Note that there often isn’t enough information to know (e.g., for smaller credit unions), and the validation is not always run. If customer bank account verification has succeeded, the bank account status will be `verified`. If the verification failed for any reason, such as microdeposit failure, the status will be `verification_failed`. If a payout sent to this bank account fails, we'll set the status to `errored` and will not continue to send [scheduled payouts](https://stripe.com/docs/payouts#payout-schedule) until the bank details are updated.
   *
   * For external accounts, possible values are `new`, `errored` and `verification_failed`. If a payout fails, the status is set to `errored` and scheduled payouts are stopped until account details are updated. In the US and India, if we can't [verify the owner of the bank account](https://support.stripe.com/questions/bank-account-ownership-verification), we'll set the status to `verification_failed`. Other validations aren't run against external accounts because they're only used for payouts. This means the other statuses don't apply.
   */
  status: string;
};

/**
 * @internal
 * BankAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BankAccount = {
  account?: (string | External$Account) | undefined;
  account_holder_name?: string | null | undefined;
  account_holder_type?: string | null | undefined;
  account_type?: string | null | undefined;
  available_payout_methods?: ("instant" | "standard")[] | null | undefined;
  bank_name?: string | null | undefined;
  country: string;
  currency: string;
  customer?:
    | (string | External$Customer | External$DeletedCustomer)
    | undefined;
  default_for_currency?: boolean | null | undefined;
  fingerprint?: string | null | undefined;
  future_requirements?: External$ExternalAccountRequirements | undefined;
  id: string;
  last4: string;
  metadata?: External$BankAccountMetadata | null | undefined;
  object: "bank_account";
  requirements?: External$ExternalAccountRequirements | undefined;
  routing_number?: string | null | undefined;
  status: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BankAccount
 */
const SchemaIn$BankAccount: z.ZodType<
  BankAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account: z.union([z.string(), z.lazy(() => Schemas$Account.in)]).optional(),
    account_holder_name: z.string().nullable().optional(),
    account_holder_type: z.string().nullable().optional(),
    account_type: z.string().nullable().optional(),
    available_payout_methods: z
      .array(z.enum(["instant", "standard"]))
      .nullable()
      .optional(),
    bank_name: z.string().nullable().optional(),
    country: z.string(),
    currency: z.string(),
    customer: z
      .union([
        z.string(),
        z.lazy(() => Schemas$Customer.in),
        Schemas$DeletedCustomer.in,
      ])
      .optional(),
    default_for_currency: z.boolean().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    future_requirements: Schemas$ExternalAccountRequirements.in.optional(),
    id: z.string(),
    last4: z.string(),
    metadata: Schemas$BankAccountMetadata.in.nullable().optional(),
    object: z.enum(["bank_account"]),
    requirements: Schemas$ExternalAccountRequirements.in.optional(),
    routing_number: z.string().nullable().optional(),
    status: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      account_holder_name: "accountHolderName",
      account_holder_type: "accountHolderType",
      account_type: "accountType",
      available_payout_methods: "availablePayoutMethods",
      bank_name: "bankName",
      country: "country",
      currency: "currency",
      customer: "customer",
      default_for_currency: "defaultForCurrency",
      fingerprint: "fingerprint",
      future_requirements: "futureRequirements",
      id: "id",
      last4: "last4",
      metadata: "metadata",
      object: "object",
      requirements: "requirements",
      routing_number: "routingNumber",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BankAccount
 */
const SchemaOut$BankAccount: z.ZodType<
  External$BankAccount, // output type of this zod object
  z.ZodTypeDef,
  BankAccount // the object to be transformed
> = z
  .object({
    account: z
      .union([z.string(), z.lazy(() => Schemas$Account.out)])
      .optional(),
    accountHolderName: z.string().nullable().optional(),
    accountHolderType: z.string().nullable().optional(),
    accountType: z.string().nullable().optional(),
    availablePayoutMethods: z
      .array(z.enum(["instant", "standard"]))
      .nullable()
      .optional(),
    bankName: z.string().nullable().optional(),
    country: z.string(),
    currency: z.string(),
    customer: z
      .union([
        z.string(),
        z.lazy(() => Schemas$Customer.out),
        Schemas$DeletedCustomer.out,
      ])
      .optional(),
    defaultForCurrency: z.boolean().nullable().optional(),
    fingerprint: z.string().nullable().optional(),
    futureRequirements: Schemas$ExternalAccountRequirements.out.optional(),
    id: z.string(),
    last4: z.string(),
    metadata: Schemas$BankAccountMetadata.out.nullable().optional(),
    object: z.enum(["bank_account"]),
    requirements: Schemas$ExternalAccountRequirements.out.optional(),
    routingNumber: z.string().nullable().optional(),
    status: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      accountHolderName: "account_holder_name",
      accountHolderType: "account_holder_type",
      accountType: "account_type",
      availablePayoutMethods: "available_payout_methods",
      bankName: "bank_name",
      country: "country",
      currency: "currency",
      customer: "customer",
      defaultForCurrency: "default_for_currency",
      fingerprint: "fingerprint",
      futureRequirements: "future_requirements",
      id: "id",
      last4: "last4",
      metadata: "metadata",
      object: "object",
      requirements: "requirements",
      routingNumber: "routing_number",
      status: "status",
    });
  });

export const Schemas$BankAccount = {
  in: SchemaIn$BankAccount,
  out: SchemaOut$BankAccount,
};
