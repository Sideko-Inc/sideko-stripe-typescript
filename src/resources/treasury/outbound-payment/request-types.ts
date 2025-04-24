import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TreasuryOutboundPaymentCancelBody,
  Schemas$TreasuryOutboundPaymentCancelBody,
  TreasuryOutboundPaymentCancelBody,
} from "@sideko-inc/stripe/types/treasury-outbound-payment-cancel-body";
import {
  External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodData,
  Schemas$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodData,
  TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodData,
} from "@sideko-inc/stripe/types/treasury-outbound-payment-create-body-destination-payment-method-data";
import {
  External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptions,
  Schemas$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptions,
  TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptions,
} from "@sideko-inc/stripe/types/treasury-outbound-payment-create-body-destination-payment-method-options";
import {
  External$TreasuryOutboundPaymentCreateBodyEndUserDetails,
  Schemas$TreasuryOutboundPaymentCreateBodyEndUserDetails,
  TreasuryOutboundPaymentCreateBodyEndUserDetails,
} from "@sideko-inc/stripe/types/treasury-outbound-payment-create-body-end-user-details";
import {
  External$TreasuryOutboundPaymentCreateBodyMetadata,
  Schemas$TreasuryOutboundPaymentCreateBodyMetadata,
  TreasuryOutboundPaymentCreateBodyMetadata,
} from "@sideko-inc/stripe/types/treasury-outbound-payment-create-body-metadata";
import {
  External$TreasuryOutboundPaymentListCreatedObj0,
  Schemas$TreasuryOutboundPaymentListCreatedObj0,
  TreasuryOutboundPaymentListCreatedObj0,
} from "@sideko-inc/stripe/types/treasury-outbound-payment-list-created-obj0";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Returns objects associated with this FinancialAccount.
   */
  financialAccount: string;
  /**
   * Only return OutboundPayments that were created during the given date interval.
   */
  created?: (TreasuryOutboundPaymentListCreatedObj0 | number) | undefined;
  /**
   * Only return OutboundPayments sent to this customer.
   */
  customer?: string | undefined;
  /**
   * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
   */
  endingBefore?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
  /**
   * Only return OutboundPayments that have the given status: `processing`, `failed`, `posted`, `returned`, or `canceled`.
   */
  status?:
    | ("canceled" | "failed" | "posted" | "processing" | "returned")
    | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  financial_account: string;
  created?:
    | (External$TreasuryOutboundPaymentListCreatedObj0 | number)
    | undefined;
  customer?: string | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
  status?:
    | ("canceled" | "failed" | "posted" | "processing" | "returned")
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    financial_account: z.string(),
    created: z
      .union([
        Schemas$TreasuryOutboundPaymentListCreatedObj0.in,
        z.number().int(),
      ])
      .optional(),
    customer: z.string().optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
    status: z
      .enum(["canceled", "failed", "posted", "processing", "returned"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financial_account: "financialAccount",
      created: "created",
      customer: "customer",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      starting_after: "startingAfter",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    financialAccount: z.string(),
    created: z
      .union([
        Schemas$TreasuryOutboundPaymentListCreatedObj0.out,
        z.number().int(),
      ])
      .optional(),
    customer: z.string().optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
    status: z
      .enum(["canceled", "failed", "posted", "processing", "returned"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financialAccount: "financial_account",
      created: "created",
      customer: "customer",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      startingAfter: "starting_after",
      status: "status",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  id: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  id: string;
  expand?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    id: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    id: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

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
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
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

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * CancelRequest
 */
export type CancelRequest = {
  data?: TreasuryOutboundPaymentCancelBody | undefined;
  id: string;
};

/**
 * @internal
 * CancelRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CancelRequest = {
  data?: External$TreasuryOutboundPaymentCancelBody | undefined;
  id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CancelRequest
 */
const SchemaIn$CancelRequest: z.ZodType<
  CancelRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TreasuryOutboundPaymentCancelBody.in.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CancelRequest
 */
const SchemaOut$CancelRequest: z.ZodType<
  External$CancelRequest, // output type of this zod object
  z.ZodTypeDef,
  CancelRequest // the object to be transformed
> = z
  .object({
    data: Schemas$TreasuryOutboundPaymentCancelBody.out.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
    });
  });

export const Schemas$CancelRequest = {
  in: SchemaIn$CancelRequest,
  out: SchemaOut$CancelRequest,
};
