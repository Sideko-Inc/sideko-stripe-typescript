import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ConnectEmbeddedFinancialAccountFeatures = {
  /**
   * Disables Stripe user authentication for this embedded component. This value can only be true for accounts where `controller.requirement_collection` is `application`. The default value is the opposite of the `external_account_collection` value. For example, if you don’t set `external_account_collection`, it defaults to true and `disable_stripe_user_authentication` defaults to false.
   */
  disableStripeUserAuthentication: boolean;
  /**
   * Whether to allow external accounts to be linked for money transfer.
   */
  externalAccountCollection: boolean;
  /**
   * Whether to allow sending money.
   */
  sendMoney: boolean;
  /**
   * Whether to allow transferring balance.
   */
  transferBalance: boolean;
};

/**
 * @internal
 * ConnectEmbeddedFinancialAccountFeatures without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConnectEmbeddedFinancialAccountFeatures = {
  disable_stripe_user_authentication: boolean;
  external_account_collection: boolean;
  send_money: boolean;
  transfer_balance: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConnectEmbeddedFinancialAccountFeatures
 */
const SchemaIn$ConnectEmbeddedFinancialAccountFeatures: z.ZodType<
  ConnectEmbeddedFinancialAccountFeatures, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    disable_stripe_user_authentication: z.boolean(),
    external_account_collection: z.boolean(),
    send_money: z.boolean(),
    transfer_balance: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disable_stripe_user_authentication: "disableStripeUserAuthentication",
      external_account_collection: "externalAccountCollection",
      send_money: "sendMoney",
      transfer_balance: "transferBalance",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConnectEmbeddedFinancialAccountFeatures
 */
const SchemaOut$ConnectEmbeddedFinancialAccountFeatures: z.ZodType<
  External$ConnectEmbeddedFinancialAccountFeatures, // output type of this zod object
  z.ZodTypeDef,
  ConnectEmbeddedFinancialAccountFeatures // the object to be transformed
> = z
  .object({
    disableStripeUserAuthentication: z.boolean(),
    externalAccountCollection: z.boolean(),
    sendMoney: z.boolean(),
    transferBalance: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disableStripeUserAuthentication: "disable_stripe_user_authentication",
      externalAccountCollection: "external_account_collection",
      sendMoney: "send_money",
      transferBalance: "transfer_balance",
    });
  });

export const Schemas$ConnectEmbeddedFinancialAccountFeatures = {
  in: SchemaIn$ConnectEmbeddedFinancialAccountFeatures,
  out: SchemaOut$ConnectEmbeddedFinancialAccountFeatures,
};
