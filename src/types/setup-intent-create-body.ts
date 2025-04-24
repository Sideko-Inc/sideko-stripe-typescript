import {
  External$SetupIntentCreateBodyAutomaticPaymentMethods,
  Schemas$SetupIntentCreateBodyAutomaticPaymentMethods,
  SetupIntentCreateBodyAutomaticPaymentMethods,
} from "./setup-intent-create-body-automatic-payment-methods";
import {
  External$SetupIntentCreateBodyMandateDataObj0,
  Schemas$SetupIntentCreateBodyMandateDataObj0,
  SetupIntentCreateBodyMandateDataObj0,
} from "./setup-intent-create-body-mandate-data-obj0";
import {
  External$SetupIntentCreateBodyMetadata,
  Schemas$SetupIntentCreateBodyMetadata,
  SetupIntentCreateBodyMetadata,
} from "./setup-intent-create-body-metadata";
import {
  External$SetupIntentCreateBodyPaymentMethodData,
  Schemas$SetupIntentCreateBodyPaymentMethodData,
  SetupIntentCreateBodyPaymentMethodData,
} from "./setup-intent-create-body-payment-method-data";
import {
  External$SetupIntentCreateBodyPaymentMethodOptions,
  Schemas$SetupIntentCreateBodyPaymentMethodOptions,
  SetupIntentCreateBodyPaymentMethodOptions,
} from "./setup-intent-create-body-payment-method-options";
import {
  External$SetupIntentCreateBodySingleUse,
  Schemas$SetupIntentCreateBodySingleUse,
  SetupIntentCreateBodySingleUse,
} from "./setup-intent-create-body-single-use";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBody
 */
export type SetupIntentCreateBody = {
  /**
   * If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.
   *
   * It can only be used for this Stripe Account’s own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
   */
  attachToSelf?: boolean | undefined;
  /**
   * When you enable this parameter, this SetupIntent accepts payment methods that you enable in the Dashboard and that are compatible with its other parameters.
   */
  automaticPaymentMethods?:
    | SetupIntentCreateBodyAutomaticPaymentMethods
    | undefined;
  /**
   * Set to `true` to attempt to confirm this SetupIntent immediately. This parameter defaults to `false`. If a card is the attached payment method, you can provide a `return_url` in case further authentication is necessary.
   */
  confirm?: boolean | undefined;
  /**
   * ID of the ConfirmationToken used to confirm this SetupIntent.
   *
   * If the provided ConfirmationToken contains properties that are also being provided in this request, such as `payment_method`, then the values in this request will take precedence.
   */
  confirmationToken?: string | undefined;
  /**
   * ID of the Customer this SetupIntent belongs to, if one exists.
   *
   * If present, the SetupIntent's payment method will be attached to the Customer on successful setup. Payment methods attached to other Customers cannot be used with this SetupIntent.
   */
  customer?: string | undefined;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Indicates the directions of money movement for which this payment method is intended to be used.
   *
   * Include `inbound` if you intend to use the payment method as the origin to pull funds from. Include `outbound` if you intend to use the payment method as the destination to send funds to. You can include both if you intend to use the payment method for both purposes.
   */
  flowDirections?: ("inbound" | "outbound")[] | undefined;
  /**
   * This hash contains details about the mandate to create. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/setup_intents/create#create_setup_intent-confirm).
   */
  mandateData?: (SetupIntentCreateBodyMandateDataObj0 | string) | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: SetupIntentCreateBodyMetadata | undefined;
  /**
   * The Stripe account ID created for this SetupIntent.
   */
  onBehalfOf?: string | undefined;
  /**
   * ID of the payment method (a PaymentMethod, Card, or saved Source object) to attach to this SetupIntent.
   */
  paymentMethod?: string | undefined;
  /**
   * The ID of the [payment method configuration](https://stripe.com/docs/api/payment_method_configurations) to use with this SetupIntent.
   */
  paymentMethodConfiguration?: string | undefined;
  /**
   * When included, this hash creates a PaymentMethod that is set as the [`payment_method`](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-payment_method)
   * value in the SetupIntent.
   */
  paymentMethodData?: SetupIntentCreateBodyPaymentMethodData | undefined;
  /**
   * Payment method-specific configuration for this SetupIntent.
   */
  paymentMethodOptions?: SetupIntentCreateBodyPaymentMethodOptions | undefined;
  /**
   * The list of payment method types (for example, card) that this SetupIntent can use. If you don't provide this, Stripe will dynamically show relevant payment methods from your [payment method settings](https://dashboard.stripe.com/settings/payment_methods).
   */
  paymentMethodTypes?: string[] | undefined;
  /**
   * The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site. To redirect to a mobile application, you can alternatively supply an application URI scheme. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/setup_intents/create#create_setup_intent-confirm).
   */
  returnUrl?: string | undefined;
  /**
   * If you populate this hash, this SetupIntent generates a `single_use` mandate after successful completion.
   *
   * Single-use mandates are only valid for the following payment methods: `acss_debit`, `alipay`, `au_becs_debit`, `bacs_debit`, `bancontact`, `boleto`, `ideal`, `link`, `sepa_debit`, and `us_bank_account`.
   */
  singleUse?: SetupIntentCreateBodySingleUse | undefined;
  /**
   * Indicates how the payment method is intended to be used in the future. If not provided, this value defaults to `off_session`.
   */
  usage?: ("off_session" | "on_session") | undefined;
  /**
   * Set to `true` when confirming server-side and using Stripe.js, iOS, or Android client-side SDKs to handle the next actions.
   */
  useStripeSdk?: boolean | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (boolean | undefined)
    | (SetupIntentCreateBodyAutomaticPaymentMethods | undefined)
    | (boolean | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (("inbound" | "outbound")[] | undefined)
    | ((SetupIntentCreateBodyMandateDataObj0 | string) | undefined)
    | (SetupIntentCreateBodyMetadata | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (SetupIntentCreateBodyPaymentMethodData | undefined)
    | (SetupIntentCreateBodyPaymentMethodOptions | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (SetupIntentCreateBodySingleUse | undefined)
    | (("off_session" | "on_session") | undefined)
    | (boolean | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * SetupIntentCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBody = {
  attach_to_self?: boolean | undefined;
  automatic_payment_methods?:
    | External$SetupIntentCreateBodyAutomaticPaymentMethods
    | undefined;
  confirm?: boolean | undefined;
  confirmation_token?: string | undefined;
  customer?: string | undefined;
  description?: string | undefined;
  expand?: string[] | undefined;
  flow_directions?: ("inbound" | "outbound")[] | undefined;
  mandate_data?:
    | (External$SetupIntentCreateBodyMandateDataObj0 | string)
    | undefined;
  metadata?: External$SetupIntentCreateBodyMetadata | undefined;
  on_behalf_of?: string | undefined;
  payment_method?: string | undefined;
  payment_method_configuration?: string | undefined;
  payment_method_data?:
    | External$SetupIntentCreateBodyPaymentMethodData
    | undefined;
  payment_method_options?:
    | External$SetupIntentCreateBodyPaymentMethodOptions
    | undefined;
  payment_method_types?: string[] | undefined;
  return_url?: string | undefined;
  single_use?: External$SetupIntentCreateBodySingleUse | undefined;
  usage?: ("off_session" | "on_session") | undefined;
  use_stripe_sdk?: boolean | undefined;

  [additionalProperty: string]:
    | (boolean | undefined)
    | (External$SetupIntentCreateBodyAutomaticPaymentMethods | undefined)
    | (boolean | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (("inbound" | "outbound")[] | undefined)
    | ((External$SetupIntentCreateBodyMandateDataObj0 | string) | undefined)
    | (External$SetupIntentCreateBodyMetadata | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (External$SetupIntentCreateBodyPaymentMethodData | undefined)
    | (External$SetupIntentCreateBodyPaymentMethodOptions | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (External$SetupIntentCreateBodySingleUse | undefined)
    | (("off_session" | "on_session") | undefined)
    | (boolean | undefined)
    | External$SetupIntentCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBody
 */
const SchemaIn$SetupIntentCreateBody: z.ZodType<
  SetupIntentCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    attach_to_self: z.boolean().optional(),
    automatic_payment_methods:
      Schemas$SetupIntentCreateBodyAutomaticPaymentMethods.in.optional(),
    confirm: z.boolean().optional(),
    confirmation_token: z.string().optional(),
    customer: z.string().optional(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    flow_directions: z.array(z.enum(["inbound", "outbound"])).optional(),
    mandate_data: z
      .union([Schemas$SetupIntentCreateBodyMandateDataObj0.in, z.string()])
      .optional(),
    metadata: Schemas$SetupIntentCreateBodyMetadata.in.optional(),
    on_behalf_of: z.string().optional(),
    payment_method: z.string().optional(),
    payment_method_configuration: z.string().optional(),
    payment_method_data:
      Schemas$SetupIntentCreateBodyPaymentMethodData.in.optional(),
    payment_method_options:
      Schemas$SetupIntentCreateBodyPaymentMethodOptions.in.optional(),
    payment_method_types: z.array(z.string()).optional(),
    return_url: z.string().optional(),
    single_use: Schemas$SetupIntentCreateBodySingleUse.in.optional(),
    usage: z.enum(["off_session", "on_session"]).optional(),
    use_stripe_sdk: z.boolean().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      attach_to_self: "attachToSelf",
      automatic_payment_methods: "automaticPaymentMethods",
      confirm: "confirm",
      confirmation_token: "confirmationToken",
      customer: "customer",
      description: "description",
      expand: "expand",
      flow_directions: "flowDirections",
      mandate_data: "mandateData",
      metadata: "metadata",
      on_behalf_of: "onBehalfOf",
      payment_method: "paymentMethod",
      payment_method_configuration: "paymentMethodConfiguration",
      payment_method_data: "paymentMethodData",
      payment_method_options: "paymentMethodOptions",
      payment_method_types: "paymentMethodTypes",
      return_url: "returnUrl",
      single_use: "singleUse",
      usage: "usage",
      use_stripe_sdk: "useStripeSdk",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBody
 */
const SchemaOut$SetupIntentCreateBody: z.ZodType<
  External$SetupIntentCreateBody, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBody // the object to be transformed
> = z
  .object({
    attachToSelf: z.boolean().optional(),
    automaticPaymentMethods:
      Schemas$SetupIntentCreateBodyAutomaticPaymentMethods.out.optional(),
    confirm: z.boolean().optional(),
    confirmationToken: z.string().optional(),
    customer: z.string().optional(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    flowDirections: z.array(z.enum(["inbound", "outbound"])).optional(),
    mandateData: z
      .union([Schemas$SetupIntentCreateBodyMandateDataObj0.out, z.string()])
      .optional(),
    metadata: Schemas$SetupIntentCreateBodyMetadata.out.optional(),
    onBehalfOf: z.string().optional(),
    paymentMethod: z.string().optional(),
    paymentMethodConfiguration: z.string().optional(),
    paymentMethodData:
      Schemas$SetupIntentCreateBodyPaymentMethodData.out.optional(),
    paymentMethodOptions:
      Schemas$SetupIntentCreateBodyPaymentMethodOptions.out.optional(),
    paymentMethodTypes: z.array(z.string()).optional(),
    returnUrl: z.string().optional(),
    singleUse: Schemas$SetupIntentCreateBodySingleUse.out.optional(),
    usage: z.enum(["off_session", "on_session"]).optional(),
    useStripeSdk: z.boolean().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      attachToSelf: "attach_to_self",
      automaticPaymentMethods: "automatic_payment_methods",
      confirm: "confirm",
      confirmationToken: "confirmation_token",
      customer: "customer",
      description: "description",
      expand: "expand",
      flowDirections: "flow_directions",
      mandateData: "mandate_data",
      metadata: "metadata",
      onBehalfOf: "on_behalf_of",
      paymentMethod: "payment_method",
      paymentMethodConfiguration: "payment_method_configuration",
      paymentMethodData: "payment_method_data",
      paymentMethodOptions: "payment_method_options",
      paymentMethodTypes: "payment_method_types",
      returnUrl: "return_url",
      singleUse: "single_use",
      usage: "usage",
      useStripeSdk: "use_stripe_sdk",
    });
  });

export const Schemas$SetupIntentCreateBody = {
  in: SchemaIn$SetupIntentCreateBody,
  out: SchemaOut$SetupIntentCreateBody,
};
