import {
  External$SetupIntentUpdateBodyMetadataObj0,
  Schemas$SetupIntentUpdateBodyMetadataObj0,
  SetupIntentUpdateBodyMetadataObj0,
} from "./setup-intent-update-body-metadata-obj0";
import {
  External$SetupIntentUpdateBodyPaymentMethodData,
  Schemas$SetupIntentUpdateBodyPaymentMethodData,
  SetupIntentUpdateBodyPaymentMethodData,
} from "./setup-intent-update-body-payment-method-data";
import {
  External$SetupIntentUpdateBodyPaymentMethodOptions,
  Schemas$SetupIntentUpdateBodyPaymentMethodOptions,
  SetupIntentUpdateBodyPaymentMethodOptions,
} from "./setup-intent-update-body-payment-method-options";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBody
 */
export type SetupIntentUpdateBody = {
  /**
   * If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.
   *
   * It can only be used for this Stripe Account’s own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
   */
  attachToSelf?: boolean | undefined;
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
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (SetupIntentUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * ID of the payment method (a PaymentMethod, Card, or saved Source object) to attach to this SetupIntent. To unset this field to null, pass in an empty string.
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
  paymentMethodData?: SetupIntentUpdateBodyPaymentMethodData | undefined;
  /**
   * Payment method-specific configuration for this SetupIntent.
   */
  paymentMethodOptions?: SetupIntentUpdateBodyPaymentMethodOptions | undefined;
  /**
   * The list of payment method types (for example, card) that this SetupIntent can set up. If you don't provide this, Stripe will dynamically show relevant payment methods from your [payment method settings](https://dashboard.stripe.com/settings/payment_methods).
   */
  paymentMethodTypes?: string[] | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (boolean | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (("inbound" | "outbound")[] | undefined)
    | ((SetupIntentUpdateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (string | undefined)
    | (SetupIntentUpdateBodyPaymentMethodData | undefined)
    | (SetupIntentUpdateBodyPaymentMethodOptions | undefined)
    | (string[] | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * SetupIntentUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBody = {
  attach_to_self?: boolean | undefined;
  customer?: string | undefined;
  description?: string | undefined;
  expand?: string[] | undefined;
  flow_directions?: ("inbound" | "outbound")[] | undefined;
  metadata?: (External$SetupIntentUpdateBodyMetadataObj0 | string) | undefined;
  payment_method?: string | undefined;
  payment_method_configuration?: string | undefined;
  payment_method_data?:
    | External$SetupIntentUpdateBodyPaymentMethodData
    | undefined;
  payment_method_options?:
    | External$SetupIntentUpdateBodyPaymentMethodOptions
    | undefined;
  payment_method_types?: string[] | undefined;

  [additionalProperty: string]:
    | (boolean | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (("inbound" | "outbound")[] | undefined)
    | ((External$SetupIntentUpdateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (string | undefined)
    | (External$SetupIntentUpdateBodyPaymentMethodData | undefined)
    | (External$SetupIntentUpdateBodyPaymentMethodOptions | undefined)
    | (string[] | undefined)
    | External$SetupIntentUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBody
 */
const SchemaIn$SetupIntentUpdateBody: z.ZodType<
  SetupIntentUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    attach_to_self: z.boolean().optional(),
    customer: z.string().optional(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    flow_directions: z.array(z.enum(["inbound", "outbound"])).optional(),
    metadata: z
      .union([Schemas$SetupIntentUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    payment_method: z.string().optional(),
    payment_method_configuration: z.string().optional(),
    payment_method_data:
      Schemas$SetupIntentUpdateBodyPaymentMethodData.in.optional(),
    payment_method_options:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptions.in.optional(),
    payment_method_types: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      attach_to_self: "attachToSelf",
      customer: "customer",
      description: "description",
      expand: "expand",
      flow_directions: "flowDirections",
      metadata: "metadata",
      payment_method: "paymentMethod",
      payment_method_configuration: "paymentMethodConfiguration",
      payment_method_data: "paymentMethodData",
      payment_method_options: "paymentMethodOptions",
      payment_method_types: "paymentMethodTypes",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBody
 */
const SchemaOut$SetupIntentUpdateBody: z.ZodType<
  External$SetupIntentUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBody // the object to be transformed
> = z
  .object({
    attachToSelf: z.boolean().optional(),
    customer: z.string().optional(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    flowDirections: z.array(z.enum(["inbound", "outbound"])).optional(),
    metadata: z
      .union([Schemas$SetupIntentUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    paymentMethod: z.string().optional(),
    paymentMethodConfiguration: z.string().optional(),
    paymentMethodData:
      Schemas$SetupIntentUpdateBodyPaymentMethodData.out.optional(),
    paymentMethodOptions:
      Schemas$SetupIntentUpdateBodyPaymentMethodOptions.out.optional(),
    paymentMethodTypes: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      attachToSelf: "attach_to_self",
      customer: "customer",
      description: "description",
      expand: "expand",
      flowDirections: "flow_directions",
      metadata: "metadata",
      paymentMethod: "payment_method",
      paymentMethodConfiguration: "payment_method_configuration",
      paymentMethodData: "payment_method_data",
      paymentMethodOptions: "payment_method_options",
      paymentMethodTypes: "payment_method_types",
    });
  });

export const Schemas$SetupIntentUpdateBody = {
  in: SchemaIn$SetupIntentUpdateBody,
  out: SchemaOut$SetupIntentUpdateBody,
};
