import {
  ChargeCaptureBodyTransferData,
  External$ChargeCaptureBodyTransferData,
  Schemas$ChargeCaptureBodyTransferData,
} from "./charge-capture-body-transfer-data";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ChargeCaptureBody
 */
export type ChargeCaptureBody = {
  /**
   * The amount to capture, which must be less than or equal to the original amount.
   */
  amount?: number | undefined;
  /**
   * An application fee to add on to this charge.
   */
  applicationFee?: number | undefined;
  /**
   * An application fee amount to add on to this charge, which must be less than or equal to the original amount.
   */
  applicationFeeAmount?: number | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The email address to send this charge's receipt to. This will override the previously-specified email address for this charge, if one was set. Receipts will not be sent in test mode.
   */
  receiptEmail?: string | undefined;
  /**
   * For a non-card charge, text that appears on the customer's statement as the statement descriptor. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
   *
   * For a card charge, this value is ignored unless you don't specify a `statement_descriptor_suffix`, in which case this value is used as the suffix.
   */
  statementDescriptor?: string | undefined;
  /**
   * Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement. If the account has no prefix value, the suffix is concatenated to the account's statement descriptor.
   */
  statementDescriptorSuffix?: string | undefined;
  /**
   * An optional dictionary including the account to automatically transfer to as part of a destination charge. [See the Connect documentation](https://stripe.com/docs/connect/destination-charges) for details.
   */
  transferData?: ChargeCaptureBodyTransferData | undefined;
  /**
   * A string that identifies this transaction as part of a group. `transfer_group` may only be provided if it has not been set. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options) for details.
   */
  transferGroup?: string | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (number | undefined)
    | (number | undefined)
    | (number | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (ChargeCaptureBodyTransferData | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * ChargeCaptureBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ChargeCaptureBody = {
  amount?: number | undefined;
  application_fee?: number | undefined;
  application_fee_amount?: number | undefined;
  expand?: string[] | undefined;
  receipt_email?: string | undefined;
  statement_descriptor?: string | undefined;
  statement_descriptor_suffix?: string | undefined;
  transfer_data?: External$ChargeCaptureBodyTransferData | undefined;
  transfer_group?: string | undefined;

  [additionalProperty: string]:
    | (number | undefined)
    | (number | undefined)
    | (number | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (External$ChargeCaptureBodyTransferData | undefined)
    | (string | undefined)
    | External$ChargeCaptureBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ChargeCaptureBody
 */
const SchemaIn$ChargeCaptureBody: z.ZodType<
  ChargeCaptureBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    application_fee: z.number().int().optional(),
    application_fee_amount: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    receipt_email: z.string().optional(),
    statement_descriptor: z.string().optional(),
    statement_descriptor_suffix: z.string().optional(),
    transfer_data: Schemas$ChargeCaptureBodyTransferData.in.optional(),
    transfer_group: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      application_fee: "applicationFee",
      application_fee_amount: "applicationFeeAmount",
      expand: "expand",
      receipt_email: "receiptEmail",
      statement_descriptor: "statementDescriptor",
      statement_descriptor_suffix: "statementDescriptorSuffix",
      transfer_data: "transferData",
      transfer_group: "transferGroup",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ChargeCaptureBody
 */
const SchemaOut$ChargeCaptureBody: z.ZodType<
  External$ChargeCaptureBody, // output type of this zod object
  z.ZodTypeDef,
  ChargeCaptureBody // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    applicationFee: z.number().int().optional(),
    applicationFeeAmount: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    receiptEmail: z.string().optional(),
    statementDescriptor: z.string().optional(),
    statementDescriptorSuffix: z.string().optional(),
    transferData: Schemas$ChargeCaptureBodyTransferData.out.optional(),
    transferGroup: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      applicationFee: "application_fee",
      applicationFeeAmount: "application_fee_amount",
      expand: "expand",
      receiptEmail: "receipt_email",
      statementDescriptor: "statement_descriptor",
      statementDescriptorSuffix: "statement_descriptor_suffix",
      transferData: "transfer_data",
      transferGroup: "transfer_group",
    });
  });

export const Schemas$ChargeCaptureBody = {
  in: SchemaIn$ChargeCaptureBody,
  out: SchemaOut$ChargeCaptureBody,
};
