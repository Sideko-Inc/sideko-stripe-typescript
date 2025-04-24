import {
  ChargeUpdateBodyFraudDetails,
  External$ChargeUpdateBodyFraudDetails,
  Schemas$ChargeUpdateBodyFraudDetails,
} from "./charge-update-body-fraud-details";
import {
  ChargeUpdateBodyMetadataObj0,
  External$ChargeUpdateBodyMetadataObj0,
  Schemas$ChargeUpdateBodyMetadataObj0,
} from "./charge-update-body-metadata-obj0";
import {
  ChargeUpdateBodyShipping,
  External$ChargeUpdateBodyShipping,
  Schemas$ChargeUpdateBodyShipping,
} from "./charge-update-body-shipping";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ChargeUpdateBody
 */
export type ChargeUpdateBody = {
  /**
   * The ID of an existing customer that will be associated with this request. This field may only be updated if there is no existing associated customer with this charge.
   */
  customer?: string | undefined;
  /**
   * An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the `description` of the charge(s) that they are describing.
   */
  description?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A set of key-value pairs you can attach to a charge giving information about its riskiness. If you believe a charge is fraudulent, include a `user_report` key with a value of `fraudulent`. If you believe a charge is safe, include a `user_report` key with a value of `safe`. Stripe will use the information you send to improve our fraud detection algorithms.
   */
  fraudDetails?: ChargeUpdateBodyFraudDetails | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (ChargeUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * This is the email address that the receipt for this charge will be sent to. If this field is updated, then a new email receipt will be sent to the updated address.
   */
  receiptEmail?: string | undefined;
  /**
   * Shipping information for the charge. Helps prevent fraud on charges for physical goods.
   */
  shipping?: ChargeUpdateBodyShipping | undefined;
  /**
   * A string that identifies this transaction as part of a group. `transfer_group` may only be provided if it has not been set. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options) for details.
   */
  transferGroup?: string | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (ChargeUpdateBodyFraudDetails | undefined)
    | ((ChargeUpdateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (ChargeUpdateBodyShipping | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * ChargeUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ChargeUpdateBody = {
  customer?: string | undefined;
  description?: string | undefined;
  expand?: string[] | undefined;
  fraud_details?: External$ChargeUpdateBodyFraudDetails | undefined;
  metadata?: (External$ChargeUpdateBodyMetadataObj0 | string) | undefined;
  receipt_email?: string | undefined;
  shipping?: External$ChargeUpdateBodyShipping | undefined;
  transfer_group?: string | undefined;

  [additionalProperty: string]:
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (External$ChargeUpdateBodyFraudDetails | undefined)
    | ((External$ChargeUpdateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (External$ChargeUpdateBodyShipping | undefined)
    | (string | undefined)
    | External$ChargeUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ChargeUpdateBody
 */
const SchemaIn$ChargeUpdateBody: z.ZodType<
  ChargeUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer: z.string().optional(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    fraud_details: Schemas$ChargeUpdateBodyFraudDetails.in.optional(),
    metadata: z
      .union([Schemas$ChargeUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    receipt_email: z.string().optional(),
    shipping: Schemas$ChargeUpdateBodyShipping.in.optional(),
    transfer_group: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      description: "description",
      expand: "expand",
      fraud_details: "fraudDetails",
      metadata: "metadata",
      receipt_email: "receiptEmail",
      shipping: "shipping",
      transfer_group: "transferGroup",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ChargeUpdateBody
 */
const SchemaOut$ChargeUpdateBody: z.ZodType<
  External$ChargeUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  ChargeUpdateBody // the object to be transformed
> = z
  .object({
    customer: z.string().optional(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    fraudDetails: Schemas$ChargeUpdateBodyFraudDetails.out.optional(),
    metadata: z
      .union([Schemas$ChargeUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    receiptEmail: z.string().optional(),
    shipping: Schemas$ChargeUpdateBodyShipping.out.optional(),
    transferGroup: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      description: "description",
      expand: "expand",
      fraudDetails: "fraud_details",
      metadata: "metadata",
      receiptEmail: "receipt_email",
      shipping: "shipping",
      transferGroup: "transfer_group",
    });
  });

export const Schemas$ChargeUpdateBody = {
  in: SchemaIn$ChargeUpdateBody,
  out: SchemaOut$ChargeUpdateBody,
};
