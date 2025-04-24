import {
  External$SourceUpdateBodyMandateAcceptanceOffline,
  Schemas$SourceUpdateBodyMandateAcceptanceOffline,
  SourceUpdateBodyMandateAcceptanceOffline,
} from "./source-update-body-mandate-acceptance-offline";
import {
  External$SourceUpdateBodyMandateAcceptanceOnline,
  Schemas$SourceUpdateBodyMandateAcceptanceOnline,
  SourceUpdateBodyMandateAcceptanceOnline,
} from "./source-update-body-mandate-acceptance-online";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceUpdateBodyMandateAcceptance
 */
export type SourceUpdateBodyMandateAcceptance = {
  date?: number | undefined;
  ip?: string | undefined;
  offline?: SourceUpdateBodyMandateAcceptanceOffline | undefined;
  online?: SourceUpdateBodyMandateAcceptanceOnline | undefined;
  status: "accepted" | "pending" | "refused" | "revoked";
  type?: ("offline" | "online") | undefined;
  userAgent?: string | undefined;
};

/**
 * @internal
 * SourceUpdateBodyMandateAcceptance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceUpdateBodyMandateAcceptance = {
  date?: number | undefined;
  ip?: string | undefined;
  offline?: External$SourceUpdateBodyMandateAcceptanceOffline | undefined;
  online?: External$SourceUpdateBodyMandateAcceptanceOnline | undefined;
  status: "accepted" | "pending" | "refused" | "revoked";
  type?: ("offline" | "online") | undefined;
  user_agent?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceUpdateBodyMandateAcceptance
 */
const SchemaIn$SourceUpdateBodyMandateAcceptance: z.ZodType<
  SourceUpdateBodyMandateAcceptance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    date: z.number().int().optional(),
    ip: z.string().optional(),
    offline: Schemas$SourceUpdateBodyMandateAcceptanceOffline.in.optional(),
    online: Schemas$SourceUpdateBodyMandateAcceptanceOnline.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceUpdateBodyMandateAcceptance
 */
const SchemaOut$SourceUpdateBodyMandateAcceptance: z.ZodType<
  External$SourceUpdateBodyMandateAcceptance, // output type of this zod object
  z.ZodTypeDef,
  SourceUpdateBodyMandateAcceptance // the object to be transformed
> = z
  .object({
    date: z.number().int().optional(),
    ip: z.string().optional(),
    offline: Schemas$SourceUpdateBodyMandateAcceptanceOffline.out.optional(),
    online: Schemas$SourceUpdateBodyMandateAcceptanceOnline.out.optional(),
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

export const Schemas$SourceUpdateBodyMandateAcceptance = {
  in: SchemaIn$SourceUpdateBodyMandateAcceptance,
  out: SchemaOut$SourceUpdateBodyMandateAcceptance,
};
