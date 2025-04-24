import {
  External$PersonAdditionalTosAcceptance,
  PersonAdditionalTosAcceptance,
  Schemas$PersonAdditionalTosAcceptance,
} from "./person-additional-tos-acceptance";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PersonAdditionalTosAcceptances = {
  account?: PersonAdditionalTosAcceptance | undefined;
};

/**
 * @internal
 * PersonAdditionalTosAcceptances without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PersonAdditionalTosAcceptances = {
  account?: External$PersonAdditionalTosAcceptance | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PersonAdditionalTosAcceptances
 */
const SchemaIn$PersonAdditionalTosAcceptances: z.ZodType<
  PersonAdditionalTosAcceptances, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account: Schemas$PersonAdditionalTosAcceptance.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PersonAdditionalTosAcceptances
 */
const SchemaOut$PersonAdditionalTosAcceptances: z.ZodType<
  External$PersonAdditionalTosAcceptances, // output type of this zod object
  z.ZodTypeDef,
  PersonAdditionalTosAcceptances // the object to be transformed
> = z
  .object({
    account: Schemas$PersonAdditionalTosAcceptance.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
    });
  });

export const Schemas$PersonAdditionalTosAcceptances = {
  in: SchemaIn$PersonAdditionalTosAcceptances,
  out: SchemaOut$PersonAdditionalTosAcceptances,
};
