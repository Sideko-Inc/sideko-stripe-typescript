import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsP24Obj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsP24Obj0 = {
  setupFutureUsage?: "none" | undefined;
  tosShownAndAccepted?: boolean | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsP24Obj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsP24Obj0 = {
  setup_future_usage?: "none" | undefined;
  tos_shown_and_accepted?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsP24Obj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsP24Obj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsP24Obj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    setup_future_usage: z.enum(["none"]).optional(),
    tos_shown_and_accepted: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setup_future_usage: "setupFutureUsage",
      tos_shown_and_accepted: "tosShownAndAccepted",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsP24Obj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsP24Obj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsP24Obj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsP24Obj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
    tosShownAndAccepted: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
      tosShownAndAccepted: "tos_shown_and_accepted",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsP24Obj0 = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsP24Obj0,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsP24Obj0,
};
