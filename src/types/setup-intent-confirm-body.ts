import {
  External$SetupIntentConfirmBodyMandateDataObj0,
  Schemas$SetupIntentConfirmBodyMandateDataObj0,
  SetupIntentConfirmBodyMandateDataObj0,
} from "./setup-intent-confirm-body-mandate-data-obj0";
import {
  External$SetupIntentConfirmBodyMandateDataObj2,
  Schemas$SetupIntentConfirmBodyMandateDataObj2,
  SetupIntentConfirmBodyMandateDataObj2,
} from "./setup-intent-confirm-body-mandate-data-obj2";
import {
  External$SetupIntentConfirmBodyPaymentMethodData,
  Schemas$SetupIntentConfirmBodyPaymentMethodData,
  SetupIntentConfirmBodyPaymentMethodData,
} from "./setup-intent-confirm-body-payment-method-data";
import {
  External$SetupIntentConfirmBodyPaymentMethodOptions,
  Schemas$SetupIntentConfirmBodyPaymentMethodOptions,
  SetupIntentConfirmBodyPaymentMethodOptions,
} from "./setup-intent-confirm-body-payment-method-options";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBody
 */
export type SetupIntentConfirmBody = {
  /**
   * The client secret of the SetupIntent.
   */
  clientSecret?: string | undefined;
  /**
   * ID of the ConfirmationToken used to confirm this SetupIntent.
   *
   * If the provided ConfirmationToken contains properties that are also being provided in this request, such as `payment_method`, then the values in this request will take precedence.
   */
  confirmationToken?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  mandateData?:
    | (
        | SetupIntentConfirmBodyMandateDataObj0
        | string
        | SetupIntentConfirmBodyMandateDataObj2
      )
    | undefined;
  /**
   * ID of the payment method (a PaymentMethod, Card, or saved Source object) to attach to this SetupIntent.
   */
  paymentMethod?: string | undefined;
  /**
   * When included, this hash creates a PaymentMethod that is set as the [`payment_method`](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-payment_method)
   * value in the SetupIntent.
   */
  paymentMethodData?: SetupIntentConfirmBodyPaymentMethodData | undefined;
  /**
   * Payment method-specific configuration for this SetupIntent.
   */
  paymentMethodOptions?: SetupIntentConfirmBodyPaymentMethodOptions | undefined;
  /**
   * The URL to redirect your customer back to after they authenticate on the payment method's app or site.
   * If you'd prefer to redirect to a mobile application, you can alternatively supply an application URI scheme.
   * This parameter is only used for cards and other redirect-based payment methods.
   */
  returnUrl?: string | undefined;
  /**
   * Set to `true` when confirming server-side and using Stripe.js, iOS, or Android client-side SDKs to handle the next actions.
   */
  useStripeSdk?: boolean | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (
        | (
            | SetupIntentConfirmBodyMandateDataObj0
            | string
            | SetupIntentConfirmBodyMandateDataObj2
          )
        | undefined
      )
    | (string | undefined)
    | (SetupIntentConfirmBodyPaymentMethodData | undefined)
    | (SetupIntentConfirmBodyPaymentMethodOptions | undefined)
    | (string | undefined)
    | (boolean | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * SetupIntentConfirmBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBody = {
  client_secret?: string | undefined;
  confirmation_token?: string | undefined;
  expand?: string[] | undefined;
  mandate_data?:
    | (
        | External$SetupIntentConfirmBodyMandateDataObj0
        | string
        | External$SetupIntentConfirmBodyMandateDataObj2
      )
    | undefined;
  payment_method?: string | undefined;
  payment_method_data?:
    | External$SetupIntentConfirmBodyPaymentMethodData
    | undefined;
  payment_method_options?:
    | External$SetupIntentConfirmBodyPaymentMethodOptions
    | undefined;
  return_url?: string | undefined;
  use_stripe_sdk?: boolean | undefined;

  [additionalProperty: string]:
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (
        | (
            | External$SetupIntentConfirmBodyMandateDataObj0
            | string
            | External$SetupIntentConfirmBodyMandateDataObj2
          )
        | undefined
      )
    | (string | undefined)
    | (External$SetupIntentConfirmBodyPaymentMethodData | undefined)
    | (External$SetupIntentConfirmBodyPaymentMethodOptions | undefined)
    | (string | undefined)
    | (boolean | undefined)
    | External$SetupIntentConfirmBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBody
 */
const SchemaIn$SetupIntentConfirmBody: z.ZodType<
  SetupIntentConfirmBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    client_secret: z.string().optional(),
    confirmation_token: z.string().optional(),
    expand: z.array(z.string()).optional(),
    mandate_data: z
      .union([
        Schemas$SetupIntentConfirmBodyMandateDataObj0.in,
        z.string(),
        Schemas$SetupIntentConfirmBodyMandateDataObj2.in,
      ])
      .optional(),
    payment_method: z.string().optional(),
    payment_method_data:
      Schemas$SetupIntentConfirmBodyPaymentMethodData.in.optional(),
    payment_method_options:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptions.in.optional(),
    return_url: z.string().optional(),
    use_stripe_sdk: z.boolean().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      client_secret: "clientSecret",
      confirmation_token: "confirmationToken",
      expand: "expand",
      mandate_data: "mandateData",
      payment_method: "paymentMethod",
      payment_method_data: "paymentMethodData",
      payment_method_options: "paymentMethodOptions",
      return_url: "returnUrl",
      use_stripe_sdk: "useStripeSdk",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBody
 */
const SchemaOut$SetupIntentConfirmBody: z.ZodType<
  External$SetupIntentConfirmBody, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBody // the object to be transformed
> = z
  .object({
    clientSecret: z.string().optional(),
    confirmationToken: z.string().optional(),
    expand: z.array(z.string()).optional(),
    mandateData: z
      .union([
        Schemas$SetupIntentConfirmBodyMandateDataObj0.out,
        z.string(),
        Schemas$SetupIntentConfirmBodyMandateDataObj2.out,
      ])
      .optional(),
    paymentMethod: z.string().optional(),
    paymentMethodData:
      Schemas$SetupIntentConfirmBodyPaymentMethodData.out.optional(),
    paymentMethodOptions:
      Schemas$SetupIntentConfirmBodyPaymentMethodOptions.out.optional(),
    returnUrl: z.string().optional(),
    useStripeSdk: z.boolean().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      clientSecret: "client_secret",
      confirmationToken: "confirmation_token",
      expand: "expand",
      mandateData: "mandate_data",
      paymentMethod: "payment_method",
      paymentMethodData: "payment_method_data",
      paymentMethodOptions: "payment_method_options",
      returnUrl: "return_url",
      useStripeSdk: "use_stripe_sdk",
    });
  });

export const Schemas$SetupIntentConfirmBody = {
  in: SchemaIn$SetupIntentConfirmBody,
  out: SchemaOut$SetupIntentConfirmBody,
};
