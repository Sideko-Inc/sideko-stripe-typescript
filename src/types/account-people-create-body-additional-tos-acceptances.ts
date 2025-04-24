import {
  AccountPeopleCreateBodyAdditionalTosAcceptancesAccount,
  External$AccountPeopleCreateBodyAdditionalTosAcceptancesAccount,
  Schemas$AccountPeopleCreateBodyAdditionalTosAcceptancesAccount,
} from "./account-people-create-body-additional-tos-acceptances-account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Details on the legal guardian's or authorizer's acceptance of the required Stripe agreements.
 */
export type AccountPeopleCreateBodyAdditionalTosAcceptances = {
  account?: AccountPeopleCreateBodyAdditionalTosAcceptancesAccount | undefined;
};

/**
 * @internal
 * AccountPeopleCreateBodyAdditionalTosAcceptances without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPeopleCreateBodyAdditionalTosAcceptances = {
  account?:
    | External$AccountPeopleCreateBodyAdditionalTosAcceptancesAccount
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPeopleCreateBodyAdditionalTosAcceptances
 */
const SchemaIn$AccountPeopleCreateBodyAdditionalTosAcceptances: z.ZodType<
  AccountPeopleCreateBodyAdditionalTosAcceptances, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account:
      Schemas$AccountPeopleCreateBodyAdditionalTosAcceptancesAccount.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPeopleCreateBodyAdditionalTosAcceptances
 */
const SchemaOut$AccountPeopleCreateBodyAdditionalTosAcceptances: z.ZodType<
  External$AccountPeopleCreateBodyAdditionalTosAcceptances, // output type of this zod object
  z.ZodTypeDef,
  AccountPeopleCreateBodyAdditionalTosAcceptances // the object to be transformed
> = z
  .object({
    account:
      Schemas$AccountPeopleCreateBodyAdditionalTosAcceptancesAccount.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
    });
  });

export const Schemas$AccountPeopleCreateBodyAdditionalTosAcceptances = {
  in: SchemaIn$AccountPeopleCreateBodyAdditionalTosAcceptances,
  out: SchemaOut$AccountPeopleCreateBodyAdditionalTosAcceptances,
};
