import {
  External$PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline,
  PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline,
  Schemas$PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline,
} from "./payment-intent-confirm-body-mandate-data-obj0-customer-acceptance-online";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptance
 */
export type PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptance = {
  acceptedAt?: number | undefined;
  offline?: Record<string, any> | undefined;
  online?:
    | PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline
    | undefined;
  type: "offline" | "online";
};

/**
 * @internal
 * PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptance =
  {
    accepted_at?: number | undefined;
    offline?: Record<string, any> | undefined;
    online?:
      | External$PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline
      | undefined;
    type: "offline" | "online";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptance
 */
const SchemaIn$PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptance: z.ZodType<
  PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    accepted_at: z.number().int().optional(),
    offline: z.record(z.string(), z.any()).optional(),
    online:
      Schemas$PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline.in.optional(),
    type: z.enum(["offline", "online"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accepted_at: "acceptedAt",
      offline: "offline",
      online: "online",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptance
 */
const SchemaOut$PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptance: z.ZodType<
  External$PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptance, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptance // the object to be transformed
> = z
  .object({
    acceptedAt: z.number().int().optional(),
    offline: z.record(z.string(), z.any()).optional(),
    online:
      Schemas$PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline.out.optional(),
    type: z.enum(["offline", "online"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acceptedAt: "accepted_at",
      offline: "offline",
      online: "online",
      type: "type",
    });
  });

export const Schemas$PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptance =
  {
    in: SchemaIn$PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptance,
    out: SchemaOut$PaymentIntentConfirmBodyMandateDataObj0CustomerAcceptance,
  };
