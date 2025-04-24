import {
  External$PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0Routing,
  PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0Routing,
  Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0Routing,
} from "./payment-intent-update-body-payment-method-options-card-present-obj0-routing";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0 = {
  requestExtendedAuthorization?: boolean | undefined;
  requestIncrementalAuthorizationSupport?: boolean | undefined;
  routing?:
    | PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0Routing
    | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0 =
  {
    request_extended_authorization?: boolean | undefined;
    request_incremental_authorization_support?: boolean | undefined;
    routing?:
      | External$PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0Routing
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    request_extended_authorization: z.boolean().optional(),
    request_incremental_authorization_support: z.boolean().optional(),
    routing:
      Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0Routing.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0 // the object to be transformed
> = z
  .object({
    requestExtendedAuthorization: z.boolean().optional(),
    requestIncrementalAuthorizationSupport: z.boolean().optional(),
    routing:
      Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0Routing.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requestExtendedAuthorization: "request_extended_authorization",
      requestIncrementalAuthorizationSupport:
        "request_incremental_authorization_support",
      routing: "routing",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0 =
  {
    in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0,
    out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsCardPresentObj0,
  };
