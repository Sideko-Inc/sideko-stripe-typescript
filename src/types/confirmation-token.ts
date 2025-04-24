import {
  ConfirmationTokensResourceMandateData,
  External$ConfirmationTokensResourceMandateData,
  Schemas$ConfirmationTokensResourceMandateData,
} from "./confirmation-tokens-resource-mandate-data";
import {
  ConfirmationTokensResourcePaymentMethodOptions,
  External$ConfirmationTokensResourcePaymentMethodOptions,
  Schemas$ConfirmationTokensResourcePaymentMethodOptions,
} from "./confirmation-tokens-resource-payment-method-options";
import {
  ConfirmationTokensResourcePaymentMethodPreview,
  External$ConfirmationTokensResourcePaymentMethodPreview,
  Schemas$ConfirmationTokensResourcePaymentMethodPreview,
} from "./confirmation-tokens-resource-payment-method-preview";
import {
  ConfirmationTokensResourceShipping,
  External$ConfirmationTokensResourceShipping,
  Schemas$ConfirmationTokensResourceShipping,
} from "./confirmation-tokens-resource-shipping";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ConfirmationTokens help transport client side data collected by Stripe JS over
 * to your server for confirming a PaymentIntent or SetupIntent. If the confirmation
 * is successful, values present on the ConfirmationToken are written onto the Intent.
 *
 * To learn more about how to use ConfirmationToken, visit the related guides:
 * - [Finalize payments on the server](https://stripe.com/docs/payments/finalize-payments-on-the-server)
 * - [Build two-step confirmation](https://stripe.com/docs/payments/build-a-two-step-confirmation).
 */
export type ConfirmationToken = {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Time at which this ConfirmationToken expires and can no longer be used to confirm a PaymentIntent or SetupIntent.
   */
  expiresAt?: number | null | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Data used for generating a Mandate.
   */
  mandateData?: ConfirmationTokensResourceMandateData | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "confirmation_token";
  /**
   * ID of the PaymentIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used.
   */
  paymentIntent?: string | null | undefined;
  /**
   * Payment-method-specific configuration
   */
  paymentMethodOptions?:
    | ConfirmationTokensResourcePaymentMethodOptions
    | undefined;
  /**
   * Details of the PaymentMethod collected by Payment Element
   */
  paymentMethodPreview?:
    | ConfirmationTokensResourcePaymentMethodPreview
    | undefined;
  /**
   * Return URL used to confirm the Intent.
   */
  returnUrl?: string | null | undefined;
  /**
   * Indicates that you intend to make future payments with this ConfirmationToken's payment method.
   *
   * The presence of this property will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete.
   */
  setupFutureUsage?: ("off_session" | "on_session") | null | undefined;
  /**
   * ID of the SetupIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used.
   */
  setupIntent?: string | null | undefined;
  shipping?: ConfirmationTokensResourceShipping | undefined;
  /**
   * Indicates whether the Stripe SDK is used to handle confirmation flow. Defaults to `true` on ConfirmationToken.
   */
  useStripeSdk: boolean;
};

/**
 * @internal
 * ConfirmationToken without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConfirmationToken = {
  created: number;
  expires_at?: number | null | undefined;
  id: string;
  livemode: boolean;
  mandate_data?: External$ConfirmationTokensResourceMandateData | undefined;
  object: "confirmation_token";
  payment_intent?: string | null | undefined;
  payment_method_options?:
    | External$ConfirmationTokensResourcePaymentMethodOptions
    | undefined;
  payment_method_preview?:
    | External$ConfirmationTokensResourcePaymentMethodPreview
    | undefined;
  return_url?: string | null | undefined;
  setup_future_usage?: ("off_session" | "on_session") | null | undefined;
  setup_intent?: string | null | undefined;
  shipping?: External$ConfirmationTokensResourceShipping | undefined;
  use_stripe_sdk: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConfirmationToken
 */
const SchemaIn$ConfirmationToken: z.ZodType<
  ConfirmationToken, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    created: z.number().int(),
    expires_at: z.number().int().nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    mandate_data: Schemas$ConfirmationTokensResourceMandateData.in.optional(),
    object: z.enum(["confirmation_token"]),
    payment_intent: z.string().nullable().optional(),
    payment_method_options:
      Schemas$ConfirmationTokensResourcePaymentMethodOptions.in.optional(),
    payment_method_preview: z.lazy(() =>
      Schemas$ConfirmationTokensResourcePaymentMethodPreview.in.optional(),
    ),
    return_url: z.string().nullable().optional(),
    setup_future_usage: z
      .enum(["off_session", "on_session"])
      .nullable()
      .optional(),
    setup_intent: z.string().nullable().optional(),
    shipping: Schemas$ConfirmationTokensResourceShipping.in.optional(),
    use_stripe_sdk: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      expires_at: "expiresAt",
      id: "id",
      livemode: "livemode",
      mandate_data: "mandateData",
      object: "object",
      payment_intent: "paymentIntent",
      payment_method_options: "paymentMethodOptions",
      payment_method_preview: "paymentMethodPreview",
      return_url: "returnUrl",
      setup_future_usage: "setupFutureUsage",
      setup_intent: "setupIntent",
      shipping: "shipping",
      use_stripe_sdk: "useStripeSdk",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConfirmationToken
 */
const SchemaOut$ConfirmationToken: z.ZodType<
  External$ConfirmationToken, // output type of this zod object
  z.ZodTypeDef,
  ConfirmationToken // the object to be transformed
> = z
  .object({
    created: z.number().int(),
    expiresAt: z.number().int().nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    mandateData: Schemas$ConfirmationTokensResourceMandateData.out.optional(),
    object: z.enum(["confirmation_token"]),
    paymentIntent: z.string().nullable().optional(),
    paymentMethodOptions:
      Schemas$ConfirmationTokensResourcePaymentMethodOptions.out.optional(),
    paymentMethodPreview: z.lazy(() =>
      Schemas$ConfirmationTokensResourcePaymentMethodPreview.out.optional(),
    ),
    returnUrl: z.string().nullable().optional(),
    setupFutureUsage: z
      .enum(["off_session", "on_session"])
      .nullable()
      .optional(),
    setupIntent: z.string().nullable().optional(),
    shipping: Schemas$ConfirmationTokensResourceShipping.out.optional(),
    useStripeSdk: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      expiresAt: "expires_at",
      id: "id",
      livemode: "livemode",
      mandateData: "mandate_data",
      object: "object",
      paymentIntent: "payment_intent",
      paymentMethodOptions: "payment_method_options",
      paymentMethodPreview: "payment_method_preview",
      returnUrl: "return_url",
      setupFutureUsage: "setup_future_usage",
      setupIntent: "setup_intent",
      shipping: "shipping",
      useStripeSdk: "use_stripe_sdk",
    });
  });

export const Schemas$ConfirmationToken = {
  in: SchemaIn$ConfirmationToken,
  out: SchemaOut$ConfirmationToken,
};
