import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type AccountUnificationAccountControllerFees = {
  /**
   * A value indicating the responsible payer of a bundle of Stripe fees for pricing-control eligible products on this account. Learn more about [fee behavior on connected accounts](https://docs.stripe.com/connect/direct-charges-fee-payer-behavior).
   */
  payer:
    | "account"
    | "application"
    | "application_custom"
    | "application_express";
};

/**
 * @internal
 * AccountUnificationAccountControllerFees without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUnificationAccountControllerFees = {
  payer:
    | "account"
    | "application"
    | "application_custom"
    | "application_express";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUnificationAccountControllerFees
 */
const SchemaIn$AccountUnificationAccountControllerFees: z.ZodType<
  AccountUnificationAccountControllerFees, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    payer: z.enum([
      "account",
      "application",
      "application_custom",
      "application_express",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      payer: "payer",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUnificationAccountControllerFees
 */
const SchemaOut$AccountUnificationAccountControllerFees: z.ZodType<
  External$AccountUnificationAccountControllerFees, // output type of this zod object
  z.ZodTypeDef,
  AccountUnificationAccountControllerFees // the object to be transformed
> = z
  .object({
    payer: z.enum([
      "account",
      "application",
      "application_custom",
      "application_express",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      payer: "payer",
    });
  });

export const Schemas$AccountUnificationAccountControllerFees = {
  in: SchemaIn$AccountUnificationAccountControllerFees,
  out: SchemaOut$AccountUnificationAccountControllerFees,
};
