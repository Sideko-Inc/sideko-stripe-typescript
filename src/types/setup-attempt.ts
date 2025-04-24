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
import {
  External$PaymentMethod,
  PaymentMethod,
  Schemas$PaymentMethod,
} from "./payment-method";
import {
  External$SetupAttemptPaymentMethodDetails,
  Schemas$SetupAttemptPaymentMethodDetails,
  SetupAttemptPaymentMethodDetails,
} from "./setup-attempt-payment-method-details";
import {
  External$SetupIntent,
  Schemas$SetupIntent,
  SetupIntent,
} from "./setup-intent";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A SetupAttempt describes one attempted confirmation of a SetupIntent,
 * whether that confirmation is successful or unsuccessful. You can use
 * SetupAttempts to inspect details of a specific attempt at setting up a
 * payment method using a SetupIntent.
 */
export type SetupAttempt = {
  /**
   * The value of [application](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-application) on the SetupIntent at the time of this confirmation.
   */
  application?: (string | Application) | undefined;
  /**
   * If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.
   *
   * It can only be used for this Stripe Account’s own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
   */
  attachToSelf?: boolean | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The value of [customer](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-customer) on the SetupIntent at the time of this confirmation.
   */
  customer?: (string | Customer | DeletedCustomer) | undefined;
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
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "setup_attempt";
  /**
   * The value of [on_behalf_of](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-on_behalf_of) on the SetupIntent at the time of this confirmation.
   */
  onBehalfOf?: (string | Account) | undefined;
  /**
   * ID of the payment method used with this SetupAttempt.
   */
  paymentMethod: string | PaymentMethod;
  paymentMethodDetails: SetupAttemptPaymentMethodDetails;
  setupError?: ApiErrors | undefined;
  /**
   * ID of the SetupIntent that this attempt belongs to.
   */
  setupIntent: string | SetupIntent;
  /**
   * Status of this SetupAttempt, one of `requires_confirmation`, `requires_action`, `processing`, `succeeded`, `failed`, or `abandoned`.
   */
  status: string;
  /**
   * The value of [usage](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-usage) on the SetupIntent at the time of this confirmation, one of `off_session` or `on_session`.
   */
  usage: string;
};

/**
 * @internal
 * SetupAttempt without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupAttempt = {
  application?: (string | External$Application) | undefined;
  attach_to_self?: boolean | undefined;
  created: number;
  customer?:
    | (string | External$Customer | External$DeletedCustomer)
    | undefined;
  flow_directions?: ("inbound" | "outbound")[] | null | undefined;
  id: string;
  livemode: boolean;
  object: "setup_attempt";
  on_behalf_of?: (string | External$Account) | undefined;
  payment_method: string | External$PaymentMethod;
  payment_method_details: External$SetupAttemptPaymentMethodDetails;
  setup_error?: External$ApiErrors | undefined;
  setup_intent: string | External$SetupIntent;
  status: string;
  usage: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupAttempt
 */
const SchemaIn$SetupAttempt: z.ZodType<
  SetupAttempt, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    application: z.union([z.string(), Schemas$Application.in]).optional(),
    attach_to_self: z.boolean().optional(),
    created: z.number().int(),
    customer: z
      .union([
        z.string(),
        z.lazy(() => Schemas$Customer.in),
        Schemas$DeletedCustomer.in,
      ])
      .optional(),
    flow_directions: z
      .array(z.enum(["inbound", "outbound"]))
      .nullable()
      .optional(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["setup_attempt"]),
    on_behalf_of: z
      .union([z.string(), z.lazy(() => Schemas$Account.in)])
      .optional(),
    payment_method: z.union([
      z.string(),
      z.lazy(() => Schemas$PaymentMethod.in),
    ]),
    payment_method_details: z.lazy(
      () => Schemas$SetupAttemptPaymentMethodDetails.in,
    ),
    setup_error: z.lazy(() => Schemas$ApiErrors.in.optional()),
    setup_intent: z.union([z.string(), z.lazy(() => Schemas$SetupIntent.in)]),
    status: z.string(),
    usage: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      application: "application",
      attach_to_self: "attachToSelf",
      created: "created",
      customer: "customer",
      flow_directions: "flowDirections",
      id: "id",
      livemode: "livemode",
      object: "object",
      on_behalf_of: "onBehalfOf",
      payment_method: "paymentMethod",
      payment_method_details: "paymentMethodDetails",
      setup_error: "setupError",
      setup_intent: "setupIntent",
      status: "status",
      usage: "usage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupAttempt
 */
const SchemaOut$SetupAttempt: z.ZodType<
  External$SetupAttempt, // output type of this zod object
  z.ZodTypeDef,
  SetupAttempt // the object to be transformed
> = z
  .object({
    application: z.union([z.string(), Schemas$Application.out]).optional(),
    attachToSelf: z.boolean().optional(),
    created: z.number().int(),
    customer: z
      .union([
        z.string(),
        z.lazy(() => Schemas$Customer.out),
        Schemas$DeletedCustomer.out,
      ])
      .optional(),
    flowDirections: z
      .array(z.enum(["inbound", "outbound"]))
      .nullable()
      .optional(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["setup_attempt"]),
    onBehalfOf: z
      .union([z.string(), z.lazy(() => Schemas$Account.out)])
      .optional(),
    paymentMethod: z.union([
      z.string(),
      z.lazy(() => Schemas$PaymentMethod.out),
    ]),
    paymentMethodDetails: z.lazy(
      () => Schemas$SetupAttemptPaymentMethodDetails.out,
    ),
    setupError: z.lazy(() => Schemas$ApiErrors.out.optional()),
    setupIntent: z.union([z.string(), z.lazy(() => Schemas$SetupIntent.out)]),
    status: z.string(),
    usage: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      application: "application",
      attachToSelf: "attach_to_self",
      created: "created",
      customer: "customer",
      flowDirections: "flow_directions",
      id: "id",
      livemode: "livemode",
      object: "object",
      onBehalfOf: "on_behalf_of",
      paymentMethod: "payment_method",
      paymentMethodDetails: "payment_method_details",
      setupError: "setup_error",
      setupIntent: "setup_intent",
      status: "status",
      usage: "usage",
    });
  });

export const Schemas$SetupAttempt = {
  in: SchemaIn$SetupAttempt,
  out: SchemaOut$SetupAttempt,
};
