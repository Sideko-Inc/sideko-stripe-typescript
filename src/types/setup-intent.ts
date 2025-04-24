import { Account, External$Account, Schemas$Account } from "./account";
import { ApiErrors, External$ApiErrors, Schemas$ApiErrors } from "./api-errors";
import {
  Application,
  External$Application,
  Schemas$Application,
} from "./application";
import { Customer, External$Customer, Schemas$Customer } from "./customer";
import {
  DeletedCustomer,
  External$DeletedCustomer,
  Schemas$DeletedCustomer,
} from "./deleted-customer";
import { External$Mandate, Mandate, Schemas$Mandate } from "./mandate";
import {
  External$PaymentFlowsAutomaticPaymentMethodsSetupIntent,
  PaymentFlowsAutomaticPaymentMethodsSetupIntent,
  Schemas$PaymentFlowsAutomaticPaymentMethodsSetupIntent,
} from "./payment-flows-automatic-payment-methods-setup-intent";
import {
  External$PaymentMethod,
  PaymentMethod,
  Schemas$PaymentMethod,
} from "./payment-method";
import {
  External$PaymentMethodConfigBizPaymentMethodConfigurationDetails,
  PaymentMethodConfigBizPaymentMethodConfigurationDetails,
  Schemas$PaymentMethodConfigBizPaymentMethodConfigurationDetails,
} from "./payment-method-config-biz-payment-method-configuration-details";
import {
  External$SetupAttempt,
  Schemas$SetupAttempt,
  SetupAttempt,
} from "./setup-attempt";
import {
  External$SetupIntentMetadata,
  Schemas$SetupIntentMetadata,
  SetupIntentMetadata,
} from "./setup-intent-metadata";
import {
  External$SetupIntentNextAction,
  Schemas$SetupIntentNextAction,
  SetupIntentNextAction,
} from "./setup-intent-next-action";
import {
  External$SetupIntentPaymentMethodOptions,
  Schemas$SetupIntentPaymentMethodOptions,
  SetupIntentPaymentMethodOptions,
} from "./setup-intent-payment-method-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A SetupIntent guides you through the process of setting up and saving a customer's payment credentials for future payments.
 * For example, you can use a SetupIntent to set up and save your customer's card without immediately collecting a payment.
 * Later, you can use [PaymentIntents](https://stripe.com/docs/api#payment_intents) to drive the payment flow.
 *
 * Create a SetupIntent when you're ready to collect your customer's payment credentials.
 * Don't maintain long-lived, unconfirmed SetupIntents because they might not be valid.
 * The SetupIntent transitions through multiple [statuses](https://docs.stripe.com/payments/intents#intent-statuses) as it guides
 * you through the setup process.
 *
 * Successful SetupIntents result in payment credentials that are optimized for future payments.
 * For example, cardholders in [certain regions](https://stripe.com/guides/strong-customer-authentication) might need to be run through
 * [Strong Customer Authentication](https://docs.stripe.com/strong-customer-authentication) during payment method collection
 * to streamline later [off-session payments](https://docs.stripe.com/payments/setup-intents).
 * If you use the SetupIntent with a [Customer](https://stripe.com/docs/api#setup_intent_object-customer),
 * it automatically attaches the resulting payment method to that Customer after successful setup.
 * We recommend using SetupIntents or [setup_future_usage](https://stripe.com/docs/api#payment_intent_object-setup_future_usage) on
 * PaymentIntents to save payment methods to prevent saving invalid or unoptimized payment methods.
 *
 * By using SetupIntents, you can reduce friction for your customers, even as regulations change over time.
 *
 * Related guide: [Setup Intents API](https://docs.stripe.com/payments/setup-intents)
 */
export type SetupIntent = {
  /**
   * ID of the Connect application that created the SetupIntent.
   */
  application?: (string | Application) | undefined;
  /**
   * If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.
   *
   * It can only be used for this Stripe Account’s own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
   */
  attachToSelf?: boolean | undefined;
  automaticPaymentMethods?:
    | PaymentFlowsAutomaticPaymentMethodsSetupIntent
    | undefined;
  /**
   * Reason for cancellation of this SetupIntent, one of `abandoned`, `requested_by_customer`, or `duplicate`.
   */
  cancellationReason?:
    | ("abandoned" | "duplicate" | "requested_by_customer")
    | null
    | undefined;
  /**
   * The client secret of this SetupIntent. Used for client-side retrieval using a publishable key.
   *
   * The client secret can be used to complete payment setup from your frontend. It should not be stored, logged, or exposed to anyone other than the customer. Make sure that you have TLS enabled on any page that includes the client secret.
   */
  clientSecret?: string | null | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * ID of the Customer this SetupIntent belongs to, if one exists.
   *
   * If present, the SetupIntent's payment method will be attached to the Customer on successful setup. Payment methods attached to other Customers cannot be used with this SetupIntent.
   */
  customer?: (string | Customer | DeletedCustomer) | undefined;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | null | undefined;
  /**
   * Indicates the directions of money movement for which this payment method is intended to be used.
   *
   * Include `inbound` if you intend to use the payment method as the origin to pull funds from. Include `outbound` if you intend to use the payment method as the destination to send funds to. You can include both if you intend to use the payment method for both purposes.
   */
  flowDirections?: ("inbound" | "outbound")[] | null | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  lastSetupError?: ApiErrors | undefined;
  /**
   * The most recent SetupAttempt for this SetupIntent.
   */
  latestAttempt?: (string | SetupAttempt) | undefined;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * ID of the multi use Mandate generated by the SetupIntent.
   */
  mandate?: (string | Mandate) | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: SetupIntentMetadata | null | undefined;
  nextAction?: SetupIntentNextAction | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "setup_intent";
  /**
   * The account (if any) for which the setup is intended.
   */
  onBehalfOf?: (string | Account) | undefined;
  /**
   * ID of the payment method used with this SetupIntent. If the payment method is `card_present` and isn't a digital wallet, then the [generated_card](https://docs.stripe.com/api/setup_attempts/object#setup_attempt_object-payment_method_details-card_present-generated_card) associated with the `latest_attempt` is attached to the Customer instead.
   */
  paymentMethod?: (string | PaymentMethod) | undefined;
  paymentMethodConfigurationDetails?:
    | PaymentMethodConfigBizPaymentMethodConfigurationDetails
    | undefined;
  paymentMethodOptions?: SetupIntentPaymentMethodOptions | undefined;
  /**
   * The list of payment method types (e.g. card) that this SetupIntent is allowed to set up.
   */
  paymentMethodTypes: string[];
  /**
   * ID of the single_use Mandate generated by the SetupIntent.
   */
  singleUseMandate?: (string | Mandate) | undefined;
  /**
   * [Status](https://stripe.com/docs/payments/intents#intent-statuses) of this SetupIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `canceled`, or `succeeded`.
   */
  status:
    | "canceled"
    | "processing"
    | "requires_action"
    | "requires_confirmation"
    | "requires_payment_method"
    | "succeeded";
  /**
   * Indicates how the payment method is intended to be used in the future.
   *
   * Use `on_session` if you intend to only reuse the payment method when the customer is in your checkout flow. Use `off_session` if your customer may or may not be in your checkout flow. If not provided, this value defaults to `off_session`.
   */
  usage: string;
};

/**
 * @internal
 * SetupIntent without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntent = {
  application?: (string | External$Application) | undefined;
  attach_to_self?: boolean | undefined;
  automatic_payment_methods?:
    | External$PaymentFlowsAutomaticPaymentMethodsSetupIntent
    | undefined;
  cancellation_reason?:
    | ("abandoned" | "duplicate" | "requested_by_customer")
    | null
    | undefined;
  client_secret?: string | null | undefined;
  created: number;
  customer?:
    | (string | External$Customer | External$DeletedCustomer)
    | undefined;
  description?: string | null | undefined;
  flow_directions?: ("inbound" | "outbound")[] | null | undefined;
  id: string;
  last_setup_error?: External$ApiErrors | undefined;
  latest_attempt?: (string | External$SetupAttempt) | undefined;
  livemode: boolean;
  mandate?: (string | External$Mandate) | undefined;
  metadata?: External$SetupIntentMetadata | null | undefined;
  next_action?: External$SetupIntentNextAction | undefined;
  object: "setup_intent";
  on_behalf_of?: (string | External$Account) | undefined;
  payment_method?: (string | External$PaymentMethod) | undefined;
  payment_method_configuration_details?:
    | External$PaymentMethodConfigBizPaymentMethodConfigurationDetails
    | undefined;
  payment_method_options?: External$SetupIntentPaymentMethodOptions | undefined;
  payment_method_types: string[];
  single_use_mandate?: (string | External$Mandate) | undefined;
  status:
    | "canceled"
    | "processing"
    | "requires_action"
    | "requires_confirmation"
    | "requires_payment_method"
    | "succeeded";
  usage: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntent
 */
const SchemaIn$SetupIntent: z.ZodType<
  SetupIntent, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    application: z.union([z.string(), Schemas$Application.in]).optional(),
    attach_to_self: z.boolean().optional(),
    automatic_payment_methods:
      Schemas$PaymentFlowsAutomaticPaymentMethodsSetupIntent.in.optional(),
    cancellation_reason: z
      .enum(["abandoned", "duplicate", "requested_by_customer"])
      .nullable()
      .optional(),
    client_secret: z.string().nullable().optional(),
    created: z.number().int(),
    customer: z
      .union([
        z.string(),
        z.lazy(() => Schemas$Customer.in),
        Schemas$DeletedCustomer.in,
      ])
      .optional(),
    description: z.string().nullable().optional(),
    flow_directions: z
      .array(z.enum(["inbound", "outbound"]))
      .nullable()
      .optional(),
    id: z.string(),
    last_setup_error: z.lazy(() => Schemas$ApiErrors.in.optional()),
    latest_attempt: z
      .union([z.string(), z.lazy(() => Schemas$SetupAttempt.in)])
      .optional(),
    livemode: z.boolean(),
    mandate: z.union([z.string(), z.lazy(() => Schemas$Mandate.in)]).optional(),
    metadata: Schemas$SetupIntentMetadata.in.nullable().optional(),
    next_action: Schemas$SetupIntentNextAction.in.optional(),
    object: z.enum(["setup_intent"]),
    on_behalf_of: z
      .union([z.string(), z.lazy(() => Schemas$Account.in)])
      .optional(),
    payment_method: z
      .union([z.string(), z.lazy(() => Schemas$PaymentMethod.in)])
      .optional(),
    payment_method_configuration_details:
      Schemas$PaymentMethodConfigBizPaymentMethodConfigurationDetails.in.optional(),
    payment_method_options:
      Schemas$SetupIntentPaymentMethodOptions.in.optional(),
    payment_method_types: z.array(z.string()),
    single_use_mandate: z
      .union([z.string(), z.lazy(() => Schemas$Mandate.in)])
      .optional(),
    status: z.enum([
      "canceled",
      "processing",
      "requires_action",
      "requires_confirmation",
      "requires_payment_method",
      "succeeded",
    ]),
    usage: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      application: "application",
      attach_to_self: "attachToSelf",
      automatic_payment_methods: "automaticPaymentMethods",
      cancellation_reason: "cancellationReason",
      client_secret: "clientSecret",
      created: "created",
      customer: "customer",
      description: "description",
      flow_directions: "flowDirections",
      id: "id",
      last_setup_error: "lastSetupError",
      latest_attempt: "latestAttempt",
      livemode: "livemode",
      mandate: "mandate",
      metadata: "metadata",
      next_action: "nextAction",
      object: "object",
      on_behalf_of: "onBehalfOf",
      payment_method: "paymentMethod",
      payment_method_configuration_details: "paymentMethodConfigurationDetails",
      payment_method_options: "paymentMethodOptions",
      payment_method_types: "paymentMethodTypes",
      single_use_mandate: "singleUseMandate",
      status: "status",
      usage: "usage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntent
 */
const SchemaOut$SetupIntent: z.ZodType<
  External$SetupIntent, // output type of this zod object
  z.ZodTypeDef,
  SetupIntent // the object to be transformed
> = z
  .object({
    application: z.union([z.string(), Schemas$Application.out]).optional(),
    attachToSelf: z.boolean().optional(),
    automaticPaymentMethods:
      Schemas$PaymentFlowsAutomaticPaymentMethodsSetupIntent.out.optional(),
    cancellationReason: z
      .enum(["abandoned", "duplicate", "requested_by_customer"])
      .nullable()
      .optional(),
    clientSecret: z.string().nullable().optional(),
    created: z.number().int(),
    customer: z
      .union([
        z.string(),
        z.lazy(() => Schemas$Customer.out),
        Schemas$DeletedCustomer.out,
      ])
      .optional(),
    description: z.string().nullable().optional(),
    flowDirections: z
      .array(z.enum(["inbound", "outbound"]))
      .nullable()
      .optional(),
    id: z.string(),
    lastSetupError: z.lazy(() => Schemas$ApiErrors.out.optional()),
    latestAttempt: z
      .union([z.string(), z.lazy(() => Schemas$SetupAttempt.out)])
      .optional(),
    livemode: z.boolean(),
    mandate: z
      .union([z.string(), z.lazy(() => Schemas$Mandate.out)])
      .optional(),
    metadata: Schemas$SetupIntentMetadata.out.nullable().optional(),
    nextAction: Schemas$SetupIntentNextAction.out.optional(),
    object: z.enum(["setup_intent"]),
    onBehalfOf: z
      .union([z.string(), z.lazy(() => Schemas$Account.out)])
      .optional(),
    paymentMethod: z
      .union([z.string(), z.lazy(() => Schemas$PaymentMethod.out)])
      .optional(),
    paymentMethodConfigurationDetails:
      Schemas$PaymentMethodConfigBizPaymentMethodConfigurationDetails.out.optional(),
    paymentMethodOptions:
      Schemas$SetupIntentPaymentMethodOptions.out.optional(),
    paymentMethodTypes: z.array(z.string()),
    singleUseMandate: z
      .union([z.string(), z.lazy(() => Schemas$Mandate.out)])
      .optional(),
    status: z.enum([
      "canceled",
      "processing",
      "requires_action",
      "requires_confirmation",
      "requires_payment_method",
      "succeeded",
    ]),
    usage: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      application: "application",
      attachToSelf: "attach_to_self",
      automaticPaymentMethods: "automatic_payment_methods",
      cancellationReason: "cancellation_reason",
      clientSecret: "client_secret",
      created: "created",
      customer: "customer",
      description: "description",
      flowDirections: "flow_directions",
      id: "id",
      lastSetupError: "last_setup_error",
      latestAttempt: "latest_attempt",
      livemode: "livemode",
      mandate: "mandate",
      metadata: "metadata",
      nextAction: "next_action",
      object: "object",
      onBehalfOf: "on_behalf_of",
      paymentMethod: "payment_method",
      paymentMethodConfigurationDetails: "payment_method_configuration_details",
      paymentMethodOptions: "payment_method_options",
      paymentMethodTypes: "payment_method_types",
      singleUseMandate: "single_use_mandate",
      status: "status",
      usage: "usage",
    });
  });

export const Schemas$SetupIntent = {
  in: SchemaIn$SetupIntent,
  out: SchemaOut$SetupIntent,
};
