import {
  BankConnectionsResourceAccountholder,
  External$BankConnectionsResourceAccountholder,
  Schemas$BankConnectionsResourceAccountholder,
} from "./bank-connections-resource-accountholder";
import {
  BankConnectionsResourceBalance,
  External$BankConnectionsResourceBalance,
  Schemas$BankConnectionsResourceBalance,
} from "./bank-connections-resource-balance";
import {
  BankConnectionsResourceBalanceRefresh,
  External$BankConnectionsResourceBalanceRefresh,
  Schemas$BankConnectionsResourceBalanceRefresh,
} from "./bank-connections-resource-balance-refresh";
import {
  BankConnectionsResourceOwnershipRefresh,
  External$BankConnectionsResourceOwnershipRefresh,
  Schemas$BankConnectionsResourceOwnershipRefresh,
} from "./bank-connections-resource-ownership-refresh";
import {
  BankConnectionsResourceTransactionRefresh,
  External$BankConnectionsResourceTransactionRefresh,
  Schemas$BankConnectionsResourceTransactionRefresh,
} from "./bank-connections-resource-transaction-refresh";
import {
  External$FinancialConnectionsAccountOwnership1,
  FinancialConnectionsAccountOwnership1,
  Schemas$FinancialConnectionsAccountOwnership1,
} from "./financial-connections-account-ownership1";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A Financial Connections Account represents an account that exists outside of Stripe, to which you have been granted some degree of access.
 */
export type FinancialConnectionsAccount = {
  accountHolder?: BankConnectionsResourceAccountholder | undefined;
  balance?: BankConnectionsResourceBalance | undefined;
  balanceRefresh?: BankConnectionsResourceBalanceRefresh | undefined;
  /**
   * The type of the account. Account category is further divided in `subcategory`.
   */
  category: "cash" | "credit" | "investment" | "other";
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * A human-readable name that has been assigned to this account, either by the account holder or by the institution.
   */
  displayName?: string | null | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The name of the institution that holds this account.
   */
  institutionName: string;
  /**
   * The last 4 digits of the account number. If present, this will be 4 numeric characters.
   */
  last4?: string | null | undefined;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "financial_connections.account";
  /**
   * The most recent information about the account's owners.
   */
  ownership?: (string | FinancialConnectionsAccountOwnership1) | undefined;
  ownershipRefresh?: BankConnectionsResourceOwnershipRefresh | undefined;
  /**
   * The list of permissions granted by this account.
   */
  permissions?:
    | ("balances" | "ownership" | "payment_method" | "transactions")[]
    | null
    | undefined;
  /**
   * The status of the link to the account.
   */
  status: "active" | "disconnected" | "inactive";
  /**
   * If `category` is `cash`, one of:
   *
   *  - `checking`
   *  - `savings`
   *  - `other`
   *
   * If `category` is `credit`, one of:
   *
   *  - `mortgage`
   *  - `line_of_credit`
   *  - `credit_card`
   *  - `other`
   *
   * If `category` is `investment` or `other`, this will be `other`.
   */
  subcategory:
    | "checking"
    | "credit_card"
    | "line_of_credit"
    | "mortgage"
    | "other"
    | "savings";
  /**
   * The list of data refresh subscriptions requested on this account.
   */
  subscriptions?: "transactions"[] | null | undefined;
  /**
   * The [PaymentMethod type](https://stripe.com/docs/api/payment_methods/object#payment_method_object-type)(s) that can be created from this account.
   */
  supportedPaymentMethodTypes: ("link" | "us_bank_account")[];
  transactionRefresh?: BankConnectionsResourceTransactionRefresh | undefined;
};

/**
 * @internal
 * FinancialConnectionsAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FinancialConnectionsAccount = {
  account_holder?: External$BankConnectionsResourceAccountholder | undefined;
  balance?: External$BankConnectionsResourceBalance | undefined;
  balance_refresh?: External$BankConnectionsResourceBalanceRefresh | undefined;
  category: "cash" | "credit" | "investment" | "other";
  created: number;
  display_name?: string | null | undefined;
  id: string;
  institution_name: string;
  last4?: string | null | undefined;
  livemode: boolean;
  object: "financial_connections.account";
  ownership?:
    | (string | External$FinancialConnectionsAccountOwnership1)
    | undefined;
  ownership_refresh?:
    | External$BankConnectionsResourceOwnershipRefresh
    | undefined;
  permissions?:
    | ("balances" | "ownership" | "payment_method" | "transactions")[]
    | null
    | undefined;
  status: "active" | "disconnected" | "inactive";
  subcategory:
    | "checking"
    | "credit_card"
    | "line_of_credit"
    | "mortgage"
    | "other"
    | "savings";
  subscriptions?: "transactions"[] | null | undefined;
  supported_payment_method_types: ("link" | "us_bank_account")[];
  transaction_refresh?:
    | External$BankConnectionsResourceTransactionRefresh
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FinancialConnectionsAccount
 */
const SchemaIn$FinancialConnectionsAccount: z.ZodType<
  FinancialConnectionsAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_holder: z.lazy(() =>
      Schemas$BankConnectionsResourceAccountholder.in.optional(),
    ),
    balance: Schemas$BankConnectionsResourceBalance.in.optional(),
    balance_refresh:
      Schemas$BankConnectionsResourceBalanceRefresh.in.optional(),
    category: z.enum(["cash", "credit", "investment", "other"]),
    created: z.number().int(),
    display_name: z.string().nullable().optional(),
    id: z.string(),
    institution_name: z.string(),
    last4: z.string().nullable().optional(),
    livemode: z.boolean(),
    object: z.enum(["financial_connections.account"]),
    ownership: z
      .union([z.string(), Schemas$FinancialConnectionsAccountOwnership1.in])
      .optional(),
    ownership_refresh:
      Schemas$BankConnectionsResourceOwnershipRefresh.in.optional(),
    permissions: z
      .array(
        z.enum(["balances", "ownership", "payment_method", "transactions"]),
      )
      .nullable()
      .optional(),
    status: z.enum(["active", "disconnected", "inactive"]),
    subcategory: z.enum([
      "checking",
      "credit_card",
      "line_of_credit",
      "mortgage",
      "other",
      "savings",
    ]),
    subscriptions: z
      .array(z.enum(["transactions"]))
      .nullable()
      .optional(),
    supported_payment_method_types: z.array(
      z.enum(["link", "us_bank_account"]),
    ),
    transaction_refresh:
      Schemas$BankConnectionsResourceTransactionRefresh.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_holder: "accountHolder",
      balance: "balance",
      balance_refresh: "balanceRefresh",
      category: "category",
      created: "created",
      display_name: "displayName",
      id: "id",
      institution_name: "institutionName",
      last4: "last4",
      livemode: "livemode",
      object: "object",
      ownership: "ownership",
      ownership_refresh: "ownershipRefresh",
      permissions: "permissions",
      status: "status",
      subcategory: "subcategory",
      subscriptions: "subscriptions",
      supported_payment_method_types: "supportedPaymentMethodTypes",
      transaction_refresh: "transactionRefresh",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FinancialConnectionsAccount
 */
const SchemaOut$FinancialConnectionsAccount: z.ZodType<
  External$FinancialConnectionsAccount, // output type of this zod object
  z.ZodTypeDef,
  FinancialConnectionsAccount // the object to be transformed
> = z
  .object({
    accountHolder: z.lazy(() =>
      Schemas$BankConnectionsResourceAccountholder.out.optional(),
    ),
    balance: Schemas$BankConnectionsResourceBalance.out.optional(),
    balanceRefresh:
      Schemas$BankConnectionsResourceBalanceRefresh.out.optional(),
    category: z.enum(["cash", "credit", "investment", "other"]),
    created: z.number().int(),
    displayName: z.string().nullable().optional(),
    id: z.string(),
    institutionName: z.string(),
    last4: z.string().nullable().optional(),
    livemode: z.boolean(),
    object: z.enum(["financial_connections.account"]),
    ownership: z
      .union([z.string(), Schemas$FinancialConnectionsAccountOwnership1.out])
      .optional(),
    ownershipRefresh:
      Schemas$BankConnectionsResourceOwnershipRefresh.out.optional(),
    permissions: z
      .array(
        z.enum(["balances", "ownership", "payment_method", "transactions"]),
      )
      .nullable()
      .optional(),
    status: z.enum(["active", "disconnected", "inactive"]),
    subcategory: z.enum([
      "checking",
      "credit_card",
      "line_of_credit",
      "mortgage",
      "other",
      "savings",
    ]),
    subscriptions: z
      .array(z.enum(["transactions"]))
      .nullable()
      .optional(),
    supportedPaymentMethodTypes: z.array(z.enum(["link", "us_bank_account"])),
    transactionRefresh:
      Schemas$BankConnectionsResourceTransactionRefresh.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountHolder: "account_holder",
      balance: "balance",
      balanceRefresh: "balance_refresh",
      category: "category",
      created: "created",
      displayName: "display_name",
      id: "id",
      institutionName: "institution_name",
      last4: "last4",
      livemode: "livemode",
      object: "object",
      ownership: "ownership",
      ownershipRefresh: "ownership_refresh",
      permissions: "permissions",
      status: "status",
      subcategory: "subcategory",
      subscriptions: "subscriptions",
      supportedPaymentMethodTypes: "supported_payment_method_types",
      transactionRefresh: "transaction_refresh",
    });
  });

export const Schemas$FinancialConnectionsAccount = {
  in: SchemaIn$FinancialConnectionsAccount,
  out: SchemaOut$FinancialConnectionsAccount,
};
