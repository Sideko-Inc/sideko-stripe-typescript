import {
  External$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetails,
  Schemas$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetails,
  TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetails,
} from "./test-helper-treasury-received-debit-create-body-initiating-payment-method-details";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperTreasuryReceivedDebitCreateBody
 */
export type TestHelperTreasuryReceivedDebitCreateBody = {
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

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | number
    | string
    | (string | undefined)
    | (string[] | undefined)
    | string
    | (
        | TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetails
        | undefined
      )
    | "ach"
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TestHelperTreasuryReceivedDebitCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperTreasuryReceivedDebitCreateBody = {
  amount: number;
  currency: string;
  description?: string | undefined;
  expand?: string[] | undefined;
  financial_account: string;
  initiating_payment_method_details?:
    | External$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetails
    | undefined;
  network: "ach";

  [additionalProperty: string]:
    | number
    | string
    | (string | undefined)
    | (string[] | undefined)
    | string
    | (
        | External$TestHelperTreasuryReceivedDebitCreateBodyInitiatingPaymentMethodDetails
        | undefined
      )
    | "ach"
    | External$TestHelperTreasuryReceivedDebitCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperTreasuryReceivedDebitCreateBody
 */
const SchemaIn$TestHelperTreasuryReceivedDebitCreateBody: z.ZodType<
  TestHelperTreasuryReceivedDebitCreateBody, // output type of this zod object
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
  .catchall(zodRequiredAny)
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperTreasuryReceivedDebitCreateBody
 */
const SchemaOut$TestHelperTreasuryReceivedDebitCreateBody: z.ZodType<
  External$TestHelperTreasuryReceivedDebitCreateBody, // output type of this zod object
  z.ZodTypeDef,
  TestHelperTreasuryReceivedDebitCreateBody // the object to be transformed
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
  .catchall(zodRequiredAny)
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

export const Schemas$TestHelperTreasuryReceivedDebitCreateBody = {
  in: SchemaIn$TestHelperTreasuryReceivedDebitCreateBody,
  out: SchemaOut$TestHelperTreasuryReceivedDebitCreateBody,
};
