import {
  External$PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0Routing,
  PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0Routing,
  Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0Routing,
} from "./payment-intent-create-body-payment-method-options-card-present-obj0-routing";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0 = {
  requestExtendedAuthorization?: boolean | undefined;
  requestIncrementalAuthorizationSupport?: boolean | undefined;
  routing?:
    | PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0Routing
    | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0 =
  {
    request_extended_authorization?: boolean | undefined;
    request_incremental_authorization_support?: boolean | undefined;
    routing?:
      | External$PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0Routing
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    request_extended_authorization: z.boolean().optional(),
    request_incremental_authorization_support: z.boolean().optional(),
    routing:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0Routing.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0 // the object to be transformed
> = z
  .object({
    requestExtendedAuthorization: z.boolean().optional(),
    requestIncrementalAuthorizationSupport: z.boolean().optional(),
    routing:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0Routing.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requestExtendedAuthorization: "request_extended_authorization",
      requestIncrementalAuthorizationSupport:
        "request_incremental_authorization_support",
      routing: "routing",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0 =
  {
    in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0,
    out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsCardPresentObj0,
  };
