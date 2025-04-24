import {
  External$TestHelperConfirmationTokenCreateBodyPaymentMethodData,
  Schemas$TestHelperConfirmationTokenCreateBodyPaymentMethodData,
  TestHelperConfirmationTokenCreateBodyPaymentMethodData,
} from "./test-helper-confirmation-token-create-body-payment-method-data";
import {
  External$TestHelperConfirmationTokenCreateBodyShipping,
  Schemas$TestHelperConfirmationTokenCreateBodyShipping,
  TestHelperConfirmationTokenCreateBodyShipping,
} from "./test-helper-confirmation-token-create-body-shipping";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperConfirmationTokenCreateBody
 */
export type TestHelperConfirmationTokenCreateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * ID of an existing PaymentMethod.
   */
  paymentMethod?: string | undefined;
  /**
   * If provided, this hash will be used to create a PaymentMethod.
   */
  paymentMethodData?:
    | TestHelperConfirmationTokenCreateBodyPaymentMethodData
    | undefined;
  /**
   * Return URL used to confirm the Intent.
   */
  returnUrl?: string | undefined;
  /**
   * Indicates that you intend to make future payments with this ConfirmationToken's payment method.
   *
   * The presence of this property will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete.
   */
  setupFutureUsage?: ("off_session" | "on_session") | undefined;
  /**
   * Shipping information for this ConfirmationToken.
   */
  shipping?: TestHelperConfirmationTokenCreateBodyShipping | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (string | undefined)
    | (TestHelperConfirmationTokenCreateBodyPaymentMethodData | undefined)
    | (string | undefined)
    | (("off_session" | "on_session") | undefined)
    | (TestHelperConfirmationTokenCreateBodyShipping | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TestHelperConfirmationTokenCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperConfirmationTokenCreateBody = {
  expand?: string[] | undefined;
  payment_method?: string | undefined;
  payment_method_data?:
    | External$TestHelperConfirmationTokenCreateBodyPaymentMethodData
    | undefined;
  return_url?: string | undefined;
  setup_future_usage?: ("off_session" | "on_session") | undefined;
  shipping?: External$TestHelperConfirmationTokenCreateBodyShipping | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (string | undefined)
    | (
        | External$TestHelperConfirmationTokenCreateBodyPaymentMethodData
        | undefined
      )
    | (string | undefined)
    | (("off_session" | "on_session") | undefined)
    | (External$TestHelperConfirmationTokenCreateBodyShipping | undefined)
    | External$TestHelperConfirmationTokenCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperConfirmationTokenCreateBody
 */
const SchemaIn$TestHelperConfirmationTokenCreateBody: z.ZodType<
  TestHelperConfirmationTokenCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    payment_method: z.string().optional(),
    payment_method_data:
      Schemas$TestHelperConfirmationTokenCreateBodyPaymentMethodData.in.optional(),
    return_url: z.string().optional(),
    setup_future_usage: z.enum(["off_session", "on_session"]).optional(),
    shipping:
      Schemas$TestHelperConfirmationTokenCreateBodyShipping.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      payment_method: "paymentMethod",
      payment_method_data: "paymentMethodData",
      return_url: "returnUrl",
      setup_future_usage: "setupFutureUsage",
      shipping: "shipping",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperConfirmationTokenCreateBody
 */
const SchemaOut$TestHelperConfirmationTokenCreateBody: z.ZodType<
  External$TestHelperConfirmationTokenCreateBody, // output type of this zod object
  z.ZodTypeDef,
  TestHelperConfirmationTokenCreateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    paymentMethod: z.string().optional(),
    paymentMethodData:
      Schemas$TestHelperConfirmationTokenCreateBodyPaymentMethodData.out.optional(),
    returnUrl: z.string().optional(),
    setupFutureUsage: z.enum(["off_session", "on_session"]).optional(),
    shipping:
      Schemas$TestHelperConfirmationTokenCreateBodyShipping.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      paymentMethod: "payment_method",
      paymentMethodData: "payment_method_data",
      returnUrl: "return_url",
      setupFutureUsage: "setup_future_usage",
      shipping: "shipping",
    });
  });

export const Schemas$TestHelperConfirmationTokenCreateBody = {
  in: SchemaIn$TestHelperConfirmationTokenCreateBody,
  out: SchemaOut$TestHelperConfirmationTokenCreateBody,
};
