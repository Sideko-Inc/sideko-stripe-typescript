import {
  External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodData,
  Schemas$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodData,
  TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodData,
} from "./treasury-outbound-payment-create-body-destination-payment-method-data";
import {
  External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptions,
  Schemas$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptions,
  TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptions,
} from "./treasury-outbound-payment-create-body-destination-payment-method-options";
import {
  External$TreasuryOutboundPaymentCreateBodyEndUserDetails,
  Schemas$TreasuryOutboundPaymentCreateBodyEndUserDetails,
  TreasuryOutboundPaymentCreateBodyEndUserDetails,
} from "./treasury-outbound-payment-create-body-end-user-details";
import {
  External$TreasuryOutboundPaymentCreateBodyMetadata,
  Schemas$TreasuryOutboundPaymentCreateBodyMetadata,
  TreasuryOutboundPaymentCreateBodyMetadata,
} from "./treasury-outbound-payment-create-body-metadata";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryOutboundPaymentCreateBody
 */
export type TreasuryOutboundPaymentCreateBody = {
  /**
   * Amount (in cents) to be transferred.
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * ID of the customer to whom the OutboundPayment is sent. Must match the Customer attached to the `destination_payment_method` passed in.
   */
  customer?: string | undefined;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | undefined;
  /**
   * The PaymentMethod to use as the payment instrument for the OutboundPayment. Exclusive with `destination_payment_method_data`.
   */
  destinationPaymentMethod?: string | undefined;
  /**
   * Hash used to generate the PaymentMethod to be used for this OutboundPayment. Exclusive with `destination_payment_method`.
   */
  destinationPaymentMethodData?:
    | TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodData
    | undefined;
  /**
   * Payment method-specific configuration for this OutboundPayment.
   */
  destinationPaymentMethodOptions?:
    | TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptions
    | undefined;
  /**
   * End user details.
   */
  endUserDetails?: TreasuryOutboundPaymentCreateBodyEndUserDetails | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The FinancialAccount to pull funds from.
   */
  financialAccount: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: TreasuryOutboundPaymentCreateBodyMetadata | undefined;
  /**
   * The description that appears on the receiving end for this OutboundPayment (for example, bank statement for external bank transfer). Maximum 10 characters for `ach` payments, 140 characters for `us_domestic_wire` payments, or 500 characters for `stripe` network transfers. The default value is "payment".
   */
  statementDescriptor?: string | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | number
    | string
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (
        | TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodData
        | undefined
      )
    | (
        | TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptions
        | undefined
      )
    | (TreasuryOutboundPaymentCreateBodyEndUserDetails | undefined)
    | (string[] | undefined)
    | string
    | (TreasuryOutboundPaymentCreateBodyMetadata | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TreasuryOutboundPaymentCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryOutboundPaymentCreateBody = {
  amount: number;
  currency: string;
  customer?: string | undefined;
  description?: string | undefined;
  destination_payment_method?: string | undefined;
  destination_payment_method_data?:
    | External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodData
    | undefined;
  destination_payment_method_options?:
    | External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptions
    | undefined;
  end_user_details?:
    | External$TreasuryOutboundPaymentCreateBodyEndUserDetails
    | undefined;
  expand?: string[] | undefined;
  financial_account: string;
  metadata?: External$TreasuryOutboundPaymentCreateBodyMetadata | undefined;
  statement_descriptor?: string | undefined;

  [additionalProperty: string]:
    | number
    | string
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (
        | External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodData
        | undefined
      )
    | (
        | External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptions
        | undefined
      )
    | (External$TreasuryOutboundPaymentCreateBodyEndUserDetails | undefined)
    | (string[] | undefined)
    | string
    | (External$TreasuryOutboundPaymentCreateBodyMetadata | undefined)
    | (string | undefined)
    | External$TreasuryOutboundPaymentCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryOutboundPaymentCreateBody
 */
const SchemaIn$TreasuryOutboundPaymentCreateBody: z.ZodType<
  TreasuryOutboundPaymentCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    customer: z.string().optional(),
    description: z.string().optional(),
    destination_payment_method: z.string().optional(),
    destination_payment_method_data:
      Schemas$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodData.in.optional(),
    destination_payment_method_options:
      Schemas$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptions.in.optional(),
    end_user_details:
      Schemas$TreasuryOutboundPaymentCreateBodyEndUserDetails.in.optional(),
    expand: z.array(z.string()).optional(),
    financial_account: z.string(),
    metadata: Schemas$TreasuryOutboundPaymentCreateBodyMetadata.in.optional(),
    statement_descriptor: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      customer: "customer",
      description: "description",
      destination_payment_method: "destinationPaymentMethod",
      destination_payment_method_data: "destinationPaymentMethodData",
      destination_payment_method_options: "destinationPaymentMethodOptions",
      end_user_details: "endUserDetails",
      expand: "expand",
      financial_account: "financialAccount",
      metadata: "metadata",
      statement_descriptor: "statementDescriptor",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryOutboundPaymentCreateBody
 */
const SchemaOut$TreasuryOutboundPaymentCreateBody: z.ZodType<
  External$TreasuryOutboundPaymentCreateBody, // output type of this zod object
  z.ZodTypeDef,
  TreasuryOutboundPaymentCreateBody // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    customer: z.string().optional(),
    description: z.string().optional(),
    destinationPaymentMethod: z.string().optional(),
    destinationPaymentMethodData:
      Schemas$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodData.out.optional(),
    destinationPaymentMethodOptions:
      Schemas$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptions.out.optional(),
    endUserDetails:
      Schemas$TreasuryOutboundPaymentCreateBodyEndUserDetails.out.optional(),
    expand: z.array(z.string()).optional(),
    financialAccount: z.string(),
    metadata: Schemas$TreasuryOutboundPaymentCreateBodyMetadata.out.optional(),
    statementDescriptor: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      customer: "customer",
      description: "description",
      destinationPaymentMethod: "destination_payment_method",
      destinationPaymentMethodData: "destination_payment_method_data",
      destinationPaymentMethodOptions: "destination_payment_method_options",
      endUserDetails: "end_user_details",
      expand: "expand",
      financialAccount: "financial_account",
      metadata: "metadata",
      statementDescriptor: "statement_descriptor",
    });
  });

export const Schemas$TreasuryOutboundPaymentCreateBody = {
  in: SchemaIn$TreasuryOutboundPaymentCreateBody,
  out: SchemaOut$TreasuryOutboundPaymentCreateBody,
};
