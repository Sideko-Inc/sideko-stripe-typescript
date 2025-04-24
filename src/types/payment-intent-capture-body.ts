import {
  External$PaymentIntentCaptureBodyMetadataObj0,
  PaymentIntentCaptureBodyMetadataObj0,
  Schemas$PaymentIntentCaptureBodyMetadataObj0,
} from "./payment-intent-capture-body-metadata-obj0";
import {
  External$PaymentIntentCaptureBodyTransferData,
  PaymentIntentCaptureBodyTransferData,
  Schemas$PaymentIntentCaptureBodyTransferData,
} from "./payment-intent-capture-body-transfer-data";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCaptureBody
 */
export type PaymentIntentCaptureBody = {
  /**
   * The amount to capture from the PaymentIntent, which must be less than or equal to the original amount. Defaults to the full `amount_capturable` if it's not provided.
   */
  amountToCapture?: number | undefined;
  /**
   * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total amount captured. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
   */
  applicationFeeAmount?: number | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Defaults to `true`. When capturing a PaymentIntent, setting `final_capture` to `false` notifies Stripe to not release the remaining uncaptured funds to make sure that they're captured in future requests. You can only use this setting when [multicapture](https://stripe.com/docs/payments/multicapture) is available for PaymentIntents.
   */
  finalCapture?: boolean | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (PaymentIntentCaptureBodyMetadataObj0 | string) | undefined;
  /**
   * Text that appears on the customer's statement as the statement descriptor for a non-card charge. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
   *
   * Setting this value for a card charge returns an error. For card charges, set the [statement_descriptor_suffix](https://docs.stripe.com/get-started/account/statement-descriptors#dynamic) instead.
   */
  statementDescriptor?: string | undefined;
  /**
   * Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement.
   */
  statementDescriptorSuffix?: string | undefined;
  /**
   * The parameters that you can use to automatically create a transfer after the payment
   * is captured. Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
   */
  transferData?: PaymentIntentCaptureBodyTransferData | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (number | undefined)
    | (number | undefined)
    | (string[] | undefined)
    | (boolean | undefined)
    | ((PaymentIntentCaptureBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (string | undefined)
    | (PaymentIntentCaptureBodyTransferData | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * PaymentIntentCaptureBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCaptureBody = {
  amount_to_capture?: number | undefined;
  application_fee_amount?: number | undefined;
  expand?: string[] | undefined;
  final_capture?: boolean | undefined;
  metadata?:
    | (External$PaymentIntentCaptureBodyMetadataObj0 | string)
    | undefined;
  statement_descriptor?: string | undefined;
  statement_descriptor_suffix?: string | undefined;
  transfer_data?: External$PaymentIntentCaptureBodyTransferData | undefined;

  [additionalProperty: string]:
    | (number | undefined)
    | (number | undefined)
    | (string[] | undefined)
    | (boolean | undefined)
    | ((External$PaymentIntentCaptureBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (string | undefined)
    | (External$PaymentIntentCaptureBodyTransferData | undefined)
    | External$PaymentIntentCaptureBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCaptureBody
 */
const SchemaIn$PaymentIntentCaptureBody: z.ZodType<
  PaymentIntentCaptureBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_to_capture: z.number().int().optional(),
    application_fee_amount: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    final_capture: z.boolean().optional(),
    metadata: z
      .union([Schemas$PaymentIntentCaptureBodyMetadataObj0.in, z.string()])
      .optional(),
    statement_descriptor: z.string().optional(),
    statement_descriptor_suffix: z.string().optional(),
    transfer_data: Schemas$PaymentIntentCaptureBodyTransferData.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount_to_capture: "amountToCapture",
      application_fee_amount: "applicationFeeAmount",
      expand: "expand",
      final_capture: "finalCapture",
      metadata: "metadata",
      statement_descriptor: "statementDescriptor",
      statement_descriptor_suffix: "statementDescriptorSuffix",
      transfer_data: "transferData",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCaptureBody
 */
const SchemaOut$PaymentIntentCaptureBody: z.ZodType<
  External$PaymentIntentCaptureBody, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCaptureBody // the object to be transformed
> = z
  .object({
    amountToCapture: z.number().int().optional(),
    applicationFeeAmount: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    finalCapture: z.boolean().optional(),
    metadata: z
      .union([Schemas$PaymentIntentCaptureBodyMetadataObj0.out, z.string()])
      .optional(),
    statementDescriptor: z.string().optional(),
    statementDescriptorSuffix: z.string().optional(),
    transferData: Schemas$PaymentIntentCaptureBodyTransferData.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amountToCapture: "amount_to_capture",
      applicationFeeAmount: "application_fee_amount",
      expand: "expand",
      finalCapture: "final_capture",
      metadata: "metadata",
      statementDescriptor: "statement_descriptor",
      statementDescriptorSuffix: "statement_descriptor_suffix",
      transferData: "transfer_data",
    });
  });

export const Schemas$PaymentIntentCaptureBody = {
  in: SchemaIn$PaymentIntentCaptureBody,
  out: SchemaOut$PaymentIntentCaptureBody,
};
