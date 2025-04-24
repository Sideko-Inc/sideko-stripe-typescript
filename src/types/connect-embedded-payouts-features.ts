import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ConnectEmbeddedPayoutsFeatures = {
  /**
   * Disables Stripe user authentication for this embedded component. This value can only be true for accounts where `controller.requirement_collection` is `application`. The default value is the opposite of the `external_account_collection` value. For example, if you don’t set `external_account_collection`, it defaults to true and `disable_stripe_user_authentication` defaults to false.
   */
  disableStripeUserAuthentication: boolean;
  /**
   * Whether to allow payout schedule to be changed. Default `true` when Stripe owns Loss Liability, default `false` otherwise.
   */
  editPayoutSchedule: boolean;
  /**
   * Whether to allow platforms to control bank account collection for their connected accounts. This feature can only be false for accounts where you’re responsible for collecting updated information when requirements are due or change, like custom accounts. Otherwise, bank account collection is determined by compliance requirements. The default value for this feature is `true`.
   */
  externalAccountCollection: boolean;
  /**
   * Whether to allow creation of instant payouts. Default `true` when Stripe owns Loss Liability, default `false` otherwise.
   */
  instantPayouts: boolean;
  /**
   * Whether to allow creation of standard payouts. Default `true` when Stripe owns Loss Liability, default `false` otherwise.
   */
  standardPayouts: boolean;
};

/**
 * @internal
 * ConnectEmbeddedPayoutsFeatures without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConnectEmbeddedPayoutsFeatures = {
  disable_stripe_user_authentication: boolean;
  edit_payout_schedule: boolean;
  external_account_collection: boolean;
  instant_payouts: boolean;
  standard_payouts: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConnectEmbeddedPayoutsFeatures
 */
const SchemaIn$ConnectEmbeddedPayoutsFeatures: z.ZodType<
  ConnectEmbeddedPayoutsFeatures, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    disable_stripe_user_authentication: z.boolean(),
    edit_payout_schedule: z.boolean(),
    external_account_collection: z.boolean(),
    instant_payouts: z.boolean(),
    standard_payouts: z.boolean(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConnectEmbeddedPayoutsFeatures
 */
const SchemaOut$ConnectEmbeddedPayoutsFeatures: z.ZodType<
  External$ConnectEmbeddedPayoutsFeatures, // output type of this zod object
  z.ZodTypeDef,
  ConnectEmbeddedPayoutsFeatures // the object to be transformed
> = z
  .object({
    disableStripeUserAuthentication: z.boolean(),
    editPayoutSchedule: z.boolean(),
    externalAccountCollection: z.boolean(),
    instantPayouts: z.boolean(),
    standardPayouts: z.boolean(),
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

export const Schemas$ConnectEmbeddedPayoutsFeatures = {
  in: SchemaIn$ConnectEmbeddedPayoutsFeatures,
  out: SchemaOut$ConnectEmbeddedPayoutsFeatures,
};
