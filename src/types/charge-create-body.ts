import {
  ChargeCreateBodyCardObj0,
  External$ChargeCreateBodyCardObj0,
  Schemas$ChargeCreateBodyCardObj0,
} from "./charge-create-body-card-obj0";
import {
  ChargeCreateBodyDestinationObj0,
  External$ChargeCreateBodyDestinationObj0,
  Schemas$ChargeCreateBodyDestinationObj0,
} from "./charge-create-body-destination-obj0";
import {
  ChargeCreateBodyMetadataObj0,
  External$ChargeCreateBodyMetadataObj0,
  Schemas$ChargeCreateBodyMetadataObj0,
} from "./charge-create-body-metadata-obj0";
import {
  ChargeCreateBodyRadarOptions,
  External$ChargeCreateBodyRadarOptions,
  Schemas$ChargeCreateBodyRadarOptions,
} from "./charge-create-body-radar-options";
import {
  ChargeCreateBodyShipping,
  External$ChargeCreateBodyShipping,
  Schemas$ChargeCreateBodyShipping,
} from "./charge-create-body-shipping";
import {
  ChargeCreateBodyTransferData,
  External$ChargeCreateBodyTransferData,
  Schemas$ChargeCreateBodyTransferData,
} from "./charge-create-body-transfer-data";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ChargeCreateBody
 */
export type ChargeCreateBody = {
  /**
   * Amount intended to be collected by this payment. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
   */
  amount?: number | undefined;
  applicationFee?: number | undefined;
  /**
   * A fee in cents (or local equivalent) that will be applied to the charge and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the `Stripe-Account` header in order to take an application fee. For more information, see the application fees [documentation](https://stripe.com/docs/connect/direct-charges#collect-fees).
   */
  applicationFeeAmount?: number | undefined;
  /**
   * Whether to immediately capture the charge. Defaults to `true`. When `false`, the charge issues an authorization (or pre-authorization), and will need to be [captured](https://stripe.com/docs/api#capture_charge) later. Uncaptured charges expire after a set number of days (7 by default). For more information, see the [authorizing charges and settling later](https://stripe.com/docs/charges/placing-a-hold) documentation.
   */
  capture?: boolean | undefined;
  /**
   * A token, like the ones returned by [Stripe.js](https://stripe.com/docs/js).
   */
  card?: (ChargeCreateBodyCardObj0 | string) | undefined;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string | undefined;
  /**
   * The ID of an existing customer that will be charged in this request.
   */
  customer?: string | undefined;
  /**
   * An arbitrary string which you can attach to a `Charge` object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the `description` of the charge(s) that they are describing.
   */
  description?: string | undefined;
  destination?: (ChargeCreateBodyDestinationObj0 | string) | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (ChargeCreateBodyMetadataObj0 | string) | undefined;
  /**
   * The Stripe account ID for which these funds are intended. Automatically set if you use the `destination` parameter. For details, see [Creating Separate Charges and Transfers](https://stripe.com/docs/connect/separate-charges-and-transfers#settlement-merchant).
   */
  onBehalfOf?: string | undefined;
  /**
   * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
   */
  radarOptions?: ChargeCreateBodyRadarOptions | undefined;
  /**
   * The email address to which this charge's [receipt](https://stripe.com/docs/dashboard/receipts) will be sent. The receipt will not be sent until the charge is paid, and no receipts will be sent for test mode charges. If this charge is for a [Customer](https://stripe.com/docs/api/customers/object), the email address specified here will override the customer's email address. If `receipt_email` is specified for a charge in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
   */
  receiptEmail?: string | undefined;
  /**
   * Shipping information for the charge. Helps prevent fraud on charges for physical goods.
   */
  shipping?: ChargeCreateBodyShipping | undefined;
  /**
   * A payment source to be charged. This can be the ID of a [card](https://stripe.com/docs/api#cards) (i.e., credit or debit card), a [bank account](https://stripe.com/docs/api#bank_accounts), a [source](https://stripe.com/docs/api#sources), a [token](https://stripe.com/docs/api#tokens), or a [connected account](https://stripe.com/docs/connect/account-debits#charging-a-connected-account). For certain sources---namely, [cards](https://stripe.com/docs/api#cards), [bank accounts](https://stripe.com/docs/api#bank_accounts), and attached [sources](https://stripe.com/docs/api#sources)---you must also pass the ID of the associated customer.
   */
  source?: string | undefined;
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
  transferData?: ChargeCreateBodyTransferData | undefined;
  /**
   * A string that identifies this transaction as part of a group. For details, see [Grouping transactions](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options).
   */
  transferGroup?: string | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (number | undefined)
    | (number | undefined)
    | (number | undefined)
    | (boolean | undefined)
    | ((ChargeCreateBodyCardObj0 | string) | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | ((ChargeCreateBodyDestinationObj0 | string) | undefined)
    | (string[] | undefined)
    | ((ChargeCreateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (ChargeCreateBodyRadarOptions | undefined)
    | (string | undefined)
    | (ChargeCreateBodyShipping | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (ChargeCreateBodyTransferData | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * ChargeCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ChargeCreateBody = {
  amount?: number | undefined;
  application_fee?: number | undefined;
  application_fee_amount?: number | undefined;
  capture?: boolean | undefined;
  card?: (External$ChargeCreateBodyCardObj0 | string) | undefined;
  currency?: string | undefined;
  customer?: string | undefined;
  description?: string | undefined;
  destination?: (External$ChargeCreateBodyDestinationObj0 | string) | undefined;
  expand?: string[] | undefined;
  metadata?: (External$ChargeCreateBodyMetadataObj0 | string) | undefined;
  on_behalf_of?: string | undefined;
  radar_options?: External$ChargeCreateBodyRadarOptions | undefined;
  receipt_email?: string | undefined;
  shipping?: External$ChargeCreateBodyShipping | undefined;
  source?: string | undefined;
  statement_descriptor?: string | undefined;
  statement_descriptor_suffix?: string | undefined;
  transfer_data?: External$ChargeCreateBodyTransferData | undefined;
  transfer_group?: string | undefined;

  [additionalProperty: string]:
    | (number | undefined)
    | (number | undefined)
    | (number | undefined)
    | (boolean | undefined)
    | ((External$ChargeCreateBodyCardObj0 | string) | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | ((External$ChargeCreateBodyDestinationObj0 | string) | undefined)
    | (string[] | undefined)
    | ((External$ChargeCreateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (External$ChargeCreateBodyRadarOptions | undefined)
    | (string | undefined)
    | (External$ChargeCreateBodyShipping | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (External$ChargeCreateBodyTransferData | undefined)
    | (string | undefined)
    | External$ChargeCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ChargeCreateBody
 */
const SchemaIn$ChargeCreateBody: z.ZodType<
  ChargeCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    application_fee: z.number().int().optional(),
    application_fee_amount: z.number().int().optional(),
    capture: z.boolean().optional(),
    card: z.union([Schemas$ChargeCreateBodyCardObj0.in, z.string()]).optional(),
    currency: z.string().optional(),
    customer: z.string().optional(),
    description: z.string().optional(),
    destination: z
      .union([Schemas$ChargeCreateBodyDestinationObj0.in, z.string()])
      .optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$ChargeCreateBodyMetadataObj0.in, z.string()])
      .optional(),
    on_behalf_of: z.string().optional(),
    radar_options: Schemas$ChargeCreateBodyRadarOptions.in.optional(),
    receipt_email: z.string().optional(),
    shipping: Schemas$ChargeCreateBodyShipping.in.optional(),
    source: z.string().optional(),
    statement_descriptor: z.string().optional(),
    statement_descriptor_suffix: z.string().optional(),
    transfer_data: Schemas$ChargeCreateBodyTransferData.in.optional(),
    transfer_group: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      application_fee: "applicationFee",
      application_fee_amount: "applicationFeeAmount",
      capture: "capture",
      card: "card",
      currency: "currency",
      customer: "customer",
      description: "description",
      destination: "destination",
      expand: "expand",
      metadata: "metadata",
      on_behalf_of: "onBehalfOf",
      radar_options: "radarOptions",
      receipt_email: "receiptEmail",
      shipping: "shipping",
      source: "source",
      statement_descriptor: "statementDescriptor",
      statement_descriptor_suffix: "statementDescriptorSuffix",
      transfer_data: "transferData",
      transfer_group: "transferGroup",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ChargeCreateBody
 */
const SchemaOut$ChargeCreateBody: z.ZodType<
  External$ChargeCreateBody, // output type of this zod object
  z.ZodTypeDef,
  ChargeCreateBody // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    applicationFee: z.number().int().optional(),
    applicationFeeAmount: z.number().int().optional(),
    capture: z.boolean().optional(),
    card: z
      .union([Schemas$ChargeCreateBodyCardObj0.out, z.string()])
      .optional(),
    currency: z.string().optional(),
    customer: z.string().optional(),
    description: z.string().optional(),
    destination: z
      .union([Schemas$ChargeCreateBodyDestinationObj0.out, z.string()])
      .optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$ChargeCreateBodyMetadataObj0.out, z.string()])
      .optional(),
    onBehalfOf: z.string().optional(),
    radarOptions: Schemas$ChargeCreateBodyRadarOptions.out.optional(),
    receiptEmail: z.string().optional(),
    shipping: Schemas$ChargeCreateBodyShipping.out.optional(),
    source: z.string().optional(),
    statementDescriptor: z.string().optional(),
    statementDescriptorSuffix: z.string().optional(),
    transferData: Schemas$ChargeCreateBodyTransferData.out.optional(),
    transferGroup: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      applicationFee: "application_fee",
      applicationFeeAmount: "application_fee_amount",
      capture: "capture",
      card: "card",
      currency: "currency",
      customer: "customer",
      description: "description",
      destination: "destination",
      expand: "expand",
      metadata: "metadata",
      onBehalfOf: "on_behalf_of",
      radarOptions: "radar_options",
      receiptEmail: "receipt_email",
      shipping: "shipping",
      source: "source",
      statementDescriptor: "statement_descriptor",
      statementDescriptorSuffix: "statement_descriptor_suffix",
      transferData: "transfer_data",
      transferGroup: "transfer_group",
    });
  });

export const Schemas$ChargeCreateBody = {
  in: SchemaIn$ChargeCreateBody,
  out: SchemaOut$ChargeCreateBody,
};
