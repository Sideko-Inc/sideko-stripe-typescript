import {
  AccountPersonCreateBodyAdditionalTosAcceptancesAccount,
  External$AccountPersonCreateBodyAdditionalTosAcceptancesAccount,
  Schemas$AccountPersonCreateBodyAdditionalTosAcceptancesAccount,
} from "./account-person-create-body-additional-tos-acceptances-account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Details on the legal guardian's or authorizer's acceptance of the required Stripe agreements.
 */
export type AccountPersonCreateBodyAdditionalTosAcceptances = {
  account?: AccountPersonCreateBodyAdditionalTosAcceptancesAccount | undefined;
};

/**
 * @internal
 * AccountPersonCreateBodyAdditionalTosAcceptances without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPersonCreateBodyAdditionalTosAcceptances = {
  account?:
    | External$AccountPersonCreateBodyAdditionalTosAcceptancesAccount
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPersonCreateBodyAdditionalTosAcceptances
 */
const SchemaIn$AccountPersonCreateBodyAdditionalTosAcceptances: z.ZodType<
  AccountPersonCreateBodyAdditionalTosAcceptances, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account:
      Schemas$AccountPersonCreateBodyAdditionalTosAcceptancesAccount.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPersonCreateBodyAdditionalTosAcceptances
 */
const SchemaOut$AccountPersonCreateBodyAdditionalTosAcceptances: z.ZodType<
  External$AccountPersonCreateBodyAdditionalTosAcceptances, // output type of this zod object
  z.ZodTypeDef,
  AccountPersonCreateBodyAdditionalTosAcceptances // the object to be transformed
> = z
  .object({
    account:
      Schemas$AccountPersonCreateBodyAdditionalTosAcceptancesAccount.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
    });
  });

export const Schemas$AccountPersonCreateBodyAdditionalTosAcceptances = {
  in: SchemaIn$AccountPersonCreateBodyAdditionalTosAcceptances,
  out: SchemaOut$AccountPersonCreateBodyAdditionalTosAcceptances,
};
