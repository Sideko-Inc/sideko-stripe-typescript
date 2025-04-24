import {
  External$TreasuryReceivedDebitsResourceLinkedFlows,
  Schemas$TreasuryReceivedDebitsResourceLinkedFlows,
  TreasuryReceivedDebitsResourceLinkedFlows,
} from "./treasury-received-debits-resource-linked-flows";
import {
  External$TreasuryReceivedDebitsResourceReversalDetails,
  Schemas$TreasuryReceivedDebitsResourceReversalDetails,
  TreasuryReceivedDebitsResourceReversalDetails,
} from "./treasury-received-debits-resource-reversal-details";
import {
  External$TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails,
  Schemas$TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails,
  TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails,
} from "./treasury-shared-resource-initiating-payment-method-details-initiating-payment-method-details";
import {
  External$TreasuryTransaction,
  Schemas$TreasuryTransaction,
  TreasuryTransaction,
} from "./treasury-transaction";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ReceivedDebits represent funds pulled from a [FinancialAccount](https://stripe.com/docs/api#financial_accounts). These are not initiated from the FinancialAccount.
 */
export type TreasuryReceivedDebit = {
  /**
   * Amount (in cents) transferred.
   */
  amount: number;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description: string;
  /**
   * Reason for the failure. A ReceivedDebit might fail because the FinancialAccount doesn't have sufficient funds, is closed, or is frozen.
   */
  failureCode?:
    | (
        | "account_closed"
        | "account_frozen"
        | "insufficient_funds"
        | "international_transaction"
        | "other"
      )
    | null
    | undefined;
  /**
   * The FinancialAccount that funds were pulled from.
   */
  financialAccount?: string | null | undefined;
  /**
   * A [hosted transaction receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.
   */
  hostedRegulatoryReceiptUrl?: string | null | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  initiatingPaymentMethodDetails?:
    | TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails
    | undefined;
  linkedFlows: TreasuryReceivedDebitsResourceLinkedFlows;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * The network used for the ReceivedDebit.
   */
  network: "ach" | "card" | "stripe";
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "treasury.received_debit";
  reversalDetails?: TreasuryReceivedDebitsResourceReversalDetails | undefined;
  /**
   * Status of the ReceivedDebit. ReceivedDebits are created with a status of either `succeeded` (approved) or `failed` (declined). The failure reason can be found under the `failure_code`.
   */
  status: "failed" | "succeeded";
  /**
   * The Transaction associated with this object.
   */
  transaction?: (string | TreasuryTransaction) | undefined;
};

/**
 * @internal
 * TreasuryReceivedDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryReceivedDebit = {
  amount: number;
  created: number;
  currency: string;
  description: string;
  failure_code?:
    | (
        | "account_closed"
        | "account_frozen"
        | "insufficient_funds"
        | "international_transaction"
        | "other"
      )
    | null
    | undefined;
  financial_account?: string | null | undefined;
  hosted_regulatory_receipt_url?: string | null | undefined;
  id: string;
  initiating_payment_method_details?:
    | External$TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails
    | undefined;
  linked_flows: External$TreasuryReceivedDebitsResourceLinkedFlows;
  livemode: boolean;
  network: "ach" | "card" | "stripe";
  object: "treasury.received_debit";
  reversal_details?:
    | External$TreasuryReceivedDebitsResourceReversalDetails
    | undefined;
  status: "failed" | "succeeded";
  transaction?: (string | External$TreasuryTransaction) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryReceivedDebit
 */
const SchemaIn$TreasuryReceivedDebit: z.ZodType<
  TreasuryReceivedDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    created: z.number().int(),
    currency: z.string(),
    description: z.string(),
    failure_code: z
      .enum([
        "account_closed",
        "account_frozen",
        "insufficient_funds",
        "international_transaction",
        "other",
      ])
      .nullable()
      .optional(),
    financial_account: z.string().nullable().optional(),
    hosted_regulatory_receipt_url: z.string().nullable().optional(),
    id: z.string(),
    initiating_payment_method_details:
      Schemas$TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails.in.optional(),
    linked_flows: Schemas$TreasuryReceivedDebitsResourceLinkedFlows.in,
    livemode: z.boolean(),
    network: z.enum(["ach", "card", "stripe"]),
    object: z.enum(["treasury.received_debit"]),
    reversal_details:
      Schemas$TreasuryReceivedDebitsResourceReversalDetails.in.optional(),
    status: z.enum(["failed", "succeeded"]),
    transaction: z
      .union([z.string(), z.lazy(() => Schemas$TreasuryTransaction.in)])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      created: "created",
      currency: "currency",
      description: "description",
      failure_code: "failureCode",
      financial_account: "financialAccount",
      hosted_regulatory_receipt_url: "hostedRegulatoryReceiptUrl",
      id: "id",
      initiating_payment_method_details: "initiatingPaymentMethodDetails",
      linked_flows: "linkedFlows",
      livemode: "livemode",
      network: "network",
      object: "object",
      reversal_details: "reversalDetails",
      status: "status",
      transaction: "transaction",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryReceivedDebit
 */
const SchemaOut$TreasuryReceivedDebit: z.ZodType<
  External$TreasuryReceivedDebit, // output type of this zod object
  z.ZodTypeDef,
  TreasuryReceivedDebit // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    created: z.number().int(),
    currency: z.string(),
    description: z.string(),
    failureCode: z
      .enum([
        "account_closed",
        "account_frozen",
        "insufficient_funds",
        "international_transaction",
        "other",
      ])
      .nullable()
      .optional(),
    financialAccount: z.string().nullable().optional(),
    hostedRegulatoryReceiptUrl: z.string().nullable().optional(),
    id: z.string(),
    initiatingPaymentMethodDetails:
      Schemas$TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails.out.optional(),
    linkedFlows: Schemas$TreasuryReceivedDebitsResourceLinkedFlows.out,
    livemode: z.boolean(),
    network: z.enum(["ach", "card", "stripe"]),
    object: z.enum(["treasury.received_debit"]),
    reversalDetails:
      Schemas$TreasuryReceivedDebitsResourceReversalDetails.out.optional(),
    status: z.enum(["failed", "succeeded"]),
    transaction: z
      .union([z.string(), z.lazy(() => Schemas$TreasuryTransaction.out)])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      created: "created",
      currency: "currency",
      description: "description",
      failureCode: "failure_code",
      financialAccount: "financial_account",
      hostedRegulatoryReceiptUrl: "hosted_regulatory_receipt_url",
      id: "id",
      initiatingPaymentMethodDetails: "initiating_payment_method_details",
      linkedFlows: "linked_flows",
      livemode: "livemode",
      network: "network",
      object: "object",
      reversalDetails: "reversal_details",
      status: "status",
      transaction: "transaction",
    });
  });

export const Schemas$TreasuryReceivedDebit = {
  in: SchemaIn$TreasuryReceivedDebit,
  out: SchemaOut$TreasuryReceivedDebit,
};
