import {
  External$PaymentLinkCreateBodyRestrictionsCompletedSessions,
  PaymentLinkCreateBodyRestrictionsCompletedSessions,
  Schemas$PaymentLinkCreateBodyRestrictionsCompletedSessions,
} from "./payment-link-create-body-restrictions-completed-sessions";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Settings that restrict the usage of a payment link.
 */
export type PaymentLinkCreateBodyRestrictions = {
  completedSessions: PaymentLinkCreateBodyRestrictionsCompletedSessions;
};

/**
 * @internal
 * PaymentLinkCreateBodyRestrictions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyRestrictions = {
  completed_sessions: External$PaymentLinkCreateBodyRestrictionsCompletedSessions;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyRestrictions
 */
const SchemaIn$PaymentLinkCreateBodyRestrictions: z.ZodType<
  PaymentLinkCreateBodyRestrictions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    completed_sessions:
      Schemas$PaymentLinkCreateBodyRestrictionsCompletedSessions.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      completed_sessions: "completedSessions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyRestrictions
 */
const SchemaOut$PaymentLinkCreateBodyRestrictions: z.ZodType<
  External$PaymentLinkCreateBodyRestrictions, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyRestrictions // the object to be transformed
> = z
  .object({
    completedSessions:
      Schemas$PaymentLinkCreateBodyRestrictionsCompletedSessions.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      completedSessions: "completed_sessions",
    });
  });

export const Schemas$PaymentLinkCreateBodyRestrictions = {
  in: SchemaIn$PaymentLinkCreateBodyRestrictions,
  out: SchemaOut$PaymentLinkCreateBodyRestrictions,
};
