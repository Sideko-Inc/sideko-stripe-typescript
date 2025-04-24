import {
  External$PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0Routing,
  PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0Routing,
  Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0Routing,
} from "./payment-intent-confirm-body-payment-method-options-card-present-obj0-routing";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0 = {
  requestExtendedAuthorization?: boolean | undefined;
  requestIncrementalAuthorizationSupport?: boolean | undefined;
  routing?:
    | PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0Routing
    | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0 =
  {
    request_extended_authorization?: boolean | undefined;
    request_incremental_authorization_support?: boolean | undefined;
    routing?:
      | External$PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0Routing
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    request_extended_authorization: z.boolean().optional(),
    request_incremental_authorization_support: z.boolean().optional(),
    routing:
      Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0Routing.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      request_extended_authorization: "requestExtendedAuthorization",
      request_incremental_authorization_support:
        "requestIncrementalAuthorizationSupport",
      routing: "routing",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0 // the object to be transformed
> = z
  .object({
    requestExtendedAuthorization: z.boolean().optional(),
    requestIncrementalAuthorizationSupport: z.boolean().optional(),
    routing:
      Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0Routing.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requestExtendedAuthorization: "request_extended_authorization",
      requestIncrementalAuthorizationSupport:
        "request_incremental_authorization_support",
      routing: "routing",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0 =
  {
    in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0,
    out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsCardPresentObj0,
  };
