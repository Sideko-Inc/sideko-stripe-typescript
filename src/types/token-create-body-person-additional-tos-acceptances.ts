import {
  External$TokenCreateBodyPersonAdditionalTosAcceptancesAccount,
  Schemas$TokenCreateBodyPersonAdditionalTosAcceptancesAccount,
  TokenCreateBodyPersonAdditionalTosAcceptancesAccount,
} from "./token-create-body-person-additional-tos-acceptances-account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TokenCreateBodyPersonAdditionalTosAcceptances
 */
export type TokenCreateBodyPersonAdditionalTosAcceptances = {
  account?: TokenCreateBodyPersonAdditionalTosAcceptancesAccount | undefined;
};

/**
 * @internal
 * TokenCreateBodyPersonAdditionalTosAcceptances without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyPersonAdditionalTosAcceptances = {
  account?:
    | External$TokenCreateBodyPersonAdditionalTosAcceptancesAccount
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyPersonAdditionalTosAcceptances
 */
const SchemaIn$TokenCreateBodyPersonAdditionalTosAcceptances: z.ZodType<
  TokenCreateBodyPersonAdditionalTosAcceptances, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account:
      Schemas$TokenCreateBodyPersonAdditionalTosAcceptancesAccount.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyPersonAdditionalTosAcceptances
 */
const SchemaOut$TokenCreateBodyPersonAdditionalTosAcceptances: z.ZodType<
  External$TokenCreateBodyPersonAdditionalTosAcceptances, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyPersonAdditionalTosAcceptances // the object to be transformed
> = z
  .object({
    account:
      Schemas$TokenCreateBodyPersonAdditionalTosAcceptancesAccount.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
    });
  });

export const Schemas$TokenCreateBodyPersonAdditionalTosAcceptances = {
  in: SchemaIn$TokenCreateBodyPersonAdditionalTosAcceptances,
  out: SchemaOut$TokenCreateBodyPersonAdditionalTosAcceptances,
};
