import {
  External$TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetails,
  Schemas$TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetails,
  TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetails,
} from "./test-helper-treasury-received-credit-create-body-initiating-payment-method-details";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperTreasuryReceivedCreditCreateBody
 */
export type TestHelperTreasuryReceivedCreditCreateBody = {
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
   * The FinancialAccount to send funds to.
   */
  financialAccount: string;
  /**
   * Initiating payment method details for the object.
   */
  initiatingPaymentMethodDetails?:
    | TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetails
    | undefined;
  /**
   * Specifies the network rails to be used. If not set, will default to the PaymentMethod's preferred network. See the [docs](https://stripe.com/docs/treasury/money-movement/timelines) to learn more about money movement timelines for each network type.
   */
  network: "ach" | "us_domestic_wire";

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
        | TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetails
        | undefined
      )
    | ("ach" | "us_domestic_wire")
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TestHelperTreasuryReceivedCreditCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperTreasuryReceivedCreditCreateBody = {
  amount: number;
  currency: string;
  description?: string | undefined;
  expand?: string[] | undefined;
  financial_account: string;
  initiating_payment_method_details?:
    | External$TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetails
    | undefined;
  network: "ach" | "us_domestic_wire";

  [additionalProperty: string]:
    | number
    | string
    | (string | undefined)
    | (string[] | undefined)
    | string
    | (
        | External$TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetails
        | undefined
      )
    | ("ach" | "us_domestic_wire")
    | External$TestHelperTreasuryReceivedCreditCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperTreasuryReceivedCreditCreateBody
 */
const SchemaIn$TestHelperTreasuryReceivedCreditCreateBody: z.ZodType<
  TestHelperTreasuryReceivedCreditCreateBody, // output type of this zod object
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
      Schemas$TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetails.in.optional(),
    network: z.enum(["ach", "us_domestic_wire"]),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperTreasuryReceivedCreditCreateBody
 */
const SchemaOut$TestHelperTreasuryReceivedCreditCreateBody: z.ZodType<
  External$TestHelperTreasuryReceivedCreditCreateBody, // output type of this zod object
  z.ZodTypeDef,
  TestHelperTreasuryReceivedCreditCreateBody // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    financialAccount: z.string(),
    initiatingPaymentMethodDetails:
      Schemas$TestHelperTreasuryReceivedCreditCreateBodyInitiatingPaymentMethodDetails.out.optional(),
    network: z.enum(["ach", "us_domestic_wire"]),
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

export const Schemas$TestHelperTreasuryReceivedCreditCreateBody = {
  in: SchemaIn$TestHelperTreasuryReceivedCreditCreateBody,
  out: SchemaOut$TestHelperTreasuryReceivedCreditCreateBody,
};
