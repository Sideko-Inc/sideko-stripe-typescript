import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountNetworks
 */
export type SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountNetworks = {
  requested?: ("ach" | "us_domestic_wire")[] | undefined;
};

/**
 * @internal
 * SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountNetworks without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountNetworks =
  {
    requested?: ("ach" | "us_domestic_wire")[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountNetworks
 */
const SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountNetworks: z.ZodType<
  SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountNetworks, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    requested: z.array(z.enum(["ach", "us_domestic_wire"])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountNetworks
 */
const SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountNetworks: z.ZodType<
  External$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountNetworks, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountNetworks // the object to be transformed
> = z
  .object({
    requested: z.array(z.enum(["ach", "us_domestic_wire"])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountNetworks =
  {
    in: SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountNetworks,
    out: SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsUsBankAccountNetworks,
  };
