import {
  External$PaymentIntentIncrementAuthorizationBodyMetadata,
  PaymentIntentIncrementAuthorizationBodyMetadata,
  Schemas$PaymentIntentIncrementAuthorizationBodyMetadata,
} from "./payment-intent-increment-authorization-body-metadata";
import {
  External$PaymentIntentIncrementAuthorizationBodyTransferData,
  PaymentIntentIncrementAuthorizationBodyTransferData,
  Schemas$PaymentIntentIncrementAuthorizationBodyTransferData,
} from "./payment-intent-increment-authorization-body-transfer-data";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentIncrementAuthorizationBody
 */
export type PaymentIntentIncrementAuthorizationBody = {
  /**
   * The updated total amount that you intend to collect from the cardholder. This amount must be greater than the currently authorized amount.
   */
  amount: number;
  /**
   * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total amount captured. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
   */
  applicationFeeAmount?: number | undefined;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PaymentIntentIncrementAuthorizationBodyMetadata | undefined;
  /**
   * Text that appears on the customer's statement as the statement descriptor for a non-card or card charge. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
   */
  statementDescriptor?: string | undefined;
  /**
   * The parameters used to automatically create a transfer after the payment is captured.
   * Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
   */
  transferData?:
    | PaymentIntentIncrementAuthorizationBodyTransferData
    | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | number
    | (number | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (PaymentIntentIncrementAuthorizationBodyMetadata | undefined)
    | (string | undefined)
    | (PaymentIntentIncrementAuthorizationBodyTransferData | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * PaymentIntentIncrementAuthorizationBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentIncrementAuthorizationBody = {
  amount: number;
  application_fee_amount?: number | undefined;
  description?: string | undefined;
  expand?: string[] | undefined;
  metadata?:
    | External$PaymentIntentIncrementAuthorizationBodyMetadata
    | undefined;
  statement_descriptor?: string | undefined;
  transfer_data?:
    | External$PaymentIntentIncrementAuthorizationBodyTransferData
    | undefined;

  [additionalProperty: string]:
    | number
    | (number | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (External$PaymentIntentIncrementAuthorizationBodyMetadata | undefined)
    | (string | undefined)
    | (External$PaymentIntentIncrementAuthorizationBodyTransferData | undefined)
    | External$PaymentIntentIncrementAuthorizationBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentIncrementAuthorizationBody
 */
const SchemaIn$PaymentIntentIncrementAuthorizationBody: z.ZodType<
  PaymentIntentIncrementAuthorizationBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    application_fee_amount: z.number().int().optional(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata:
      Schemas$PaymentIntentIncrementAuthorizationBodyMetadata.in.optional(),
    statement_descriptor: z.string().optional(),
    transfer_data:
      Schemas$PaymentIntentIncrementAuthorizationBodyTransferData.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      application_fee_amount: "applicationFeeAmount",
      description: "description",
      expand: "expand",
      metadata: "metadata",
      statement_descriptor: "statementDescriptor",
      transfer_data: "transferData",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentIncrementAuthorizationBody
 */
const SchemaOut$PaymentIntentIncrementAuthorizationBody: z.ZodType<
  External$PaymentIntentIncrementAuthorizationBody, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentIncrementAuthorizationBody // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    applicationFeeAmount: z.number().int().optional(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata:
      Schemas$PaymentIntentIncrementAuthorizationBodyMetadata.out.optional(),
    statementDescriptor: z.string().optional(),
    transferData:
      Schemas$PaymentIntentIncrementAuthorizationBodyTransferData.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      applicationFeeAmount: "application_fee_amount",
      description: "description",
      expand: "expand",
      metadata: "metadata",
      statementDescriptor: "statement_descriptor",
      transferData: "transfer_data",
    });
  });

export const Schemas$PaymentIntentIncrementAuthorizationBody = {
  in: SchemaIn$PaymentIntentIncrementAuthorizationBody,
  out: SchemaOut$PaymentIntentIncrementAuthorizationBody,
};
