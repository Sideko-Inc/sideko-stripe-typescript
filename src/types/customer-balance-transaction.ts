import {
  CheckoutSession,
  External$CheckoutSession,
  Schemas$CheckoutSession,
} from "./checkout-session";
import {
  CreditNote,
  External$CreditNote,
  Schemas$CreditNote,
} from "./credit-note";
import { Customer, External$Customer, Schemas$Customer } from "./customer";
import {
  CustomerBalanceTransactionMetadata,
  External$CustomerBalanceTransactionMetadata,
  Schemas$CustomerBalanceTransactionMetadata,
} from "./customer-balance-transaction-metadata";
import { External$Invoice, Invoice, Schemas$Invoice } from "./invoice";
import { types } from "@sideko-inc/stripe";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Each customer has a [Balance](https://stripe.com/docs/api/customers/object#customer_object-balance) value,
 * which denotes a debit or credit that's automatically applied to their next invoice upon finalization.
 * You may modify the value directly by using the [update customer API](https://stripe.com/docs/api/customers/update),
 * or by creating a Customer Balance Transaction, which increments or decrements the customer's `balance` by the specified `amount`.
 *
 * Related guide: [Customer balance](https://stripe.com/docs/billing/customer/balance)
 */
export type CustomerBalanceTransaction = {
  /**
   * The amount of the transaction. A negative value is a credit for the customer's balance, and a positive value is a debit to the customer's `balance`.
   */
  amount: number;
  /**
   * The ID of the checkout session (if any) that created the transaction.
   */
  checkoutSession?: (string | CheckoutSession) | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The ID of the credit note (if any) related to the transaction.
   */
  creditNote?: (string | CreditNote) | undefined;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * The ID of the customer the transaction belongs to.
   */
  customer: string | Customer;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | null | undefined;
  /**
   * The customer's `balance` after the transaction was applied. A negative value decreases the amount due on the customer's next invoice. A positive value increases the amount due on the customer's next invoice.
   */
  endingBalance: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The ID of the invoice (if any) related to the transaction.
   */
  invoice?: (string | Invoice) | undefined;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: CustomerBalanceTransactionMetadata | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "customer_balance_transaction";
  /**
   * Transaction type: `adjustment`, `applied_to_invoice`, `credit_note`, `initial`, `invoice_overpaid`, `invoice_too_large`, `invoice_too_small`, `unspent_receiver_credit`, `unapplied_from_invoice`, `checkout_session_subscription_payment`, or `checkout_session_subscription_payment_canceled`. See the [Customer Balance page](https://stripe.com/docs/billing/customer/balance#types) to learn more about transaction types.
   */
  type:
    | "adjustment"
    | "applied_to_invoice"
    | "checkout_session_subscription_payment"
    | "checkout_session_subscription_payment_canceled"
    | "credit_note"
    | "initial"
    | "invoice_overpaid"
    | "invoice_too_large"
    | "invoice_too_small"
    | "migration"
    | "unapplied_from_invoice"
    | "unspent_receiver_credit";
};

/**
 * @internal
 * CustomerBalanceTransaction without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerBalanceTransaction = {
  amount: number;
  checkout_session?: (string | External$CheckoutSession) | undefined;
  created: number;
  credit_note?: (string | External$CreditNote) | undefined;
  currency: string;
  customer: string | External$Customer;
  description?: string | null | undefined;
  ending_balance: number;
  id: string;
  invoice?: (string | External$Invoice) | undefined;
  livemode: boolean;
  metadata?: External$CustomerBalanceTransactionMetadata | null | undefined;
  object: "customer_balance_transaction";
  type:
    | "adjustment"
    | "applied_to_invoice"
    | "checkout_session_subscription_payment"
    | "checkout_session_subscription_payment_canceled"
    | "credit_note"
    | "initial"
    | "invoice_overpaid"
    | "invoice_too_large"
    | "invoice_too_small"
    | "migration"
    | "unapplied_from_invoice"
    | "unspent_receiver_credit";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerBalanceTransaction
 */
const SchemaIn$CustomerBalanceTransaction: z.ZodType<
  CustomerBalanceTransaction, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    checkout_session: z
      .union([z.string(), z.lazy(() => Schemas$CheckoutSession.in)])
      .optional(),
    created: z.number().int(),
    credit_note: z
      .union([z.string(), z.lazy(() => Schemas$CreditNote.in)])
      .optional(),
    currency: z.string(),
    customer: z.union([z.string(), z.lazy(() => Schemas$Customer.in)]),
    description: z.string().nullable().optional(),
    ending_balance: z.number().int(),
    id: z.string(),
    invoice: z.union([z.string(), z.lazy(() => Schemas$Invoice.in)]).optional(),
    livemode: z.boolean(),
    metadata: Schemas$CustomerBalanceTransactionMetadata.in
      .nullable()
      .optional(),
    object: z.enum(["customer_balance_transaction"]),
    type: z.enum([
      "adjustment",
      "applied_to_invoice",
      "checkout_session_subscription_payment",
      "checkout_session_subscription_payment_canceled",
      "credit_note",
      "initial",
      "invoice_overpaid",
      "invoice_too_large",
      "invoice_too_small",
      "migration",
      "unapplied_from_invoice",
      "unspent_receiver_credit",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      checkout_session: "checkoutSession",
      created: "created",
      credit_note: "creditNote",
      currency: "currency",
      customer: "customer",
      description: "description",
      ending_balance: "endingBalance",
      id: "id",
      invoice: "invoice",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerBalanceTransaction
 */
const SchemaOut$CustomerBalanceTransaction: z.ZodType<
  External$CustomerBalanceTransaction, // output type of this zod object
  z.ZodTypeDef,
  CustomerBalanceTransaction // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    checkoutSession: z
      .union([z.string(), z.lazy(() => Schemas$CheckoutSession.out)])
      .optional(),
    created: z.number().int(),
    creditNote: z
      .union([z.string(), z.lazy(() => Schemas$CreditNote.out)])
      .optional(),
    currency: z.string(),
    customer: z.union([z.string(), z.lazy(() => Schemas$Customer.out)]),
    description: z.string().nullable().optional(),
    endingBalance: z.number().int(),
    id: z.string(),
    invoice: z
      .union([z.string(), z.lazy(() => Schemas$Invoice.out)])
      .optional(),
    livemode: z.boolean(),
    metadata: Schemas$CustomerBalanceTransactionMetadata.out
      .nullable()
      .optional(),
    object: z.enum(["customer_balance_transaction"]),
    type: z.enum([
      "adjustment",
      "applied_to_invoice",
      "checkout_session_subscription_payment",
      "checkout_session_subscription_payment_canceled",
      "credit_note",
      "initial",
      "invoice_overpaid",
      "invoice_too_large",
      "invoice_too_small",
      "migration",
      "unapplied_from_invoice",
      "unspent_receiver_credit",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      checkoutSession: "checkout_session",
      created: "created",
      creditNote: "credit_note",
      currency: "currency",
      customer: "customer",
      description: "description",
      endingBalance: "ending_balance",
      id: "id",
      invoice: "invoice",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      type: "type",
    });
  });

export const Schemas$CustomerBalanceTransaction = {
  in: SchemaIn$CustomerBalanceTransaction,
  out: SchemaOut$CustomerBalanceTransaction,
};
