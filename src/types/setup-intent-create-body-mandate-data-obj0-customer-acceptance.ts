import {
  External$SetupIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline,
  Schemas$SetupIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline,
  SetupIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline,
} from "./setup-intent-create-body-mandate-data-obj0-customer-acceptance-online";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyMandateDataObj0CustomerAcceptance
 */
export type SetupIntentCreateBodyMandateDataObj0CustomerAcceptance = {
  acceptedAt?: number | undefined;
  offline?: Record<string, any> | undefined;
  online?:
    | SetupIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline
    | undefined;
  type: "offline" | "online";
};

/**
 * @internal
 * SetupIntentCreateBodyMandateDataObj0CustomerAcceptance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyMandateDataObj0CustomerAcceptance = {
  accepted_at?: number | undefined;
  offline?: Record<string, any> | undefined;
  online?:
    | External$SetupIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline
    | undefined;
  type: "offline" | "online";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyMandateDataObj0CustomerAcceptance
 */
const SchemaIn$SetupIntentCreateBodyMandateDataObj0CustomerAcceptance: z.ZodType<
  SetupIntentCreateBodyMandateDataObj0CustomerAcceptance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    accepted_at: z.number().int().optional(),
    offline: z.record(z.string(), z.any()).optional(),
    online:
      Schemas$SetupIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyMandateDataObj0CustomerAcceptance
 */
const SchemaOut$SetupIntentCreateBodyMandateDataObj0CustomerAcceptance: z.ZodType<
  External$SetupIntentCreateBodyMandateDataObj0CustomerAcceptance, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyMandateDataObj0CustomerAcceptance // the object to be transformed
> = z
  .object({
    acceptedAt: z.number().int().optional(),
    offline: z.record(z.string(), z.any()).optional(),
    online:
      Schemas$SetupIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline.out.optional(),
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

export const Schemas$SetupIntentCreateBodyMandateDataObj0CustomerAcceptance = {
  in: SchemaIn$SetupIntentCreateBodyMandateDataObj0CustomerAcceptance,
  out: SchemaOut$SetupIntentCreateBodyMandateDataObj0CustomerAcceptance,
};
