import {
  AccountUnificationAccountControllerFees,
  External$AccountUnificationAccountControllerFees,
  Schemas$AccountUnificationAccountControllerFees,
} from "./account-unification-account-controller-fees";
import {
  AccountUnificationAccountControllerLosses,
  External$AccountUnificationAccountControllerLosses,
  Schemas$AccountUnificationAccountControllerLosses,
} from "./account-unification-account-controller-losses";
import {
  AccountUnificationAccountControllerStripeDashboard,
  External$AccountUnificationAccountControllerStripeDashboard,
  Schemas$AccountUnificationAccountControllerStripeDashboard,
} from "./account-unification-account-controller-stripe-dashboard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type AccountUnificationAccountController = {
  fees?: AccountUnificationAccountControllerFees | undefined;
  /**
   * `true` if the Connect application retrieving the resource controls the account and can therefore exercise [platform controls](https://stripe.com/docs/connect/platform-controls-for-standard-accounts). Otherwise, this field is null.
   */
  isController?: boolean | undefined;
  losses?: AccountUnificationAccountControllerLosses | undefined;
  /**
   * A value indicating responsibility for collecting requirements on this account. Only returned when the Connect application retrieving the resource controls the account.
   */
  requirementCollection?: ("application" | "stripe") | undefined;
  stripeDashboard?:
    | AccountUnificationAccountControllerStripeDashboard
    | undefined;
  /**
   * The controller type. Can be `application`, if a Connect application controls the account, or `account`, if the account controls itself.
   */
  type: "account" | "application";
};

/**
 * @internal
 * AccountUnificationAccountController without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUnificationAccountController = {
  fees?: External$AccountUnificationAccountControllerFees | undefined;
  is_controller?: boolean | undefined;
  losses?: External$AccountUnificationAccountControllerLosses | undefined;
  requirement_collection?: ("application" | "stripe") | undefined;
  stripe_dashboard?:
    | External$AccountUnificationAccountControllerStripeDashboard
    | undefined;
  type: "account" | "application";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUnificationAccountController
 */
const SchemaIn$AccountUnificationAccountController: z.ZodType<
  AccountUnificationAccountController, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    fees: Schemas$AccountUnificationAccountControllerFees.in.optional(),
    is_controller: z.boolean().optional(),
    losses: Schemas$AccountUnificationAccountControllerLosses.in.optional(),
    requirement_collection: z.enum(["application", "stripe"]).optional(),
    stripe_dashboard:
      Schemas$AccountUnificationAccountControllerStripeDashboard.in.optional(),
    type: z.enum(["account", "application"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fees: "fees",
      is_controller: "isController",
      losses: "losses",
      requirement_collection: "requirementCollection",
      stripe_dashboard: "stripeDashboard",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUnificationAccountController
 */
const SchemaOut$AccountUnificationAccountController: z.ZodType<
  External$AccountUnificationAccountController, // output type of this zod object
  z.ZodTypeDef,
  AccountUnificationAccountController // the object to be transformed
> = z
  .object({
    fees: Schemas$AccountUnificationAccountControllerFees.out.optional(),
    isController: z.boolean().optional(),
    losses: Schemas$AccountUnificationAccountControllerLosses.out.optional(),
    requirementCollection: z.enum(["application", "stripe"]).optional(),
    stripeDashboard:
      Schemas$AccountUnificationAccountControllerStripeDashboard.out.optional(),
    type: z.enum(["account", "application"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fees: "fees",
      isController: "is_controller",
      losses: "losses",
      requirementCollection: "requirement_collection",
      stripeDashboard: "stripe_dashboard",
      type: "type",
    });
  });

export const Schemas$AccountUnificationAccountController = {
  in: SchemaIn$AccountUnificationAccountController,
  out: SchemaOut$AccountUnificationAccountController,
};
