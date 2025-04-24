import {
  External$PaymentLinksResourceCompletedSessions,
  PaymentLinksResourceCompletedSessions,
  Schemas$PaymentLinksResourceCompletedSessions,
} from "./payment-links-resource-completed-sessions";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentLinksResourceRestrictions = {
  completedSessions: PaymentLinksResourceCompletedSessions;
};

/**
 * @internal
 * PaymentLinksResourceRestrictions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinksResourceRestrictions = {
  completed_sessions: External$PaymentLinksResourceCompletedSessions;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinksResourceRestrictions
 */
const SchemaIn$PaymentLinksResourceRestrictions: z.ZodType<
  PaymentLinksResourceRestrictions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    completed_sessions: Schemas$PaymentLinksResourceCompletedSessions.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      completed_sessions: "completedSessions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinksResourceRestrictions
 */
const SchemaOut$PaymentLinksResourceRestrictions: z.ZodType<
  External$PaymentLinksResourceRestrictions, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinksResourceRestrictions // the object to be transformed
> = z
  .object({
    completedSessions: Schemas$PaymentLinksResourceCompletedSessions.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      completedSessions: "completed_sessions",
    });
  });

export const Schemas$PaymentLinksResourceRestrictions = {
  in: SchemaIn$PaymentLinksResourceRestrictions,
  out: SchemaOut$PaymentLinksResourceRestrictions,
};
