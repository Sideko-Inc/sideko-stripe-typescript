import { Account, External$Account, Schemas$Account } from "./account";
import {
  AccountCapabilityFutureRequirements,
  External$AccountCapabilityFutureRequirements,
  Schemas$AccountCapabilityFutureRequirements,
} from "./account-capability-future-requirements";
import {
  AccountCapabilityRequirements,
  External$AccountCapabilityRequirements,
  Schemas$AccountCapabilityRequirements,
} from "./account-capability-requirements";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * This is an object representing a capability for a Stripe account.
 *
 * Related guide: [Account capabilities](https://stripe.com/docs/connect/account-capabilities)
 */
export type Capability = {
  /**
   * The account for which the capability enables functionality.
   */
  account: string | Account;
  futureRequirements?: AccountCapabilityFutureRequirements | undefined;
  /**
   * The identifier for the capability.
   */
  id: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "capability";
  /**
   * Whether the capability has been requested.
   */
  requested: boolean;
  /**
   * Time at which the capability was requested. Measured in seconds since the Unix epoch.
   */
  requestedAt?: number | null | undefined;
  requirements?: AccountCapabilityRequirements | undefined;
  /**
   * The status of the capability.
   */
  status: "active" | "disabled" | "inactive" | "pending" | "unrequested";
};

/**
 * @internal
 * Capability without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Capability = {
  account: string | External$Account;
  future_requirements?:
    | External$AccountCapabilityFutureRequirements
    | undefined;
  id: string;
  object: "capability";
  requested: boolean;
  requested_at?: number | null | undefined;
  requirements?: External$AccountCapabilityRequirements | undefined;
  status: "active" | "disabled" | "inactive" | "pending" | "unrequested";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Capability
 */
const SchemaIn$Capability: z.ZodType<
  Capability, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account: z.union([z.string(), z.lazy(() => Schemas$Account.in)]),
    future_requirements:
      Schemas$AccountCapabilityFutureRequirements.in.optional(),
    id: z.string(),
    object: z.enum(["capability"]),
    requested: z.boolean(),
    requested_at: z.number().int().nullable().optional(),
    requirements: Schemas$AccountCapabilityRequirements.in.optional(),
    status: z.enum([
      "active",
      "disabled",
      "inactive",
      "pending",
      "unrequested",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      future_requirements: "futureRequirements",
      id: "id",
      object: "object",
      requested: "requested",
      requested_at: "requestedAt",
      requirements: "requirements",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Capability
 */
const SchemaOut$Capability: z.ZodType<
  External$Capability, // output type of this zod object
  z.ZodTypeDef,
  Capability // the object to be transformed
> = z
  .object({
    account: z.union([z.string(), z.lazy(() => Schemas$Account.out)]),
    futureRequirements:
      Schemas$AccountCapabilityFutureRequirements.out.optional(),
    id: z.string(),
    object: z.enum(["capability"]),
    requested: z.boolean(),
    requestedAt: z.number().int().nullable().optional(),
    requirements: Schemas$AccountCapabilityRequirements.out.optional(),
    status: z.enum([
      "active",
      "disabled",
      "inactive",
      "pending",
      "unrequested",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      futureRequirements: "future_requirements",
      id: "id",
      object: "object",
      requested: "requested",
      requestedAt: "requested_at",
      requirements: "requirements",
      status: "status",
    });
  });

export const Schemas$Capability = {
  in: SchemaIn$Capability,
  out: SchemaOut$Capability,
};
