import {
  AccountPersonUpdateBodyAdditionalTosAcceptancesAccount,
  External$AccountPersonUpdateBodyAdditionalTosAcceptancesAccount,
  Schemas$AccountPersonUpdateBodyAdditionalTosAcceptancesAccount,
} from "./account-person-update-body-additional-tos-acceptances-account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Details on the legal guardian's or authorizer's acceptance of the required Stripe agreements.
 */
export type AccountPersonUpdateBodyAdditionalTosAcceptances = {
  account?: AccountPersonUpdateBodyAdditionalTosAcceptancesAccount | undefined;
};

/**
 * @internal
 * AccountPersonUpdateBodyAdditionalTosAcceptances without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPersonUpdateBodyAdditionalTosAcceptances = {
  account?:
    | External$AccountPersonUpdateBodyAdditionalTosAcceptancesAccount
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPersonUpdateBodyAdditionalTosAcceptances
 */
const SchemaIn$AccountPersonUpdateBodyAdditionalTosAcceptances: z.ZodType<
  AccountPersonUpdateBodyAdditionalTosAcceptances, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account:
      Schemas$AccountPersonUpdateBodyAdditionalTosAcceptancesAccount.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPersonUpdateBodyAdditionalTosAcceptances
 */
const SchemaOut$AccountPersonUpdateBodyAdditionalTosAcceptances: z.ZodType<
  External$AccountPersonUpdateBodyAdditionalTosAcceptances, // output type of this zod object
  z.ZodTypeDef,
  AccountPersonUpdateBodyAdditionalTosAcceptances // the object to be transformed
> = z
  .object({
    account:
      Schemas$AccountPersonUpdateBodyAdditionalTosAcceptancesAccount.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
    });
  });

export const Schemas$AccountPersonUpdateBodyAdditionalTosAcceptances = {
  in: SchemaIn$AccountPersonUpdateBodyAdditionalTosAcceptances,
  out: SchemaOut$AccountPersonUpdateBodyAdditionalTosAcceptances,
};
