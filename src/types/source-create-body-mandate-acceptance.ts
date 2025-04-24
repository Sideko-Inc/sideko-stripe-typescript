import {
  External$SourceCreateBodyMandateAcceptanceOffline,
  Schemas$SourceCreateBodyMandateAcceptanceOffline,
  SourceCreateBodyMandateAcceptanceOffline,
} from "./source-create-body-mandate-acceptance-offline";
import {
  External$SourceCreateBodyMandateAcceptanceOnline,
  Schemas$SourceCreateBodyMandateAcceptanceOnline,
  SourceCreateBodyMandateAcceptanceOnline,
} from "./source-create-body-mandate-acceptance-online";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceCreateBodyMandateAcceptance
 */
export type SourceCreateBodyMandateAcceptance = {
  date?: number | undefined;
  ip?: string | undefined;
  offline?: SourceCreateBodyMandateAcceptanceOffline | undefined;
  online?: SourceCreateBodyMandateAcceptanceOnline | undefined;
  status: "accepted" | "pending" | "refused" | "revoked";
  type?: ("offline" | "online") | undefined;
  userAgent?: string | undefined;
};

/**
 * @internal
 * SourceCreateBodyMandateAcceptance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceCreateBodyMandateAcceptance = {
  date?: number | undefined;
  ip?: string | undefined;
  offline?: External$SourceCreateBodyMandateAcceptanceOffline | undefined;
  online?: External$SourceCreateBodyMandateAcceptanceOnline | undefined;
  status: "accepted" | "pending" | "refused" | "revoked";
  type?: ("offline" | "online") | undefined;
  user_agent?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceCreateBodyMandateAcceptance
 */
const SchemaIn$SourceCreateBodyMandateAcceptance: z.ZodType<
  SourceCreateBodyMandateAcceptance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    date: z.number().int().optional(),
    ip: z.string().optional(),
    offline: Schemas$SourceCreateBodyMandateAcceptanceOffline.in.optional(),
    online: Schemas$SourceCreateBodyMandateAcceptanceOnline.in.optional(),
    status: z.enum(["accepted", "pending", "refused", "revoked"]),
    type: z.enum(["offline", "online"]).optional(),
    user_agent: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      date: "date",
      ip: "ip",
      offline: "offline",
      online: "online",
      status: "status",
      type: "type",
      user_agent: "userAgent",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceCreateBodyMandateAcceptance
 */
const SchemaOut$SourceCreateBodyMandateAcceptance: z.ZodType<
  External$SourceCreateBodyMandateAcceptance, // output type of this zod object
  z.ZodTypeDef,
  SourceCreateBodyMandateAcceptance // the object to be transformed
> = z
  .object({
    date: z.number().int().optional(),
    ip: z.string().optional(),
    offline: Schemas$SourceCreateBodyMandateAcceptanceOffline.out.optional(),
    online: Schemas$SourceCreateBodyMandateAcceptanceOnline.out.optional(),
    status: z.enum(["accepted", "pending", "refused", "revoked"]),
    type: z.enum(["offline", "online"]).optional(),
    userAgent: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      date: "date",
      ip: "ip",
      offline: "offline",
      online: "online",
      status: "status",
      type: "type",
      userAgent: "user_agent",
    });
  });

export const Schemas$SourceCreateBodyMandateAcceptance = {
  in: SchemaIn$SourceCreateBodyMandateAcceptance,
  out: SchemaOut$SourceCreateBodyMandateAcceptance,
};
