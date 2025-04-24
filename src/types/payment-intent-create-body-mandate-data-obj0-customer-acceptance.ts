import {
  External$PaymentIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline,
  PaymentIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline,
  Schemas$PaymentIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline,
} from "./payment-intent-create-body-mandate-data-obj0-customer-acceptance-online";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyMandateDataObj0CustomerAcceptance
 */
export type PaymentIntentCreateBodyMandateDataObj0CustomerAcceptance = {
  acceptedAt?: number | undefined;
  offline?: Record<string, any> | undefined;
  online?:
    | PaymentIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline
    | undefined;
  type: "offline" | "online";
};

/**
 * @internal
 * PaymentIntentCreateBodyMandateDataObj0CustomerAcceptance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyMandateDataObj0CustomerAcceptance =
  {
    accepted_at?: number | undefined;
    offline?: Record<string, any> | undefined;
    online?:
      | External$PaymentIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline
      | undefined;
    type: "offline" | "online";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyMandateDataObj0CustomerAcceptance
 */
const SchemaIn$PaymentIntentCreateBodyMandateDataObj0CustomerAcceptance: z.ZodType<
  PaymentIntentCreateBodyMandateDataObj0CustomerAcceptance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    accepted_at: z.number().int().optional(),
    offline: z.record(z.string(), z.any()).optional(),
    online:
      Schemas$PaymentIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyMandateDataObj0CustomerAcceptance
 */
const SchemaOut$PaymentIntentCreateBodyMandateDataObj0CustomerAcceptance: z.ZodType<
  External$PaymentIntentCreateBodyMandateDataObj0CustomerAcceptance, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyMandateDataObj0CustomerAcceptance // the object to be transformed
> = z
  .object({
    acceptedAt: z.number().int().optional(),
    offline: z.record(z.string(), z.any()).optional(),
    online:
      Schemas$PaymentIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline.out.optional(),
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

export const Schemas$PaymentIntentCreateBodyMandateDataObj0CustomerAcceptance =
  {
    in: SchemaIn$PaymentIntentCreateBodyMandateDataObj0CustomerAcceptance,
    out: SchemaOut$PaymentIntentCreateBodyMandateDataObj0CustomerAcceptance,
  };
