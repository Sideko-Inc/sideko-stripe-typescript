import {
  External$PaymentMethodOptionsCardPresentRouting,
  PaymentMethodOptionsCardPresentRouting,
  Schemas$PaymentMethodOptionsCardPresentRouting,
} from "./payment-method-options-card-present-routing";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodOptionsCardPresent = {
  /**
   * Request ability to capture this payment beyond the standard [authorization validity window](https://stripe.com/docs/terminal/features/extended-authorizations#authorization-validity)
   */
  requestExtendedAuthorization?: boolean | null | undefined;
  /**
   * Request ability to [increment](https://stripe.com/docs/terminal/features/incremental-authorizations) this PaymentIntent if the combination of MCC and card brand is eligible. Check [incremental_authorization_supported](https://stripe.com/docs/api/charges/object#charge_object-payment_method_details-card_present-incremental_authorization_supported) in the [Confirm](https://stripe.com/docs/api/payment_intents/confirm) response to verify support.
   */
  requestIncrementalAuthorizationSupport?: boolean | null | undefined;
  routing?: PaymentMethodOptionsCardPresentRouting | undefined;
};

/**
 * @internal
 * PaymentMethodOptionsCardPresent without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodOptionsCardPresent = {
  request_extended_authorization?: boolean | null | undefined;
  request_incremental_authorization_support?: boolean | null | undefined;
  routing?: External$PaymentMethodOptionsCardPresentRouting | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodOptionsCardPresent
 */
const SchemaIn$PaymentMethodOptionsCardPresent: z.ZodType<
  PaymentMethodOptionsCardPresent, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    request_extended_authorization: z.boolean().nullable().optional(),
    request_incremental_authorization_support: z
      .boolean()
      .nullable()
      .optional(),
    routing: Schemas$PaymentMethodOptionsCardPresentRouting.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodOptionsCardPresent
 */
const SchemaOut$PaymentMethodOptionsCardPresent: z.ZodType<
  External$PaymentMethodOptionsCardPresent, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodOptionsCardPresent // the object to be transformed
> = z
  .object({
    requestExtendedAuthorization: z.boolean().nullable().optional(),
    requestIncrementalAuthorizationSupport: z.boolean().nullable().optional(),
    routing: Schemas$PaymentMethodOptionsCardPresentRouting.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requestExtendedAuthorization: "request_extended_authorization",
      requestIncrementalAuthorizationSupport:
        "request_incremental_authorization_support",
      routing: "routing",
    });
  });

export const Schemas$PaymentMethodOptionsCardPresent = {
  in: SchemaIn$PaymentMethodOptionsCardPresent,
  out: SchemaOut$PaymentMethodOptionsCardPresent,
};
