import {
  External$SetupIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline,
  Schemas$SetupIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline,
  SetupIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline,
} from "./setup-intent-confirm-body-mandate-data-obj0-customer-acceptance-online";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyMandateDataObj0CustomerAcceptance
 */
export type SetupIntentConfirmBodyMandateDataObj0CustomerAcceptance = {
  acceptedAt?: number | undefined;
  offline?: Record<string, any> | undefined;
  online?:
    | SetupIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline
    | undefined;
  type: "offline" | "online";
};

/**
 * @internal
 * SetupIntentConfirmBodyMandateDataObj0CustomerAcceptance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyMandateDataObj0CustomerAcceptance = {
  accepted_at?: number | undefined;
  offline?: Record<string, any> | undefined;
  online?:
    | External$SetupIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline
    | undefined;
  type: "offline" | "online";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyMandateDataObj0CustomerAcceptance
 */
const SchemaIn$SetupIntentConfirmBodyMandateDataObj0CustomerAcceptance: z.ZodType<
  SetupIntentConfirmBodyMandateDataObj0CustomerAcceptance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    accepted_at: z.number().int().optional(),
    offline: z.record(z.string(), z.any()).optional(),
    online:
      Schemas$SetupIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyMandateDataObj0CustomerAcceptance
 */
const SchemaOut$SetupIntentConfirmBodyMandateDataObj0CustomerAcceptance: z.ZodType<
  External$SetupIntentConfirmBodyMandateDataObj0CustomerAcceptance, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyMandateDataObj0CustomerAcceptance // the object to be transformed
> = z
  .object({
    acceptedAt: z.number().int().optional(),
    offline: z.record(z.string(), z.any()).optional(),
    online:
      Schemas$SetupIntentConfirmBodyMandateDataObj0CustomerAcceptanceOnline.out.optional(),
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

export const Schemas$SetupIntentConfirmBodyMandateDataObj0CustomerAcceptance = {
  in: SchemaIn$SetupIntentConfirmBodyMandateDataObj0CustomerAcceptance,
  out: SchemaOut$SetupIntentConfirmBodyMandateDataObj0CustomerAcceptance,
};
