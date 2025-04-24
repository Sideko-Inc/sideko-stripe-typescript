import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetails,
  Schemas$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetails,
  TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetails,
} from "@sideko-inc/stripe/types/test-helper-treasury-received-debit-create-body-initiating-payment-method-details";
import * as z from "zod";

/**
 * CreateRequest
 */
export type CreateRequest = {
  /**
   * Amount (in cents) to be transferred.
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The FinancialAccount to pull funds from.
   */
  financialAccount: string;
  /**
   * Initiating payment method details for the object.
   */
  initiatingPaymentMethodDetails?:
    | TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetails
    | undefined;
  /**
   * Specifies the network rails to be used. If not set, will default to the PaymentMethod's preferred network. See the [docs](https://stripe.com/docs/treasury/money-movement/timelines) to learn more about money movement timelines for each network type.
   */
  network: "ach";
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  amount: number;
  currency: string;
  description?: string | undefined;
  expand?: string[] | undefined;
  financial_account: string;
  initiating_payment_method_details?:
    | External$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetails
    | undefined;
  network: "ach";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    financial_account: z.string(),
    initiating_payment_method_details:
      Schemas$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetails.in.optional(),
    network: z.enum(["ach"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      description: "description",
      expand: "expand",
      financial_account: "financialAccount",
      initiating_payment_method_details: "initiatingPaymentMethodDetails",
      network: "network",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    financialAccount: z.string(),
    initiatingPaymentMethodDetails:
      Schemas$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetails.out.optional(),
    network: z.enum(["ach"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      description: "description",
      expand: "expand",
      financialAccount: "financial_account",
      initiatingPaymentMethodDetails: "initiating_payment_method_details",
      network: "network",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
