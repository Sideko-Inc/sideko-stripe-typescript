import {
  External$TreasuryReceivedCreditsResourceLinkedFlows,
  Schemas$TreasuryReceivedCreditsResourceLinkedFlows,
  TreasuryReceivedCreditsResourceLinkedFlows,
} from "./treasury-received-credits-resource-linked-flows";
import {
  External$TreasuryReceivedCreditsResourceReversalDetails,
  Schemas$TreasuryReceivedCreditsResourceReversalDetails,
  TreasuryReceivedCreditsResourceReversalDetails,
} from "./treasury-received-credits-resource-reversal-details";
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
 * ReceivedCredits represent funds sent to a [FinancialAccount](https://stripe.com/docs/api#financial_accounts) (for example, via ACH or wire). These money movements are not initiated from the FinancialAccount.
 */
export type TreasuryReceivedCredit = {
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
   * Reason for the failure. A ReceivedCredit might fail because the receiving FinancialAccount is closed or frozen.
   */
  failureCode?:
    | (
        | "account_closed"
        | "account_frozen"
        | "international_transaction"
        | "other"
      )
    | null
    | undefined;
  /**
   * The FinancialAccount that received the funds.
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
  initiatingPaymentMethodDetails: TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails;
  linkedFlows: TreasuryReceivedCreditsResourceLinkedFlows;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * The rails used to send the funds.
   */
  network: "ach" | "card" | "stripe" | "us_domestic_wire";
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "treasury.received_credit";
  reversalDetails?: TreasuryReceivedCreditsResourceReversalDetails | undefined;
  /**
   * Status of the ReceivedCredit. ReceivedCredits are created either `succeeded` (approved) or `failed` (declined). If a ReceivedCredit is declined, the failure reason can be found in the `failure_code` field.
   */
  status: "failed" | "succeeded";
  /**
   * The Transaction associated with this object.
   */
  transaction?: (string | TreasuryTransaction) | undefined;
};

/**
 * @internal
 * TreasuryReceivedCredit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryReceivedCredit = {
  amount: number;
  created: number;
  currency: string;
  description: string;
  failure_code?:
    | (
        | "account_closed"
        | "account_frozen"
        | "international_transaction"
        | "other"
      )
    | null
    | undefined;
  financial_account?: string | null | undefined;
  hosted_regulatory_receipt_url?: string | null | undefined;
  id: string;
  initiating_payment_method_details: External$TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails;
  linked_flows: External$TreasuryReceivedCreditsResourceLinkedFlows;
  livemode: boolean;
  network: "ach" | "card" | "stripe" | "us_domestic_wire";
  object: "treasury.received_credit";
  reversal_details?:
    | External$TreasuryReceivedCreditsResourceReversalDetails
    | undefined;
  status: "failed" | "succeeded";
  transaction?: (string | External$TreasuryTransaction) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryReceivedCredit
 */
const SchemaIn$TreasuryReceivedCredit: z.ZodType<
  TreasuryReceivedCredit, // output type of this zod object
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
        "international_transaction",
        "other",
      ])
      .nullable()
      .optional(),
    financial_account: z.string().nullable().optional(),
    hosted_regulatory_receipt_url: z.string().nullable().optional(),
    id: z.string(),
    initiating_payment_method_details:
      Schemas$TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails.in,
    linked_flows: z.lazy(
      () => Schemas$TreasuryReceivedCreditsResourceLinkedFlows.in,
    ),
    livemode: z.boolean(),
    network: z.enum(["ach", "card", "stripe", "us_domestic_wire"]),
    object: z.enum(["treasury.received_credit"]),
    reversal_details:
      Schemas$TreasuryReceivedCreditsResourceReversalDetails.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryReceivedCredit
 */
const SchemaOut$TreasuryReceivedCredit: z.ZodType<
  External$TreasuryReceivedCredit, // output type of this zod object
  z.ZodTypeDef,
  TreasuryReceivedCredit // the object to be transformed
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
        "international_transaction",
        "other",
      ])
      .nullable()
      .optional(),
    financialAccount: z.string().nullable().optional(),
    hostedRegulatoryReceiptUrl: z.string().nullable().optional(),
    id: z.string(),
    initiatingPaymentMethodDetails:
      Schemas$TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails.out,
    linkedFlows: z.lazy(
      () => Schemas$TreasuryReceivedCreditsResourceLinkedFlows.out,
    ),
    livemode: z.boolean(),
    network: z.enum(["ach", "card", "stripe", "us_domestic_wire"]),
    object: z.enum(["treasury.received_credit"]),
    reversalDetails:
      Schemas$TreasuryReceivedCreditsResourceReversalDetails.out.optional(),
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

export const Schemas$TreasuryReceivedCredit = {
  in: SchemaIn$TreasuryReceivedCredit,
  out: SchemaOut$TreasuryReceivedCredit,
};
