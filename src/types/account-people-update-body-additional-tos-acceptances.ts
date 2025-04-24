import {
  AccountPeopleUpdateBodyAdditionalTosAcceptancesAccount,
  External$AccountPeopleUpdateBodyAdditionalTosAcceptancesAccount,
  Schemas$AccountPeopleUpdateBodyAdditionalTosAcceptancesAccount,
} from "./account-people-update-body-additional-tos-acceptances-account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Details on the legal guardian's or authorizer's acceptance of the required Stripe agreements.
 */
export type AccountPeopleUpdateBodyAdditionalTosAcceptances = {
  account?: AccountPeopleUpdateBodyAdditionalTosAcceptancesAccount | undefined;
};

/**
 * @internal
 * AccountPeopleUpdateBodyAdditionalTosAcceptances without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPeopleUpdateBodyAdditionalTosAcceptances = {
  account?:
    | External$AccountPeopleUpdateBodyAdditionalTosAcceptancesAccount
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPeopleUpdateBodyAdditionalTosAcceptances
 */
const SchemaIn$AccountPeopleUpdateBodyAdditionalTosAcceptances: z.ZodType<
  AccountPeopleUpdateBodyAdditionalTosAcceptances, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account:
      Schemas$AccountPeopleUpdateBodyAdditionalTosAcceptancesAccount.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPeopleUpdateBodyAdditionalTosAcceptances
 */
const SchemaOut$AccountPeopleUpdateBodyAdditionalTosAcceptances: z.ZodType<
  External$AccountPeopleUpdateBodyAdditionalTosAcceptances, // output type of this zod object
  z.ZodTypeDef,
  AccountPeopleUpdateBodyAdditionalTosAcceptances // the object to be transformed
> = z
  .object({
    account:
      Schemas$AccountPeopleUpdateBodyAdditionalTosAcceptancesAccount.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
    });
  });

export const Schemas$AccountPeopleUpdateBodyAdditionalTosAcceptances = {
  in: SchemaIn$AccountPeopleUpdateBodyAdditionalTosAcceptances,
  out: SchemaOut$AccountPeopleUpdateBodyAdditionalTosAcceptances,
};
