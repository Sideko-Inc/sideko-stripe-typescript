import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountSessionsCreateBodyComponentsBalancesFeatures
 */
export type AccountSessionsCreateBodyComponentsBalancesFeatures = {
  disableStripeUserAuthentication?: boolean | undefined;
  editPayoutSchedule?: boolean | undefined;
  externalAccountCollection?: boolean | undefined;
  instantPayouts?: boolean | undefined;
  standardPayouts?: boolean | undefined;
};

/**
 * @internal
 * AccountSessionsCreateBodyComponentsBalancesFeatures without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountSessionsCreateBodyComponentsBalancesFeatures = {
  disable_stripe_user_authentication?: boolean | undefined;
  edit_payout_schedule?: boolean | undefined;
  external_account_collection?: boolean | undefined;
  instant_payouts?: boolean | undefined;
  standard_payouts?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountSessionsCreateBodyComponentsBalancesFeatures
 */
const SchemaIn$AccountSessionsCreateBodyComponentsBalancesFeatures: z.ZodType<
  AccountSessionsCreateBodyComponentsBalancesFeatures, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    disable_stripe_user_authentication: z.boolean().optional(),
    edit_payout_schedule: z.boolean().optional(),
    external_account_collection: z.boolean().optional(),
    instant_payouts: z.boolean().optional(),
    standard_payouts: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disable_stripe_user_authentication: "disableStripeUserAuthentication",
      edit_payout_schedule: "editPayoutSchedule",
      external_account_collection: "externalAccountCollection",
      instant_payouts: "instantPayouts",
      standard_payouts: "standardPayouts",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountSessionsCreateBodyComponentsBalancesFeatures
 */
const SchemaOut$AccountSessionsCreateBodyComponentsBalancesFeatures: z.ZodType<
  External$AccountSessionsCreateBodyComponentsBalancesFeatures, // output type of this zod object
  z.ZodTypeDef,
  AccountSessionsCreateBodyComponentsBalancesFeatures // the object to be transformed
> = z
  .object({
    disableStripeUserAuthentication: z.boolean().optional(),
    editPayoutSchedule: z.boolean().optional(),
    externalAccountCollection: z.boolean().optional(),
    instantPayouts: z.boolean().optional(),
    standardPayouts: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disableStripeUserAuthentication: "disable_stripe_user_authentication",
      editPayoutSchedule: "edit_payout_schedule",
      externalAccountCollection: "external_account_collection",
      instantPayouts: "instant_payouts",
      standardPayouts: "standard_payouts",
    });
  });

export const Schemas$AccountSessionsCreateBodyComponentsBalancesFeatures = {
  in: SchemaIn$AccountSessionsCreateBodyComponentsBalancesFeatures,
  out: SchemaOut$AccountSessionsCreateBodyComponentsBalancesFeatures,
};
