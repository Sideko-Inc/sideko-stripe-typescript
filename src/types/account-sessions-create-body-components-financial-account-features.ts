import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountSessionsCreateBodyComponentsFinancialAccountFeatures
 */
export type AccountSessionsCreateBodyComponentsFinancialAccountFeatures = {
  disableStripeUserAuthentication?: boolean | undefined;
  externalAccountCollection?: boolean | undefined;
  sendMoney?: boolean | undefined;
  transferBalance?: boolean | undefined;
};

/**
 * @internal
 * AccountSessionsCreateBodyComponentsFinancialAccountFeatures without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountSessionsCreateBodyComponentsFinancialAccountFeatures =
  {
    disable_stripe_user_authentication?: boolean | undefined;
    external_account_collection?: boolean | undefined;
    send_money?: boolean | undefined;
    transfer_balance?: boolean | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountSessionsCreateBodyComponentsFinancialAccountFeatures
 */
const SchemaIn$AccountSessionsCreateBodyComponentsFinancialAccountFeatures: z.ZodType<
  AccountSessionsCreateBodyComponentsFinancialAccountFeatures, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    disable_stripe_user_authentication: z.boolean().optional(),
    external_account_collection: z.boolean().optional(),
    send_money: z.boolean().optional(),
    transfer_balance: z.boolean().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountSessionsCreateBodyComponentsFinancialAccountFeatures
 */
const SchemaOut$AccountSessionsCreateBodyComponentsFinancialAccountFeatures: z.ZodType<
  External$AccountSessionsCreateBodyComponentsFinancialAccountFeatures, // output type of this zod object
  z.ZodTypeDef,
  AccountSessionsCreateBodyComponentsFinancialAccountFeatures // the object to be transformed
> = z
  .object({
    disableStripeUserAuthentication: z.boolean().optional(),
    externalAccountCollection: z.boolean().optional(),
    sendMoney: z.boolean().optional(),
    transferBalance: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      disableStripeUserAuthentication: "disable_stripe_user_authentication",
      externalAccountCollection: "external_account_collection",
      sendMoney: "send_money",
      transferBalance: "transfer_balance",
    });
  });

export const Schemas$AccountSessionsCreateBodyComponentsFinancialAccountFeatures =
  {
    in: SchemaIn$AccountSessionsCreateBodyComponentsFinancialAccountFeatures,
    out: SchemaOut$AccountSessionsCreateBodyComponentsFinancialAccountFeatures,
  };
