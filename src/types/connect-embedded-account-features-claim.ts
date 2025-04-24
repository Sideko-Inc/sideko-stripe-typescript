import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ConnectEmbeddedAccountFeaturesClaim = {
  /**
   * Disables Stripe user authentication for this embedded component. This value can only be true for accounts where `controller.requirement_collection` is `application`. The default value is the opposite of the `external_account_collection` value. For example, if you don’t set `external_account_collection`, it defaults to true and `disable_stripe_user_authentication` defaults to false.
   */
  disableStripeUserAuthentication: boolean;
  /**
   * Whether to allow platforms to control bank account collection for their connected accounts. This feature can only be false for accounts where you’re responsible for collecting updated information when requirements are due or change, like custom accounts. Otherwise, bank account collection is determined by compliance requirements. The default value for this feature is `true`.
   */
  externalAccountCollection: boolean;
};

/**
 * @internal
 * ConnectEmbeddedAccountFeaturesClaim without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConnectEmbeddedAccountFeaturesClaim = {
  disable_stripe_user_authentication: boolean;
  external_account_collection: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConnectEmbeddedAccountFeaturesClaim
 */
const SchemaIn$ConnectEmbeddedAccountFeaturesClaim: z.ZodType<
  ConnectEmbeddedAccountFeaturesClaim, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    disable_stripe_user_authentication: z.boolean(),
    external_account_collection: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disable_stripe_user_authentication: "disableStripeUserAuthentication",
      external_account_collection: "externalAccountCollection",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConnectEmbeddedAccountFeaturesClaim
 */
const SchemaOut$ConnectEmbeddedAccountFeaturesClaim: z.ZodType<
  External$ConnectEmbeddedAccountFeaturesClaim, // output type of this zod object
  z.ZodTypeDef,
  ConnectEmbeddedAccountFeaturesClaim // the object to be transformed
> = z
  .object({
    disableStripeUserAuthentication: z.boolean(),
    externalAccountCollection: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disableStripeUserAuthentication: "disable_stripe_user_authentication",
      externalAccountCollection: "external_account_collection",
    });
  });

export const Schemas$ConnectEmbeddedAccountFeaturesClaim = {
  in: SchemaIn$ConnectEmbeddedAccountFeaturesClaim,
  out: SchemaOut$ConnectEmbeddedAccountFeaturesClaim,
};
