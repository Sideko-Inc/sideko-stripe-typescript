import {
  External$OnlineAcceptance,
  OnlineAcceptance,
  Schemas$OnlineAcceptance,
} from "./online-acceptance";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CustomerAcceptance = {
  /**
   * The time that the customer accepts the mandate.
   */
  acceptedAt?: number | null | undefined;
  offline?: Record<string, any> | undefined;
  online?: OnlineAcceptance | undefined;
  /**
   * The mandate includes the type of customer acceptance information, such as: `online` or `offline`.
   */
  type: "offline" | "online";
};

/**
 * @internal
 * CustomerAcceptance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerAcceptance = {
  accepted_at?: number | null | undefined;
  offline?: Record<string, any> | undefined;
  online?: External$OnlineAcceptance | undefined;
  type: "offline" | "online";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerAcceptance
 */
const SchemaIn$CustomerAcceptance: z.ZodType<
  CustomerAcceptance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    accepted_at: z.number().int().nullable().optional(),
    offline: z.record(z.string(), z.any()).optional(),
    online: Schemas$OnlineAcceptance.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerAcceptance
 */
const SchemaOut$CustomerAcceptance: z.ZodType<
  External$CustomerAcceptance, // output type of this zod object
  z.ZodTypeDef,
  CustomerAcceptance // the object to be transformed
> = z
  .object({
    acceptedAt: z.number().int().nullable().optional(),
    offline: z.record(z.string(), z.any()).optional(),
    online: Schemas$OnlineAcceptance.out.optional(),
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

export const Schemas$CustomerAcceptance = {
  in: SchemaIn$CustomerAcceptance,
  out: SchemaOut$CustomerAcceptance,
};
