import {
  AccountCreateBodyControllerFees,
  External$AccountCreateBodyControllerFees,
  Schemas$AccountCreateBodyControllerFees,
} from "./account-create-body-controller-fees";
import {
  AccountCreateBodyControllerLosses,
  External$AccountCreateBodyControllerLosses,
  Schemas$AccountCreateBodyControllerLosses,
} from "./account-create-body-controller-losses";
import {
  AccountCreateBodyControllerStripeDashboard,
  External$AccountCreateBodyControllerStripeDashboard,
  Schemas$AccountCreateBodyControllerStripeDashboard,
} from "./account-create-body-controller-stripe-dashboard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A hash of configuration describing the account controller's attributes.
 */
export type AccountCreateBodyController = {
  fees?: AccountCreateBodyControllerFees | undefined;
  losses?: AccountCreateBodyControllerLosses | undefined;
  requirementCollection?: ("application" | "stripe") | undefined;
  stripeDashboard?: AccountCreateBodyControllerStripeDashboard | undefined;
};

/**
 * @internal
 * AccountCreateBodyController without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyController = {
  fees?: External$AccountCreateBodyControllerFees | undefined;
  losses?: External$AccountCreateBodyControllerLosses | undefined;
  requirement_collection?: ("application" | "stripe") | undefined;
  stripe_dashboard?:
    | External$AccountCreateBodyControllerStripeDashboard
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyController
 */
const SchemaIn$AccountCreateBodyController: z.ZodType<
  AccountCreateBodyController, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    fees: Schemas$AccountCreateBodyControllerFees.in.optional(),
    losses: Schemas$AccountCreateBodyControllerLosses.in.optional(),
    requirement_collection: z.enum(["application", "stripe"]).optional(),
    stripe_dashboard:
      Schemas$AccountCreateBodyControllerStripeDashboard.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fees: "fees",
      losses: "losses",
      requirement_collection: "requirementCollection",
      stripe_dashboard: "stripeDashboard",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyController
 */
const SchemaOut$AccountCreateBodyController: z.ZodType<
  External$AccountCreateBodyController, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyController // the object to be transformed
> = z
  .object({
    fees: Schemas$AccountCreateBodyControllerFees.out.optional(),
    losses: Schemas$AccountCreateBodyControllerLosses.out.optional(),
    requirementCollection: z.enum(["application", "stripe"]).optional(),
    stripeDashboard:
      Schemas$AccountCreateBodyControllerStripeDashboard.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fees: "fees",
      losses: "losses",
      requirementCollection: "requirement_collection",
      stripeDashboard: "stripe_dashboard",
    });
  });

export const Schemas$AccountCreateBodyController = {
  in: SchemaIn$AccountCreateBodyController,
  out: SchemaOut$AccountCreateBodyController,
};
